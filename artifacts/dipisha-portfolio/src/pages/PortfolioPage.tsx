import { useState } from "react";
import { Arrow } from "../components/Arrow";
import { AmbassadorPanel } from "../components/AmbassadorPanel";
import { navItems, projects, publicResume, skillGroups } from "../components/portfolio-data";

export default function PortfolioPage() {
  const [expandedProject, setExpandedProject] = useState("etl");

  return (
    <div className="sp-page" id="top">
      <header className="sp-shell sp-topbar">
        <a className="sp-brand" href="#top" aria-label="Dipisha Shivangi, back to top" data-testid="link-home">
          <span className="sp-mark">DS</span>
          <span>DIPISHA SHIVANGI <span className="sp-brand-sub">· DATA SYSTEMS</span></span>
        </a>
        <nav className="sp-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a className="sp-top-contact" href="mailto:shivangidipisha@gmail.com" data-testid="link-contact-top">Contact <Arrow diagonal /></a>
      </header>

      <section className="sp-shell sp-hero" aria-labelledby="sp-name">
        <div className="sp-hero-grid">
          <div className="sp-hero-copy">
            <div className="sp-eyebrow">Engineer profile <span className="sp-mono">/ ROLE PROFILE</span></div>
            <h1 className="sp-title" id="sp-name">Dipisha<br /><em>Shivangi</em></h1>
            <p className="sp-role">Data Engineer <span className="sp-role-slash">/</span> Cloud Data Engineer</p>
            <p className="sp-summary">I build dependable data workflows—from distributed ETL and cloud warehousing to database controls and reproducible validation. My strongest proof: lower-latency analytics at million-record scale, grounded in hands-on engineering.</p>
            <div className="sp-cta-row">
              <a className="sp-btn" href="mailto:shivangidipisha@gmail.com" data-testid="link-start-conversation">Start a conversation <Arrow /></a>
              <a className="sp-btn sp-secondary" href={publicResume} download="Dipisha-Shivangi-Resume.pdf" data-testid="link-download-resume">Download resume <Arrow diagonal /></a>
            </div>
          </div>
          <aside className="sp-hero-aside" aria-label="Selected evidence at a glance">
            <p className="sp-aside-label"><span>Evidence at a glance</span><span className="sp-status"><span className="sp-dot" /> VERIFIED IN RESUME</span></p>
            <div className="sp-stat"><strong>1M<span>+</span></strong><span><b>Records in ETL workflows</b>Celebal Technologies</span></div>
            <div className="sp-stat"><strong>30%</strong><span><b>Lower analytics latency</b>Spark · Airflow · Python · SQL</span></div>
            <div className="sp-stat"><strong>40%</strong><span><b>Faster reporting turnaround</b>Power BI reporting workflows</span></div>
            <div className="sp-quicklinks">
              <a href="https://linkedin.com/in/dipisha" target="_blank" rel="noreferrer" data-testid="link-linkedin-hero">LinkedIn <Arrow diagonal /></a>
              <a href="https://github.com/dipisha-21" target="_blank" rel="noreferrer" data-testid="link-github-hero">GitHub <Arrow diagonal /></a>
            </div>
          </aside>
        </div>
      </section>

      <main className="sp-shell sp-main">
        <aside className="sp-rail" aria-label="On this page">
          <div className="sp-rail-title">On this page</div>
          {navItems.map(([label, href], index) => <a href={href} key={href}><span>0{index + 1}</span>{label}</a>)}
          <p className="sp-rail-note">A proof-led profile.<br />Open a line to inspect<br />its source evidence.</p>
        </aside>

        <div className="sp-content">
          <section className="sp-section" id="match" aria-labelledby="sp-match">
            <div className="sp-section-head">
              <div><div className="sp-kicker">01 / Role match</div><h2 className="sp-h2" id="sp-match">The case for data engineering</h2></div>
              <p className="sp-section-desc">Three capability areas. Each tied to work, not adjectives.</p>
            </div>
            <div className="sp-proof-grid">
              <article className="sp-proof-card"><span className="sp-proof-num">01 · BUILD</span><h3>Distributed processing &amp; scalable ETL</h3><p>Spark, Airflow, Python and SQL brought to an ETL workflow spanning 1M+ records.</p><a className="sp-proof-link" href="#experience">30% lower latency <Arrow /></a></article>
              <article className="sp-proof-card"><span className="sp-proof-num">02 · MODEL</span><h3>Cloud warehousing &amp; database engineering</h3><p>GCP, BigQuery and Looker alongside Oracle PL/SQL controls and analytics reporting.</p><a className="sp-proof-link" href="#work">Payroll + sales dashboard <Arrow /></a></article>
              <article className="sp-proof-card"><span className="sp-proof-num">03 · TRUST</span><h3>Data quality, reliability &amp; automation</h3><p>Reproducible containerized workloads, pytest verifiers and database integrity controls.</p><a className="sp-proof-link" href="#experience">Explore reliability work <Arrow /></a></article>
            </div>
            <div className="sp-ownership">
              <div><div className="sp-ownership-label">Engineering ownership</div><p className="sp-ownership-note">Ownership shown through quality practices—not a people-management claim.</p></div>
              <div className="sp-ownership-items">
                <div className="sp-ownership-item"><a href="#work">Data validation</a>Payroll validation across 100+ employee records.</div>
                <div className="sp-ownership-item"><a href="#work">Integrity controls</a>Oracle triggers and stored procedures to protect record integrity.</div>
                <div className="sp-ownership-item"><a href="#experience">Reproducible checks</a>Pytest verifiers for repeatable terminal workloads.</div>
              </div>
            </div>
          </section>

          <section className="sp-section" id="work" aria-labelledby="sp-work">
            <div className="sp-section-head">
              <div><div className="sp-kicker">02 / Selected work</div><h2 className="sp-h2" id="sp-work">Proof, in the relevant order</h2></div>
              <p className="sp-section-desc">Select a project to inspect the problem, contribution, tools and outcome.</p>
            </div>
            <div className="sp-project-list">
              {projects.map((project) => {
                const expanded = expandedProject === project.id;
                return (
                  <article className="sp-project" key={project.id}>
                    <button className="sp-project-trigger" type="button" aria-expanded={expanded} aria-controls={`project-${project.id}`} onClick={() => setExpandedProject(expanded ? "" : project.id)} data-testid={`button-project-${project.id}`}>
                      <span className="sp-project-no">{project.number}</span>
                      <span className="sp-project-title">{project.title}</span>
                      <span className="sp-project-type">{project.type}</span>
                      <span className="sp-project-plus" aria-hidden="true">{expanded ? "−" : "+"}</span>
                    </button>
                    {expanded && <div className="sp-project-body" id={`project-${project.id}`}>
                      <div className="sp-project-facts">
                        <div><div className="sp-fact-label">Problem</div><div className="sp-fact">{project.problem}</div></div>
                        <div><div className="sp-fact-label">Contribution</div><div className="sp-fact">{project.contribution}</div></div>
                      </div>
                      <div className="sp-tools" aria-label="Tools used">{project.tools.map((tool) => <span className="sp-tag" key={tool}>{tool}</span>)}</div>
                      <div className="sp-outcome"><strong>Outcome · </strong>{project.outcome}</div>
                    </div>}
                  </article>
                );
              })}
            </div>
          </section>

          <section className="sp-section" id="experience" aria-labelledby="sp-experience">
            <div className="sp-section-head">
              <div><div className="sp-kicker">03 / Experience</div><h2 className="sp-h2" id="sp-experience">Work with measurable signal</h2></div>
              <p className="sp-section-desc">Hands-on engineering across data, evaluation and shipped products.</p>
            </div>
            <div className="sp-exp-list">
              <article className="sp-exp">
                <div className="sp-exp-meta"><b>Celebal Technologies</b><span>Data Science Intern</span><span>Jun–Aug 2024</span></div>
                <div><h3>ETL, analytics performance &amp; reporting</h3><p>Engineered Spark/Airflow/Python/SQL ETL workflows across 1M+ records. Improved Power BI reporting workflows and turnaround.</p><div className="sp-exp-metric">↓ 30% workflow latency &nbsp; / &nbsp; ↓ 40% reporting turnaround</div></div>
              </article>
              <article className="sp-exp">
                <div className="sp-exp-meta"><b>Handshake AI</b><span>AI Evaluation &amp; Research Fellow</span><span>Jul 2026–Present</span></div>
                <div><h3>Reproducible workloads &amp; agent reliability</h3><p>Built reproducible Python/Bash/Docker terminal workloads and pytest verifiers; assessed agent reliability with pass@k.</p><div className="sp-explab"><span className="sp-lab-dot" /> Evaluation &amp; research</div></div>
              </article>
              <article className="sp-exp">
                <div className="sp-exp-meta"><b>Mobtions</b><span>Game Developer Intern</span><span>Dec 2024–Jun 2025</span></div>
                <div><h3>Cross-platform product delivery</h3><p>Developed 18 cross-platform products and improved performance and load times across a user base of 5K+.</p><div className="sp-exp-metric">↓ 25% performance / load times · 5K+ users</div></div>
              </article>
            </div>
          </section>

          <section className="sp-section" id="toolkit" aria-labelledby="sp-toolkit">
            <div className="sp-section-head">
              <div><div className="sp-kicker">04 / Toolkit</div><h2 className="sp-h2" id="sp-toolkit">A practical working set</h2></div>
              <p className="sp-section-desc">Grouped by where each tool fits in the data lifecycle.</p>
            </div>
            <div className="sp-skills-layout">
              {skillGroups.map((group) => <div className="sp-skill-group" key={group.name}><h3>{group.name}</h3><div className="sp-skill-cloud">{group.skills.map((skill) => <span className={`sp-skill${group.primary ? " sp-skill-primary" : ""}`} key={skill}>{skill}</span>)}</div></div>)}
            </div>
          </section>

          <section className="sp-section" id="education" aria-labelledby="sp-education">
            <div className="sp-section-head">
              <div><div className="sp-kicker">05 / Foundation</div><h2 className="sp-h2" id="sp-education">Education &amp; credentials</h2></div>
              <p className="sp-section-desc">The grounding behind the systems work.</p>
            </div>
            <div className="sp-education sp-degree"><small>2021 — 2025</small><h3>B.Tech, Computer Science Engineering</h3><p>KIIT<br />CGPA 7.82 / 10</p></div>
            <div className="sp-credential-grid">
              <article className="sp-credential-card">
                <div className="sp-education"><small>Google Cloud credentials</small><h3>Cloud data &amp; AI learning</h3></div>
                <ul className="sp-credential-list">
                  <li>Engineer AI Agents with ADK <span>(2026)</span></li>
                  <li>Predictive Data Analysis in BigQuery <span>(2023)</span></li>
                  <li>Data Models in Looker <span>(2023)</span></li>
                  <li>Store, Process &amp; Manage Data on Google Cloud <span>(2023)</span></li>
                  <li>Monitor &amp; Manage Google Cloud Resources <span>(2023)</span></li>
                </ul>
              </article>
              <article className="sp-credential-card">
                <div className="sp-education"><small>Professional certifications</small><h3>OCI &amp; Oracle</h3></div>
                <ul className="sp-credential-list">
                  <li>OCI Data Science Professional</li>
                  <li>OCI Generative AI Professional</li>
                  <li>Oracle AI Cloud Database Services Professional</li>
                  <li>Oracle Database@AWS Architect</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="sp-section sp-amb-section" id="ambassador" aria-labelledby="sp-ambassador">
            <div className="sp-section-head">
              <div><div className="sp-kicker">06 / Ask the profile</div><h2 className="sp-h2" id="sp-ambassador">A source-anchored ambassador</h2></div>
              <p className="sp-section-desc">A recruiter-oriented conversation, grounded in resume evidence.</p>
            </div>
            <AmbassadorPanel />
          </section>
        </div>
      </main>

      <footer className="sp-footer" id="contact">
        <div className="sp-shell sp-footer-inner">
          <div><h2 className="sp-footer-title">Let’s talk data systems.</h2><p className="sp-footer-copy">Dipisha Shivangi · Data Engineer / Cloud Data Engineer</p></div>
          <div className="sp-footer-links">
            <a href="mailto:shivangidipisha@gmail.com" data-testid="link-email-footer">Email Dipisha <Arrow diagonal /></a>
            <a href="https://linkedin.com/in/dipisha" target="_blank" rel="noreferrer" data-testid="link-linkedin-footer">LinkedIn <Arrow diagonal /></a>
            <a href="https://github.com/dipisha-21" target="_blank" rel="noreferrer" data-testid="link-github-footer">GitHub <Arrow diagonal /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}