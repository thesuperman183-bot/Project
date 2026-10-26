import React, { useState } from "react";

const certificationsData = [
  // --- TOP 3 SHOWING ON FRONT ---
  {
    id: 1,
    title: "Hacktoberfest Hack Day Tumakur x upGrad",
    issuer: "Hacktoberfest / MLH x DEV",
    date: "October 24, 2026",
    image: "/hacktoberfest.png"
  },
  {
    id: 2,
    title: "Qiskit Global Summer School 2026 - Quantum Excellence (Advanced)",
    issuer: "IBM Quantum",
    date: "2026",
    image: "/qiskit.jpg"
  },
  {
    id: 3,
    title: "Foundational Math for Machine Learning",
    issuer: "LinkedIn Learning",
    date: "Jul 05, 2026",
    image: "/foundational-math.jpg"
  },
  // --- HIDDEN UNDER 'SEE ALL' ---
  {
    id: 4,
    title: "Machine Learning Foundations: Linear Algebra",
    issuer: "LinkedIn Learning",
    date: "Jun 20, 2026",
    image: "/ml-linear-algebra.jpg"
  },
  {
    id: 5,
    title: "Machine Learning Foundations: Calculus",
    issuer: "LinkedIn Learning",
    date: "Jun 21, 2026",
    image: "/ml-calculus.jpg"
  },
  {
    id: 6,
    title: "Machine Learning Foundations: Probability",
    issuer: "LinkedIn Learning",
    date: "Jun 23, 2026",
    image: "/ml-probability.jpg"
  },
  {
    id: 7,
    title: "Machine Learning Foundations: Statistics",
    issuer: "LinkedIn Learning",
    date: "Jul 05, 2026",
    image: "/ml-statistics.jpg"
  },
  {
    id: 8,
    title: "Learning GitHub",
    issuer: "LinkedIn Learning",
    date: "Jul 17, 2026",
    image: "/learning-github.jpg"
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
        <h2 className="text-3xl font-bold mb-8 text-center">
          Achievements & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              className="border border-gray-700/50 rounded-xl p-4 bg-gray-900/40 shadow-lg flex flex-col justify-between"
            >
              <div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg">{cert.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
              </div>
              <span className="text-xs text-gray-500 mt-3 block">
                {cert.date}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
          >
            {showAll ? "Show Less" : `See All (${certificationsData.length})`}
          </button>
        </div>
      </div>
    </section>
  );
}
