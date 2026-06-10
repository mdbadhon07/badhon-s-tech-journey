import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const phrases = [
  "Full Stack Developer",
  "Software Engineer",
  "React + Node enjoyer",
  "Shipping useful things",
];

export default function Hero() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const p = phrases[i];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text.length < p.length) t = setTimeout(() => setText(p.slice(0, text.length + 1)), 70);
    else if (!del && text.length === p.length) t = setTimeout(() => setDel(true), 1800);
    else if (del && text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 35);
    else { setDel(false); setI((i + 1) % phrases.length); }
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative z-10 container max-w-5xl mx-auto px-6 py-32">
        {/* Status line */}
        {personalInfo.availableForWork && (
          <div className="flex items-center gap-2 mb-8 font-mono text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>status: <span className="text-primary">available for work</span></span>
          </div>
        )}

        {/* Greeting */}
        <p className="font-mono text-sm text-accent mb-4">$ whoami</p>

        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
          <span className="text-foreground">{personalInfo.name}.</span>
        </h1>

        {/* Typing role */}
        <div className="flex items-center gap-2 mb-8 font-mono text-lg md:text-xl">
          <span className="text-accent">→</span>
          <span className="text-foreground">{text}</span>
          <span className="w-2 h-5 bg-primary cursor-blink" />
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl mb-12 leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-6 mb-16">
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors glow-primary"
          >
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-mono text-sm text-foreground hover:text-primary transition-colors border-b border-border hover:border-primary pb-0.5"
          >
            get in touch →
          </button>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6 font-mono text-sm text-muted-foreground">
          {[
            { icon: Github, href: personalInfo.github, label: "github" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "linkedin" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
