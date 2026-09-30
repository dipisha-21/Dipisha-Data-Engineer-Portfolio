import { useState } from "react";

const experiences = [
  {
    index: "01",
    role: "AI Evaluation & Research Fellow",
    company: "Handshake AI",
    dates: "Jul 2026 — Present",
    detail:
      "Built reproducible terminal workloads with Python, Bash and Docker, plus pytest verifiers. Assessed agent reliability using pass@k.",
    tags: ["Python", "Bash", "Docker", "Pytest", "pass@k"],
  },
  {
    index: "02",
    role: "Game Developer Intern",
    company: "Mobtions",
    dates: "Dec 2024 — Jun 2025",
    detail:
      "Developed 18 cross-platform products; improved performance and load times by 25% across 5K+ users.",
    tags: ["Cross-platform development", "Performance"],
  },
  {
    index: "03",
    role: "Data Science Intern",
    company: "Celebal Technologies",
    dates: "Jun — Aug 2024",
    detail:
      "Engineered Spark, Airflow, Python and SQL ETL across 1M+ records. Reduced analytics workflow latency by 30%; Power BI improved reporting turnaround by 40%.",
    tags: ["Spark", "Airflow", "Python", "SQL", "Power BI"],
  },
];

const projects = [
  {
    n: "01",
    title: "Employee Payroll Management System",
    type: "DATABASE ENGINEERING",
    problem: "Payroll records need dependable validation and integrity.",
    contribution:
      "Automated employee payroll workflows with database-side logic and controls.",
    tools: "Oracle SQL · PL/SQL · Triggers · Stored procedures",
    outcome: "Managed 100+ employee records with validation and integrity controls.",
    accent: "coral",
  },
  {
    n: "02",
    title: "Sales Insight Dashboard",
    type: "ANALYTICS ENGINEERING",
    problem: "Repeated reporting slowed access to sales insights.",
    contribution:
      "Built a Power BI dashboard using DAX and SQL to surface sales metrics.",
    tools: "Power BI · DAX · SQL",
    outcome: "50K+ records · 10+ KPIs · report generation time reduced ~30%.",
    accent: "teal",
  },
  {
    n: "03",
    title: "Automatic Number Plate Recognition",
    type: "COMPUTER VISION",
    problem: "Recognizing plate text reliably across varied images.",
    contribution:
      "Implemented plate detection and text extraction, evaluated on a project dataset.",
    tools: "Python · YOLOv8 · EasyOCR",
    outcome: "Evaluated 1,000+ images; 99.5% reported accuracy under project setup.",
    accent: "gold",
  },
];

const questions = [
  {
    label: "What makes her a fit for data engineering?",
    response:
      "At Celebal Technologies, Dipisha engineered Spark/Airflow/Python/SQL ETL across 1M+ records, reducing analytics workflow latency by 30%. Her projects add Oracle PL/SQL database controls and a 50K+ record SQL/Power BI reporting pipeline.",
    source: "Experience · Celebal Technologies / Projects",
    href: "#experience",
  },
  {
    label: "What is her strongest quantified impact?",
    response:
      "The clearest data-engineering result is a 30% reduction in analytics workflow latency across 1M+ records at Celebal Technologies. Reporting turnaround improved 40% through Power BI.",
    source: "Experience · Celebal Technologies",
    href: "#experience",
  },
  {
    label: "Which projects show database depth?",
    response:
      "The Employee Payroll Management System uses Oracle SQL/PLSQL triggers and stored procedures to manage 100+ employee records with validation and integrity controls. The Sales Insight Dashboard uses SQL, DAX and Power BI across 50K+ records.",
    source: "Selected projects",
    href: "#projects",
  },
  {
    label: "What cloud and reliability tools does she know?",
    response:
      "Listed skills include GCP, BigQuery, Looker, Docker, Pytest and CI/CD. At Handshake AI, she built reproducible Python/Bash/Docker terminal workloads and pytest verifiers, assessing agent reliability with pass@k.",
    source: "Skills · Experience",
    href: "#skills",
  },
];

const skillGroups = [
  {
    title: "Distributed data",
    items: ["Spark", "Airflow", "Python", "SQL"],
    mark: "A",
  },
  {
    title: "Cloud & warehouse",
    items: ["GCP", "BigQuery", "Looker"],
    mark: "B",
  },
  {
    title: "Database systems",
    items: ["Oracle PL/SQL", "Triggers", "Stored procedures"],
    mark: "C",
  },
  {
    title: "Quality & delivery",
    items: ["Docker", "Pytest", "CI/CD", "Power BI"],
    mark: "D",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      className={diagonal ? "arrow-diagonal" : ""}
    >
      <path
        d={diagonal ? "M4 12 12 4M5 4h7v7" : "M2.5 8h10m-4-4 4 4-4 4"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EditorialNarrative() {
  const [activeAnswer, setActiveAnswer] = useState<number | null>(null);
  const [resumeNote, setResumeNote] = useState(false);
  const answer = activeAnswer === null ? null : questions[activeAnswer];

  return (
    <main className="dipisha-editorial" id="top">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap');
        .dipisha-editorial {
          --paper: #f4f0e7; --ink: #193b38; --muted: #66716a; --rule: #d7d2c6;
          --accent: #c8533c; --gold: #dca947; --mint: #dce9df;
          background: var(--paper); color: var(--ink); font-family: 'DM Sans', sans-serif;
          overflow: hidden; min-height: 100dvh; position: relative;
        }
        .dipisha-editorial * { box-sizing: border-box; }
        .dipisha-editorial::before {
          content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 20; opacity: .12;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.12'/%3E%3C/svg%3E");
        }
        .ed-wrap { width: min(1160px, calc(100% - 64px)); margin: 0 auto; }
        .ed-display { font-family: 'Playfair Display', Georgia, serif; letter-spacing: -.045em; }
        .ed-mono { font-family: 'DM Mono', monospace; letter-spacing: .09em; }
        .ed-nav { height: 78px; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--rule); }
        .ed-brand { display:flex; align-items:center; gap:12px; color:var(--ink); text-decoration:none; font-weight:700; font-size:14px; letter-spacing:-.02em; }
        .ed-monogram { width:34px; height:34px; display:grid; place-items:center; background:var(--ink); color:var(--paper); font-family:'Playfair Display',serif; font-size:17px; border-radius:50%; }
        .ed-navlinks { display:flex; align-items:center; gap:28px; }
        .ed-navlinks a { color:var(--muted); font-size:12px; text-decoration:none; transition:color .2s ease; }
        .ed-navlinks a:hover { color:var(--accent); }
        .ed-navlinks .ed-nav-contact { border:1px solid var(--ink); border-radius:99px; padding:10px 16px; color:var(--ink); }
        .ed-navlinks .ed-nav-contact:hover { color:var(--paper); background:var(--ink); }
        .ed-hero { padding:66px 0 56px; position:relative; }
        .ed-kicker { display:flex; align-items:center; gap:10px; text-transform:uppercase; font-size:10px; color:var(--accent); font-weight:600; letter-spacing:.14em; }
        .ed-kicker:before { content:''; width:25px; height:1px; background:var(--accent); }
        .ed-hero-grid { display:grid; grid-template-columns: 1.12fr .88fr; gap:54px; align-items:end; margin-top:23px; }
        .ed-hero h1 { font-size:clamp(56px, 7.9vw, 104px); line-height:.91; margin:0; font-weight:600; }
        .ed-hero h1 em { color:var(--accent); font-weight:600; }
        .ed-hero-note { max-width:445px; padding-bottom:7px; }
        .ed-hero-note p { font-size:17px; line-height:1.65; margin:0 0 24px; color:#435a53; }
        .ed-role-line { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px; }
        .ed-role-line span { font-size:11px; padding:8px 12px; border:1px solid #b8c9bd; border-radius:100px; color:var(--ink); }
        .ed-actions { display:flex; align-items:center; gap:17px; flex-wrap:wrap; }
        .ed-button { display:inline-flex; align-items:center; gap:10px; background:var(--accent); color:#fff8ed; text-decoration:none; border:0; padding:14px 18px; font-size:12px; font-weight:600; border-radius:2px; cursor:pointer; transition:transform .2s ease, background .2s ease; }
        .ed-button:hover { transform:translateY(-2px); background:#a84432; }
        .ed-text-link { color:var(--ink); display:inline-flex; gap:8px; align-items:center; text-decoration:none; font-size:12px; font-weight:600; }
        .ed-text-link:hover { color:var(--accent); }
        .ed-note { margin-top:12px; font-size:11px; color:var(--muted); }
        .ed-proofbar { display:grid; grid-template-columns: 1.1fr repeat(3, 1fr); margin-top:64px; border-top:1px solid var(--ink); border-bottom:1px solid var(--ink); }
        .ed-proof-intro, .ed-proof { padding:20px 20px 19px 0; }
        .ed-proof { border-left:1px solid var(--rule); padding-left:22px; }
        .ed-proof-intro { display:flex; flex-direction:column; justify-content:center; }
        .ed-proof-intro span { text-transform:uppercase; font-size:9px; letter-spacing:.15em; color:var(--muted); }
        .ed-proof-intro strong { font:600 18px 'Playfair Display', Georgia, serif; margin-top:4px; }
        .ed-proof b { font:600 31px 'Playfair Display', Georgia, serif; color:var(--accent); letter-spacing:-.05em; }
        .ed-proof span { display:block; margin-top:4px; font-size:11px; color:var(--muted); line-height:1.4; }
        .ed-section { padding:87px 0; border-bottom:1px solid var(--rule); }
        .ed-section-head { display:grid; grid-template-columns: 1fr 2fr; gap:35px; margin-bottom:42px; align-items:start; }
        .ed-section-label { color:var(--accent); text-transform:uppercase; font-size:10px; letter-spacing:.14em; padding-top:12px; }
        .ed-section-title { font:600 clamp(36px,5vw,58px)/1.04 'Playfair Display', Georgia, serif; letter-spacing:-.045em; margin:0; max-width:700px; }
        .ed-section-title em { color:var(--accent); }
        .ed-match { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--rule); border:1px solid var(--rule); }
        .ed-match article { background:var(--paper); padding:26px 27px 30px; min-height:210px; }
        .ed-match-num { color:var(--accent); font:11px 'DM Mono',monospace; }
        .ed-match h3 { font:600 21px/1.15 'Playfair Display', Georgia, serif; margin:23px 0 11px; }
        .ed-match p { color:var(--muted); font-size:13px; line-height:1.6; margin:0; }
        .ed-match a { color:var(--ink); text-decoration-thickness:1px; text-underline-offset:3px; }
        .ed-experience { padding-top:76px; padding-bottom:76px; background:#e8ede5; }
        .ed-exp-list { border-top:1px solid #bdc9bd; }
        .ed-exp-row { display:grid; grid-template-columns:60px 1.2fr 1.8fr; gap:26px; padding:24px 0; border-bottom:1px solid #bdc9bd; align-items:start; }
        .ed-exp-index { font:11px 'DM Mono',monospace; color:var(--accent); padding-top:7px; }
        .ed-exp-title h3 { font:600 23px/1.1 'Playfair Display', Georgia, serif; margin:0 0 6px; }
        .ed-exp-title p { margin:0; font-size:12px; color:var(--muted); }
        .ed-exp-content { display:flex; justify-content:space-between; gap:20px; }
        .ed-exp-content p { font-size:13px; line-height:1.65; color:#4f625b; margin:0; max-width:510px; }
        .ed-date { white-space:nowrap; font:10px 'DM Mono',monospace; color:#68776e; padding-top:4px; }
        .ed-tags { display:flex; gap:6px; flex-wrap:wrap; margin-top:13px; }
        .ed-tags span { color:#425c53; font-size:10px; padding:5px 8px; border:1px solid #c1cfc3; border-radius:99px; }
        .ed-projects-head { margin-bottom:38px; }
        .ed-project-list { border-top:1px solid var(--ink); }
        .ed-project { display:grid; grid-template-columns: .72fr 1.5fr 1.15fr; gap:30px; padding:28px 0 30px; border-bottom:1px solid var(--rule); }
        .ed-project-aside { display:flex; flex-direction:column; gap:12px; }
        .ed-project-number { font:11px 'DM Mono',monospace; color:var(--accent); }
        .ed-project-type { font:9px 'DM Mono',monospace; letter-spacing:.1em; color:var(--muted); }
        .ed-project-main h3 { font:600 27px/1.1 'Playfair Display', Georgia, serif; margin:0 0 15px; }
        .ed-project-main p { font-size:12px; line-height:1.55; margin:7px 0; color:#51615a; }
        .ed-project-main p b { color:var(--ink); font-size:10px; letter-spacing:.05em; text-transform:uppercase; margin-right:5px; }
        .ed-project-outcome { align-self:center; background:#e8ede5; padding:21px; border-left:3px solid var(--ink); }
        .ed-project-outcome.coral { border-color:var(--accent); background:#f0e2d9; }
        .ed-project-outcome.gold { border-color:var(--gold); background:#eee8d9; }
        .ed-project-outcome small { text-transform:uppercase; font:9px 'DM Mono',monospace; letter-spacing:.1em; color:var(--muted); }
        .ed-project-outcome p { margin:9px 0 0; font:600 16px/1.45 'Playfair Display', Georgia, serif; }
        .ed-skills { background:var(--ink); color:#f4f0e7; }
        .ed-skills .ed-section-label { color:#e4a47c; }
        .ed-skills .ed-section-title { color:#f4f0e7; }
        .ed-skills-grid { display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid #47605a; }
        .ed-skill-group { padding:22px 16px 0 0; }
        .ed-skill-group + .ed-skill-group { padding-left:18px; border-left:1px solid #47605a; }
        .ed-skill-group span { color:#e4a47c; font:10px 'DM Mono',monospace; }
        .ed-skill-group h3 { font:600 19px 'Playfair Display',Georgia,serif; margin:13px 0 14px; }
        .ed-skill-group p { color:#bdc9c0; font-size:12px; line-height:1.8; margin:0; }
        .ed-education { display:grid; grid-template-columns:1fr 2fr; gap:35px; align-items:start; }
        .ed-edu-card { display:flex; align-items:flex-start; justify-content:space-between; gap:25px; border-top:1px solid var(--ink); border-bottom:1px solid var(--rule); padding:21px 0; }
        .ed-edu-card h3 { font:600 23px 'Playfair Display', Georgia, serif; margin:0 0 7px; }
        .ed-edu-card p { margin:0; font-size:13px; color:var(--muted); }
        .ed-edu-meta { text-align:right; flex:0 0 auto; font:10px 'DM Mono',monospace; line-height:1.9; color:var(--muted); }
        .ed-ambassador { background:#e9ddd0; position:relative; padding:77px 0; }
        .ed-ambassador-grid { display:grid; grid-template-columns:.82fr 1.18fr; gap:60px; align-items:start; }
        .ed-ambassador h2 { font:600 clamp(39px,5vw,60px)/1.04 'Playfair Display',Georgia,serif; letter-spacing:-.045em; margin:14px 0 17px; }
        .ed-ambassador-copy p { max-width:360px; color:#5d665e; font-size:13px; line-height:1.65; }
        .ed-amb-label { display:inline-flex; padding:7px 10px; border:1px solid #beaa95; border-radius:99px; color:#795e4e; font:9px 'DM Mono',monospace; letter-spacing:.08em; }
        .ed-chat { background:#f7f2e9; border:1px solid #d5c5b5; padding:22px; box-shadow:8px 8px 0 #d9c8b7; }
        .ed-chat-top { display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid #ded4c8; padding-bottom:14px; margin-bottom:17px; }
        .ed-chat-top strong { font:600 17px 'Playfair Display',Georgia,serif; }
        .ed-chat-top span { font:9px 'DM Mono',monospace; color:#6b7c6e; text-transform:uppercase; letter-spacing:.08em; }
        .ed-chat-top span:before { content:''; display:inline-block; width:7px; height:7px; border-radius:50%; background:#7e9b76; margin-right:7px; }
        .ed-chat-note { color:#77796f; font-size:11px; line-height:1.5; margin:0 0 14px; }
        .ed-question-list { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .ed-question { text-align:left; min-height:53px; border:1px solid #ded4c8; background:transparent; color:var(--ink); cursor:pointer; padding:10px 12px; font:500 11px/1.4 'DM Sans',sans-serif; transition:background .2s ease,border .2s ease; }
        .ed-question:hover,.ed-question[aria-pressed="true"] { background:#e8ede5; border-color:#8ea496; }
        .ed-answer { background:#e8ede5; margin-top:13px; padding:15px; border-left:2px solid var(--ink); animation:ed-in .25s ease-out both; }
        .ed-answer p { font-size:12px; line-height:1.6; color:#42554c; margin:0 0 10px; }
        .ed-answer a { color:var(--ink); font:10px 'DM Mono',monospace; text-underline-offset:3px; }
        @keyframes ed-in { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        .ed-contact { padding:75px 0 30px; }
        .ed-contact-top { display:flex; justify-content:space-between; align-items:flex-end; gap:30px; padding-bottom:36px; border-bottom:1px solid var(--ink); }
        .ed-contact h2 { font:600 clamp(42px,6vw,72px)/.98 'Playfair Display',Georgia,serif; letter-spacing:-.05em; margin:15px 0 0; }
        .ed-contact h2 em { color:var(--accent); }
        .ed-contact-links { display:flex; gap:10px; flex-wrap:wrap; }
        .ed-contact-links a { display:inline-flex; align-items:center; gap:8px; color:var(--ink); text-decoration:none; border:1px solid #b5b9aa; padding:11px 13px; font-size:11px; }
        .ed-contact-links a:hover { background:var(--ink); color:var(--paper); }
        .ed-footer { display:flex; justify-content:space-between; color:#7b8278; font:9px 'DM Mono',monospace; letter-spacing:.06em; padding:18px 0 22px; }
        .ed-skip { position:absolute; left:-9999px; top:8px; z-index:50; background:var(--ink); color:#fff; padding:10px; }
        .ed-skip:focus { left:8px; }
        .ed-editorial-toast { font-size:11px; color:#864536; margin-top:10px; }
        @media (max-width: 760px) {
          .ed-wrap { width:min(100% - 38px, 560px); }
          .ed-nav { height:66px; }
          .ed-navlinks { gap:0; }
          .ed-navlinks a:not(.ed-nav-contact) { display:none; }
          .ed-navlinks .ed-nav-contact { padding:8px 12px; font-size:11px; }
          .ed-hero { padding:47px 0 38px; }
          .ed-hero-grid { grid-template-columns:1fr; gap:22px; margin-top:20px; }
          .ed-hero h1 { font-size:clamp(58px, 17vw, 83px); }
          .ed-hero-note p { font-size:15px; }
          .ed-proofbar { margin-top:41px; grid-template-columns:1fr 1fr; }
          .ed-proof-intro { grid-column:1/-1; padding:15px 0; }
          .ed-proof { padding:16px 10px 17px 15px; }
          .ed-proof:nth-child(2) { border-left:0; padding-left:0; }
          .ed-proof b { font-size:27px; }
          .ed-section { padding:62px 0; }
          .ed-section-head { grid-template-columns:1fr; gap:13px; margin-bottom:27px; }
          .ed-section-label { padding-top:0; }
          .ed-section-title { font-size:40px; }
          .ed-match { grid-template-columns:1fr; }
          .ed-match article { min-height:0; padding:20px; }
          .ed-match h3 { margin:12px 0 8px; }
          .ed-exp-row { grid-template-columns:31px 1fr; gap:10px; padding:21px 0; }
          .ed-exp-content { grid-column:2; display:block; }
          .ed-exp-title h3 { font-size:21px; }
          .ed-date { margin-top:11px; }
          .ed-project { grid-template-columns:36px 1fr; gap:10px; padding:22px 0; }
          .ed-project-aside { display:contents; }
          .ed-project-number { grid-column:1; grid-row:1; }
          .ed-project-type { grid-column:2; grid-row:1; align-self:center; }
          .ed-project-main { grid-column:2; }
          .ed-project-main h3 { font-size:24px; margin:6px 0 12px; }
          .ed-project-outcome { grid-column:2; margin-top:4px; padding:15px; }
          .ed-skills-grid { grid-template-columns:1fr 1fr; row-gap:20px; }
          .ed-skill-group { padding:17px 12px 0 0; }
          .ed-skill-group + .ed-skill-group { padding-left:13px; }
          .ed-skill-group:nth-child(3) { border-left:0; padding-left:0; }
          .ed-skill-group h3 { font-size:17px; }
          .ed-education { grid-template-columns:1fr; gap:20px; }
          .ed-edu-card { flex-direction:column; gap:12px; }
          .ed-edu-meta { text-align:left; }
          .ed-ambassador { padding:60px 0; }
          .ed-ambassador-grid { grid-template-columns:1fr; gap:28px; }
          .ed-ambassador h2 { font-size:44px; max-width:350px; }
          .ed-chat { padding:16px; box-shadow:5px 5px 0 #d9c8b7; }
          .ed-question-list { grid-template-columns:1fr; }
          .ed-question { min-height:45px; }
          .ed-contact { padding-top:58px; }
          .ed-contact-top { align-items:flex-start; flex-direction:column; padding-bottom:27px; }
          .ed-contact h2 { font-size:51px; }
          .ed-contact-links a { font-size:10px; }
          .ed-footer { gap:16px; flex-direction:column; }
        }
        @media (prefers-reduced-motion: reduce) {
          .dipisha-editorial *, .dipisha-editorial *::before, .dipisha-editorial *::after { animation-duration:.01ms !important; transition-duration:.01ms !important; scroll-behavior:auto !important; }
        }
      `}</style>
      <a className="ed-skip" href="#main-content">Skip to content</a>
      <div className="ed-wrap">
        <header className="ed-nav">
          <a className="ed-brand" href="#top" aria-label="Dipisha Shivangi, back to top">
            <span className="ed-monogram" aria-hidden="true">DS</span>
            <span>Dipisha Shivangi</span>
          </a>
          <nav className="ed-navlinks" aria-label="Main navigation">
            <a href="#story">Story</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Toolkit</a>
            <a href="#ambassador">Ask Dipisha</a>
            <a className="ed-nav-contact" href="#contact">Get in touch <Arrow /></a>
          </nav>
        </header>

        <section className="ed-hero" id="main-content" aria-labelledby="hero-title">
          <div className="ed-kicker ed-mono">A data engineer in the making · Recruiter brief</div>
          <div className="ed-hero-grid">
            <h1 className="ed-display" id="hero-title">Dipisha<br /><em>Shivangi</em></h1>
            <div className="ed-hero-note">
              <p>
                I build reliable paths from raw data to decisions — combining distributed processing,
                thoughtful database design and repeatable quality checks.
              </p>
              <div className="ed-role-line" aria-label="Target roles">
                <span>Data Engineer</span><span>Cloud Data Engineer</span>
              </div>
              <div className="ed-actions">
                <a className="ed-button" href="#contact">Let’s talk <Arrow /></a>
                <button className="ed-text-link" type="button" onClick={() => setResumeNote(true)}>
                  Download resume <Arrow diagonal />
                </button>
              </div>
              {resumeNote && (
                <p className="ed-note" role="status">
                  Resume action preview — the source PDF is not bundled in this mockup.
                </p>
              )}
            </div>
          </div>
          <div className="ed-proofbar" aria-label="Selected evidence at a glance">
            <div className="ed-proof-intro"><span>At a glance</span><strong>Proof, not adjectives.</strong></div>
            <div className="ed-proof"><b>1M+</b><span>records processed through ETL</span></div>
            <div className="ed-proof"><b>30%</b><span>lower analytics workflow latency</span></div>
            <div className="ed-proof"><b>40%</b><span>faster reporting turnaround</span></div>
          </div>
        </section>

        <section className="ed-section" id="story" aria-labelledby="story-title">
          <div className="ed-section-head">
            <div className="ed-section-label ed-mono">01 — The through-line</div>
            <h2 className="ed-section-title" id="story-title">
              From building systems to making <em>data dependable.</em>
            </h2>
          </div>
          <div className="ed-match">
            <article>
              <span className="ed-match-num">01 / DISTRIBUTED PROCESSING</span>
              <h3>Move more data, with less waiting.</h3>
              <p><a href="#experience">Spark, Airflow, Python and SQL</a> ETL across 1M+ records; 30% lower workflow latency at Celebal.</p>
            </article>
            <article>
              <span className="ed-match-num">02 / WAREHOUSE & DATABASE</span>
              <h3>Make the data model earn its keep.</h3>
              <p><a href="#projects">Oracle PL/SQL controls</a> for 100+ payroll records, plus SQL reporting across 50K+ sales records.</p>
            </article>
            <article>
              <span className="ed-match-num">03 / QUALITY & RELIABILITY</span>
              <h3>Trust the work that runs again.</h3>
              <p><a href="#experience">Docker and pytest-verified workloads</a> at Handshake AI, with agent reliability assessed using pass@k.</p>
            </article>
          </div>
        </section>
      </div>

      <section className="ed-experience" id="experience" aria-labelledby="experience-title">
        <div className="ed-wrap">
          <div className="ed-section-head">
            <div className="ed-section-label ed-mono">02 — Work in practice</div>
            <h2 className="ed-section-title" id="experience-title">A trajectory across <em>data, systems and reliability.</em></h2>
          </div>
          <div className="ed-exp-list">
            {experiences.map((item) => (
              <article className="ed-exp-row" key={item.index}>
                <span className="ed-exp-index">{item.index}</span>
                <div className="ed-exp-title">
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <div className="ed-exp-content">
                  <div>
                    <p>{item.detail}</p>
                    <div className="ed-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <span className="ed-date">{item.dates}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="ed-wrap">
        <section className="ed-section" id="projects" aria-labelledby="projects-title">
          <div className="ed-section-head ed-projects-head">
            <div className="ed-section-label ed-mono">03 — Selected projects</div>
            <h2 className="ed-section-title" id="projects-title">The most useful systems start with <em>unflashy foundations.</em></h2>
          </div>
          <div className="ed-project-list">
            {projects.map((project) => (
              <article className="ed-project" key={project.n}>
                <div className="ed-project-aside">
                  <span className="ed-project-number">{project.n}</span>
                  <span className="ed-project-type">{project.type}</span>
                </div>
                <div className="ed-project-main">
                  <h3>{project.title}</h3>
                  <p><b>Problem</b> {project.problem}</p>
                  <p><b>Contribution</b> {project.contribution}</p>
                  <p><b>Tools</b> {project.tools}</p>
                </div>
                <div className={`ed-project-outcome ${project.accent}`}>
                  <small>Outcome / evidence</small>
                  <p>{project.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="ed-section ed-skills" id="skills" aria-labelledby="skills-title">
        <div className="ed-wrap">
          <div className="ed-section-head">
            <div className="ed-section-label ed-mono">04 — Working toolkit</div>
            <h2 className="ed-section-title" id="skills-title">Tools chosen for <em>systems that hold up.</em></h2>
          </div>
          <div className="ed-skills-grid">
            {skillGroups.map((group) => (
              <article className="ed-skill-group" key={group.mark}>
                <span>{group.mark} /</span>
                <h3>{group.title}</h3>
                <p>{group.items.join(" · ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="ed-wrap">
        <section className="ed-section ed-education" id="education" aria-labelledby="education-title">
          <div className="ed-section-label ed-mono">05 — Education</div>
          <div>
            <h2 className="ed-section-title" id="education-title">A strong base in <em>computer science.</em></h2>
            <article className="ed-edu-card">
              <div>
                <h3>B.Tech, Computer Science Engineering</h3>
                <p>KIIT — Kalinga Institute of Industrial Technology</p>
              </div>
              <div className="ed-edu-meta"><div>2021 — 2025</div><div>CGPA 7.82 / 10</div></div>
            </article>
          </div>
        </section>
      </div>

      <section className="ed-ambassador" id="ambassador" aria-labelledby="ambassador-title">
        <div className="ed-wrap ed-ambassador-grid">
          <div className="ed-ambassador-copy">
            <span className="ed-amb-label">A GROUNDED PROFILE GUIDE</span>
            <h2 id="ambassador-title">Curious about the details?</h2>
            <p>Choose a question to see a short, source-linked summary. This is a visual mockup, not a live AI assistant; every response below points to evidence on this page.</p>
          </div>
          <div className="ed-chat" aria-label="Virtual ambassador mockup">
            <div className="ed-chat-top">
              <strong>Ask Dipisha</strong><span>Source-linked preview</span>
            </div>
            <p className="ed-chat-note">A few good questions for a first conversation:</p>
            <div className="ed-question-list">
              {questions.map((question, index) => (
                <button
                  className="ed-question"
                  type="button"
                  key={question.label}
                  aria-pressed={activeAnswer === index}
                  onClick={() => setActiveAnswer(index)}
                >
                  {question.label}
                </button>
              ))}
            </div>
            {answer && (
              <div className="ed-answer" aria-live="polite">
                <p>{answer.response}</p>
                <a href={answer.href}>Source: {answer.source} <Arrow diagonal /></a>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="ed-contact" id="contact">
        <div className="ed-wrap">
          <div className="ed-contact-top">
            <div>
              <div className="ed-kicker ed-mono">06 — Start a conversation</div>
              <h2>Let’s build something<br /><em>dependable.</em></h2>
            </div>
            <div className="ed-contact-links" aria-label="Public contact links">
              <a href="mailto:shivangidipisha@gmail.com">Email Dipisha <Arrow diagonal /></a>
              <a href="https://linkedin.com/in/dipisha" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
              <a href="https://github.com/dipisha-21" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
            </div>
          </div>
          <div className="ed-footer">
            <span>DIPISHA SHIVANGI · DATA ENGINEERING</span>
            <a href="#top" style={{ color: "inherit", textDecoration: "none" }}>Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}