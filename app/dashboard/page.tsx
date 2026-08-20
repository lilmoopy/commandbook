'use client';

import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useState } from 'react';


export default function DashboardPage() {

  const [url, setUrl] = useState('');

  return (
    <>

      <h2>Dashboard</h2>



      <form onSubmit={async (event) => {

        event.preventDefault();

        console.log("submitted", url)

        const pageResponse = await axios.post('/api/read-page', { url })
        console.log(pageResponse.data)

      }}>

        <input placeholder="https://..." value={url} onChange={(event) => {
          setUrl(event.target.value);
        }} />
        <Button type="submit">Submit</Button>

      </form>

    </>
  )
}