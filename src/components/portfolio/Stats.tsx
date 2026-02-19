import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/portfolioData";

function CounterCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, stat.value]);

  return (
    <div
      ref={ref}
      className="glass-card rounded-2xl p-6 text-center group hover:border-primary/40 hover:shadow-glow transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
        {stat.icon}
      </div>
      <div className="font-display text-4xl font-bold gradient-text mb-1">
        {count}{stat.suffix}
      </div>
      <div className="font-semibold text-foreground text-sm mb-1">{stat.label}</div>
      <div className="text-xs text-muted-foreground">{stat.description}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-24 relative bg-muted/10">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-3 block">04. Stats</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            By the <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dedication measured in hours, networks, and problems solved.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <CounterCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Growth note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            📈 <span className="text-foreground font-medium">Growing every week</span> — new labs, new skills, new wins.
          </p>
        </div>
      </div>
    </section>
  );
}
