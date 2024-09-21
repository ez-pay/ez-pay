import { createServerClient } from '@supabase/ssr';

export function createClient() {
    console.log("x is ", process.env.SUPABASE_URL!)
    console.log("y is  ", process.env.SUPABASE_SERVICE_ROLE_KEY!)
   
  return createServerClient(
    "https://dxmxfoeeogrqmppxgryc.supabase.co",
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4bXhmb2Vlb2dycW1wcHhncnljIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjcyMzQ3OSwiZXhwIjoyMDQyMjk5NDc5fQ.L6ioX3jWMueXDvg33r_IC_zeTXROaks1Ed2Yv7YPgsI",
   
    {
      cookies: {
        getAll() {
          return [];  // Return an empty array for getAll
        },
        setAll() {
          // Empty function to satisfy type requirements, no-op
        },
      },
    }
  );
}
