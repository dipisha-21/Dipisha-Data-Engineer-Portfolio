/**
 * The public, answerable fact set. Only these server-authored sentences can
 * appear in ambassador answers; the model selects IDs, never writes copy.
 */
export const evidence = [
  {
    id: "celebal-etl",
    text: "At Celebal Technologies (Data Science Intern, June–August 2024), Dipisha engineered distributed ETL across 1M+ records with Python, SQL, Apache Spark and Airflow, reducing analytics workflow latency by 30%.",
    label: "Experience · Celebal Technologies",
    href: "#experience",
  },
  {
    id: "celebal-quality",
    text: "At Celebal, she performed data transformation, validation and quality checks before reporting, and turned processed datasets into Power BI dashboards and reports, reducing reporting turnaround by 40%.",
    label: "Experience · Celebal Technologies",
    href: "#experience",
  },
  {
    id: "payroll",
    text: "Her Employee Payroll Management System uses Oracle Database, SQL and PL/SQL for 100+ employee records; stored procedures, triggers and validation controls automate payroll rules and protect data integrity.",
    label: "Selected work · Payroll",
    href: "#work",
  },
  {
    id: "sales",
    text: "The Sales Insight Dashboard analyzes 50K+ records with Power BI, DAX and SQL across 10+ business KPIs; optimized reporting logic reduced report-generation time by approximately 30%.",
    label: "Selected work · Sales Insight",
    href: "#work",
  },
  {
    id: "handshake",
    text: "At Handshake AI (AI Evaluation & Research Fellow, July 2026–present), she built reproducible Python, Bash and Docker terminal workloads, created pytest verifiers, and assessed agent reliability with pass@k and failure analysis.",
    label: "Experience · Handshake AI",
    href: "#experience",
  },
  {
    id: "mobtions",
    text: "At Mobtions (Game Developer Intern, December 2024–June 2025), she developed and optimized 18 cross-platform software products, improving performance and load times by 25% across 5K+ users.",
    label: "Experience · Mobtions",
    href: "#experience",
  },
  {
    id: "anpr",
    text: "Her Automatic Number Plate Recognition project combines Python, YOLOv8 and EasyOCR; the project reported 99.5% accuracy under its evaluation setup across 1,000+ images.",
    label: "Selected work · Number Plate Recognition",
    href: "#work",
  },
  {
    id: "cloud-skills",
    text: "Her listed cloud and data tools include Google Cloud Platform, BigQuery, Looker, Apache Spark, Apache Airflow, ETL, distributed data processing, data pipelines and data quality.",
    label: "Toolkit · Cloud & data",
    href: "#toolkit",
  },
  {
    id: "database-skills",
    text: "Her listed programming and database skills include Python, SQL, Bash, PostgreSQL, MongoDB, MySQL, Oracle Database, PL/SQL and NoSQL.",
    label: "Toolkit · Programming & databases",
    href: "#toolkit",
  },
  {
    id: "devops-skills",
    text: "Her listed DevOps and ML tools include Docker, GitHub Actions, CI/CD, Pytest, scikit-learn, LightGBM, TensorFlow, Pandas and Power BI.",
    label: "Toolkit · DevOps & ML",
    href: "#toolkit",
  },
  {
    id: "cloud-credentials",
    text: "Her Google Cloud credentials are Engineer AI Agents with ADK (2026), Predictive Data Analysis in BigQuery (2023), Data Models in Looker (2023), Store, Process & Manage Data on Google Cloud (2023), and Monitor & Manage Google Cloud Resources (2023).",
    label: "Education · Google Cloud credentials",
    href: "#education",
  },
  {
    id: "oracle-certifications",
    text: "Her listed certifications are OCI Data Science Professional, OCI Generative AI Professional, Oracle AI Cloud Database Services Professional, and Oracle Database@AWS Architect.",
    label: "Education · Certifications",
    href: "#education",
  },
  {
    id: "education",
    text: "She completed a B.Tech in Computer Science Engineering at KIIT (2021–2025) with a CGPA of 7.82/10, and higher secondary education at Army Public School, Pune (2020–2021) with 91%.",
    label: "Education",
    href: "#education",
  },
  {
    id: "contact",
    text: "For professional contact, email shivangidipisha@gmail.com; public profiles are linkedin.com/in/dipisha and github.com/dipisha-21.",
    label: "Contact",
    href: "#contact",
  },
] as const;

export const starters = [
  { question: "What makes Dipisha a fit for data engineering?", href: "#match" },
  { question: "What is her strongest measurable data impact?", href: "#experience" },
  { question: "Which projects show database and analytics skills?", href: "#work" },
  { question: "What evidence supports reliability and automation?", href: "#experience" },
] as const;