import React from 'react'
import {useResult, useStableCallback} from '../../../hooks'
import {preloadAssets} from './preload-assets'

export interface WithAssetsProps {
  assets: Record<string, string | {src: string}>
  children: React.ReactNode
  onLoaded?: () => void
}

export function WithAssets({
  assets,
  children,
  onLoaded: _onLoaded,
}: WithAssetsProps) {
  const [res, setRes] = useResult<Error, undefined>()
  const [progress, setProgress] = React.useState(0)
  const onLoaded = useStableCallback(_onLoaded ?? (() => {}))
  React.useEffect(() => {
    ;(async () => {
      try {
        preloadAssets(
          Object.values(assets).map((a) => (typeof a === 'object' ? a.src : a)),
          setProgress,
        )
        setRes({status: 'success', data: undefined})
        onLoaded()
      } catch (err) {
        setRes({
          status: 'failure',
          error: err instanceof Error ? err : new Error(String(err)),
        })
      }
    })()
  }, [assets, onLoaded, setRes])

  if (res.status === 'loading') {
    return (
      <div className="prose flex h-full w-full flex-col items-center justify-center space-y-2 p-8">
        <span>Загрузка…</span>
        <progress
          className="progress w-full"
          value={progress * 100}
          max={100}
        />
      </div>
    )
  }
  if (res.status === 'failure') {
    return (
      <div className="prose flex h-full w-full flex-col items-center justify-center space-y-2 p-8">
        <h1>Что-то пошло не так!</h1>

        <pre className="alert alert-error items-start whitespace-pre-line font-mono">
          {res.error.message}
        </pre>

        <p>
          Мы уже в курсе этой ошибки, и постараемся её исправить как можно
          скорее.
        </p>
      </div>
    )
  }
  return <>{children}</>
}
