import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { RESPONSES, FALLBACK } from "../data/content";

export default function ChatWidget({ compact }) {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I'm a small demo of the kind of assistant Deborah builds. Ask about her stack, a project, or availability.",
    },
  ]);
  const [input, setInput] = useState("");
  const [askedOnce, setAskedOnce] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  function respond(question) {
    setMessages((m) => [...m, { role: "user", text: question }]);
    setAskedOnce(true);
    const match = RESPONSES.find(
      (r) => r.q.toLowerCase() === question.toLowerCase()
    );
    const bySubstring = RESPONSES.find((r) =>
      question.toLowerCase().includes(r.q.toLowerCase().split(" ")[0])
    );
    const answer = match?.a || bySubstring?.a || FALLBACK;
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: answer }]);
    }, 500);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    respond(input.trim());
    setInput("");
  }

  return (
    <div
      className="rounded-[4px] border overflow-hidden flex flex-col"
      style={{
        borderColor: "var(--border)",
        background: "var(--panel)",
        height: compact ? "420px" : "460px",
        boxShadow: compact ? "0 8px 24px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3 border-b text-xs"
        style={{ borderColor: "var(--border)", fontFamily: "var(--mono)" }}
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ background: "var(--accent)" }}
        />
        <span style={{ color: "var(--text-secondary)" }}>
          ask-deborah — live demo
        </span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] text-sm leading-relaxed px-3 py-2 rounded-[3px] ${
              m.role === "user" ? "ml-auto" : ""
            }`}
            style={{
              background:
                m.role === "user" ? "var(--accent)" : "var(--surface)",
              color: m.role === "user" ? "var(--on-accent)" : "var(--text)",
              fontFamily: "var(--body)",
            }}
          >
            {m.text}
          </div>
        ))}
      </div>

      {!askedOnce && (
        <div
          className="px-4 pb-3 flex flex-wrap gap-2"
          style={{ fontFamily: "var(--mono)" }}
        >
          {RESPONSES.map((r) => (
            <button
              key={r.q}
              onClick={() => respond(r.q)}
              className="text-xs px-2.5 py-1.5 rounded-[3px] border transition-colors"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              {r.q}
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t px-3 py-2"
        style={{ borderColor: "var(--border)" }}
      >
        <span
          style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}
          className="text-sm"
        >
          &gt;
        </span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ask something"
          className="flex-1 bg-transparent outline-none text-sm"
          style={{ color: "var(--text)", fontFamily: "var(--mono)" }}
        />
        <button type="submit" aria-label="Send" style={{ color: "var(--accent)" }}>
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
