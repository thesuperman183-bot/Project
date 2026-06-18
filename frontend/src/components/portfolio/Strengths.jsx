import { Compass, Sparkles, Leaf } from "lucide-react";

const STRENGTHS = [
  {
    icon: Compass,
    title: "Curiosity",
    body: "Constantly exploring new ideas, technologies, and scientific concepts.",
  },
  {
    icon: Sparkles,
    title: "Self-Belief",
    body: "Confidence to pursue ambitious goals and continue learning despite challenges.",
  },
  {
    icon: Leaf,
    title: "Mindfulness",
    body: "Focused, disciplined, and thoughtful approach to learning and decision-making.",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" data-testid="strengths-section" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p
              className="font-display uppercase tracking-[0.32em] text-xs mb-4"
              style={{ color: "var(--accent)" }}
            >
              02 · Core
            </p>
            <h2
              className="font-display glow-text text-4xl sm:text-5xl font-light tracking-tight"
              data-testid="strengths-title"
            >
              What defines me
            </h2>
          </div>
          <p
            className="max-w-md text-sm sm:text-base"
            style={{ color: "var(--text-2)" }}
          >
            Three quiet principles that shape every decision and every line of
            code I write.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {STRENGTHS.map(({ icon: Icon, title, body }, i) => (
            <article
              key={title}
              data-testid={`strength-card-${title.toLowerCase()}`}
              className="glass rounded-[2rem] p-7 md:p-8 reveal group transition-transform hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl glass-soft mb-5 group-hover:scale-105 transition-transform"
                style={{ color: "var(--accent)" }}
              >
                <Icon size={20} />
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
