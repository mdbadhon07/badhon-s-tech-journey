import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ChevronDown, Terminal } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const typingPhrases = [
  "IT Support & Network Engineer",
  "Future Cybersecurity Specialist",
  "CCNA Student & Lab Enthusiast",
  "Problem Solver by Nature",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = typingPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % typingPhrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 container max-w-5xl mx-auto px-4 py-32 text-center">
        {/* Status badge */}
        {personalInfo.availableForWork && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </div>
        )}

        {/* Name */}
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">Hi, I'm </span>
          <span className="gradient-text text-glow">{personalInfo.name}</span>
        </h1>

        {/* Typing animation */}
        <div
          className="h-12 flex items-center justify-center mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-1 bg-muted/30 backdrop-blur-sm border border-border/50 rounded-lg px-5 py-2.5">
            <Terminal className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="font-mono text-accent text-lg font-medium">{displayed}</span>
            <span className="w-0.5 h-5 bg-accent cursor-blink ml-0.5 flex-shrink-0" />
          </div>
        </div>

        {/* Bio */}
        <p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          {personalInfo.bio}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 glow-primary"
          >
            View My Work →
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-xl border border-border/60 bg-muted/30 text-foreground font-semibold text-sm hover:border-primary/50 hover:bg-muted/60 transition-all duration-200"
          >
            Get in Touch
          </button>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-5 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl border border-border/60 bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-float">
          <span className="text-xs font-medium tracking-wider uppercase opacity-60">Scroll</span>
          <ChevronDown className="w-4 h-4 opacity-60" />
        </div>
      </div>
    </section>
  );
}
