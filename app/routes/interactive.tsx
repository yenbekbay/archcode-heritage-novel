import {useNavigate} from '@remix-run/react'
import * as assets from '~/assets/game'
import {Game, prepareBranches} from '~/lib'
import * as _branches from '~/branches'

const branches = prepareBranches(_branches)

declare global {
  type BranchId = keyof typeof branches
}

export default function Interactive() {
  const navigate = useNavigate()
  return (
    <Game
      assets={assets}
      branches={branches}
      initialBranchId="Intro"
      onClose={() => navigate('/')}
    />
  )
}
