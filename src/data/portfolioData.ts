// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio!
// ============================================================

export const personalInfo = {
  name: "Badhon",
  title: "IT Support & Network Engineer",
  subtitle: "Future Cybersecurity Specialist",
  tagline: "Building secure networks, one packet at a time.",
  bio: "Passionate about solving real-world tech problems — from diagnosing tricky network faults to hardening systems against threats. I'm hands-on, always learning, and ready to bring serious value to any IT team.",
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
  icon: string;
  color: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: number; // 0-100
  lastUpdated?: string;
};

export const skillCategories: SkillCategory[] = [
  {
    id: "it-support",
    label: "IT Support",
    icon: "🖥️",
    color: "primary",
    skills: [
      { name: "Hardware Troubleshooting", level: 85, lastUpdated: "2025-01" },
      { name: "OS Management (Windows/Linux)", level: 80, lastUpdated: "2025-01" },
      { name: "Helpdesk & Ticketing Systems", level: 75, lastUpdated: "2024-12" },
      { name: "Active Directory", level: 70, lastUpdated: "2024-11" },
      { name: "Remote Desktop Support", level: 80, lastUpdated: "2025-01" },
    ],
  },
  {
    id: "networking",
    label: "Networking",
    icon: "🌐",
    color: "accent",
    skills: [
      { name: "Cisco Packet Tracer", level: 82, lastUpdated: "2025-01" },
      { name: "Network Design & Topology", level: 75, lastUpdated: "2025-01" },
      { name: "CCNA Concepts (Routing & Switching)", level: 70, lastUpdated: "2024-12" },
      { name: "TCP/IP & Subnetting", level: 78, lastUpdated: "2025-01" },
      { name: "VLANs & Inter-VLAN Routing", level: 65, lastUpdated: "2024-12" },
      { name: "Network Monitoring (Wireshark)", level: 60, lastUpdated: "2024-11" },
    ],
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: "🔐",
    color: "secondary",
    skills: [
      { name: "Firewall Configuration", level: 65, lastUpdated: "2024-12" },
      { name: "Network Security Fundamentals", level: 70, lastUpdated: "2025-01" },
      { name: "Ethical Hacking Labs (TryHackMe)", level: 55, lastUpdated: "2024-11" },
      { name: "Vulnerability Assessment", level: 50, lastUpdated: "2024-11" },
      { name: "Linux Security", level: 60, lastUpdated: "2024-12" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  category: string[];
  highlights: string[];
  link?: string;
  featured?: boolean;
  date: string;
};

export const projects: Project[] = [
  {
    id: "enterprise-network",
    title: "Enterprise Network Design",
    description: "Designed and simulated a full enterprise network with VLANs, inter-VLAN routing, DHCP, and NAT for a fictional 3-floor office building. Included redundancy via STP and documented the full topology.",
    tools: ["Cisco Packet Tracer", "VLAN", "OSPF", "DHCP", "NAT"],
    category: ["networking", "design"],
    highlights: ["3-floor topology with 50+ devices", "Full VLAN segmentation", "Redundant links via STP"],
    featured: true,
    date: "2025-01",
  },
  {
    id: "helpdesk-lab",
    title: "IT Helpdesk Lab Setup",
    description: "Set up a local virtual helpdesk lab using VirtualBox with Windows Server 2022 and Active Directory. Created OUs, GPOs, user accounts, and simulated real-world support tickets.",
    tools: ["VirtualBox", "Windows Server 2022", "Active Directory", "GPO"],
    category: ["it-support"],
    highlights: ["Active Directory with 20+ user accounts", "Group Policy implementation", "Simulated ticket resolution"],
    featured: true,
    date: "2024-12",
  },
  {
    id: "firewall-config",
    title: "Firewall & ACL Configuration Lab",
    description: "Configured ACLs and firewall rules on Cisco routers in Packet Tracer to restrict unauthorized access between network segments. Tested with various attack scenarios.",
    tools: ["Cisco Packet Tracer", "ACL", "Firewall Rules", "Network Security"],
    category: ["cybersecurity", "networking"],
    highlights: ["Extended and standard ACLs", "Blocked specific protocols", "Documented security policies"],
    date: "2024-12",
  },
  {
    id: "tryhackme-labs",
    title: "TryHackMe Cybersecurity Labs",
    description: "Completed multiple rooms on TryHackMe covering topics like Linux fundamentals, network scanning with Nmap, web vulnerabilities, and basic CTF challenges.",
    tools: ["TryHackMe", "Nmap", "Linux", "Burp Suite", "CTF"],
    category: ["cybersecurity"],
    highlights: ["Top 10% globally in learning streak", "Completed 20+ rooms", "Practical vulnerability analysis"],
    date: "2024-11",
  },
  {
    id: "home-network",
    title: "Home Network Optimization",
    description: "Audited and redesigned a home network — configured a proper DHCP reservation, set up a guest VLAN, enabled WPA3, and improved coverage with access point placement.",
    tools: ["Router Config", "WPA3", "VLAN", "DHCP"],
    category: ["networking", "it-support"],
    highlights: ["Reduced interference by 60%", "Isolated IoT devices on guest VLAN", "Improved security posture"],
    date: "2024-11",
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: "earned" | "in-progress" | "planned";
  description?: string;
  icon: string;
};

export const certifications: Certification[] = [
  {
    id: "ccna-progress",
    title: "CCNA (Routing & Switching)",
    issuer: "Cisco",
    date: "2025 (In Progress)",
    status: "in-progress",
    description: "Actively studying — covering switching, routing protocols, WAN, and network security.",
    icon: "🏆",
  },
  {
    id: "google-it-support",
    title: "Google IT Support Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    status: "earned",
    description: "Completed the 5-course series covering troubleshooting, networking, OS, and security.",
    icon: "🎓",
  },
  {
    id: "comptia-net-planned",
    title: "CompTIA Network+",
    issuer: "CompTIA",
    date: "2025 (Planned)",
    status: "planned",
    description: "Scheduled for Q2 2025 after CCNA completion.",
    icon: "🎯",
  },
  {
    id: "tryhackme-cert",
    title: "TryHackMe Pre-Security Path",
    issuer: "TryHackMe",
    date: "2024",
    status: "earned",
    description: "Completed the Pre-Security learning path covering cyber fundamentals.",
    icon: "🔐",
  },
  {
    id: "security-plus",
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2026 (Planned)",
    status: "planned",
    description: "Target certification for cybersecurity career path.",
    icon: "🛡️",
  },
];

export type Stat = {
  label: string;
  value: number;
  suffix: string;
  icon: string;
  description: string;
};

export const stats: Stat[] = [
  { label: "Lab Hours", value: 300, suffix: "+", icon: "⚡", description: "Hours of hands-on practice" },
  { label: "Networks Designed", value: 15, suffix: "+", icon: "🌐", description: "In Packet Tracer & real environments" },
  { label: "Tickets Resolved", value: 120, suffix: "+", icon: "🎫", description: "Support tickets handled" },
  { label: "Devices Configured", value: 50, suffix: "+", icon: "🖥️", description: "Routers, switches & servers" },
  { label: "CTF Challenges", value: 30, suffix: "+", icon: "🔐", description: "Completed on TryHackMe" },
  { label: "Courses Completed", value: 8, suffix: "", icon: "📚", description: "Online certifications & courses" },
];

export const futureGoals = [
  {
    icon: "🛡️",
    title: "Security Operations Center (SOC)",
    description: "Aiming to work as a SOC Analyst, monitoring threats, analyzing incidents, and keeping infrastructure secure 24/7.",
    timeline: "2025-2026",
  },
  {
    icon: "🔍",
    title: "Penetration Testing",
    description: "Building skills in ethical hacking to legally probe systems and help organizations find and fix vulnerabilities before attackers do.",
    timeline: "2026",
  },
  {
    icon: "☁️",
    title: "Cloud & Network Security",
    description: "Expanding into cloud security (AWS/Azure) to secure hybrid infrastructure and implement zero-trust architectures.",
    timeline: "2026-2027",
  },
  {
    icon: "🤖",
    title: "AI in Cybersecurity",
    description: "Exploring how AI/ML models detect anomalies, automate threat hunting, and improve incident response pipelines.",
    timeline: "2027+",
  },
];
