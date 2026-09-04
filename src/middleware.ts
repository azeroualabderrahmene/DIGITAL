import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Log requests for auditing and trace matching the security threat model
  console.log(`[Middleware Check] Route accessed: ${path}`);

  // In future phases:
  // 1. Fetch NextAuth session token
  // 2. If path is /admin/*, verify user.role === 'ADMIN'
  // 3. If path is /dashboard/* or /checkout/*, verify user.role is MEMBER or AFFILIATE or ADMIN
  // 4. Redirect unauthorized users back to /login

  return NextResponse.next();
}

// Config to apply middleware to security-critical areas
export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/:path*",
    "/checkout/:path*",
    "/api/access/:path*",
    "/api/receipts/:path*",
  ],
};
