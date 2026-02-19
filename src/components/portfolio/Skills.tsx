import { useEffect, useRef, useState } from "react";
import { skillCategories } from "@/data/portfolioData";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const colorClass =
    level >= 80 ? "from-primary to-accent" :
    level >= 65 ? "from-primary to-primary-glow" :
    "from-muted-foreground to-primary";

  return (
    <div ref={ref} className="group" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">{level}%</span>
          <div
            className={`text-xs px-2 py-0.5 rounded-full ${
              level >= 80 ? "bg-primary/20 text-primary" :
              level >= 65 ? "bg-primary/10 text-primary/80" :
              "bg-muted text-muted-foreground"
            }`}
          >
            {level >= 80 ? "Advanced" : level >= 65 ? "Proficient" : "Learning"}
          </div>
        </div>
      </div>
      <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colorClass} transition-all duration-1000 ease-out`}
          style={{
            width: animated ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
            boxShadow: animated ? `0 0 8px hsl(210 100% 56% / 0.4)` : "none",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("it-support");

  const activeCategory = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="py-24 relative">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-3 block">01. Skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A growing set of hands-on skills — always learning, always improving.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-gradient-primary text-primary-foreground glow-primary"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted/70 border border-border/50"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">{activeCategory.icon}</span>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {activeCategory.label}
            </h3>
            <span className="ml-auto text-xs font-mono text-muted-foreground">
              {activeCategory.skills.length} skills
            </span>
          </div>
          <div className="grid gap-5">
            {activeCategory.skills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 80} />
            ))}
          </div>
          {/* Last updated */}
          <div className="mt-6 pt-6 border-t border-border/40 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Last updated: {activeCategory.skills[0].lastUpdated || "2025"}
            </span>
            <span className="text-xs font-mono text-accent">
              Avg proficiency: {Math.round(activeCategory.skills.reduce((a, s) => a + s.level, 0) / activeCategory.skills.length)}%
            </span>
          </div>
        </div>

        {/* Tech badges */}
        <div className="mt-10 text-center">
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">Also familiar with</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Python (basics)", "Bash scripting", "Git", "VirtualBox", "VMware", "Ubuntu", "pfSense", "GNS3"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-muted/40 border border-border/50 text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
