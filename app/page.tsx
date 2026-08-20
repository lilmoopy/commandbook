'use client';

import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
export default function Homepage() {

  return (
    <>
      <h1 className="text-3xl">commandbook</h1>

      <Link href="/register">Register</Link>


    </>
  )


}