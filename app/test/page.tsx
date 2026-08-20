'use client';

import { Button } from '@/components/ui/button';
import axios from 'axios';

export default function TestPage() {

  return (
    <>
      <Button onClick={async () => {
        await axios.post('/api/send-email/')
      }}>
        test
      </Button>
    </>

  )
}