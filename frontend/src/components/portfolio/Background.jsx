import { useMemo } from "react";

const LIGHT_BG =
  "https://images.unsplash.com/photo-1529333110658-26b4cf759641?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMGZvcmVzdCUyMHNpbGhvdWV0dGUlMjBtaW5pbWFsfGVufDB8fHx8MTc4MTgxMTgyNHww&ixlib=rb-4.1.0&q=85";

const DARK_BG =
  "https://images.pexels.com/photos/3691531/pexels-photo-3691531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function Background({ dark }) {
  const fireflies = useMemo(
    () =>
      Array.from({ length: 32 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        blink: 2 + Math.random() * 4,
        drift: 6 + Math.random() * 10,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div
      aria-hidden="true"
      data-testid="animated-background"
      className="fixed inset-0 -z-0 overflow-hidden pointer-events-none"
    >
      {/* Light mode: rustic dark forest with flowing mist */}
      <div
        className="absolute inset-0 transition-opacity duration-[1200ms]"
        style={{ opacity: dark ? 0 : 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${LIGHT_BG})`,
            filter: "blur(2px) saturate(0.85) brightness(0.78) contrast(1.08)",
            transform: "scale(1.06)",
          }}
        />
        {/* Rustic forest gradient — deeper greens & earthy tones at top, lighter at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,42,32,0.55) 0%, rgba(38,64,52,0.38) 30%, rgba(80,108,94,0.30) 60%, rgba(210,222,216,0.55) 100%)",
          }}
        />
        {/* Readability wash for content area */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 65%, rgba(240,244,240,0.55), transparent 70%)",
          }}
        />
        {/* Continuously flowing mist — three layers at different speeds, subtle */}
        <div
          className="absolute -inset-[20%]"
          style={{
            background:
              "radial-gradient(ellipse 45% 28% at 20% 35%, rgba(255,255,255,0.55), transparent 65%), radial-gradient(ellipse 40% 25% at 80% 60%, rgba(230,238,236,0.45), transparent 70%)",
            filter: "blur(40px)",
            animation: "mistFlow1 36s linear infinite",
            opacity: 0.85,
          }}
        />
        <div
          className="absolute -inset-[20%]"
          style={{
            background:
              "radial-gradient(ellipse 50% 30% at 65% 25%, rgba(255,255,255,0.45), transparent 70%), radial-gradient(ellipse 35% 22% at 25% 75%, rgba(220,232,232,0.4), transparent 70%)",
            filter: "blur(55px)",
            animation: "mistFlow2 56s linear infinite",
            opacity: 0.75,
          }}
        />
        <div
          className="absolute -inset-[25%]"
          style={{
            background:
              "radial-gradient(ellipse 60% 38% at 50% 55%, rgba(255,255,255,0.32), transparent 75%)",
            filter: "blur(80px)",
            animation: "mistFlow3 80s linear infinite",
            opacity: 0.7,
          }}
        />
        <div
          className="absolute -inset-[20%]"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(122,158,159,0.20), transparent 60%)",
            filter: "blur(80px)",
            animation: "pulseSlow 12s ease-in-out infinite",
          }}
        />
      </div>

      {/* Dark mode: moonlit forest + fireflies */}
      <div
        className="absolute inset-0 transition-opacity duration-[1200ms]"
        style={{ opacity: dark ? 1 : 0 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${DARK_BG})`,
            filter: "blur(2px) brightness(0.55) saturate(1.05) hue-rotate(-10deg)",
            transform: "scale(1.05)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,19,30,0.65) 0%, rgba(11,19,30,0.75) 50%, rgba(8,14,22,0.92) 100%)",
          }}
        />
        {/* Moonlight glow */}
        <div
          className="absolute"
          style={{
            top: "8%",
            right: "10%",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(220,235,255,0.35) 0%, rgba(139,233,253,0.12) 35%, transparent 70%)",
            filter: "blur(40px)",
            animation: "pulseSlow 8s ease-in-out infinite",
          }}
        />
        {/* Fireflies */}
        {fireflies.map((f) => (
          <span
            key={f.id}
            className="absolute rounded-full"
            style={{
              top: `${f.top}%`,
              left: `${f.left}%`,
              width: `${f.size}px`,
              height: `${f.size}px`,
              background: "rgba(255, 244, 184, 0.95)",
              boxShadow:
                "0 0 6px rgba(255, 244, 184, 0.9), 0 0 14px rgba(255, 220, 120, 0.6), 0 0 28px rgba(255, 220, 120, 0.35)",
              animation: `blink ${f.blink}s ease-in-out ${f.delay}s infinite, drift ${f.drift}s ease-in-out ${f.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />
    </div>
  );
}
