const INTERESTS = [
  "Python Programming",
  "Machine Learning",
  "Quantum Computing",
  "Quantum Physics",
  "3D Printing",
  "Financial Markets",
  "Emerging Technologies",
  "Scientific Research",
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="section">
      <div className="max-w-5xl mx-auto">
        <div className="reveal">
          <p
            className="font-display uppercase tracking-[0.32em] text-xs mb-4"
            style={{ color: "var(--accent)" }}
          >
            01 · About
          </p>
          <h2
            className="font-display glow-text text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight"
            data-testid="about-title"
          >
            Who am I<span style={{ color: "var(--accent)" }}>?</span>
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-[1.4fr,1fr] gap-8">
          <div
            className="glass rounded-[2rem] p-8 md:p-10 reveal"
            data-testid="about-card"
          >
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text-2)" }}
            >
              I am currently pursuing{" "}
              <span style={{ color: "var(--text)" }}>
                B.Tech in Computer Science Engineering (AI &amp; ML)
              </span>{" "}
              at UpGrad School of Technology. I am passionate about
              understanding how technology works at its core and continuously
              expanding my knowledge across disciplines.
            </p>
            <p
              className="mt-5 text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--text-2)" }}
            >
              I treat learning as a long, quiet walk through the forest — one
              concept at a time, deeply, without shortcuts.
            </p>
          </div>

          <div
            className="glass rounded-[2rem] p-7 md:p-8 reveal"
            data-testid="interests-card"
          >
            <h3
              className="font-display text-lg font-medium mb-5"
              style={{ color: "var(--text)" }}
            >
              Interests
            </h3>
            <ul className="flex flex-wrap gap-2">
              {INTERESTS.map((it) => (
                <li
                  key={it}
                  className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm glass-soft transition-transform hover:-translate-y-0.5"
                  data-testid={`interest-${it.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{ color: "var(--text)" }}
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
