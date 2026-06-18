import { Award, Clock } from "lucide-react";

const CERTS = [
  {
    title: "Python Quick Start",
    issuer: "LinkedIn Learning",
    image:
      "https://customer-assets.emergentagent.com/job_future-researcher/artifacts/s90hpb1m_CertificateOfCompletion_Python%20Quick%20Start%20%281%29_page-0001.jpg",
  },
  {
    title: "Advance Diploma in Computer Application",
    issuer: "Lenify CSE · MSME · Digital India",
    image:
      "https://customer-assets.emergentagent.com/job_future-researcher/artifacts/asjtpnjd_certificate-ADITYA-ANAND-SO-BASHISHTH-KUMAR-SINGH-CNPLPMFJCQ%20%281%29_page-0001.jpg",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      data-testid="certifications-section"
      className="section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <p
            className="font-display uppercase tracking-[0.32em] text-xs mb-4"
            style={{ color: "var(--accent)" }}
          >
            04 · Proof
          </p>
          <h2
            className="font-display glow-text text-4xl sm:text-5xl font-light tracking-tight"
            data-testid="certifications-title"
          >
            Achievements &amp; Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {CERTS.map((c) => (
            <article
              key={c.title}
              data-testid={`certificate-${c.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="glass rounded-[2rem] p-4 reveal group transition-transform hover:-translate-y-1"
            >
              <div className="rounded-[1.5rem] overflow-hidden bg-white">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-3 pt-5">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={14} style={{ color: "var(--accent)" }} />
                  <span
                    className="text-[11px] uppercase tracking-wider"
                    style={{ color: "var(--text-2)" }}
                  >
                    {c.issuer}
                  </span>
                </div>
                <h3
                  className="font-display text-lg font-medium leading-snug"
                  style={{ color: "var(--text)" }}
                >
                  {c.title}
                </h3>
              </div>
            </article>
          ))}

          {/* Coming soon */}
          <article
            data-testid="certificate-coming-soon"
            className="rounded-[2rem] p-4 reveal border border-dashed flex items-center justify-center text-center min-h-[260px]"
            style={{
              borderColor: "var(--glass-border)",
              background:
                "linear-gradient(135deg, var(--glass), rgba(255,255,255,0.05))",
              backdropFilter: "blur(14px)",
            }}
          >
            <div className="px-4">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl glass-soft mb-4 mx-auto"
                style={{ color: "var(--accent)" }}
              >
                <Clock size={20} />
              </div>
              <h3
                className="font-display text-lg font-medium mb-2"
                style={{ color: "var(--text)" }}
              >
                More on the way
              </h3>
              <p className="text-sm" style={{ color: "var(--text-2)" }}>
                More achievements and certifications are currently in progress.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
