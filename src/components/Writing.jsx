import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ARTICLES, SPEAKING } from "../data/content";

export default function Writing() {
  return (
    <section
      id="writing"
      className="max-w-[1400px] mx-auto px-16 py-24 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="w-10 h-[3px] mb-6"
        style={{ background: "var(--accent)" }}
      />
      <h2
        style={{ fontFamily: "var(--display)", fontWeight: 600 }}
        className="text-3xl md:text-4xl mb-4"
      >
        Writing & Speaking
      </h2>
      <p
        style={{
          fontFamily: "var(--body)",
          color: "var(--text-secondary)",
          maxWidth: "50ch",
        }}
        className="text-base leading-relaxed mb-12"
      >
        Articles on Medium about what I'm building and learning, plus the
        occasional podcast conversation.
      </p>

      <div className="grid md:grid-cols-2 gap-14">
        <div>
          <h3
            className="text-sm mb-4"
            style={{
              fontFamily: "var(--mono)",
              color: "var(--text-secondary)",
            }}
          >
            Articles
          </h3>
          <ul className="flex flex-col">
            {ARTICLES.map((a) => (
              <li
                key={a.title}
                className="border-b py-4"
                style={{ borderColor: "var(--border)" }}
              >
                <a
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start justify-between gap-4 group"
                >
                  <div>
                    <p
                      style={{ fontFamily: "var(--body)" }}
                      className="text-sm leading-relaxed mb-1"
                    >
                      {a.title}
                    </p>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "var(--mono)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {a.date}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    style={{ color: "var(--text-secondary)" }}
                    className="shrink-0 mt-1"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="text-sm mb-4"
            style={{
              fontFamily: "var(--mono)",
              color: "var(--text-secondary)",
            }}
          >
            Speaking
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {SPEAKING.map((s) => (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[4px] border overflow-hidden flex flex-col hover:opacity-90 transition-opacity"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <div
                  className="w-full overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <img
                    src={s.thumbnail}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p
                    style={{ fontFamily: "var(--body)" }}
                    className="text-sm leading-relaxed mb-1"
                  >
                    {s.title}
                  </p>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--mono)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {s.context}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
