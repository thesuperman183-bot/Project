import { BookOpen, Layers, Search, Puzzle, TrendingUp } from "lucide-react";

const REASONS = [
  {
    icon: BookOpen,
    title: "Continuous Learner",
    body: "Always willing to learn, adapt, and execute.",
  },
  {
    icon: Layers,
    title: "Strong Fundamentals",
    body: "Focused on building deep understanding before specialization.",
  },
  {
    icon: Search,
    title: "Critical Thinking",
    body: "Able to analyze problems logically and explore multiple solutions.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    body: "Enjoy breaking down complex challenges into manageable steps.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    body: "Committed to long-term improvement and excellence.",
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" data-testid="why-me-section" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <p
            className="font-display uppercase tracking-[0.32em] text-xs mb-4"
            style={{ color: "var(--accent)" }}
          >
            05 · Value
          </p>
          <h2
            className="font-display glow-text text-4xl sm:text-5xl font-light tracking-tight"
            data-testid="why-me-title"
          >
            Why consider me?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              data-testid={`why-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
              className="glass rounded-[2rem] p-7 reveal transition-transform hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-2xl glass-soft mb-4"
                style={{ color: "var(--accent)" }}
              >
                <Icon size={18} />
              </div>
              <h3
                className="font-display text-xl font-medium mb-2"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
