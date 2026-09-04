import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, ccpNumber } = body;

    const withdrawalId = `W-${Math.floor(1000 + Math.random() * 9000)}`;

    return NextResponse.json({
      status: "success",
      message: "Affiliate cashout request initiated successfully.",
      withdrawalId,
      amount,
      ccpNumber,
      requestedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Failed to initiate cashout request" },
      { status: 400 }
    );
  }
}
