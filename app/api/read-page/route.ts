import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const body = await request.json();

  const response = await axios.get(body.url);

  const index = response.data.indexOf('Shopify.shop = ')
  const start = index + 16
  const end = start + 23
  const url = response.data.slice(start, end)

  return NextResponse.json({ url })

}