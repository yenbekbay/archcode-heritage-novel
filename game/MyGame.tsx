import * as assets from 'assets/game'
import {useRouter} from 'next/router'
import React from 'react'
import {Game, prepareBranches} from 'react-visual-novel'
import * as _branches from './branches'
import type {Link} from './LinkPrompt'
import {LinkPrompt} from './LinkPrompt'
import {MobileDeviceChrome} from './MobileDeviceChrome'
import {playSound} from './sounds'

const branches = prepareBranches(_branches)

type MyBranches = typeof branches
declare module 'react-visual-novel' {
  interface Branches extends MyBranches {}
}

export default function MyGame() {
  const router = useRouter()
  const [activeLink, setActiveLink] = React.useState<Link | null>(null)
  return (
    <>
      <MobileDeviceChrome>
        <Game
          assets={assets}
          branches={branches}
          initialBranchId="Intro"
          onGoToRoot={() => router.push('/')}
          onLinkClick={(href, name, event) => {
            if (href.startsWith('http')) {
              event.preventDefault()
              setActiveLink({href, name})
            } else {
              // noop
            }
          }}
          onPlaySound={playSound}
        >
          {(render, res, progress) => {
            if (res.status === 'loading') {
              return (
                <div className="prose flex h-full w-full max-w-none flex-col justify-center p-8">
                  <h1 className="text-center text-xl">Загрузка…</h1>
                  <progress
                    value={progress * 100}
                    max={100}
                    className="progress w-full"
                  />
                </div>
              )
            }
            if (res.status === 'failure') {
              return (
                <div className="prose flex h-full w-full max-w-none flex-col justify-center p-8">
                  <h1 className="text-xl">Не удалось загрузить ресурсы</h1>

                  <pre className="alert alert-error items-start whitespace-pre-line font-mono">
                    {res.error.message}
                  </pre>
                </div>
              )
            }
            return <div className="flex h-full w-full flex-col">{render()}</div>
          }}
        </Game>
      </MobileDeviceChrome>

      <LinkPrompt link={activeLink} onClose={() => setActiveLink(null)} />
    </>
  )
}
