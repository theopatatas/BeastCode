"use client";

import { FormEvent, useEffect, useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (status !== "success" || !feedback) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setFeedback("");
      setStatus("idle");
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [feedback, status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const raw = await response.text();
      let data: { message?: string } = {};

      try {
        data = raw ? (JSON.parse(raw) as { message?: string }) : {};
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send your message right now.",
        );
      }

      setStatus("success");
      setFeedback(data.message || "Message sent successfully.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Unable to send message.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">
            First Name
          </span>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={(event) =>
              setForm((current) => ({ ...current, firstName: event.target.value }))
            }
            placeholder="First Name"
            className="h-12 w-full rounded-xl border border-white/10 bg-slate-950/35 px-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10"
            required
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">
            Last Name
          </span>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={(event) =>
              setForm((current) => ({ ...current, lastName: event.target.value }))
            }
            placeholder="Last Name"
            className="h-12 w-full rounded-xl border border-white/10 bg-slate-950/35 px-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10"
            required
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-200">
          Email
        </span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(event) =>
            setForm((current) => ({ ...current, email: event.target.value }))
          }
          placeholder="example@gmail.com"
          className="h-12 w-full rounded-xl border border-white/10 bg-slate-950/35 px-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10"
          required
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-200">
          Subject
        </span>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={(event) =>
            setForm((current) => ({ ...current, subject: event.target.value }))
          }
          placeholder="Project Inquiry"
          className="h-12 w-full rounded-xl border border-white/10 bg-slate-950/35 px-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10"
          required
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-200">
          Message
        </span>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          placeholder="Tell me about your project..."
          className="w-full rounded-xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10"
          required
        />
      </label>

      {feedback ? (
        <p
          className={`rounded-xl border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
              : "border-rose-400/20 bg-rose-400/10 text-rose-200"
          }`}
        >
          {feedback}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)] transition duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
