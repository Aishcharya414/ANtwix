import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Instantiate Resend client only when the API is called
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Resend API key is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, phone, business, message } = await req.json();

    const data = await resend.emails.send({
      from: "ANtwix <onboarding@resend.dev>",
      to: ["antwix.an@gmail.com"],
      subject: `New Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Business: ${business}
        Details: ${message}
      `,
    });

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Resend API Error:", error);
    return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
  }
}
