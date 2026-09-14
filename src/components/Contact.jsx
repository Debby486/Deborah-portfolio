import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
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
            className="text-3xl md:text-4xl mb-4"
          >
            Let's talk
          </h2>
          <p
            style={{
              fontFamily: "var(--body)",
              color: "var(--text-secondary)",
            }}
            className="text-base leading-relaxed"
          >
            Open to remote roles and interesting AI/full-stack problems.
            Reach out directly or use the form.
          </p>
        </div>

        {/* Static UI for now — wire this up to an email service (e.g. Formspree, Resend) or your own backend endpoint. */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3 rounded-[3px] border bg-transparent text-sm outline-none"
            style={{ borderColor: "var(--border)", fontFamily: "var(--body)" }}
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-[3px] border bg-transparent text-sm outline-none"
            style={{ borderColor: "var(--border)", fontFamily: "var(--body)" }}
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="px-4 py-3 rounded-[3px] border bg-transparent text-sm outline-none resize-none"
            style={{ borderColor: "var(--border)", fontFamily: "var(--body)" }}
          />
          <button
            type="submit"
            className="self-start text-sm px-5 py-3 rounded-[3px]"
            style={{
              background: "var(--text)",
              color: "var(--bg)",
              fontFamily: "var(--body)",
            }}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
