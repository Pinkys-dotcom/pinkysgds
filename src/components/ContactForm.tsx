"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-wide">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-ink/20 bg-white px-4 py-2.5 text-sm focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold uppercase tracking-wide">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="mt-1 w-full rounded-md border border-ink/20 bg-white px-4 py-2.5 text-sm focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold uppercase tracking-wide">
          What do you need help with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-ink/20 bg-white px-4 py-2.5 text-sm focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-rose px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send Request"}
      </button>
      {status === "sent" && (
        <p className="text-sm text-ink/70">
          Thanks! Your request has been sent—we&apos;ll get back to you shortly. Prefer to call?{" "}
          <a href={site.phoneHref} className="font-semibold text-rose">
            {site.phone}
          </a>
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-ink/70">
          Something went wrong sending your request. Please call us instead at{" "}
          <a href={site.phoneHref} className="font-semibold text-rose">
            {site.phone}
          </a>
          {" "}or email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-rose">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
