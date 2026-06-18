const STEPS = [
  {
    tag: "Present",
    title: "B.Tech CSE (AI & ML)",
    body: "Studying at UpGrad School of Technology — laying the foundation.",
  },
  {
    tag: "Next",
    title: "Deepen the Fundamentals",
    body: "Gain expertise in programming, AI, mathematics, and quantum technologies.",
  },
  {
    tag: "Then",
    title: "Industry Exposure",
    body: "Corporate experience — applying theory to real, scaled problems.",
  },
  {
    tag: "Future",
    title: "M.Tech / M.Sc. in Quantum Computing",
    body: "Specialize through formal research and rigorous study.",
  },
  {
    tag: "Long-Term",
    title: "Quantum Computing Research or Quantitative Finance",
    body: "Contribute to fundamental research or apply quant techniques to markets.",
  },
  {
    tag: "Beyond",
    title: "Lifelong Innovation",
    body: "Continue exploring research, innovation, and emerging technologies.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" data-testid="roadmap-section" className="section">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-14">
          <p
            className="font-display uppercase tracking-[0.32em] text-xs mb-4"
            style={{ color: "var(--accent)" }}
          >
            06 · Vision
          </p>
          <h2
            className="font-display glow-text text-4xl sm:text-5xl font-light tracking-tight"
            data-testid="roadmap-title"
          >
            My vision
          </h2>
        </div>

        <ol className="relative pl-6 sm:pl-10">
          {/* central line */}
          <span
            aria-hidden="true"
            className="absolute left-2 sm:left-4 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent, var(--accent), transparent)",
            }}
          />
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              data-testid={`roadmap-step-${i}`}
              className="relative reveal mb-9 last:mb-0"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[1.6rem] sm:-left-[2.4rem] top-2 w-3.5 h-3.5 rounded-full"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 0 4px var(--glass), 0 0 18px var(--glow)",
                }}
              />
              <div className="glass rounded-[1.75rem] p-6 md:p-7">
                <span
                  className="font-display text-[10px] tracking-[0.32em] uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  {s.tag}
                </span>
                <h3
                  className="font-display text-xl sm:text-2xl font-medium mt-1.5"
                  style={{ color: "var(--text)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-sm sm:text-base leading-relaxed"
                  style={{ color: "var(--text-2)" }}
                >
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
