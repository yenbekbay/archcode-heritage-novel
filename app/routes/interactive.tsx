import {useNavigate} from '@remix-run/react'
import * as assets from '~/assets/game'
import {Game, Scene} from '~/lib'
import {scenes} from '~/scenes'

export default function Interactive() {
  const navigate = useNavigate()
  return (
    <Game
      assets={Object.values(assets)}
      initialSceneId="Intro"
      onClose={() => navigate('/')}>
      {Object.entries(scenes).map(([id, SceneComp]) => (
        <Scene key={id} id={id as SceneId}>
          <SceneComp />
        </Scene>
      ))}
    </Game>
  )
}
