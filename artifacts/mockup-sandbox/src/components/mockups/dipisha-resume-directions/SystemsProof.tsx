import { useState } from "react";

type Project = {
  id: string;
  number: string;
  title: string;
  type: string;
  problem: string;
  contribution: string;
  tools: string[];
  outcome: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "etl",
    number: "01",
    title: "Distributed ETL for analytics",
    type: "Industry experience · Celebal Technologies",
    problem: "Analytics workflows across more than one million records needed lower latency and faster reporting.",
    contribution: "Engineered ETL workflows and supported reporting improvements across the analytics process.",
    tools: ["Apache Spark", "Airflow", "Python", "SQL", "Power BI"],
    outcome: "30% lower analytics workflow latency; 40% faster reporting turnaround.",
    featured: true,
  },
  {
    id: "payroll",
    number: "02",
    title: "Employee Payroll Management System",
    type: "Database engineering",
    problem: "Employee payroll records required reliable validation and integrity controls.",
    contribution: "Built a payroll system with triggers and stored procedures to enforce validation and data integrity.",
    tools: ["Oracle SQL", "PL/SQL", "Triggers", "Stored procedures"],
    outcome: "Managed 100+ employee records with database-level controls.",
    featured: true,
  },
  {
    id: "sales",
    number: "03",
    title: "Sales Insight Dashboard",
    type: "Analytics engineering",
    problem: "Sales reporting needed a faster, more useful view across a sizeable dataset.",
    contribution: "Created an interactive dashboard and KPI reporting model.",
    tools: ["Power BI", "DAX", "SQL"],
    outcome: "Analyzed 50K+ records across 10+ KPIs; report-generation time reduced by approximately 30%.",
  },
  {
    id: "anpr",
    number: "04",
    title: "Automatic Number Plate Recognition",
    type: "Applied computer vision",
    problem: "Recognize number plates from image inputs through an evaluation pipeline.",
    contribution: "Implemented detection and text extraction, then evaluated the setup on a substantial image set.",
    tools: ["Python", "YOLOv8", "EasyOCR"],
    outcome: "Reported 99.5% accuracy under the project setup across 1,000+ images.",
  },
];

const starterQuestions = [
  {
    question: "What makes Dipisha a fit for data engineering?",
    answer:
      "Her evidence spans Spark/Airflow/Python/SQL ETL at 1M+ records, Oracle PL/SQL data integrity controls, and reproducible Docker/Pytest evaluation workloads.",
    source: "Role match · Celebal · Payroll · Handshake AI",
    href: "#match",
  },
  {
    question: "What is her strongest measurable data impact?",
    answer:
      "At Celebal Technologies, she engineered ETL across 1M+ records, reducing analytics workflow latency by 30%; reporting turnaround improved 40%.",
    source: "Experience · Celebal Technologies",
    href: "#experience",
  },
  {
    question: "Which projects show database and analytics skills?",
    answer:
      "The payroll system uses Oracle SQL/PLSQL triggers and stored procedures across 100+ records. The Sales Insight Dashboard uses Power BI, DAX and SQL across 50K+ records and 10+ KPIs.",
    source: "Selected work · Payroll · Sales Insight",
    href: "#work",
  },
  {
    question: "What evidence supports reliability and automation?",
    answer:
      "At Handshake AI, she built reproducible Python/Bash/Docker terminal workloads and pytest verifiers, then assessed agent reliability with pass@k.",
    source: "Experience · Handshake AI",
    href: "#experience",
  },
];

const navItems = [
  ["Proof map", "#match"],
  ["Selected work", "#work"],
  ["Experience", "#experience"],
  ["Toolkit", "#toolkit"],
  ["Education", "#education"],
] as const;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="sp-arrow">
      {diagonal ? (
        <path d="M4 12 12 4M5 4h7v7" />
      ) : (
        <path d="M2.5 8h10m-4-4 4 4-4 4" />
      )}
    </svg>
  );
}

export function SystemsProof() {
  const [expandedProject, setExpandedProject] = useState("etl");
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [resumeNotice, setResumeNotice] = useState(false);
  const activeAnswer = activeQuestion === null ? null : starterQuestions[activeQuestion];

  return (
    <div className="sp-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap');
        .sp-page{--sp-paper:#f2f3e8;--sp-card:#fbfbf5;--sp-ink:#172f2c;--sp-muted:#60716b;--sp-line:#c9d2c5;--sp-green:#b9d64a;--sp-deep:#234a40;--sp-orange:#c65f3b;color:var(--sp-ink);background:var(--sp-paper);font-family:'Manrope',sans-serif;min-height:100vh;overflow:hidden}
        .sp-page *{box-sizing:border-box}
        .sp-page a{color:inherit;text-decoration:none}
        .sp-page button{font:inherit;color:inherit}
        .sp-page a:focus-visible,.sp-page button:focus-visible{outline:3px solid var(--sp-orange);outline-offset:4px}
        .sp-shell{max-width:1320px;margin:0 auto;padding:0 52px}
        .sp-mono{font-family:'DM Mono',monospace}
        .sp-topbar{height:68px;border-bottom:1px solid var(--sp-line);display:flex;align-items:center;justify-content:space-between;gap:24px}
        .sp-brand{display:flex;align-items:center;gap:11px;font-size:12px;font-weight:800;letter-spacing:.04em}
        .sp-mark{width:27px;height:27px;background:var(--sp-green);display:grid;place-items:center;font-family:'DM Mono',monospace;font-size:11px;border-radius:50%}
        .sp-nav{display:flex;align-items:center;gap:27px}
        .sp-nav a{font-family:'DM Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:.07em;color:var(--sp-muted);transition:color .18s}
        .sp-nav a:hover{color:var(--sp-orange)}
        .sp-top-contact{font-size:11px;font-weight:800;border-bottom:1px solid var(--sp-ink);padding:6px 0}
        .sp-hero{padding:55px 0 56px;border-bottom:1px solid var(--sp-line);position:relative}
        .sp-hero-grid{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(330px,.8fr);gap:66px;align-items:end}
        .sp-eyebrow{font-family:'DM Mono',monospace;text-transform:uppercase;letter-spacing:.11em;font-size:10px;color:var(--sp-muted);display:flex;gap:10px;align-items:center}
        .sp-eyebrow:before{content:"";width:23px;height:1px;background:var(--sp-orange)}
        .sp-title{font-size:clamp(50px,7.8vw,105px);line-height:.92;letter-spacing:-.075em;font-weight:700;margin:25px 0 18px}
        .sp-title em{font-family:'Newsreader',serif;font-weight:500;letter-spacing:-.065em}
        .sp-role{font-size:18px;letter-spacing:-.035em;font-weight:600;margin:0;color:var(--sp-deep)}
        .sp-summary{font-size:14px;line-height:1.8;color:#465c56;max-width:610px;margin:20px 0 24px}
        .sp-cta-row{display:flex;gap:10px;flex-wrap:wrap}
        .sp-btn{border:1px solid var(--sp-ink);background:var(--sp-ink);color:#f8f8ed!important;padding:13px 16px;display:inline-flex;align-items:center;gap:10px;font-size:11px;font-weight:800;transition:transform .18s,background .18s}
        .sp-btn:hover{transform:translateY(-2px);background:var(--sp-deep)}
        .sp-btn.sp-secondary{color:var(--sp-ink)!important;background:transparent}
        .sp-btn.sp-secondary:hover{background:#e4e9d9}
        .sp-arrow{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.5}
        .sp-hero-aside{border-left:1px solid var(--sp-line);padding-left:25px}
        .sp-aside-label{display:flex;justify-content:space-between;align-items:center;font:10px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.08em;color:var(--sp-muted);margin:0 0 14px}
        .sp-status{display:inline-flex;align-items:center;gap:7px}
        .sp-dot{width:7px;height:7px;background:#638739;border-radius:50%}
        .sp-stat{display:grid;grid-template-columns:82px 1fr;gap:14px;padding:14px 0;border-top:1px solid var(--sp-line);align-items:center}
        .sp-stat strong{font-size:37px;line-height:1;font-weight:700;letter-spacing:-.08em}
        .sp-stat span{font-size:11px;line-height:1.5;color:var(--sp-muted)}
        .sp-stat span b{display:block;color:var(--sp-ink);font-size:12px;margin-bottom:2px}
        .sp-quicklinks{display:flex;gap:16px;margin-top:13px}
        .sp-quicklinks a{font:10px 'DM Mono',monospace;text-decoration:underline;text-underline-offset:3px}
        .sp-main{display:grid;grid-template-columns:185px minmax(0,1fr);gap:65px;padding:54px 0 78px}
        .sp-rail{position:sticky;align-self:start;top:25px}
        .sp-rail-title{font:10px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.12em;color:var(--sp-muted);padding-bottom:13px;border-bottom:1px solid var(--sp-line)}
        .sp-rail a{display:flex;gap:12px;padding:11px 0;border-bottom:1px solid rgba(201,210,197,.7);font-size:11px;color:#51645e}
        .sp-rail a span{font:9px 'DM Mono',monospace;color:#9aa79b}
        .sp-rail a:hover{color:var(--sp-orange)}
        .sp-rail-note{font:10px/1.7 'DM Mono',monospace;color:var(--sp-muted);margin-top:25px}
        .sp-content{min-width:0}
        .sp-section{padding-bottom:64px;margin-bottom:59px;border-bottom:1px solid var(--sp-line);scroll-margin-top:28px}
        .sp-section:last-child{border:0;margin-bottom:0}
        .sp-section-head{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-bottom:23px}
        .sp-kicker{font:10px 'DM Mono',monospace;color:var(--sp-orange);text-transform:uppercase;letter-spacing:.12em}
        .sp-h2{font-size:31px;line-height:1.08;letter-spacing:-.055em;margin:8px 0 0}
        .sp-section-desc{font-size:11px;line-height:1.65;color:var(--sp-muted);max-width:260px;text-align:right}
        .sp-proof-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--sp-line);border:1px solid var(--sp-line)}
        .sp-proof-card{background:var(--sp-card);padding:19px 18px 21px;min-height:192px;position:relative}
        .sp-proof-num{font:10px 'DM Mono',monospace;color:var(--sp-orange)}
        .sp-proof-card h3{font-size:15px;line-height:1.32;letter-spacing:-.03em;margin:21px 0 8px}
        .sp-proof-card p{font-size:11px;line-height:1.65;color:var(--sp-muted);margin:0}
        .sp-proof-link{display:inline-flex;align-items:center;gap:7px;margin-top:16px;font:9px 'DM Mono',monospace;color:var(--sp-deep)}
        .sp-proof-link .sp-arrow{width:12px}
        .sp-proof-ribbon{background:var(--sp-green);font:9px 'DM Mono',monospace;padding:5px 8px;display:inline-block;text-transform:uppercase;letter-spacing:.06em}
        .sp-project-list{border-top:1px solid var(--sp-ink)}
        .sp-project{border-bottom:1px solid var(--sp-line)}
        .sp-project-trigger{width:100%;border:0;background:transparent;text-align:left;padding:17px 0;display:grid;grid-template-columns:38px minmax(0,1fr) 150px 22px;gap:12px;align-items:center;cursor:pointer}
        .sp-project-trigger:hover .sp-project-title{color:var(--sp-orange)}
        .sp-project-no{font:11px 'DM Mono',monospace;color:var(--sp-orange)}
        .sp-project-title{font-size:16px;font-weight:700;letter-spacing:-.035em;transition:color .18s}
        .sp-project-type{font:9px 'DM Mono',monospace;text-align:right;color:var(--sp-muted);text-transform:uppercase;letter-spacing:.04em}
        .sp-project-plus{font:18px 'DM Mono',monospace;text-align:right}
        .sp-project-body{padding:1px 30px 24px 50px;animation:sp-reveal .22s ease-out}
        @keyframes sp-reveal{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}
        .sp-project-facts{display:grid;grid-template-columns:1fr 1fr;gap:22px}
        .sp-fact-label{font:9px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.11em;color:var(--sp-orange);margin-bottom:6px}
        .sp-fact{font-size:11px;line-height:1.65;color:#52655e}
        .sp-tools{display:flex;gap:6px;flex-wrap:wrap;margin:15px 0}
        .sp-tag{padding:5px 8px;border:1px solid var(--sp-line);font:9px 'DM Mono',monospace;color:#52655e}
        .sp-outcome{background:#e4ebd7;padding:11px 13px;font-size:11px;line-height:1.6;color:var(--sp-deep)}
        .sp-exp-list{border-top:1px solid var(--sp-ink)}
        .sp-exp{display:grid;grid-template-columns:170px minmax(0,1fr);gap:25px;padding:20px 0;border-bottom:1px solid var(--sp-line)}
        .sp-exp-meta{font:10px/1.7 'DM Mono',monospace;color:var(--sp-muted)}
        .sp-exp-meta b{display:block;font-family:'Manrope',sans-serif;font-size:14px;color:var(--sp-ink);line-height:1.3;letter-spacing:-.03em}
        .sp-exp h3{font-size:15px;margin:0 0 7px;letter-spacing:-.03em}
        .sp-exp p{font-size:11px;line-height:1.7;color:#53665f;margin:0}
        .sp-exp-metric{font:10px 'DM Mono',monospace;color:var(--sp-deep);margin-top:9px}
        .sp-explab{display:flex;gap:8px;align-items:center;font:9px 'DM Mono',monospace;color:var(--sp-orange);text-transform:uppercase;letter-spacing:.08em;margin-top:13px}
        .sp-lab-dot{width:6px;height:6px;background:var(--sp-orange);border-radius:50%}
        .sp-skills-layout{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--sp-line);border:1px solid var(--sp-line)}
        .sp-skill-group{padding:17px;background:var(--sp-card);min-height:128px}
        .sp-skill-group h3{font:10px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.09em;color:var(--sp-orange);margin:0 0 13px}
        .sp-skill-cloud{display:flex;flex-wrap:wrap;gap:7px}
        .sp-skill{font-size:11px;padding:6px 9px;background:#edf0e4;color:var(--sp-deep)}
        .sp-skill-primary{background:var(--sp-ink);color:#f6f7ec}
        .sp-ed-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}
        .sp-education{border-top:1px solid var(--sp-ink);padding-top:14px}
        .sp-education small{font:9px 'DM Mono',monospace;color:var(--sp-orange);text-transform:uppercase;letter-spacing:.1em}
        .sp-education h3{font-size:15px;letter-spacing:-.03em;margin:8px 0 5px}
        .sp-education p{font-size:11px;color:var(--sp-muted);line-height:1.65;margin:0}
        .sp-degree{margin-bottom:24px}
        .sp-credential-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--sp-line);border:1px solid var(--sp-line)}
        .sp-credential-card{background:var(--sp-card);padding:16px 17px}
        .sp-credential-card h3{font-size:13px;margin:7px 0 11px}
        .sp-credential-list{list-style:none;padding:0;margin:0;display:grid;gap:8px}
        .sp-credential-list li{position:relative;padding-left:12px;font-size:10px;line-height:1.5;color:#52655e}
        .sp-credential-list li:before{content:"";position:absolute;left:0;top:.55em;width:4px;height:4px;background:var(--sp-green);border-radius:50%}
        .sp-credential-list span{font-family:'DM Mono',monospace;font-size:9px;color:var(--sp-muted);white-space:nowrap}
        .sp-ownership{display:grid;grid-template-columns:150px minmax(0,1fr);gap:17px;margin-top:14px;padding:15px 16px;background:#e3ead8}
        .sp-ownership-label{font:9px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.1em;color:var(--sp-orange)}
        .sp-ownership-note{font-size:9px;line-height:1.55;color:var(--sp-muted);margin:6px 0 0}
        .sp-ownership-items{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .sp-ownership-item{font-size:10px;line-height:1.5;color:#52655e}
        .sp-ownership-item a{display:block;font-weight:800;color:var(--sp-deep);margin-bottom:3px;text-decoration:underline;text-underline-offset:3px}
        .sp-ambassador{background:var(--sp-deep);color:#f4f5e9;padding:25px 27px;margin-top:15px;position:relative;overflow:hidden}
        .sp-ambassador:after{content:"";position:absolute;right:-43px;top:-51px;width:180px;height:180px;border:1px solid rgba(212,230,162,.17);border-radius:50%;box-shadow:0 0 0 22px rgba(212,230,162,.035),0 0 0 44px rgba(212,230,162,.03);pointer-events:none}
        .sp-amb-head{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;position:relative;z-index:1}
        .sp-amb-label{font:9px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.12em;color:#d5e595}
        .sp-amb-title{font-size:21px;letter-spacing:-.05em;margin:7px 0 6px}
        .sp-amb-sub{font-size:10px;line-height:1.6;color:#cfddd4;max-width:490px;margin:0}
        .sp-amb-status{white-space:nowrap;font:9px 'DM Mono',monospace;color:#d5e595;border:1px solid rgba(213,229,149,.45);padding:7px 9px}
        .sp-question-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:20px;position:relative;z-index:1}
        .sp-question{background:transparent;border:1px solid rgba(232,238,217,.3);color:#edf2e5;text-align:left;padding:10px 12px;font-size:10px;line-height:1.5;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:8px;transition:background .18s,border-color .18s}
        .sp-question:hover,.sp-question[aria-pressed="true"]{background:rgba(226,237,193,.13);border-color:#d5e595}
        .sp-answer{margin-top:13px;padding:13px;background:rgba(7,30,24,.38);font-size:11px;line-height:1.7;position:relative;z-index:1}
        .sp-answer-source{display:block;margin-top:8px;font:9px 'DM Mono',monospace;color:#d5e595}
        .sp-answer a{color:#d5e595;text-decoration:underline;text-underline-offset:3px}
        .sp-disclaimer{font:9px/1.6 'DM Mono',monospace;color:#c1d2c7;margin:14px 0 0;position:relative;z-index:1}
        .sp-footer{background:#e2e9d8;border-top:1px solid var(--sp-line);padding:34px 0}
        .sp-footer-inner{display:flex;justify-content:space-between;gap:24px;align-items:center}
        .sp-footer-title{font-size:25px;letter-spacing:-.06em;margin:0 0 6px}
        .sp-footer-copy{font-size:11px;color:var(--sp-muted);margin:0}
        .sp-footer-links{display:flex;gap:18px;flex-wrap:wrap}
        .sp-footer-links a{font:10px 'DM Mono',monospace;text-decoration:underline;text-underline-offset:4px}
        .sp-notice{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:10;background:var(--sp-ink);color:#f7f7ec;padding:12px 17px;font-size:11px;box-shadow:0 8px 25px rgba(24,50,42,.18);max-width:calc(100vw - 32px)}
        @media(max-width:900px){.sp-shell{padding:0 27px}.sp-nav{gap:15px}.sp-nav a{font-size:9px}.sp-hero-grid{gap:35px}.sp-main{grid-template-columns:145px minmax(0,1fr);gap:35px}.sp-proof-grid{grid-template-columns:1fr}.sp-proof-card{min-height:0}.sp-proof-card h3{margin-top:12px}.sp-stat strong{font-size:32px}.sp-project-trigger{grid-template-columns:30px minmax(0,1fr) 22px}.sp-project-type{display:none}}
        @media(max-width:640px){.sp-shell{padding:0 20px}.sp-topbar{height:58px}.sp-brand{font-size:10px}.sp-nav{display:none}.sp-top-contact{font-size:10px}.sp-hero{padding:38px 20px 37px}.sp-hero-grid{grid-template-columns:1fr;gap:31px}.sp-title{font-size:clamp(56px,16vw,79px);margin:21px 0 14px}.sp-role{font-size:16px}.sp-summary{font-size:13px;line-height:1.7}.sp-hero-aside{padding-left:0;border-left:0}.sp-aside-label{margin-bottom:10px}.sp-stat{grid-template-columns:68px 1fr;padding:11px 0}.sp-stat strong{font-size:34px}.sp-main{display:block;padding:34px 20px 52px}.sp-rail{position:relative;top:auto;display:flex;align-items:center;gap:11px;overflow:auto;white-space:nowrap;margin:0 -20px 34px;padding:0 20px 10px;border-bottom:1px solid var(--sp-line)}.sp-rail-title,.sp-rail-note{display:none}.sp-rail a{border:0;padding:3px 0;flex:none;font-size:10px}.sp-rail a span{display:none}.sp-section{padding-bottom:40px;margin-bottom:39px}.sp-section-head{display:block;margin-bottom:17px}.sp-section-desc{text-align:left;margin:10px 0 0;max-width:340px}.sp-h2{font-size:28px}.sp-proof-card{padding:16px}.sp-proof-card h3{font-size:15px}.sp-ownership{grid-template-columns:1fr;gap:10px;padding:14px}.sp-ownership-items{grid-template-columns:1fr;gap:10px}.sp-project-trigger{grid-template-columns:28px minmax(0,1fr) 20px;gap:8px;padding:15px 0}.sp-project-title{font-size:14px}.sp-project-body{padding:0 0 19px 36px}.sp-project-facts{grid-template-columns:1fr;gap:13px}.sp-exp{grid-template-columns:1fr;gap:7px;padding:16px 0}.sp-exp-meta{display:flex;gap:8px;align-items:center}.sp-exp-meta b{display:inline;font-size:12px}.sp-exp h3{font-size:14px}.sp-skills-layout{grid-template-columns:1fr}.sp-skill-group{min-height:auto}.sp-ed-grid{grid-template-columns:1fr;gap:18px}.sp-credential-grid{grid-template-columns:1fr}.sp-degree{margin-bottom:21px}.sp-ambassador{margin-left:-2px;margin-right:-2px;padding:19px 16px}.sp-amb-head{display:block}.sp-amb-status{display:inline-block;margin-top:12px}.sp-amb-title{font-size:20px}.sp-question-grid{grid-template-columns:1fr}.sp-footer-inner{display:block}.sp-footer-links{margin-top:20px;gap:15px}.sp-notice{bottom:12px}.sp-quicklinks{gap:12px}.sp-btn{padding:12px 13px}}
        @media(prefers-reduced-motion:reduce){.sp-page *{scroll-behavior:auto!important;animation-duration:.01ms!important;transition-duration:.01ms!important}}
      `}</style>

      <header className="sp-shell sp-topbar">
        <a className="sp-brand" href="#top" aria-label="Dipisha Shivangi, back to top">
          <span className="sp-mark">DS</span>
          <span>DIPISHA SHIVANGI <span style={{ color: "var(--sp-muted)", fontWeight: 500 }}>· DATA SYSTEMS</span></span>
        </a>
        <nav className="sp-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a className="sp-top-contact" href="mailto:shivangidipisha@gmail.com">Contact <Arrow diagonal /></a>
      </header>

      <section className="sp-shell sp-hero" id="top" aria-labelledby="sp-name">
        <div className="sp-hero-grid">
          <div>
            <div className="sp-eyebrow">Engineer profile <span className="sp-mono">/ ROLE PROFILE</span></div>
            <h1 className="sp-title" id="sp-name">Dipisha<br /><em>Shivangi</em></h1>
            <p className="sp-role">Data Engineer <span style={{ color: "var(--sp-orange)" }}>/</span> Cloud Data Engineer</p>
            <p className="sp-summary">I build dependable data workflows—from distributed ETL and cloud warehousing to database controls and reproducible validation. My strongest proof: lower-latency analytics at million-record scale, grounded in hands-on engineering.</p>
            <div className="sp-cta-row">
              <a className="sp-btn" href="mailto:shivangidipisha@gmail.com">Start a conversation <Arrow /></a>
              <button className="sp-btn sp-secondary" type="button" onClick={() => setResumeNotice(true)}>Download resume <Arrow diagonal /></button>
            </div>
          </div>
          <aside className="sp-hero-aside" aria-label="Selected evidence at a glance">
            <p className="sp-aside-label"><span>Evidence at a glance</span><span className="sp-status"><span className="sp-dot" /> VERIFIED IN RESUME</span></p>
            <div className="sp-stat"><strong>1M<span style={{ fontSize: 19 }}>+</span></strong><span><b>Records in ETL workflows</b>Celebal Technologies</span></div>
            <div className="sp-stat"><strong>30%</strong><span><b>Lower analytics latency</b>Spark · Airflow · Python · SQL</span></div>
            <div className="sp-stat"><strong>40%</strong><span><b>Faster reporting turnaround</b>Power BI reporting workflows</span></div>
            <div className="sp-quicklinks">
              <a href="https://linkedin.com/in/dipisha" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
              <a href="https://github.com/dipisha-21" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
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
              <article className="sp-proof-card">
                <span className="sp-proof-num">01 · BUILD</span>
                <h3>Distributed processing &amp; scalable ETL</h3>
                <p>Spark, Airflow, Python and SQL brought to an ETL workflow spanning 1M+ records.</p>
                <a className="sp-proof-link" href="#experience">30% lower latency <Arrow /></a>
              </article>
              <article className="sp-proof-card">
                <span className="sp-proof-num">02 · MODEL</span>
                <h3>Cloud warehousing &amp; database engineering</h3>
                <p>GCP, BigQuery and Looker alongside Oracle PL/SQL controls and analytics reporting.</p>
                <a className="sp-proof-link" href="#work">Payroll + sales dashboard <Arrow /></a>
              </article>
              <article className="sp-proof-card">
                <span className="sp-proof-num">03 · TRUST</span>
                <h3>Data quality, reliability &amp; automation</h3>
                <p>Reproducible containerized workloads, pytest verifiers and database integrity controls.</p>
                <a className="sp-proof-link" href="#experience">Explore reliability work <Arrow /></a>
              </article>
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
                    <button className="sp-project-trigger" type="button" aria-expanded={expanded} aria-controls={`project-${project.id}`} onClick={() => setExpandedProject(expanded ? "" : project.id)}>
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
                      <div className="sp-tools" aria-label="Tools used">{project.tools.map(tool => <span className="sp-tag" key={tool}>{tool}</span>)}</div>
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
                <div className="sp-exp-meta"><b>Celebal Technologies</b>Data Science Intern<br />Jun–Aug 2024</div>
                <div><h3>ETL, analytics performance &amp; reporting</h3><p>Engineered Spark/Airflow/Python/SQL ETL workflows across 1M+ records. Improved Power BI reporting workflows and turnaround.</p><div className="sp-exp-metric">↓ 30% workflow latency &nbsp; / &nbsp; ↓ 40% reporting turnaround</div></div>
              </article>
              <article className="sp-exp">
                <div className="sp-exp-meta"><b>Handshake AI</b>AI Evaluation &amp; Research Fellow<br />Jul 2026–Present</div>
                <div><h3>Reproducible workloads &amp; agent reliability</h3><p>Built reproducible Python/Bash/Docker terminal workloads and pytest verifiers; assessed agent reliability with pass@k.</p><div className="sp-explab"><span className="sp-lab-dot" /> Evaluation &amp; research</div></div>
              </article>
              <article className="sp-exp">
                <div className="sp-exp-meta"><b>Mobtions</b>Game Developer Intern<br />Dec 2024–Jun 2025</div>
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
              <div className="sp-skill-group"><h3>Distributed data &amp; orchestration</h3><div className="sp-skill-cloud"><span className="sp-skill sp-skill-primary">Spark</span><span className="sp-skill sp-skill-primary">Airflow</span><span className="sp-skill sp-skill-primary">Python</span><span className="sp-skill sp-skill-primary">SQL</span></div></div>
              <div className="sp-skill-group"><h3>Cloud &amp; warehousing</h3><div className="sp-skill-cloud"><span className="sp-skill">GCP</span><span className="sp-skill">BigQuery</span><span className="sp-skill">Looker</span></div></div>
              <div className="sp-skill-group"><h3>Databases &amp; analytics</h3><div className="sp-skill-cloud"><span className="sp-skill">Oracle PL/SQL</span><span className="sp-skill">Power BI</span><span className="sp-skill">DAX</span></div></div>
              <div className="sp-skill-group"><h3>Reliability &amp; delivery</h3><div className="sp-skill-cloud"><span className="sp-skill">Docker</span><span className="sp-skill">Pytest</span><span className="sp-skill">CI/CD</span><span className="sp-skill">Bash</span></div></div>
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

          <section className="sp-section" id="ambassador" aria-labelledby="sp-ambassador">
            <div className="sp-section-head">
              <div><div className="sp-kicker">06 / Ask the profile</div><h2 className="sp-h2" id="sp-ambassador">A source-anchored ambassador</h2></div>
              <p className="sp-section-desc">A visual mockup for evidence-led recruiter questions.</p>
            </div>
            <div className="sp-ambassador">
              <div className="sp-amb-head">
                <div><div className="sp-amb-label">Dipisha's profile assistant</div><h3 className="sp-amb-title">Ask about the evidence.</h3><p className="sp-amb-sub">Choose a question to preview a response grounded in the visible resume facts.</p></div>
                <span className="sp-amb-status">STATIC MOCKUP · NOT AI</span>
              </div>
              <div className="sp-question-grid" aria-label="Recruiter starter questions">
                {starterQuestions.map((item, index) => <button type="button" className="sp-question" key={item.question} aria-pressed={activeQuestion === index} onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}>{item.question}<Arrow /></button>)}
              </div>
              {activeAnswer && <div className="sp-answer" aria-live="polite">{activeAnswer.answer}<span className="sp-answer-source">SOURCE: {activeAnswer.source} · <a href={activeAnswer.href}>Jump to evidence</a></span></div>}
              <p className="sp-disclaimer">This preview is not a functioning model. Answers are fixed summaries anchored to sections on this page; unsupported claims are not inferred.</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="sp-footer">
        <div className="sp-shell sp-footer-inner">
          <div><h2 className="sp-footer-title">Let’s talk data systems.</h2><p className="sp-footer-copy">Dipisha Shivangi · Data Engineer / Cloud Data Engineer</p></div>
          <div className="sp-footer-links">
            <a href="mailto:shivangidipisha@gmail.com">Email Dipisha <Arrow diagonal /></a>
            <a href="https://linkedin.com/in/dipisha" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
            <a href="https://github.com/dipisha-21" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
          </div>
        </div>
      </footer>
      {resumeNotice && <div className="sp-notice" role="status">Resume download is shown as a mockup action. Source PDF is not attached here. <button type="button" aria-label="Dismiss message" onClick={() => setResumeNotice(false)} style={{ background: "none", color: "inherit", border: 0, marginLeft: 9, cursor: "pointer" }}>×</button></div>}
    </div>
  );
}