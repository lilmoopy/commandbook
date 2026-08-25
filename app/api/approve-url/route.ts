import { ok } from "assert";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const body = await request.json();

  console.log("BODY URL", body.url)

  return NextResponse.json({ ok: true });

}