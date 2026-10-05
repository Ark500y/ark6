import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, projectType, message, botcheck } = body;

    // Honeypot check
    if (botcheck) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // Server-side validation
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message too short" },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not defined in environment variables.");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Submit to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Project Inquiry from ${name} - ${projectType}`,
        from_name: name,
        email: email,
        projectType: projectType,
        message: message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      console.error("Web3Forms error:", result);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
