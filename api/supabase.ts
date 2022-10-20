import type {SupabaseClient} from '@supabase/supabase-js'
import {createClient} from '@supabase/supabase-js'

let supabase: SupabaseClient | undefined

export function getSupabase() {
  if (supabase) {
    return supabase
  }

  supabase = createClient(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    process.env['NEXT_PUBLIC_SUPABASE_URL']!,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY']!,
    {
      fetch: fetch.bind(globalThis),
    },
  )
  return supabase
}

export * from '../__generated__/supabase'
