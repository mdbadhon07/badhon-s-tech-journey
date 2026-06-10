import { skillCategories } from "@/data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-sm text-accent">02.</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            The stack I work in
          </h2>
        </div>

        <div className="space-y-12">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="grid md:grid-cols-[200px_1fr] gap-6 pb-12 border-b border-border last:border-0">
              <div>
                <p className="font-mono text-xs text-muted-foreground mb-1">// {cat.id}</p>
                <h3 className="font-display text-xl font-semibold text-foreground">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-sm px-3 py-1.5 text-muted-foreground border border-border hover:text-accent hover:border-accent transition-colors cursor-default rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
