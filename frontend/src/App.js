import { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/portfolio/Background";
import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Strengths from "./components/portfolio/Strengths";
import Learning from "./components/portfolio/Learning";
import Certifications from "./components/portfolio/Certifications";
import WhyMe from "./components/portfolio/WhyMe";
import Roadmap from "./components/portfolio/Roadmap";
import Projects from "./components/portfolio/Projects";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";
import { Toaster } from "sonner";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  // Scroll-reveal observer
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="App font-body" data-testid="portfolio-root">
      <Background dark={dark} />
      <Navbar dark={dark} onToggleDark={() => setDark((d) => !d)} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Strengths />
        <Learning />
        <Certifications />
        <WhyMe />
        <Roadmap />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}

export default App;
