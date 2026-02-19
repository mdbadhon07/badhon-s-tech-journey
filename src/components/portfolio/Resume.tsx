import { personalInfo } from "@/data/portfolioData";
import { Download, User, GraduationCap, Briefcase } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-3 block">05. Resume</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Background</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A snapshot of my education, experience, and where I'm headed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-5">
              {[
                {
                  degree: "Diploma in Computer Science & Technology",
                  school: "Polytechnic Institute, Bangladesh",
                  year: "2022 – Present",
                  highlight: "Focus: Networking, OS, Database",
                },
                {
                  degree: "SSC (Science)",
                  school: "Secondary School",
                  year: "2021",
                  highlight: "GPA: 4.5 / 5.0",
                },
              ].map((edu) => (
                <div key={edu.degree} className="relative pl-5 border-l border-primary/30">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary/60 border-2 border-background" />
                  <div className="text-xs font-mono text-accent mb-1">{edu.year}</div>
                  <div className="font-semibold text-foreground text-sm">{edu.degree}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{edu.school}</div>
                  <div className="text-muted-foreground text-xs mt-1 italic">{edu.highlight}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience / About */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Experience</h3>
            </div>
            <div className="space-y-5">
              {[
                {
                  role: "Freelance IT Support",
                  org: "Local Clients, Bangladesh",
                  year: "2023 – Present",
                  highlight: "Hardware repairs, network setup, OS installs",
                },
                {
                  role: "Lab Intern (Self-directed)",
                  org: "Home Lab & Online Platforms",
                  year: "2023 – Present",
                  highlight: "Packet Tracer, TryHackMe, VirtualBox labs",
                },
              ].map((exp) => (
                <div key={exp.role} className="relative pl-5 border-l border-accent/30">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent/60 border-2 border-background" />
                  <div className="text-xs font-mono text-accent mb-1">{exp.year}</div>
                  <div className="font-semibold text-foreground text-sm">{exp.role}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{exp.org}</div>
                  <div className="text-muted-foreground text-xs mt-1 italic">{exp.highlight}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile summary */}
          <div className="glass-card rounded-2xl p-6 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-muted/60 border border-border/50 flex items-center justify-center">
                <User className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Professional Summary</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Motivated IT student with hands-on experience in network design, IT support, and cybersecurity fundamentals.
              Actively preparing for CCNA certification and building a strong foundation in ethical hacking.
              Known for fast problem-solving, a love for documentation, and a hunger to learn.
              Open to internships, entry-level IT support, or junior network roles.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 glow-primary"
              >
                <Download className="w-4 h-4" />
                Download Full Resume (PDF)
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/60 bg-muted/30 text-foreground font-semibold text-sm hover:border-primary/50 hover:bg-muted/60 transition-all duration-200"
              >
                View LinkedIn Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
