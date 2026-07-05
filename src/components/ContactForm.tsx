"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`New estimate request from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
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
        className="w-full rounded-md bg-rose px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors sm:w-auto"
      >
        Send Request
      </button>
      {sent && (
        <p className="text-sm text-ink/70">
          Opening your email client to send this request. Prefer to call?{" "}
          <a href={site.phoneHref} className="font-semibold text-rose">
            {site.phone}
          </a>
        </p>
      )}
    </form>
  );
}
