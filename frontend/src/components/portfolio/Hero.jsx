import { ArrowDown, FileText, Mail } from "lucide-react";
import { toast } from "sonner";

const PROFILE =
  "https://customer-assets.emergentagent.com/job_future-researcher/artifacts/dopy4agn_1000171204.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="section relative min-h-[100svh] flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.2fr,1fr] gap-10 md:gap-16 items-center">
        <div className="reveal">
          <p
            className="font-display uppercase tracking-[0.32em] text-xs mb-5"
            style={{ color: "var(--accent)" }}
            data-testid="hero-eyebrow"
          >
            Future · Quantum · Researcher
          </p>
          <h1
            className="font-display glow-text font-light leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl"
            data-testid="hero-name"
          >
            Aditya
            <br />
            <span className="font-medium">Anand.</span>
          </h1>
          <p
            className="mt-6 text-base sm:text-lg max-w-xl"
            style={{ color: "var(--text-2)" }}
            data-testid="hero-subheading"
          >
            B.Tech CSE (AI &amp; ML) Student · Future Quantum Computing
            Researcher · Lifelong Learner.
          </p>
          <p
            className="mt-5 text-sm sm:text-base leading-relaxed max-w-xl"
            style={{ color: "var(--text-2)" }}
            data-testid="hero-intro"
          >
            I am an undergraduate student at UpGrad School of Technology with
            a deep interest in artificial intelligence, quantum computing,
            programming, scientific research, and financial markets. My goal
            is to build strong fundamentals, explore emerging technologies,
            and contribute to meaningful innovation.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              className="pill pill-primary"
              data-testid="hero-resume-button"
              onClick={() =>
                toast.info("Resume under construction", {
                  description: "Coming soon — check back later.",
                })
              }
            >
              <FileText size={16} />
              Resume under construction
            </button>
            <a
              href="#contact"
              className="pill"
              data-testid="hero-contact-button"
            >
              <Mail size={16} />
              Get in touch
            </a>
          </div>
        </div>

        {/* Profile */}
        <div className="reveal flex justify-center md:justify-end">
          <div
            className="relative rounded-[2.5rem] glass p-3 overflow-hidden"
            data-testid="hero-profile-card"
            style={{ width: "min(86vw, 380px)" }}
          >
            <div className="rounded-[2rem] overflow-hidden aspect-[4/5]">
              <img
                src={PROFILE}
                alt="Aditya Anand"
                className="w-full h-full object-cover"
                loading="eager"
                data-testid="hero-profile-image"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full opacity-60"
              style={{
                background:
                  "radial-gradient(circle, var(--glow), transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <div
              className="absolute top-6 left-6 glass-soft px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ color: "var(--text)" }}
            >
              UpGrad · CSE (AI &amp; ML)
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        data-testid="hero-scroll-indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
        style={{ color: "var(--text-2)" }}
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
