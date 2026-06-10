// ============================================================
// PORTFOLIO DATA — Edit to update content.
// ============================================================

export const personalInfo = {
  name: "Badhon",
  title: "Full Stack Developer",
  subtitle: "Software Engineer",
  tagline: "I build fast, reliable web products end-to-end.",
  bio: "Full stack developer focused on shipping clean, maintainable software. I work across the stack — from typed React frontends to API design, databases, and deployment — and I care about performance, DX, and details.",
  location: "Bangladesh",
  email: "badhon@example.com",
  linkedin: "https://linkedin.com/in/badhon",
  github: "https://github.com/badhon",
  resumeUrl: "/resume-badhon.pdf",
  availableForWork: true,
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Redux", "TanStack Query", "Framer Motion"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express", "NestJS", "Python", "FastAPI", "REST", "GraphQL", "WebSockets"],
  },
  {
    id: "database",
    label: "Database & Infra",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase", "Docker", "AWS", "Vercel"],
  },
  {
    id: "tools",
    label: "Tools & Practices",
    skills: ["Git", "GitHub Actions", "Jest", "Vitest", "Playwright", "Figma", "Linux", "Agile"],
  },
];

export type Project = {
  id: string;
  index: string; // e.g. "01"
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  link?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "taskflow",
    index: "01",
    title: "TaskFlow",
    tagline: "Realtime team task manager",
    description: "A Trello-style task manager with realtime drag-and-drop, role-based access, optimistic updates and offline sync. Scaled to 5k boards in a beta cohort.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WebSockets", "Tailwind"],
    role: "Solo build · design + full stack",
    year: "2025",
    featured: true,
    link: "#",
    github: "#",
  },
  {
    id: "devmetrics",
    index: "02",
    title: "DevMetrics",
    tagline: "Engineering analytics dashboard",
    description: "Pulls data from GitHub and Linear to surface DORA metrics, PR throughput, and review latency. Custom chart engine, server-streamed updates, multi-tenant auth.",
    stack: ["React", "Node.js", "GraphQL", "Redis", "TimescaleDB", "D3"],
    role: "Lead developer",
    year: "2024",
    featured: true,
    github: "#",
  },
  {
    id: "snapshop",
    index: "03",
    title: "SnapShop",
    tagline: "Headless commerce starter",
    description: "Open-source storefront kit with cart, checkout, Stripe integration and a typed product API. Generates static catalog pages on demand.",
    stack: ["Next.js", "Stripe", "Tailwind", "tRPC", "Postgres"],
    role: "Open source author",
    year: "2024",
    github: "#",
  },
  {
    id: "lumen",
    index: "04",
    title: "Lumen Chat",
    tagline: "AI-assisted customer support",
    description: "Embeddable chat widget with streaming LLM responses, conversation handoff to humans, and a Postgres-backed knowledge base.",
    stack: ["React", "FastAPI", "OpenAI", "Postgres", "Docker"],
    role: "Full stack engineer",
    year: "2024",
    link: "#",
  },
  {
    id: "pagepulse",
    index: "05",
    title: "PagePulse",
    tagline: "Lightweight web vitals monitor",
    description: "A privacy-friendly RUM tool. Edge function ingest, sub-millisecond write path, dashboards with cohort filters and alerting.",
    stack: ["TypeScript", "Cloudflare Workers", "ClickHouse", "React"],
    role: "Solo build",
    year: "2023",
    github: "#",
  },
];

export type Stat = { label: string; value: number; suffix: string; description: string };

export const stats: Stat[] = [
  { label: "Projects Shipped", value: 24, suffix: "+", description: "Production apps & open source" },
  { label: "Commits this year", value: 1200, suffix: "+", description: "Across personal & client repos" },
  { label: "Years coding", value: 4, suffix: "", description: "Self-taught, still learning" },
  { label: "Stack depth", value: 12, suffix: "+", description: "Languages, frameworks, tools" },
];

export const futureGoals = [
  {
    title: "Ship a production SaaS",
    description: "Take one of my side projects from beta to a paying, supported SaaS with proper billing, support and SLOs.",
    timeline: "2025",
  },
  {
    title: "Go deeper on systems",
    description: "Build at least two non-trivial services in Rust — message queues, edge proxies — to sharpen low-level intuition.",
    timeline: "2025–2026",
  },
  {
    title: "Open-source maintainer",
    description: "Grow one of my libraries past 1k stars and onboard external contributors with clear docs and CI.",
    timeline: "2026",
  },
  {
    title: "Mentor & write",
    description: "Publish weekly engineering notes and mentor junior devs breaking into full stack roles.",
    timeline: "Ongoing",
  },
];
