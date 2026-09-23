import React, { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xoevwypq";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
            Open to remote roles and interesting AI/full-stack opportunities.
            Reach out directly or use the form.
          </p>
          <a
            href="https://www.linkedin.com/in/deboraholuwatoyinbalogun/"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 text-sm px-5 py-3 rounded-[3px] border"
            style={{ borderColor: "var(--border)", fontFamily: "var(--body)" }}
          >
            Reach out on LinkedIn
          </a>
        </div>

        {status === "sent" ? (
          <div
            className="flex items-center rounded-[4px] border px-6 py-8 text-sm"
            style={{
              borderColor: "var(--border)",
              color: "var(--text)",
              fontFamily: "var(--body)",
            }}
          >
            Yayy!! Your message is in. I'll get back to you soon.
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="px-4 py-3 rounded-[3px] border bg-transparent text-sm outline-none"
              style={{ borderColor: "var(--border)", fontFamily: "var(--body)" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="px-4 py-3 rounded-[3px] border bg-transparent text-sm outline-none"
              style={{ borderColor: "var(--border)", fontFamily: "var(--body)" }}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="px-4 py-3 rounded-[3px] border bg-transparent text-sm outline-none resize-none"
              style={{ borderColor: "var(--border)", fontFamily: "var(--body)" }}
            />
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="self-start text-sm px-5 py-3 rounded-[3px] disabled:opacity-60"
                style={{
                  background: "var(--text)",
                  color: "var(--bg)",
                  fontFamily: "var(--body)",
                }}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "error" && (
                <span
                  className="text-sm"
                  style={{ color: "var(--accent)", fontFamily: "var(--body)" }}
                >
                  Something went wrong — try again, or email me directly.
                </span>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}