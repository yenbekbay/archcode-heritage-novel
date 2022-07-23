import asyncPreloader from 'async-preloader'
import {PromisePool} from '@supercharge/promise-pool'
import React from 'react'
import {useResult, useStableCallback} from '../../../hooks'

export function usePreloadAssets(
  assets: Record<string, string | {src: string}>,
  {
    concurrency,
    onLoaded,
  }: {
    concurrency?: number
    onLoaded?: () => void
  } = {},
) {
  const [res, setRes] = useResult<Error, undefined>()
  const [progress, setProgress] = React.useState(0)
  const handleLoaded = useStableCallback(onLoaded ?? (() => {}))
  React.useEffect(() => {
    requestIdleCallback(async () => {
      try {
        await preloadAssets(
          Object.values(assets).map((a) => (typeof a === 'object' ? a.src : a)),
          {concurrency, onProgress: setProgress},
        )
        setRes({status: 'success', data: undefined})
        handleLoaded()
      } catch (err) {
        setRes({
          status: 'failure',
          error: err instanceof Error ? err : new Error(String(err)),
        })
      }
    })
  }, [assets, concurrency, handleLoaded, setRes])
  return [res, progress] as const
}

async function preloadAssets(
  srcs: string[],
  {
    concurrency = srcs.length,
    onProgress,
  }: {
    concurrency?: number
    onProgress?: (progress: number) => void
  } = {},
) {
  let loadedCount = 0
  await PromisePool.withConcurrency(concurrency)
    .onTaskFinished(() => {
      loadedCount += 1
      onProgress?.(loadedCount / srcs.length)
    })
    .for(srcs)
    .process((src) => asyncPreloader.loadItem({src}))
}

const requestIdleCallback =
  window.requestIdleCallback || requestIdleCallbackShim

// Shim from https://developers.google.com/web/updates/2015/08/using-requestidlecallback
function requestIdleCallbackShim(cb: IdleRequestCallback) {
  const start = Date.now()
  return setTimeout(() => {
    cb({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start))
      },
    })
  }, 1)
}
