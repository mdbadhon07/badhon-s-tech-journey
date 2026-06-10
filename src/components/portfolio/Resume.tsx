import { personalInfo } from "@/data/portfolioData";
import { Download, ArrowUpRight } from "lucide-react";

const education = [
  { title: "Diploma in Computer Science", org: "Polytechnic Institute, Bangladesh", year: "2022 – Present" },
  { title: "Self-directed full stack study", org: "Online (freeCodeCamp, Frontend Masters, docs)", year: "2021 – Present" },
];

const experience = [
  { title: "Freelance Full Stack Developer", org: "Independent clients", year: "2023 – Present", note: "Shipping React/Node apps end-to-end for SMBs and startups." },
  { title: "Open source contributor", org: "GitHub", year: "2022 – Present", note: "PRs to UI libraries, devtools and starter kits." },
];

export default function Resume() {
  return (
    <section id="resume" className="py-32 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-sm text-accent">04.</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">About & background</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-wider mb-6">Experience</p>
            <div className="space-y-8 border-l border-border pl-6">
              {experience.map((e) => (
                <div key={e.title} className="relative">
                  <span className="absolute -left-[27px] top-2 w-2 h-2 rounded-full bg-primary" />
                  <div className="font-mono text-xs text-muted-foreground mb-1">{e.year}</div>
                  <div className="font-semibold text-foreground">{e.title}</div>
                  <div className="text-sm text-muted-foreground">{e.org}</div>
                  <p className="text-sm text-foreground/80 mt-2">{e.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-wider mb-6">Education</p>
            <div className="space-y-8 border-l border-border pl-6">
              {education.map((e) => (
                <div key={e.title} className="relative">
                  <span className="absolute -left-[27px] top-2 w-2 h-2 rounded-full bg-accent" />
                  <div className="font-mono text-xs text-muted-foreground mb-1">{e.year}</div>
                  <div className="font-semibold text-foreground">{e.title}</div>
                  <div className="text-sm text-muted-foreground">{e.org}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-border">
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors glow-primary"
          >
            <Download className="w-4 h-4" /> Download resume (PDF)
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-primary hover:underline"
          >
            View on LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
