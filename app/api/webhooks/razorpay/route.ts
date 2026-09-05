import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-razorpay-signature");
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!secret) {
      console.warn("RAZORPAY_WEBHOOK_SECRET not set in environment.");
      return NextResponse.json(
        { error: "Webhook secret unconfigured" },
        { status: 500 }
      );
    }

    if (!signature) {
      return NextResponse.json(
        { error: "Missing x-razorpay-signature header" },
        { status: 400 }
      );
    }

    // Verify HMAC-SHA256 signature
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    if (expectedSignature !== signature) {
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 400 }
      );
    }

    const payload = JSON.parse(rawBody);
    const event = payload.event;

    // Handle payment.captured / order.paid events
    if (event === "payment.captured" || event === "order.paid") {
      const payment = payload.payload.payment.entity;
      const orderId = payment.order_id;
      const paymentId = payment.id;

      try {
        const supabase = createClient();
        // Update order status if order exists
        await supabase
          .from("orders")
          .update({
            payment_status: "paid",
            razorpay_payment_id: paymentId,
            order_status: "processing",
            updated_at: new Date().toISOString(),
          })
          .eq("razorpay_order_id", orderId);

        // Update consultation if booking exists
        await supabase
          .from("consultations")
          .update({
            payment_status: "paid",
            razorpay_payment_id: paymentId,
            updated_at: new Date().toISOString(),
          })
          .eq("razorpay_order_id", orderId);
      } catch (dbErr) {
        console.warn("Supabase webhook update note:", dbErr);
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("Razorpay webhook error:", err);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
