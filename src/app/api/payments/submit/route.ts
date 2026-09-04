import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planSlug, referenceNote, fileName } = body;

    // Simulated payment record creation
    const paymentId = `PAY-${Math.floor(1000 + Math.random() * 9000)}`;

    return NextResponse.json({
      status: "success",
      message: "Payment receipt submitted successfully for review.",
      paymentId,
      details: {
        planSlug,
        referenceNote,
        fileName,
        submittedAt: new Date().toISOString(),
        estimatedReviewTime: "1-2 hours",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Failed to submit receipt" },
      { status: 400 }
    );
  }
}
