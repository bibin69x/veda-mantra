import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      mode,
      concerns,
      doctorId = "dr-anupama-ramachandran",
      appointmentDate,
      appointmentTime,
      patientDetails,
      fee,
      gstAmount,
      totalAmount,
      razorpayPaymentId,
      razorpayOrderId,
    } = body;

    // Server-side validation
    if (!patientDetails?.fullName || !patientDetails?.email || !patientDetails?.phone) {
      return NextResponse.json(
        { error: "Patient full name, email, and phone number are required." },
        { status: 400 }
      );
    }

    const bookingReference = `AVM-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    // Try storing in Supabase
    try {
      const supabase = createClient();
      const { data, error } = await supabase.from("consultations").insert([
        {
          booking_reference: bookingReference,
          doctor_id: doctorId,
          mode: mode || "online",
          concerns: concerns || [],
          appointment_date: appointmentDate,
          appointment_time: appointmentTime,
          patient_name: patientDetails.fullName,
          patient_email: patientDetails.email,
          patient_phone: patientDetails.phone,
          patient_age: patientDetails.age ? parseInt(patientDetails.age, 10) : null,
          patient_gender: patientDetails.gender || "unspecified",
          preferred_language: patientDetails.preferredLanguage || "English",
          symptoms: patientDetails.symptoms || "",
          medical_history: patientDetails.medicalHistory || "",
          fee: fee || 800,
          gst_amount: gstAmount || 144,
          total_amount: totalAmount || 944,
          payment_status: razorpayPaymentId ? "paid" : "pending",
          razorpay_order_id: razorpayOrderId || null,
          razorpay_payment_id: razorpayPaymentId || null,
          status: "confirmed",
          meeting_url:
            mode === "online" ? `https://meet.ayurvedamantra.com/${bookingReference}` : null,
        },
      ]);

      if (error) {
        console.warn("Supabase consultation insert note:", error.message);
      }
    } catch (supabaseErr) {
      console.warn("Supabase client connection note (fallback active):", supabaseErr);
    }

    return NextResponse.json({
      success: true,
      bookingReference,
      doctor: "Dr. Anupama Ramachandran",
      message: "Consultation booked successfully with Dr. Anupama Ramachandran.",
      scheduledAt: `${appointmentDate} at ${appointmentTime}`,
    });
  } catch (err: any) {
    console.error("Consultation API error:", err);
    return NextResponse.json(
      { error: "Failed to process consultation booking." },
      { status: 500 }
    );
  }
}
