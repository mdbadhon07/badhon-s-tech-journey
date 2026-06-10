import { useState } from "react";
import { projects, type Project } from "@/data/portfolioData";
import { ArrowUpRight, Github, Star } from "lucide-react";

function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(project.featured ?? false);

  return (
    <div
      className="group border-b border-border last:border-0 transition-colors hover:bg-card/40"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => !project.featured && setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full grid grid-cols-[auto_1fr_auto] md:grid-cols-[60px_1fr_120px_auto] gap-4 md:gap-6 items-baseline py-6 px-2 text-left"
      >
        <span className="font-mono text-sm text-muted-foreground">{project.index}</span>
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                <Star className="w-3 h-3 fill-accent" /> featured
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-sm mt-1">{project.tagline}</p>
        </div>
        <span className="hidden md:block font-mono text-xs text-muted-foreground text-right">{project.year}</span>
        <ArrowUpRight className={`w-5 h-5 text-muted-foreground transition-all ${open ? "rotate-0 text-primary" : "-rotate-45"}`} />
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="grid md:grid-cols-[60px_1fr] gap-6 pb-8 px-2">
          <div className="hidden md:block" />
          <div className="space-y-4 max-w-2xl">
            <p className="text-foreground/90 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span key={t} className="font-mono text-xs px-2 py-0.5 text-accent border border-accent/40 rounded">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs">
              <span className="text-muted-foreground">{project.role}</span>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                  Live <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                  <Github className="w-3 h-3" /> Source
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const filtered = projects.filter((p) =>
    !query ||
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.stack.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
    p.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section id="work" className="py-32 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm text-accent">01.</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Selected work
          </h2>
        </div>
        <p className="font-mono text-sm text-muted-foreground mb-12 ml-12">
          // {projects.length} projects · click any row to expand
        </p>

        <div className="mb-2 ml-12 max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="grep projects..."
            className="w-full font-mono text-sm bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground py-2 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="mt-8 border-t border-border">
          {filtered.map((p) => (
            <ProjectRow key={p.id} project={p} />
          ))}
          {filtered.length === 0 && (
            <div className="font-mono text-sm text-muted-foreground py-8 text-center">
              no matches for "{query}"
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
