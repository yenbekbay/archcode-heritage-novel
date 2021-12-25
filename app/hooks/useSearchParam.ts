import JsonURL from '@jsonurl/jsonurl'
import React from 'react'
import {useSearchParams} from 'remix'
import {useUpdateEffect} from 'usehooks-ts'

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

  const latestParsedRef = React.useRef(parsed)
  useUpdateEffect(() => {
    latestParsedRef.current = parsed
  }, [parsed])

  const setValue = React.useCallback(
    (action: React.SetStateAction<T>) => {
      const newValue =
        typeof action === 'function'
          ? (action as (prev: T) => T)(latestParsedRef.current)
          : action
      const newSerializedValue = JsonURL.stringify(newValue)
      setSearchParams(
        newSerializedValue === undefined ? {} : {[key]: newSerializedValue},
      )
    },
    [key, setSearchParams],
  )

  return [parsed, setValue] as const
}
