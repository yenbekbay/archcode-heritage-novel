// Adapted from https://github.com/pie6k/use-method/blob/ab3ecb22193793591d259e0b3ea9ef0d20a14ce1/src/index.ts
import React from 'react'

type Callback<TArgs extends any[], TResult> = (...args: TArgs) => TResult

/**
 * Creates callback that keeps the same reference during entire lifecycle of the
 * component while having access to fresh variables values on every call
 */
export function useStableCallback<TArgs extends any[], TResult>(
  callback: Callback<TArgs, TResult>,
) {
  const callbackRef = React.useRef<Callback<TArgs, TResult>>(callback)
  React.useLayoutEffect(() => {
    callbackRef.current = callback
  })
  return React.useCallback((...args: TArgs) => callbackRef.current(...args), [])
}
