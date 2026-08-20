import { NextResponse } from "next/server";
import db from "@/db";
import { usersTable } from "@/schema";
import bcrypt from "bcryptjs";


export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(body.password, salt);
  const result = await db.insert(usersTable).values({
    email: body.email,
    password: hash
  });
  return NextResponse.json({ ok: true, result });

}