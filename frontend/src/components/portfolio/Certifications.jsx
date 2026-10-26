import React, { useState } from "react";

const certificationsData = [
  // --- TOP 3 SHOWING ON FRONT ---
  {
    id: 1,
    title: "Hacktoberfest Hack Day Tumakur x upGrad",
    issuer: "Hacktoberfest / MLH x DEV",
    date: "October 24, 2026",
    image: `${process.env.PUBLIC_URL}/hacktoberfest.png`
  },
  {
    id: 2,
    title: "Qiskit Global Summer School 2026 - Quantum Excellence (Advanced)",
    issuer: "IBM Quantum",
    date: "2026",
    image: `${process.env.PUBLIC_URL}/qiskit.jpg`
  },
  {
    id: 3,
    title: "Foundational Math for Machine Learning",
    issuer: "LinkedIn Learning",
    date: "Jul 05, 2026",
    image: `${process.env.PUBLIC_URL}/foundational-math.jpg`
  },
  // --- HIDDEN UNDER 'SEE ALL' ---
  {
    id: 4,
    title: "Machine Learning Foundations: Linear Algebra",
    issuer: "LinkedIn Learning",
    date: "Jun 20, 2026",
    image: `${process.env.PUBLIC_URL}/ml-linear-algebra.jpg`
  },
  {
    id: 5,
    title: "Machine Learning Foundations: Calculus",
    issuer: "LinkedIn Learning",
    date: "Jun 21, 2026",
    image: `${process.env.PUBLIC_URL}/ml-calculus.jpg`
  },
  {
    id: 6,
    title: "Machine Learning Foundations: Probability",
    issuer: "LinkedIn Learning",
    date: "Jun 23, 2026",
    image: `${process.env.PUBLIC_URL}/ml-probability.jpg`
  },
  {
    id: 7,
    title: "Machine Learning Foundations: Statistics",
    issuer: "LinkedIn Learning",
    date: "Jul 05, 2026",
    image: `${process.env.PUBLIC_URL}/ml-statistics.jpg`
  },
  {
    id: 8,
    title: "Learning GitHub",
    issuer: "LinkedIn Learning",
    date: "Jul 17, 2026",
    image: `${process.env.PUBLIC_URL}/learning-github.jpg`
  }
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const displayedCerts = showAll
    ? certificationsData
    : certificationsData.slice(0, 3);

  return (
    <section id="certifications" className="py-16 px-6 reveal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Achievements & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              className="border border-white/10 rounded-2xl p-4 bg-black/20 backdrop-blur-md shadow-xl flex flex-col justify-between transition-all duration-300 hover:border-white/20"
            >
              <div>
                <div className="w-full h-48 overflow-hidden rounded-xl mb-4 bg-black/40">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-lg text-white/90">{cert.title}</h3>
                <p className="text-sm text-white/60 mt-1">{cert.issuer}</p>
              </div>
              <span className="text-xs text-white/40 mt-3 block">
                {cert.date}
              </span>
            </div>
          ))}
        </div>

        {/* Styled Glassmorphism Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-full border border-white/15 bg-white/5 text-white/90 font-medium text-sm backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            {showAll ? "Show Less" : `See All (${certificationsData.length})`}
          </button>
        </div>
      </div>
    </section>
  );
}
