import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
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
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
