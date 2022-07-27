import {useRouter} from 'next/router'
import React from 'react'
import * as assets from 'assets/game'
import {Game, prepareBranches} from 'lib/game-engine'
import * as _branches from './branches'
import type {Link} from './LinkPrompt'
import {LinkPrompt} from './LinkPrompt'
import {playSound} from './sounds'

const branches = prepareBranches(_branches)

declare global {
  type BranchId = keyof typeof branches
}

export default function MyGame() {
  const router = useRouter()
  const [activeLink, setActiveLink] = React.useState<Link | null>(null)
  return (
    <>
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
      />

      <LinkPrompt link={activeLink} onClose={() => setActiveLink(null)} />
    </>
  )
}
