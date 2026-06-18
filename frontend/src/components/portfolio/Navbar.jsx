import { Moon, Sun } from "lucide-react";

const links = [
  { label: "About", id: "about" },
  { label: "Strengths", id: "strengths" },
  { label: "Learning", id: "learning" },
  { label: "Roadmap", id: "roadmap" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ dark, onToggleDark }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-3">
      <nav
        className="glass flex items-center gap-2 sm:gap-4 px-3 sm:px-5 py-2.5 rounded-full max-w-[min(96%,820px)] w-full"
        data-testid="main-nav"
      >
        <a
          href="#top"
          className="font-display text-base sm:text-lg font-semibold tracking-tight pl-2 pr-1 whitespace-nowrap"
          data-testid="nav-brand"
          style={{ color: "var(--text)" }}
        >
          Aditya<span style={{ color: "var(--accent)" }}>.</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 ml-auto">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                data-testid={`nav-link-${l.id}`}
                className="px-3 py-1.5 rounded-full text-sm hover:bg-white/30 dark:hover:bg-white/5 transition-colors"
                style={{ color: "var(--text-2)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={onToggleDark}
          aria-label="Toggle theme"
          data-testid="theme-toggle"
          className="ml-auto md:ml-2 inline-flex items-center justify-center w-10 h-10 rounded-full glass-soft hover:scale-105 transition-transform"
          style={{ color: "var(--text)" }}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
}
