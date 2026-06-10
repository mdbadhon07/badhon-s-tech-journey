import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/portfolioData";

function Counter({ value }: { value: number }) {
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const inc = value / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur += inc;
      if (cur >= value) { setN(value); clearInterval(id); }
      else setN(Math.floor(cur));
    }, 1800 / steps);
    return () => clearInterval(id);
  }, [started, value]);

  return <span ref={ref}>{n}</span>;
}

export default function Stats() {
  return (
    <section id="stats" className="py-32 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-sm text-accent">03.</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">By the numbers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border border border-border rounded-sm">
          {stats.map((s) => (
            <div key={s.label} className="p-8">
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter value={s.value} />{s.suffix}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">{s.label}</div>
              <div className="font-mono text-xs text-muted-foreground">{s.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
