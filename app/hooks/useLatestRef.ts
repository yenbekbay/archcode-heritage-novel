import React from 'react'
import {useUpdateEffect} from 'usehooks-ts'

export function useLatestRef<T>(value: T): React.MutableRefObject<T> {
  const valueRef = React.useRef(value)
  useUpdateEffect(() => {
    valueRef.current = value
  }, [value])
  return valueRef
}
