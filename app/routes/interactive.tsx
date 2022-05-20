import {useNavigate} from '@remix-run/react'
import * as assets from '~/assets/game'
import {Game, prepareScenes} from '~/lib'
import * as _scenes from '~/scenes'

const scenes = prepareScenes(_scenes)

declare global {
  type SceneId = keyof typeof scenes
}

export default function Interactive() {
  const navigate = useNavigate()
  return (
    <Game
      assets={assets}
      scenes={scenes}
      initialSceneId="Intro"
      onClose={() => navigate('/')}
    />
  )
}
