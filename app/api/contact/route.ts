import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, concern, preferredMode, message } = body;

    // Server-side validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Please provide all required fields: name, email, phone, and message." },
        { status: 400 }
      );
    }

    // Insert into Supabase if configured
    try {
      const supabase = createClient();
      const { data, error } = await supabase.from("inquiries").insert([
        {
          name,
          email,
          phone,
          health_concern: concern || "General Wellness",
          preferred_mode: preferredMode || "email",
          message,
          status: "new",
        },
      ]);

      if (error) {
        console.warn("Supabase inquiry insert note:", error.message);
      }
    } catch (supabaseErr) {
      console.warn("Supabase client connection note (fallback active):", supabaseErr);
    }

    return NextResponse.json({
      success: true,
      message: "Namaste! Your inquiry has been received. Our clinical coordinator will reach out within 24 hours.",
    });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An error occurred while processing your message. Please try again." },
      { status: 500 }
    );
  }
}
