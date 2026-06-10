import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-border bg-card">
      <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm">
          <span className="text-primary">~/</span>
          <span className="text-foreground">{personalInfo.name.toLowerCase()}</span>
          <span className="text-muted-foreground"> · full stack developer</span>
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors rounded">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          © {year} · built with care
        </p>
      </div>
    </footer>
  );
}
