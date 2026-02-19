import { futureGoals } from "@/data/portfolioData";

export default function FutureGoals() {
  return (
    <section id="goals" className="py-24 relative">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-3 block">06. Vision</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Where I'm <span className="gradient-text">Headed</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ambition backed by action — here's the roadmap for the next few years.
          </p>
        </div>

        {/* Roadmap */}
        <div className="grid md:grid-cols-2 gap-6">
          {futureGoals.map((goal, i) => (
            <div
              key={goal.title}
              className="glass-card rounded-2xl p-6 group hover:border-primary/40 hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-2xl flex-shrink-0 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-200 animate-float" style={{ animationDelay: `${i * 0.7}s` }}>
                  {goal.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {goal.title}
                    </h3>
                    <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full flex-shrink-0">
                      {goal.timeline}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivation quote */}
        <div className="mt-12 relative">
          <div className="glass-card rounded-2xl p-8 text-center border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-50" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">🚀</div>
              <blockquote className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                "The best security is one you built yourself — because you know every hole in it."
              </blockquote>
              <p className="text-sm text-muted-foreground">— A future cybersecurity engineer's mindset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
