import React from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "./icons";
import headshot from "../assets/Headshot.jpeg";

export default function Hero() {
  return (
    <main
      id="home"
      className="max-w-[1400px] mx-auto px-16 py-16 grid md:grid-cols-[1.15fr_1fr] gap-14 items-center min-h-screen"
    >
      <div>
        <div
          className="w-10 h-[3px] mb-6"
          style={{ background: "var(--accent)" }}
        />
        <h1
          style={{ fontFamily: "var(--display)", fontWeight: 600 }}
          className="text-5xl md:text-6xl leading-[1.05] mb-6"
        >
          I'm Deborah, a
          <br />
          Software & AI Engineer
        </h1>
        <p
          style={{
            fontFamily: "var(--body)",
            color: "var(--text-secondary)",
            maxWidth: "42ch",
          }}
          className="text-base leading-relaxed mb-8"
        >
          I build AI systems that hold up in production — RAG pipelines,
          agent workflows, and full-stack apps across Python, Django,
          FastAPI, Vue and React.
        </p>
        <div className="flex items-center gap-4 mb-10">
          <a
            href="#work"
            className="flex items-center gap-2 text-sm px-5 py-3 rounded-[3px]"
            style={{
              background: "var(--text)",
              color: "var(--bg)",
              fontFamily: "var(--body)",
            }}
          >
            View work <ArrowUpRight size={15} />
          </a>
          <a
            href="#contact"
            className="text-sm px-5 py-3 rounded-[3px] border"
            style={{ borderColor: "var(--border)", fontFamily: "var(--body)" }}
          >
            Let's talk
          </a>
        </div>
        <div style={{ fontFamily: "var(--body)" }}>
          <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
            Find me on
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/Debby486"
              aria-label="GitHub"
              className="p-2 rounded-[3px] border"
              style={{ borderColor: "var(--border)" }}
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/deboraholuwatoyinbalogun/"
              aria-label="LinkedIn"
              className="p-2 rounded-[3px] border"
              style={{ borderColor: "var(--border)" }}
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://medium.com/@deborahbalogun07"
              aria-label="Medium"
              className="p-2 rounded-[3px] border"
              style={{ borderColor: "var(--border)" }}
            >
              <MediumIcon />
            </a>
          </div>
        </div>
      </div>

      <div
        className="rounded-[4px] border overflow-hidden relative"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
          aspectRatio: "4 / 5",
        }}
      >
        <img src={headshot} alt="Deborah" className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
