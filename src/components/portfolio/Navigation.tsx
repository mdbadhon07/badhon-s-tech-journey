import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#stats", label: "Stats" },
  { href: "#resume", label: "About" },
  { href: "#goals", label: "Goals" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? "bg-card/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-baseline gap-1 font-mono text-sm">
          <span className="text-primary">~/</span>
          <span className="text-foreground font-semibold">{personalInfo.name.toLowerCase()}</span>
          <span className="text-primary cursor-blink">_</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className={`px-3 py-1.5 text-sm font-mono transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <span className="text-accent">·</span> {l.label}
              </button>
            );
          })}
          <a
            href={personalInfo.resumeUrl}
            className="ml-3 px-4 py-1.5 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors glow-primary rounded"
          >
            Resume
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="container mx-auto px-6 py-3 flex flex-col">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => go(l.href)} className="text-left py-2 font-mono text-sm text-muted-foreground hover:text-primary">
                <span className="text-accent">·</span> {l.label}
              </button>
            ))}
            <a href={personalInfo.resumeUrl} className="mt-2 py-2 font-mono text-sm text-primary">→ Resume</a>
          </div>
        </div>
      )}
    </nav>
  );
}
