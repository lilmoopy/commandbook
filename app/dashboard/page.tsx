'use client';

import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useState } from 'react';


export default function DashboardPage() {

  const [outputUrl, setOutputUrl] = useState();
  const [url, setUrl] = useState('');

  return (
    <>

      <h2>Dashboard</h2>

      <form onSubmit={async (event) => {
        event.preventDefault();

        console.log("submitted", url)

        const pageResponse = await axios.post('/api/read-page', { url })
        console.log("OUTPUT:", pageResponse.data);

        setOutputUrl(pageResponse.data.url);
      }}>

        <input placeholder="https://..." value={url} onChange={(event) => {
          setUrl(event.target.value);
        }} />
        <Button type="submit">Submit</Button>
      </form>

      <div className="flex gap-2 items-center">
        <p>{outputUrl}</p>
        {outputUrl && <Button onClick={async () => {

          const body = { url: outputUrl }
          const response = await axios.post("/api/approve-url", body)
          console.log("data", response.data)

        }}>Approve</Button>}

      </div>

    </>
  )
}