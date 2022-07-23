import React from 'react'
import {usePreloadAssets} from './usePreloadAssets'

export interface WithAssetsProps {
  assets: Record<string, string | {src: string}>
  children: React.ReactNode
  onLoaded?: () => void
}

export function WithAssets({assets, children, onLoaded}: WithAssetsProps) {
  const [res, progress] = usePreloadAssets(assets, {onLoaded})
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
