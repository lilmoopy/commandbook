import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(request: NextRequest) {
  const shop = request.nextUrl.searchParams.get("shop");

  // 1. Define requested permissions
  const scopes = "read_products,read_orders"; // Adjust as needed
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/shopify/callback`;

  // 2. Generate a secure, unguessable state parameter (nonce) to prevent CSRF
  const state = crypto.randomBytes(16).toString("hex");

  // 3. Store state in an HTTP-only cookie to verify on return
  const response = NextResponse.redirect(
    `https://${shop}/admin/oauth/authorize?client_id=${process.env.SHOPIFY_API_KEY}&scope=${scopes}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`,
  );

  response.cookies.set("shopify_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return response;
}
