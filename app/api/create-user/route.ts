import { NextResponse } from "next/server";
import db from "@/db";
import { usersTable } from "@/schema";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const result = await db.insert(usersTable).values({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email
  });
  return NextResponse.json({ ok: true, result });
}