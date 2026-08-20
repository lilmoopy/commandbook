import { Resend } from 'resend';
import { NextResponse } from 'next/server';


const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {


  const result = await resend.emails.send({
    from: 'noreply@commandbook.app',
    to: 'tom@coldchain3pl.com',
    subject: 'hello',
    html: '<p>paragraph</p>'
  })

  return NextResponse.json({ ok: true, result });

}