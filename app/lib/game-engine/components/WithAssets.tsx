import loadAsset from 'load-asset'
import React from 'react'
import {useResult} from '~/lib'

export interface WithAssetsProps {
  assets: string[]
  children: React.ReactNode
}

export function WithAssets({assets, children}: WithAssetsProps) {
  const [res, setRes] = useResult<Error, undefined>()
  const [progress, setProgress] = React.useState(0)
  React.useEffect(() => {
    ;(async () => {
      try {
        await loadAsset.all(assets, (info) => setProgress(info.progress))
        setRes({status: 'success', data: undefined})
      } catch {
        setRes({
          status: 'failure',
          error: new Error('Не удалось загрузить ресурсы'),
        })
      }
    })()
  }, [assets, setRes])

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
