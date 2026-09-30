export type Project = {
  id: string;
  number: string;
  title: string;
  type: string;
  problem: string;
  contribution: string;
  tools: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    id: "etl",
    number: "01",
    title: "Distributed ETL for analytics",
    type: "Industry experience · Celebal Technologies",
    problem: "Analytics workflows across more than one million records needed lower latency and faster reporting.",
    contribution: "Engineered ETL workflows and supported reporting improvements across the analytics process.",
    tools: ["Apache Spark", "Airflow", "Python", "SQL", "Power BI"],
    outcome: "30% lower analytics workflow latency; 40% faster reporting turnaround.",
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

export const navItems = [
  ["Proof map", "#match"],
  ["Selected work", "#work"],
  ["Experience", "#experience"],
  ["Toolkit", "#toolkit"],
  ["Education", "#education"],
] as const;

export const skillGroups = [
  { name: "Distributed data & orchestration", skills: ["Spark", "Airflow", "Python", "SQL"], primary: true },
  { name: "Cloud & warehousing", skills: ["GCP", "BigQuery", "Looker"] },
  { name: "Databases & analytics", skills: ["Oracle PL/SQL", "Power BI", "DAX"] },
  { name: "Reliability & delivery", skills: ["Docker", "Pytest", "CI/CD", "Bash"] },
];

export const publicResume = `${import.meta.env.BASE_URL}resume-dipisha-shivangi-public.pdf`;