# html
<!-- public/index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>The Life Journey of Data</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.js"></script>
  </body>
</html>

# css

/* src/index.css */
/* Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom utilities & animations */
:root {
  --line-width: 6px;
}

/* Glowing vertical timeline line */
.timeline-line {
  width: var(--line-width);
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  bottom: 0;
  position: absolute;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(99,102,241,0.95), rgba(96,165,250,0.8), rgba(34,197,94,0.6), rgba(249,115,22,0.5), rgba(107,114,128,0.4));
  box-shadow: 0 0 40px rgba(99,102,241,0.25), 0 0 80px rgba(34,197,94,0.06);
  filter: blur(0.6px);
  z-index: 0;
}

/* subtle flowing glow along the line */
@keyframes flow {
  0% { background-position: 0% 0%; }
  50% { background-position: 0% 50%; }
  100% { background-position: 0% 100%; }
}
.timeline-line.animated {
  background-size: 100% 400%;
  animation: flow 8s linear infinite;
}

/* hero particle animation (glowing dot moving down) */
@keyframes particleDown {
  0% { transform: translateY(-10px) scale(0.8); opacity: 0; }
  10% { opacity: 1; }
  100% { transform: translateY(90vh) scale(1.2); opacity: 0; }
}
.hero-particle {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(99,102,241,0.9));
  box-shadow: 0 0 12px rgba(99,102,241,0.8), 0 0 30px rgba(99,102,241,0.12);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 20%;
  z-index: 10;
  animation: particleDown 4s linear infinite;
}

/* reveal animation for cards */
.reveal {
  opacity: 0;
  transform: translateY(18px) scale(0.99);
  transition: opacity 600ms cubic-bezier(.2,.9,.3,1), transform 600ms cubic-bezier(.2,.9,.3,1);
}
.reveal.in-view {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* connector dot overlapping the line at each card */
.connector {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  transform: translateX(-50%);
  border: 3px solid rgba(15,23,42,0.12);
  box-shadow: 0 6px 18px rgba(2,6,23,0.4);
  position: absolute;
  left: 50%;
  z-index: 20;
}

/* Expand animation for detail area */
.details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 420ms cubic-bezier(.2,.9,.3,1), opacity 320ms ease;
  opacity: 0;
}
.details.open {
  max-height: 360px;
  opacity: 1;
}

/* smaller screens tweak: make line thinner */
@media (max-width: 640px) {
  :root { --line-width: 4px; }
  .connector { width: 14px; height: 14px; }
  .hero-particle { width: 8px; height: 8px; }
}

# javascript
// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

# javascript
// src/App.jsx
import React from "react";
import TimelineCard from "./components/TimelineCard";

const STAGES = [
  {
    title: "Data Collection",
    subtitle: "Sensing and capturing raw data",
    detail:
      "Data is generated from sensors, user interactions, logs, and external sources. Proper instrumentation, validation, and consent handling are applied at this stage.",
    color: "from-green-400 to-green-600",
  },
  {
    title: "Data Storage",
    subtitle: "Holding data reliably",
    detail:
      "Choose appropriate storage: relational, NoSQL, object stores, or data lakes. Consider schema design, indexing, encryption, and access controls.",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "ETL (Extract, Transform, Load)",
    subtitle: "Preparing data for use",
    detail:
      "Extract raw inputs, transform to clean and consistent formats, and load into analytical stores. Data quality rules, deduplication, and enrichment happen here.",
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Data Analysis",
    subtitle: "Extracting insights",
    detail:
      "Run queries, build models, visualize results, and derive decisions. Monitoring, model evaluation, and feedback loops ensure insights remain valid.",
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Data Backup & Archival",
    subtitle: "Preserving data over time",
    detail:
      "Implement backups, lifecycle policies, and archival for compliance and recovery. Consider cost vs retrieval time and secure long-term storage.",
    color: "from-gray-400 to-gray-600",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-slate-900 to-neutral-950 text-slate-100">
      {/* Container with scroll snapping */}
      <main className="relative h-screen overflow-y-auto snap-y snap-mandatory">
        {/* Glowing center line */}
        <div className="timeline-line animated" />

        {/* Hero section */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <div className="hero-particle" aria-hidden="true" />
          <div className="max-w-3xl mx-auto text-center px-6 z-20">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
              Every Data Point Has a Story
            </h1>
            <p className="text-lg sm:text-2xl text-slate-300">
              Follow the journey from creation to insight.
            </p>
            <p className="mt-6 text-sm text-slate-400">
              Scroll to explore the five stages of data lifecycle.
            </p>
          </div>
        </section>

        {/* Timeline sections */}
        <section className="snap-center min-h-screen flex items-center justify-center relative">
          <div className="w-full max-w-4xl mx-auto px-6 py-12">
            <div className="space-y-10">
              {STAGES.map((s, i) => (
                <TimelineCard
                  key={s.title}
                  index={i}
                  title={s.title}
                  subtitle={s.subtitle}
                  detail={s.detail}
                  colorClass={s.color}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer blank snap for nicer snapping */}
        <section className="snap-end h-screen" />
      </main>
    </div>
  );
}

# javascript

// src/components/TimelineCard.jsx
import React, { useEffect, useRef, useState } from "react";

/*
  Props:
   - title, subtitle, detail, colorClass, index
*/
export default function TimelineCard({ title, subtitle, detail, colorClass, index }) {
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // accent gradient for connector & left accent bar
  const accent = `bg-gradient-to-r ${colorClass}`;

  return (
    <article
      ref={ref}
      className={`relative reveal ${inView ? "in-view" : ""} rounded-lg`}
      style={{ zIndex: 30 }}
    >
      {/* connector dot positioned at the middle line (absolute) */}
      <div
        className="connector"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02))",
        }}
        aria-hidden="true"
      >
        <div
          className={`w-full h-full rounded-full ${accent}`}
          style={{ boxShadow: "0 6px 18px rgba(2,6,23,0.35)" }}
        />
      </div>

      {/* Card layout */}
      <div className="relative bg-gradient-to-b from-slate-800/70 to-slate-900/60 border border-slate-800/60 rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch">
        {/* accent bar */}
        <div className={`hidden md:block w-1 ${colorClass}`} />

        <div className="p-6 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
            </div>
            <div className="ml-4 flex items-start">
              <button
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="w-10 h-10 rounded-full bg-slate-800/70 border border-slate-700 flex items-center justify-center text-xl hover:scale-105 transition"
                title={open ? "Hide explanation" : "Show explanation"}
              >
                <span className="text-slate-100 font-bold">+</span>
              </button>
            </div>
          </div>

          <div className={`mt-4 text-slate-300 leading-relaxed details ${open ? "open" : ""}`}>
            <p className="text-sm">{detail}</p>
            <div className="mt-4 text-xs text-slate-400">
              <strong>Stage:</strong> {index + 1} / 5
            </div>
          </div>
        </div>

        {/* right accent gradient small strip on larger view */}
        <div className="hidden md:block w-2" style={{ background: "transparent" }} />
      </div>
    </article>
  );
}

