// Adapted from https://github.com/pie6k/use-method/blob/ab3ecb22193793591d259e0b3ea9ef0d20a14ce1/src/index.ts
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Callback<TArgs extends any[], TResult> = (...args: TArgs) => TResult

/**
 * Creates callback that keeps the same reference during entire lifecycle of the
 * component while having access to fresh variables values on every call
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useStableCallback<TArgs extends any[], TResult>(
  callback: Callback<TArgs, TResult>,
) {
  const callbackRef = React.useRef<Callback<TArgs, TResult>>(callback)
  React.useLayoutEffect(() => {
    callbackRef.current = callback
  })
  return React.useCallback((...args: TArgs) => callbackRef.current(...args), [])
}
