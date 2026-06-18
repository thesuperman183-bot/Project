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
      {/* Light mode: misty forest */}
      <div
        className="absolute inset-0 transition-opacity duration-[1200ms]"
        style={{ opacity: dark ? 0 : 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${LIGHT_BG})`,
            filter: "blur(2px) saturate(0.95) brightness(1.04)",
            transform: "scale(1.05)",
          }}
        />
        {/* Gradient wash so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(248,250,249,0.55) 0%, rgba(248,250,249,0.7) 40%, rgba(232,239,236,0.85) 100%)",
          }}
        />
        {/* Drifting fog layers */}
        <div
          className="absolute -inset-[20%]"
          style={{
            background:
              "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.6), transparent 55%)",
            filter: "blur(40px)",
            animation: "fogDrift1 28s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -inset-[20%]"
          style={{
            background:
              "radial-gradient(ellipse at 70% 60%, rgba(180,210,210,0.45), transparent 60%)",
            filter: "blur(60px)",
            animation: "fogDrift2 38s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -inset-[20%]"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(122,158,159,0.18), transparent 60%)",
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
