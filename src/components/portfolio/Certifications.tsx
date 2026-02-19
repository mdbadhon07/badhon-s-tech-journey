import { certifications } from "@/data/portfolioData";

const statusConfig = {
  earned: {
    label: "Earned",
    class: "bg-primary/15 text-primary border-primary/30",
    dot: "bg-primary",
  },
  "in-progress": {
    label: "In Progress",
    class: "bg-yellow-400/15 text-yellow-400 border-yellow-400/30",
    dot: "bg-yellow-400",
  },
  planned: {
    label: "Planned",
    class: "bg-muted-foreground/15 text-muted-foreground border-muted-foreground/30",
    dot: "bg-muted-foreground",
  },
};

export default function Certifications() {
  const earned = certifications.filter((c) => c.status === "earned");
  const inProgress = certifications.filter((c) => c.status === "in-progress");
  const planned = certifications.filter((c) => c.status === "planned");

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-3 block">03. Certifications</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Credentials earned, actively pursuing, and on the roadmap ahead.
          </p>
        </div>

        {/* Progress summary */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { label: "Earned", count: earned.length, color: "text-primary", bg: "bg-primary/10 border-primary/30" },
            { label: "In Progress", count: inProgress.length, color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/30" },
            { label: "Planned", count: planned.length, color: "text-muted-foreground", bg: "bg-muted/30 border-border/50" },
          ].map((item) => (
            <div key={item.label} className={`rounded-xl border p-4 text-center ${item.bg}`}>
              <div className={`font-display text-3xl font-bold ${item.color}`}>{item.count}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          <div className="space-y-6">
            {certifications.map((cert, i) => {
              const status = statusConfig[cert.status];
              return (
                <div
                  key={cert.id}
                  className="relative flex gap-6 group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border transition-all duration-200 group-hover:scale-110 ${
                        cert.status === "earned"
                          ? "bg-primary/15 border-primary/40 glow-primary"
                          : cert.status === "in-progress"
                          ? "bg-yellow-400/10 border-yellow-400/30"
                          : "bg-muted/30 border-border/50"
                      }`}
                    >
                      {cert.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="glass-card rounded-xl p-5 flex-1 group-hover:border-primary/30 transition-all duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <span className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${status.class}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                        {status.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="font-medium">{cert.issuer}</span>
                      <span>·</span>
                      <span className="font-mono text-xs">{cert.date}</span>
                    </div>
                    {cert.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
