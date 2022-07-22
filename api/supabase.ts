import type {SupabaseClient} from '@supabase/supabase-js'
import {createClient} from '@supabase/supabase-js'

let supabase: SupabaseClient | undefined

export function getSupabase() {
  if (supabase) {
    return supabase
  }

  supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      fetch: fetch.bind(globalThis),
    },
  )
  return supabase
}

export * from '../__generated__/supabase'
