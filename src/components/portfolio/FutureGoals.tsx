import { futureGoals } from "@/data/portfolioData";

export default function FutureGoals() {
  return (
    <section id="goals" className="py-32 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-sm text-accent">05.</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What's next</h2>
        </div>

        <div className="space-y-10">
          {futureGoals.map((g, i) => (
            <div key={g.title} className="grid md:grid-cols-[80px_140px_1fr] gap-4 md:gap-8 items-baseline pb-10 border-b border-border last:border-0">
              <span className="font-mono text-sm text-muted-foreground">/{String(i + 1).padStart(2, "0")}</span>
              <span className="font-mono text-xs text-accent">{g.timeline}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{g.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{g.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
