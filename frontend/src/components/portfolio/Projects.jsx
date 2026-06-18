import { Globe, BrainCircuit, Atom, FlaskConical } from "lucide-react";

const PROJECTS = [
  {
    icon: Globe,
    status: "Current",
    title: "Portfolio Website",
    body: "This very site — a minimalist, nature-inspired space to document the journey.",
  },
  {
    icon: BrainCircuit,
    status: "Upcoming",
    title: "AI Projects",
    body: "Hands-on ML experiments — from classical models to modern deep learning.",
  },
  {
    icon: Atom,
    status: "Upcoming",
    title: "Quantum Computing Projects",
    body: "Qiskit notebooks exploring superposition, entanglement, and small algorithms.",
  },
  {
    icon: FlaskConical,
    status: "Future",
    title: "Research Projects",
    body: "Independent research at the intersection of physics, mathematics, and finance.",
  },
];

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <p
            className="font-display uppercase tracking-[0.32em] text-xs mb-4"
            style={{ color: "var(--accent)" }}
          >
            07 · Work
          </p>
          <h2
            className="font-display glow-text text-4xl sm:text-5xl font-light tracking-tight"
            data-testid="projects-title"
          >
            Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.map(({ icon: Icon, status, title, body }, i) => (
            <article
              key={title}
              data-testid={`project-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
              className="glass rounded-[2rem] p-7 md:p-8 reveal group transition-transform hover:-translate-y-1"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl glass-soft"
                  style={{ color: "var(--accent)" }}
                >
                  <Icon size={20} />
                </div>
                <span
                  className="text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full glass-soft"
                  style={{ color: "var(--text-2)" }}
                >
                  {status}
                </span>
              </div>
              <h3
                className="font-display text-2xl font-medium mb-2"
                style={{ color: "var(--text)" }}
              >
                {title}
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--text-2)" }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
