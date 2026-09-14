import podcastThumb from "../assets/podcast-thumbnail.png";

export const RESPONSES = [
  {
    q: "What's your stack?",
    a: "Python, Django, FastAPI and DRF on the backend; Vue and React/TypeScript on the front. For AI work: LangChain, HuggingFace, PGVector and OpenAI, with Celery and Redis handling background jobs.",
  },
  {
    q: "Tell me about a project",
    a: "A RAG-based AI Help Center chatbot — it embeds support docs into PGVector and answers user questions with cited sources instead of generic replies. I also built an AI Transaction Analyzer that flags anomalies in financial data.",
  },
  {
    q: "Open to remote roles?",
    a: "Yes — I'm based in Lagos and looking for remote, internationally-compensating roles building AI systems that operate at scale.",
  },
  {
    q: "How long have you been coding?",
    a: "Coming up on 5 years across frontend, backend and AI engineering, currently working full-time as a Full Stack and AI Software Developer.",
  },
];

export const FALLBACK =
  "I don't have a canned answer for that yet — but you can reach out directly through the contact button and Deborah will get back to you.";

// Fill in the real Medium URLs for each — grab them from your profile page.
export const ARTICLES = [
  {
    title: "Building an Agentic AI Planner with Django, Celery, Redis, and OpenAI — PlanPal",
    date: "Jan 22",
    href: "https://medium.com/@deborahbalogun07/building-an-agentic-ai-planner-with-django-celery-redis-and-openai-planpal-9eb518f676d0",
  },
  {
    title: "Prompt Engineering for Developers: What Actually Works",
    date: "Jun 19",
    href: "#",
  },
  {
    title: "Building an AI Transaction Analyzer with FastAPI, PGVector, and HuggingFace Embeddings",
    date: "Dec 16, 2025",
    href: "#",
  },
  {
    title: "From Labs to Laptops — Part 4: From Frontend to Full-Stack and Into AI Software Development",
    date: "Oct 6, 2025",
    href: "#",
  },
  {
    title: "From Labs to Laptops: Landing My First Tech Internship",
    date: "Sep 1, 2025",
    href: "#",
  },
  {
    title: "From Labs to Laptops — Part 2: The Code Newbie Competition That Changed Everything",
    date: "Aug 18, 2025",
    href: "#",
  },
];

// Add the real YouTube link once you have it.
export const SPEAKING = [
  {
    title: "Forget Passion and Follow Curiosity to Stay Relevant",
    context: "Podcast appearance — Episode #30",
    thumbnail: podcastThumb,
    href: "https://youtu.be/d_yc3YSWfb4?si=3OUrzWD9H1MrLq19",
  },
];

export const PROJECTS = [
  {
    title: "RAG-based AI Help Center Chatbot",
    tag: "Production",
    description:
      "Answers user support questions with cited sources instead of generic replies, using a custom Quill-format ingestion pipeline, LangChain and PGVector.",
    stack: ["LangChain", "PGVector", "Django", "Celery"],
    href: "#",
  },
  {
    title: "AI Transaction Analyzer",
    tag: "Production",
    description:
      "Flags anomalies in financial transaction data using HuggingFace models behind a FastAPI service, with PGVector for similarity lookups.",
    stack: ["FastAPI", "HuggingFace", "PGVector"],
    href: "#",
  },
  {
    title: "Marginalia",
    tag: "Portfolio project",
    description:
      "A RAG chat frontend with streaming responses and inline citations, built in React/TypeScript with a FastAPI backend to sharpen React depth.",
    stack: ["React", "TypeScript", "FastAPI"],
    href: "#",
  },
];
