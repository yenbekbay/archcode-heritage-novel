import {useNavigate} from '@remix-run/react'
import loadAsset from 'load-asset'
import {ArrowLeft as ArrowLeftIcon, X as XIcon} from 'phosphor-react'
import React from 'react'
import {MobileDeviceChrome} from '~/components'
import {assets, MyGame} from '~/game'
import type {GameInstance} from '~/game/components'
import {Media, useResult} from '~/lib'

export default function Interactive() {
  const navigate = useNavigate()
  const gameRef = React.useRef<GameInstance>(null)
  return (
    <div className="h-screen">
      <div className="absolute top-4 left-4 z-10 flex space-x-2">
        <button
          className="btn btn-ghost btn-circle bg-white text-xl shadow-md"
          onClick={() => navigate('/')}>
          <XIcon />
        </button>

        <button
          className="btn btn-ghost btn-circle bg-white text-xl shadow-md"
          onClick={() => gameRef.current?.goBack()}>
          <ArrowLeftIcon />
        </button>
      </div>

      <Media className="h-full w-full" at="sm">
        <WithAssets>
          <MyGame ref={gameRef} />
        </WithAssets>
      </Media>

      <Media className="h-full w-full" greaterThan="sm">
        <MobileDeviceChrome>
          <WithAssets>
            <MyGame ref={gameRef} />
          </WithAssets>
        </MobileDeviceChrome>
      </Media>
    </div>
  )
}

// MARK: WithAssets

interface WithAssetsProps {
  children: React.ReactNode
}

function WithAssets({children}: WithAssetsProps) {
  const [res, setRes] = useResult<Error, undefined>()
  const [progress, setProgress] = React.useState(0)
  React.useEffect(() => {
    ;(async () => {
      try {
        await loadAsset.all([...assets], (info) => setProgress(info.progress))
        setRes({status: 'success', data: undefined})
      } catch {
        setRes({
          status: 'failure',
          error: new Error('Не удалось загрузить ресурсы'),
        })
      }
    })()
  }, [setRes])

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
