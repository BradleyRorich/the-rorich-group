import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten() },
      { status: 400 }
    );
  }

  // TODO: send email via Resend when email sending is enabled
  // import { Resend } from "resend"
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({ from: ..., to: process.env.CONTACT_EMAIL, ... })

  return NextResponse.json({ success: true });
}
