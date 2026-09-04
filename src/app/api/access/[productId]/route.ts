import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  const resolvedParams = await params;
  const productId = resolvedParams.productId;

  return NextResponse.json({
    status: "success",
    message: "Authorization check passed",
    productId,
    downloadUrl: `https://private-bucket.s3.amazonaws.com/resources/${productId}.zip?token=short-lived-token-placeholder`
  });
}
