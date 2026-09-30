import { useState, type FormEvent } from "react";
import { getGetAmbassadorStartersQueryKey, useAskAmbassador, useGetAmbassadorStarters } from "@workspace/api-client-react";
import type { AmbassadorAnswer } from "@workspace/api-client-react";
import { Arrow } from "./Arrow";

type ChatEntry =
  | { id: number; kind: "question"; text: string }
  | { id: number; kind: "answer"; result: AmbassadorAnswer }
  | { id: number; kind: "error"; question: string };

const sourceTargets: Record<string, string> = {
  "#match": "Role match",
  "#work": "Selected work",
  "#experience": "Experience",
  "#toolkit": "Toolkit",
  "#education": "Education",
  "#ambassador": "Ask the profile",
  "#contact": "Contact",
};

function validCitationHref(href: string) {
  return Object.hasOwn(sourceTargets, href) ? href : null;
}

export function AmbassadorPanel() {
  const startersQuery = useGetAmbassadorStarters({
    query: { queryKey: getGetAmbassadorStartersQueryKey() },
  });
  const askMutation = useAskAmbassador();
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState<ChatEntry[]>([]);
  const [sequence, setSequence] = useState(0);
  const starters = startersQuery.data?.slice(0, 4) ?? [];
  const busy = askMutation.isPending;

  async function submitQuestion(rawQuestion: string, includeQuestion = true) {
    const cleaned = rawQuestion.trim();
    if (cleaned.length < 2 || cleaned.length > 500 || busy) return;
    const questionId = sequence + 1;
    const answerId = questionId + 1;
    setSequence(questionId + 1);
    if (includeQuestion) setHistory((current) => [...current, { id: questionId, kind: "question", text: cleaned }]);
    setQuestion("");
    try {
      const result = await askMutation.mutateAsync({ data: { question: cleaned } });
      setHistory((current) => [...current, { id: answerId, kind: "answer", result }]);
    } catch {
      setHistory((current) => [...current, { id: answerId, kind: "error", question: cleaned }]);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submitQuestion(question);
  }

  return (
    <div className="sp-ambassador">
      <div className="sp-amb-head">
        <div>
          <div className="sp-amb-label">Dipisha’s profile assistant</div>
          <h3 className="sp-amb-title">Ask about the evidence.</h3>
          <p className="sp-amb-sub">Questions are answered from verified resume evidence, with links back to the source sections.</p>
        </div>
        <span className="sp-amb-status"><span className="sp-live-dot" /> EVIDENCE-LED Q&amp;A</span>
      </div>

      <div className="sp-chat" role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversation with Dipisha’s profile assistant">
        {history.length === 0 && !busy && (
          <p className="sp-chat-empty">Start with a recruiter question, or ask your own.</p>
        )}
        {history.map((entry) => (
          <div className={`sp-chat-row sp-chat-${entry.kind}`} key={entry.id}>
            {entry.kind === "question" && <p className="sp-question-bubble">{entry.text}</p>}
            {entry.kind === "answer" && (
              <div className="sp-answer" data-testid={`answer-message-${entry.id}`}>
                <p>{entry.result.answer}</p>
                {entry.result.unsupported ? (
                  <p className="sp-unsupported" role="note">The available resume evidence does not support a factual answer to that question.</p>
                ) : null}
                {entry.result.citations.length > 0 && (
                  <div className="sp-answer-sources">
                    <span className="sp-answer-source">SOURCE EVIDENCE</span>
                    {entry.result.citations.map((citation, index) => {
                      const href = validCitationHref(citation.href);
                      return href ? (
                        <a href={href} key={`${citation.href}-${citation.label}-${index}`} data-testid={`citation-${entry.id}-${index}`}>
                          {citation.label}<Arrow diagonal />
                        </a>
                      ) : (
                        <span key={`${citation.label}-${index}`} className="sp-citation-unlinked">{citation.label}</span>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
            {entry.kind === "error" && (
              <div className="sp-chat-error" role="alert">
                <p>That question could not be answered just now. Your conversation is still only in this page.</p>
                <button type="button" className="sp-retry" onClick={() => void submitQuestion(entry.question, false)} disabled={busy}>
                  Try again <Arrow />
                </button>
              </div>
            )}
          </div>
        ))}
        {busy && (
          <div className="sp-chat-pending" role="status" aria-label="Preparing an evidence-based answer">
            <span /><span /><span />
          </div>
        )}
      </div>

      <div className="sp-starters-wrap">
        <div className="sp-starter-label">A useful place to start</div>
        {startersQuery.isLoading && (
          <div className="sp-starter-skeleton" aria-label="Loading suggested questions">
            <span /><span /><span /><span />
          </div>
        )}
        {startersQuery.isError && (
          <div className="sp-starters-error" role="alert">
            <span>Starter questions could not be loaded.</span>
            <button type="button" onClick={() => void startersQuery.refetch()}>Retry</button>
          </div>
        )}
        {!startersQuery.isLoading && !startersQuery.isError && starters.length === 0 && (
          <p className="sp-chat-hint">No suggested questions are available right now. You can still ask your own below.</p>
        )}
        {starters.length > 0 && (
          <div className="sp-question-grid" aria-label="Recruiter starter questions">
            {starters.map((starter, index) => (
              <button
                type="button"
                className="sp-question"
                key={`${starter.href}-${starter.question}`}
                data-testid={`starter-question-${index + 1}`}
                onClick={() => void submitQuestion(starter.question)}
                disabled={busy}
              >
                {starter.question}<Arrow />
              </button>
            ))}
          </div>
        )}
      </div>

      <form className="sp-chat-form" onSubmit={onSubmit}>
        <label htmlFor="ambassador-question">Ask a question about the resume</label>
        <div className="sp-input-line">
          <input
            id="ambassador-question"
            data-testid="input-ambassador-question"
            type="text"
            maxLength={500}
            minLength={2}
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="For example: how has she improved data reliability?"
            disabled={busy}
            aria-describedby="ambassador-hint"
          />
          <button type="submit" className="sp-send" data-testid="button-send-question" disabled={busy || question.trim().length < 2}>
            {busy ? "Thinking…" : "Ask"} <Arrow />
          </button>
        </div>
        <p className="sp-chat-hint" id="ambassador-hint">Answers use only verified profile evidence. Unsupported claims are not inferred.</p>
      </form>
    </div>
  );
}