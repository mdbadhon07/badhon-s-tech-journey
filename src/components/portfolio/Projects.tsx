import { useState } from "react";
import { projects, type Project } from "@/data/portfolioData";
import { ExternalLink, Star, Calendar, Tag } from "lucide-react";

const allCategories = ["all", "networking", "it-support", "cybersecurity", "design"];

const categoryColors: Record<string, string> = {
  networking: "bg-primary/15 text-primary border-primary/30",
  "it-support": "bg-accent/15 text-accent border-accent/30",
  cybersecurity: "bg-destructive/15 text-destructive border-destructive/30",
  design: "bg-muted/40 text-muted-foreground border-border/40",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {

  return (
    <div
      className="glass-card rounded-2xl p-6 flex flex-col group hover:border-primary/40 hover:shadow-glow transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="flex items-center gap-1 text-xs text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-2 py-0.5 rounded-full">
              <Star className="w-3 h-3 fill-yellow-400" /> Featured
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          {project.date}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="mb-4 space-y-1">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
            <span className="text-primary mt-0.5">▸</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tools */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="px-2.5 py-1 rounded-lg bg-muted/50 border border-border/40 text-xs text-muted-foreground font-mono"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Categories & Link */}
      <div className="flex items-center justify-between pt-4 border-t border-border/40">
        <div className="flex flex-wrap gap-1.5">
          {project.category.map((cat) => (
            <span
              key={cat}
              className={`px-2 py-0.5 rounded-full border text-xs capitalize ${categoryColors[cat] || "bg-muted/40 text-muted-foreground border-border/40"}`}
            >
              <Tag className="w-2.5 h-2.5 inline mr-1" />
              {cat}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesFilter = activeFilter === "all" || p.category.includes(activeFilter);
    const matchesSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative bg-muted/10">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-3 block">02. Projects</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hands-On <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real labs, real problems, real solutions. Every project sharpens my skills.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, tool, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-xl bg-muted/40 border border-border/60 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:bg-muted/60 transition-all"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">🔍</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 capitalize ${
                activeFilter === cat
                  ? "bg-gradient-primary text-primary-foreground glow-primary"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted/70 border border-border/50"
              }`}
            >
              {cat} {cat === "all" ? `(${projects.length})` : `(${projects.filter((p) => p.category.includes(cat)).length})`}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-4xl mb-4">🔍</p>
            <p>No projects found for "{searchQuery}"</p>
          </div>
        )}
      </div>
    </section>
  );
}
