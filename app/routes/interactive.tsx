import {useNavigate} from '@remix-run/react'
import * as assets from '~/assets/game'
import {Game} from '~/lib'
import {scenes} from '~/scenes'

export default function Interactive() {
  const navigate = useNavigate()
  return (
    <Game
      assets={Object.values(assets)}
      scenes={scenes}
      initialSceneId="Intro"
      onClose={() => navigate('/')}
    />
  )
}
