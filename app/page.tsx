'use client';

import { Button } from "@/components/ui/button";
import axios from "axios";
export default function Homepage() {

  return (
    <>
      <h1 className="text-3xl">Homepage</h1>
      <Button onClick={async () => {
        const response = await axios.post('/api/create-user', {

          firstName: "david",
          lastName: "stephenson",
          email: "david@davidystephenson.com"
        })
        console.log(response.data);
      }}> Hello</Button>
    </>
  )


}