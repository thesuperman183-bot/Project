import { Linkedin, Mail, MessageCircle } from "lucide-react";

const LINKS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    sub: "adityaanand-quant",
    href: "https://www.linkedin.com/in/adityaanand-quant",
    testid: "contact-linkedin",
  },
  {
    icon: Mail,
    label: "Email",
    sub: "thesuperman183@gmail.com",
    href: "mailto:thesuperman183@gmail.com",
    testid: "contact-email",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    sub: "+91 98527 67442",
    href: "https://wa.me/919852767442",
    testid: "contact-whatsapp",
  },
];

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="section">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center">
          <p
            className="font-display uppercase tracking-[0.32em] text-xs mb-4"
            style={{ color: "var(--accent)" }}
          >
            08 · Connect
          </p>
          <h2
            className="font-display glow-text text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight"
            data-testid="contact-title"
          >
            Let&apos;s connect.
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-sm sm:text-base"
            style={{ color: "var(--text-2)" }}
          >
            I am always open to learning opportunities, collaborations,
            internships, research discussions, and meaningful conversations.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {LINKS.map(({ icon: Icon, label, sub, href, testid }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={testid}
              className="glass rounded-[2rem] p-6 reveal flex items-center gap-4 transition-transform hover:-translate-y-1"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl glass-soft shrink-0"
                style={{ color: "var(--accent)" }}
              >
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <div
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: "var(--text-2)" }}
                >
                  {label}
                </div>
                <div
                  className="font-display text-base font-medium truncate"
                  style={{ color: "var(--text)" }}
                >
                  {sub}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
