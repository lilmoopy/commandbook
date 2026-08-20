'use client';

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

export default function Register() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <form onSubmit={async (event) => {

        event.preventDefault();

        const response = await axios.post('/api/create-user', {
          firstName,
          lastName,
          email
        })
        console.log(response.data);

      }}>
        <input placeholder="First Name" value={firstName} onChange={(event) => {
          setFirstName(event.target.value)
        }} />
        <input placeholder="Last Name" value={lastName} onChange={(event) => {
          setLastName(event.target.value);
        }} />
        <input placeholder="email" value={email} onChange={(event) => {
          setEmail(event.target.value);
        }} />
        <Button type="submit">Register</Button>
      </form>
    </>
  )
}