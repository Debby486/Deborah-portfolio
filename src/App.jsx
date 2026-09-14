import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Writing from "./components/Writing";
import About from "./components/About";
import Contact from "./components/Contact";
import ChatWidget from "./components/ChatWidget";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const isDark = theme === "dark";
  const [chatOpen, setChatOpen] = useState(false);

  const vars = isDark
    ? {
        "--bg": "#10141A",
        "--surface": "#171C24",
        "--panel": "#12161D",
        "--border": "#262C36",
        "--text": "#E9EAEC",
        "--text-secondary": "#9BA3AF",
        "--accent": "#D8A54A",
        "--on-accent": "#14181F",
      }
    : {
        "--bg": "#EDEFF0",
        "--surface": "#F5F6F7",
        "--panel": "#FFFFFF",
        "--border": "#D8DBDE",
        "--text": "#14181F",
        "--text-secondary": "#5B6472",
        "--accent": "#C98A2C",
        "--on-accent": "#FFFFFF",
      };

  return (
    <div
      style={{
        ...vars,
        "--display": "'Space Grotesk', sans-serif",
        "--body": "'IBM Plex Sans', sans-serif",
        "--mono": "'IBM Plex Mono', monospace",
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        transition: "background 0.2s ease, color 0.2s ease",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <Nav isDark={isDark} setTheme={setTheme} />
      <Hero />
      <About />
      <Work />
      <Writing />
      <Contact />

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {chatOpen && (
          <div style={{ width: "340px" }}>
            <ChatWidget compact />
          </div>
        )}
        <button
          onClick={() => setChatOpen((o) => !o)}
          aria-label={chatOpen ? "Close chat" : "Open chat"}
          className="w-12 h-12 rounded-full flex items-center justify-center border"
          style={{
            background: "var(--accent)",
            color: "var(--on-accent)",
            borderColor: "var(--accent)",
          }}
        >
          {chatOpen ? <X size={18} /> : <MessageCircle size={18} />}
        </button>
      </div>
    </div>
  );
}
