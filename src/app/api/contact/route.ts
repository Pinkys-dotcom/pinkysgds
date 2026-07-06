import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const { name, phone, message } = await request.json();

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Pinky's Garage Doors Website <onboarding@resend.dev>",
      to: [site.email],
      subject: `New estimate request from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`,
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    console.error("Resend error:", errBody);
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
