import { useEffect, useRef, useState } from "react";
import { Code2, Sigma, BrainCircuit, Atom } from "lucide-react";

const GROUPS = [
  {
    icon: Code2,
    title: "Programming",
    items: [
      { name: "Python", pct: 45, level: "Intermediate" },
      { name: "Java", pct: 25, level: "Learning" },
      { name: "C++", pct: 25, level: "Learning" },
    ],
  },
  {
    icon: Sigma,
    title: "Mathematics",
    items: [
      { name: "Linear Algebra", pct: 20, level: "Learning" },
      { name: "Calculus", pct: 20, level: "Learning" },
    ],
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    hideNumber: true,
    items: [
      { name: "Machine Learning", pct: 20, level: "Learning" },
      { name: "AI Fundamentals", pct: 20, level: "Learning" },
    ],
  },
  {
    icon: Atom,
    title: "Quantum Technologies",
    hideNumber: true,
    items: [
      { name: "Qiskit", pct: 20, level: "Learning" },
      { name: "Quantum Computing Fundamentals", pct: 20, level: "Learning" },
      { name: "Quantum Physics", pct: 20, level: "Learning" },
    ],
  },
];

function Bar({ name, pct, level, animate, hideNumber }) {
  return (
    <li className="space-y-2" data-testid={`skill-${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
          {name}
        </span>
        <span
          className="text-[11px] tracking-wider uppercase"
          style={{ color: "var(--text-2)" }}
        >
          {hideNumber ? level : `${level} · ${pct}%`}
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(122,158,159,0.18)" }}
      >
        <div
          className="h-full rounded-full transition-[width] duration-[1400ms] ease-out"
          style={{
            width: animate ? `${pct}%` : "0%",
            background:
              "linear-gradient(90deg, var(--accent), rgba(255,255,255,0.85))",
            boxShadow: "0 0 12px var(--glow)",
          }}
        />
      </div>
    </li>
  );
}

export default function Learning() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAnimate(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="learning"
      data-testid="learning-section"
      className="section"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <p
            className="font-display uppercase tracking-[0.32em] text-xs mb-4"
            style={{ color: "var(--accent)" }}
          >
            03 · Roadmap
          </p>
          <h2
            className="font-display glow-text text-4xl sm:text-5xl font-light tracking-tight"
            data-testid="learning-title"
          >
            Current learning journey
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--text-2)" }}
          >
            An early-stage but highly motivated learner — building strong
            foundations one chapter at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {GROUPS.map(({ icon: Icon, title, items, hideNumber }) => (
            <div
              key={title}
              className="glass rounded-[2rem] p-7 md:p-8 reveal"
              data-testid={`learning-group-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-2xl glass-soft"
                  style={{ color: "var(--accent)" }}
                >
                  <Icon size={18} />
                </div>
                <h3
                  className="font-display text-xl font-medium"
                  style={{ color: "var(--text)" }}
                >
                  {title}
                </h3>
              </div>
              <ul className="space-y-5">
                {items.map((it) => (
                  <Bar
                    key={it.name}
                    {...it}
                    animate={animate}
                    hideNumber={hideNumber}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
