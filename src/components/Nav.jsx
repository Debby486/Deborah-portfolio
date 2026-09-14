import React from "react";
import { Sun, Moon } from "lucide-react";

export default function Nav({ isDark, setTheme }) {
  return (
    <nav
      className="flex items-center justify-between px-16 py-5 border-b max-w-[1400px] mx-auto"
      style={{ borderColor: "var(--border)" }}
    >
      <span
        style={{ fontFamily: "var(--display)", fontWeight: 600 }}
        className="text-lg"
      >
        Deborah.
      </span>
      <div
        className="hidden md:flex items-center gap-8 text-sm"
        style={{ fontFamily: "var(--body)", color: "var(--text-secondary)" }}
      >
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#writing">Writing</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label="Toggle theme"
          className="p-2 rounded-[3px] border"
          style={{ borderColor: "var(--border)" }}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-[3px]"
          style={{
            background: "var(--text)",
            color: "var(--bg)",
            fontFamily: "var(--body)",
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
