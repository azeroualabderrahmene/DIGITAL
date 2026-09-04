import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ paymentId: string }> }
) {
  const resolvedParams = await params;
  const paymentId = resolvedParams.paymentId;

  try {
    const body = await request.json();
    const { action, notes } = body;

    if (!["APPROVE", "REJECT"].includes(action)) {
      return NextResponse.json(
        { status: "error", message: "Invalid action type" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      status: "success",
      message: `Payment ${paymentId} has been successfully ${action === "APPROVE" ? "approved" : "rejected"}.`,
      paymentId,
      action,
      notes,
      reviewedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Failed to process payment review" },
      { status: 400 }
    );
  }
}
