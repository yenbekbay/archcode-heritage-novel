import loadAsset from 'load-asset'
import React from 'react'
import {useResult, useStableCallback} from '../../../hooks'

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
        const srcs = Object.values(assets).map((a) =>
          typeof a === 'object' ? a.src : a,
        )
        await loadAsset.all(srcs, (info) => setProgress(info.progress))
        setRes({status: 'success', data: undefined})
        onLoaded()
      } catch {
        setRes({
          status: 'failure',
          error: new Error('Не удалось загрузить ресурсы'),
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

        <pre className="alert alert-error whitespace-pre-line font-mono">
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
