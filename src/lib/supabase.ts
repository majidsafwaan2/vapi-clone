import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Use fallback values for deployment if env vars are not set
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo.supabase.co'
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-key'
  
  return createBrowserClient(
    supabaseUrl,
    supabaseKey
  )
}
