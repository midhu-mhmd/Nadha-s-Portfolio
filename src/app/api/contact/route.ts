import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Payload = {
  name: string;
  email: string;
  message: string;
  company?: string;
  website?: string; // honeypot
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();
    const company = (body.company || "").trim();
    const website = (body.website || "").trim(); // honeypot

    // Honeypot: bots fill hidden inputs
    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Validation
    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
    }
    if (!message || message.length < 10) {
      return NextResponse.json({ ok: false, error: "Message should be at least 10 characters." }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY || !to || !from) {
      return NextResponse.json(
        { ok: false, error: "Server email configuration missing." },
        { status: 500 }
      );
    }

    // Resend expects valid from format: email or "Name <email>" :contentReference[oaicite:1]{index=1}
    const subject = `Portfolio Inquiry — ${name}`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.6;">
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
        <hr />
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    const text = `
New Portfolio Message

Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ""}
Message:
${message}
    `.trim();

    // ✅ IMPORTANT: handle Resend SDK response
    const { data, error } = await resend.emails.send({
      from, // e.g. "Nada <onboarding@resend.dev>" (or your verified domain email)
      to,
      subject,
      html,
      text,
      replyTo: email,
    });

    if (error) {
      // This is the key fix: frontend should not show success if Resend failed.
      console.error("Resend send error:", error);

      // Very common: test mode restriction / domain not verified :contentReference[oaicite:2]{index=2}
      return NextResponse.json(
        { ok: false, error: error.message || "Email sending failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("API route crash:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
