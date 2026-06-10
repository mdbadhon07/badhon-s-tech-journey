import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  const validEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2) return setErr("Please enter your name.");
    if (!validEmail(form.email)) return setErr("Please enter a valid email.");
    if (form.message.trim().length < 10) return setErr("Message must be at least 10 characters.");
    setErr("");
    console.log("Form:", form);
    setSent(true);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm text-accent">06.</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Let's build something</h2>
        </div>
        <p className="font-mono text-sm text-muted-foreground mb-16 ml-12">
          // open to roles, freelance and interesting collabs
        </p>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm">{personalInfo.email}</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm">{personalInfo.location}</span>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs text-accent uppercase tracking-wider mb-3">elsewhere</p>
              <div className="flex gap-4">
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
                    className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors rounded"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {personalInfo.availableForWork && (
              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-sm text-primary">available_for_work = true</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Looking for full stack roles, contract work, or product collaborations.
                </p>
              </div>
            )}
          </div>

          {sent ? (
            <div className="flex flex-col justify-center">
              <p className="font-mono text-sm text-primary mb-2">$ message sent ✓</p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Thanks for reaching out.</h3>
              <p className="text-muted-foreground mb-6">I'll reply within 24 hours.</p>
              <button onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }} className="font-mono text-sm text-primary hover:underline text-left">
                → send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6" noValidate>
              <div>
                <label className="font-mono text-xs text-muted-foreground block mb-2">name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border text-foreground py-2 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground block mb-2">email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border text-foreground py-2 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground block mb-2">message</label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border text-foreground py-2 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              {err && <p className="font-mono text-xs text-destructive">! {err}</p>}
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors glow-primary"
              >
                <Send className="w-4 h-4" /> Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
