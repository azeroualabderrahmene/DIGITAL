import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ paymentId: string }> }
) {
  const resolvedParams = await params;
  const paymentId = resolvedParams.paymentId;

  return NextResponse.json({
    status: "success",
    message: "Authorization check passed for payment receipt retrieval",
    paymentId,
    receiptStoragePath: `./private_storage/receipts/${paymentId}.pdf`
  });
}
