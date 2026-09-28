export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  accent: string;
  year: string;
};

export const profile = {
  name: "Abdulmuiz Ademola Abdulkabir",
  sobriquet: "Ecstacee",
  role: "Software Engineer · Fluid Developer",
  location: "Lagos, Nigeria",
  email: "abdulmuizademola9@gmail.com",
  tagline: "Building at the intersection of software, blockchain, and real-world problems.",
  about: [
    "I’m Abdulmuiz Ademola Abdulkabir (Ecstacee), a Computer Science student and software engineer interested in frontend development, blockchain, AI, and building real-world products.",
    "I’ve worked on projects across software infrastructure, payments, AI-agent systems, and consumer applications, while also developing strong experience in leadership, teamwork, and project management.",
    "I enjoy turning ideas into functional, useful products and continuously exploring technologies that can solve meaningful problems.",
  ],
};

export const projects: Project[] = [
  {
    name: "VetoLayer",
    eyebrow: "AI Agent Safety",
    description:
      "A reasoning and approval layer for high-impact AI-agent actions, combining deterministic policy, contextual reasoning, human review, and auditable decision receipts.",
    tags: ["Next.js", "TypeScript", "SERV", "Supabase", "AI Agents"],
    repo: "https://github.com/EcstaceeLOR/VetoLayer",
    live: "https://vetolayer.vercel.app",
    accent: "violet",
    year: "2026",
  },
  {
    name: "Synesis",
    eyebrow: "KeeperHub Hackathon",
    description:
      "A safety and coordination layer for agent-controlled onchain value. Independent agents provide intelligence, deterministic policy authorizes action, and KeeperHub handles bounded execution.",
    tags: ["Next.js", "Fastify", "PostgreSQL", "Olas", "KeeperHub"],
    repo: "https://github.com/EcstaceeLOR/Synesis",
    live: "https://synesis-web.vercel.app",
    accent: "cyan",
    year: "2026",
  },
  {
    name: "ProofKey",
    eyebrow: "Cross-chain Machine Access",
    description:
      "Trustless pay-per-use access for real-world machines, proving a source-chain payment before issuing an expiring access credential on another network.",
    tags: ["TypeScript", "Solidity", "Creditcoin", "Attestcoin", "Hardhat"],
    repo: "https://github.com/EcstaceeLOR/ProofKey",
    live: "https://proofkey.vercel.app",
    accent: "orange",
    year: "2026",
  },
  {
    name: "EventRail",
    eyebrow: "Somnia · DreamDEX",
    description:
      "A non-custodial integration and trading layer for DreamDEX Event Contracts with transaction planning, market rollover, portfolio tooling, a public API, and React SDK.",
    tags: ["Next.js", "TypeScript", "DreamDEX", "Somnia", "SDK"],
    repo: "https://github.com/EcstaceeLOR/EventRail",
    live: "https://eventrail.vercel.app",
    accent: "pink",
    year: "2026",
  },
  {
    name: "Canalis",
    eyebrow: "Agentic Payments",
    description:
      "Governed payment orchestration for autonomous agents on Solana, turning approved task budgets into bounded, attributable, and recoverable machine-service payments.",
    tags: ["Next.js", "TypeScript", "Solana", "PostgreSQL", "Payments"],
    repo: "https://github.com/EcstaceeLOR/Canalis",
    live: "https://canalis-sigma.vercel.app",
    accent: "green",
    year: "2026",
  },
  {
    name: "Signum",
    eyebrow: "Chain Jam Vol. 1",
    description:
      "An interactive signal-matching game experiment focused on verifiable randomness, deterministic settlement logic, and a polished audiovisual experience.",
    tags: ["React", "TypeScript", "Solidity", "VRF", "Product Design"],
    accent: "amber",
    year: "2026",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Solidity", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "React Native", "Responsive Web Development"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Fastify", "REST APIs", "SDK Development"],
  },
  {
    category: "Data",
    items: ["Supabase", "PostgreSQL"],
  },
  {
    category: "AI & Agent Systems",
    items: ["AI Agent Integrations", "Agentic Workflows", "LLM/API Integration", "AI-assisted Decision Systems"],
  },
  {
    category: "Developer & Deployment",
    items: ["Git", "GitHub", "GitHub Actions", "Vercel", "Docker", "CI/CD"],
  },
  {
    category: "Engineering",
    items: [
      "Full-stack Development",
      "Smart Contract Development",
      "API Integration",
      "Software Testing",
      "Debugging",
      "System Design",
      "Product Development",
      "Responsive UI Development",
    ],
  },
];

export const experience = [
  {
    period: "May 4, 2026 — Oct 16, 2026",
    role: "Intern",
    company: "Web3Bridge",
    description:
      "Hands-on software and blockchain engineering training spanning frontend development, JavaScript, Solidity, smart contracts, testnet deployments, developer tooling, and product building.",
  },
  {
    period: "Oct 2021 — Dec 2024",
    role: "Data & Inventory Management Assistant",
    company: "K.B Ariwoola Productions",
    description:
      "Digitized inventory records, designed and managed stock-tracking spreadsheets, and maintained product availability records.",
  },
];

export const achievements = [
  {
    title: "1st Place",
    event: "Zcash Developers Sprint / Mini Build Challenge",
    project: "Zecceipt",
    date: "Aug 30, 2026",
    note: "Built a Zcash testnet invoice-verification product with the team.",
  },
  {
    title: "3rd Place",
    event: "EAG × HSK Hackathon · Stablecoin Track",
    project: "ReserveRail",
    date: "Aug 27, 2026",
    note: "A stablecoin infrastructure project built and demoed with a three-person team.",
  },
  {
    title: "Executive of the Year",
    event: "NAICTS Glamour Awards",
    project: "Leadership Award",
    date: "2025",
    note: "Recognition for student leadership and executive impact.",
  },
];

export const hackathons = [
  { project: "VetoLayer", event: "SERV Hackathon", track: "Open Track", year: "2026" },
  { project: "Synesis", event: "KeeperHub Hackathon", track: "Agent-controlled value", year: "2026" },
  { project: "EventRail", event: "Somnia · DreamDEX Hackathon", track: "Event Contracts", year: "2026" },
  { project: "ProofKey", event: "Creditcoin Hackathon", track: "Cross-chain access", year: "2026" },
  { project: "Canalis", event: "Colosseum Crypto World’s Fair", track: "Solana Track", year: "2026" },
  { project: "Signum", event: "Chain Jam Vol. 1", track: "Interactive product", year: "2026" },
];

export const leadership = [
  {
    period: "2025 — 2026",
    role: "Chief Press Secretary",
    org: "FUTMINNA Senate Presidential Cabinet",
    detail: "Communications, public information, and student-facing initiatives, including a mock test reaching 650+ fresh students.",
  },
  {
    period: "2024 — 2025",
    role: "General Secretary",
    org: "NAICTS, FUTMINNA Chapter",
    detail: "Supported a 650+ student orientation, organized CodeWave 2025, and helped run Academic Reboot 1.0.",
  },
  {
    period: "2023 — 2024",
    role: "Assistant General Secretary",
    org: "NAICTS, FUTMINNA Chapter",
    detail: "Organized tutorials and orientation programs reaching 500+ ICT students.",
  },
  {
    period: "Jan 2026",
    role: "Team Lead",
    org: "The Heirs Insurance Hackathon",
    detail: "Led a student team proposing F-CAPP, an AI-driven platform for automating insurance claims processing.",
  },
];

export const education = {
  degree: "B.Tech. Computer Science",
  school: "Federal University of Technology, Minna",
  period: "2022 — 2027",
  status: "In view · Expected graduation 2027",
};

export const socials = [
  { label: "GitHub", handle: "@EcstaceeLOR", href: "https://github.com/EcstaceeLOR", icon: "github" },
  { label: "X", handle: "@dems_thepenlord", href: "https://x.com/dems_thepenlord", icon: "x" },
  { label: "LinkedIn", handle: "Abdulmuiz Abdulkabir", href: "https://www.linkedin.com/in/abdulmuiz-abdulkabir-9778393b4", icon: "linkedin" },
  { label: "Instagram", handle: "@bigdemsgram", href: "https://www.instagram.com/bigdemsgram", icon: "instagram" },
  { label: "YouTube", handle: "@ecstaceelor", href: "https://youtube.com/@ecstaceelor", icon: "youtube" },
  { label: "TikTok", handle: "@0xdemola", href: "https://www.tiktok.com/@0xdemola", icon: "music" },
  { label: "Telegram", handle: "@EcstaceeLORD", href: "https://t.me/EcstaceeLORD", icon: "send" },
  { label: "Discord", handle: "@ecstacee_of_mx", href: "#discord", icon: "message" },
  { label: "Medium", handle: "@abdulmuizademola9", href: "https://medium.com/@abdulmuizademola9", icon: "book" },
  { label: "Email", handle: "abdulmuizademola9@gmail.com", href: "mailto:abdulmuizademola9@gmail.com", icon: "mail" },
  { label: "Resume", handle: "View / Download", href: "/resume/Abdulmuiz-Ademola-Abdulkabir-Resume.pdf", icon: "file" },
];
