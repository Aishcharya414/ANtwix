import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Check API key
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const { name, email, phone, business, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log("📧 Sending inquiry email from:", email);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "ANtwix <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for your inquiry - ANtwix",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out to ANtwix! We've received your inquiry and will get back to you within 24 hours.</p>
        <p>Best regards,<br/>ANtwix Team</p>
      `,
    });

    console.log("✅ User confirmation email sent:", userEmailResponse);

    // Send admin notification (wrap in try-catch in case admin email not verified)
    try {
      const adminEmailResponse = await resend.emails.send({
        from: "ANtwix <onboarding@resend.dev>",
        to: "antwix.an@gmail.com",
        subject: `New Inquiry from ${name}`,
        html: `
          <h2>New Inquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${business ? `<p><strong>Business:</strong> ${business}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
      });
      console.log("✅ Admin notification sent:", adminEmailResponse);
    } catch (adminError: any) {
      console.warn("⚠️ Failed to send admin email (non-critical):", adminError.message);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
    });
  } catch (error: any) {
    console.error("❌ Resend API Error:", error);
    console.error("Error message:", error.message);
    
    return NextResponse.json(
      { error: "Failed to send inquiry. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
