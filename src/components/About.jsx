import React from "react";

const SKILLS = [
  "Python",
  "Django",
  "DRF",
  "FastAPI",
  "Vue.js",
  "React",
  "TypeScript",
  "LangChain",
  "HuggingFace",
  "PGVector",
  "OpenAI",
  "Celery",
  "Redis",
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-[1400px] mx-auto px-16 py-24 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-14">
        <div>
          <div
            className="w-10 h-[3px] mb-6"
            style={{ background: "var(--accent)" }}
          />
          <h2
            style={{ fontFamily: "var(--display)", fontWeight: 600 }}
            className="text-3xl md:text-4xl"
          >
            About
          </h2>
        </div>
        <div>
          <p
            style={{
              fontFamily: "var(--body)",
              color: "var(--text-secondary)",
            }}
            className="text-base leading-relaxed mb-6"
          >
            I'm a Full Stack and AI Software Developer based in Lagos,
            Nigeria, with close to 5 years of experience across frontend,
            backend, and AI engineering. Day to day I work across Django,
            FastAPI and React/TypeScript, and I spend a lot of that time
            building AI systems — RAG pipelines, agent workflows, and tools
            that need to hold up in production, not just in a demo.
          </p>
          <p
            style={{
              fontFamily: "var(--body)",
              color: "var(--text-secondary)",
            }}
            className="text-base leading-relaxed mb-8"
          >
            Longer term, I'm focused on building AI systems that improve how
            software works at scale, and I'm open to remote,
            internationally-compensating roles in that direction.
          </p>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="text-xs px-2.5 py-1.5 rounded-[3px]"
                style={{
                  fontFamily: "var(--mono)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
