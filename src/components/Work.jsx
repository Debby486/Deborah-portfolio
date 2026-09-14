import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/content";

export default function Work() {
  return (
    <section id="work" className="max-w-[1400px] mx-auto px-16 py-24">
      <div
        className="w-10 h-[3px] mb-6"
        style={{ background: "var(--accent)" }}
      />
      <h2
        style={{ fontFamily: "var(--display)", fontWeight: 600 }}
        className="text-3xl md:text-4xl mb-4"
      >
        Selected work
      </h2>
      <p
        style={{
          fontFamily: "var(--body)",
          color: "var(--text-secondary)",
          maxWidth: "50ch",
        }}
        className="text-base leading-relaxed mb-12"
      >
        A mix of production systems and portfolio projects, mostly centered
        on RAG pipelines and full-stack AI tooling.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="rounded-[4px] border p-6 flex flex-col gap-4 hover:opacity-90 transition-opacity"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs px-2 py-1 rounded-[3px]"
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--mono)",
                  border: "1px solid var(--border)",
                }}
              >
                {p.tag}
              </span>
              <ArrowUpRight size={16} style={{ color: "var(--text-secondary)" }} />
            </div>
            <h3
              style={{ fontFamily: "var(--display)", fontWeight: 600 }}
              className="text-lg"
            >
              {p.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--body)",
                color: "var(--text-secondary)",
              }}
              className="text-sm leading-relaxed"
            >
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 rounded-[3px]"
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
          </a>
        ))}
      </div>
    </section>
  );
}
