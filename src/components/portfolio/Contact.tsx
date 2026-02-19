import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setError("Please enter your name (at least 2 characters).");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setError("Please enter a message (at least 10 characters).");
      return;
    }
    setError("");
    // Simulate submission (replace with real email service integration)
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-muted/10">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-accent tracking-wider uppercase mb-3 block">07. Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Recruiters, collaborators, or fellow tech enthusiasts — I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Get in touch
            </h3>
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: MapPin, label: "Location", value: personalInfo.location, href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-foreground">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Find me online</p>
              <div className="flex gap-3">
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
            </div>

            {/* Availability badge */}
            {personalInfo.availableForWork && (
              <div className="glass-card rounded-xl p-4 border-primary/30">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary">Open to Opportunities</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Actively looking for internships, entry-level IT support, or junior network engineer roles.
                </p>
              </div>
            )}
          </div>

          {/* Contact form */}
          <div className="glass-card rounded-2xl p-6">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                  className="text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Name *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border/60 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:bg-muted/60 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Email *</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border/60 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:bg-muted/60 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    maxLength={200}
                    value={formData.subject}
                    onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
                    placeholder="What's this about?"
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border/60 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:bg-muted/60 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Message *</label>
                  <textarea
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Tell me about the opportunity, project, or just say hello!"
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border/60 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:bg-muted/60 transition-all resize-none"
                  />
                  <div className="text-right text-xs text-muted-foreground mt-1">
                    {formData.message.length}/1000
                  </div>
                </div>
                {error && (
                  <div className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-2.5">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 hover:scale-[1.02] transition-all duration-200 glow-primary"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
