import { ArrowUp, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative z-10 mt-10 px-5 pb-10"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="h-px w-full mb-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--glass-border), transparent)",
          }}
        />
        <div className="grid md:grid-cols-[1.4fr,1fr] gap-8 items-end">
          <p
            className="font-display text-xl sm:text-2xl font-light max-w-xl glow-text"
            style={{ color: "var(--text)" }}
            data-testid="footer-quote"
          >
            &ldquo;Building strong foundations today for the technologies of
            tomorrow.&rdquo;
          </p>
          <div className="flex md:justify-end items-center gap-3">
            <a
              href="https://www.linkedin.com/in/adityaanand-quant"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-linkedin"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full glass-soft inline-flex items-center justify-center hover:scale-105 transition-transform"
              style={{ color: "var(--text)" }}
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:thesuperman183@gmail.com"
              data-testid="footer-email"
              aria-label="Email"
              className="w-10 h-10 rounded-full glass-soft inline-flex items-center justify-center hover:scale-105 transition-transform"
              style={{ color: "var(--text)" }}
            >
              <Mail size={16} />
            </a>
            <a
              href="https://wa.me/919852767442"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full glass-soft inline-flex items-center justify-center hover:scale-105 transition-transform"
              style={{ color: "var(--text)" }}
            >
              <MessageCircle size={16} />
            </a>
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              data-testid="footer-back-to-top"
              aria-label="Back to top"
              className="pill ml-2"
            >
              <ArrowUp size={14} /> Top
            </button>
          </div>
        </div>
        <div
          className="mt-10 flex flex-wrap items-center justify-between gap-3 text-xs"
          style={{ color: "var(--text-2)" }}
        >
          <span data-testid="footer-copy">
            © {new Date().getFullYear()} Aditya Anand · Crafted with curiosity.
          </span>
          <span className="font-display tracking-wider">
            UpGrad · CSE (AI &amp; ML)
          </span>
        </div>
      </div>
    </footer>
  );
}
