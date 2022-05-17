import JsonURL from '@jsonurl/jsonurl'
import {useSyncedRef} from '@react-hookz/web'
import {useSearchParams} from '@remix-run/react'
import React from 'react'
import {omit} from 'remeda'

export function useSearchParam<T>(key: string, defaultValue: T) {
  const [searchParams, setSearchParams] = useSearchParams()
  const raw = searchParams.get(key)
  const parsed = React.useMemo(() => {
    try {
      return raw == null ? defaultValue : (JsonURL.parse(raw) as T)
    } catch {
      return defaultValue
    }
  }, [defaultValue, raw])

  const latestRawRef = useSyncedRef(raw)
  const latestParsedRef = useSyncedRef(parsed)
  const setValue = React.useCallback(
    (action: React.SetStateAction<T>) => {
      const newValue =
        typeof action === 'function'
          ? (action as (prev: T) => T)(latestParsedRef.current)
          : action
      const newSerializedValue = JsonURL.stringify(newValue)
      if (newSerializedValue === latestRawRef.current) {
        return
      }

      const latestSearchParams = Object.fromEntries(
        new URLSearchParams(window.location.search).entries(),
      )
      setSearchParams(
        newValue === defaultValue || newSerializedValue === undefined
          ? omit(latestSearchParams, [key])
          : {...latestSearchParams, [key]: newSerializedValue},
      )
    },
    [defaultValue, key, latestParsedRef, latestRawRef, setSearchParams],
  )

  return [parsed, setValue] as const
}
