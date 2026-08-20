'use client';

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function Register() {

  const router = useRouter();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <form onSubmit={async (event) => {

        event.preventDefault();

        const response = await axios.post('/api/create-user', {
          email, password
        })
        console.log(response.data);

        router.push('/dashboard')

      }}>


        <input placeholder="email" value={email} onChange={(event) => {
          setEmail(event.target.value);
        }} />
        <input placeholder="password" value={password} onChange={(event) => {
          setPassword(event.target.value);
        }} />



        <Button type="submit">Register</Button>
      </form>
    </>
  )
}