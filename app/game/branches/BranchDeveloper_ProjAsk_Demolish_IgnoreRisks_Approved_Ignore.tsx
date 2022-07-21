import {
  archkot13Png,
  bgAskAfterJpg,
  bgAskBeforeFenceGif,
  bgDeveloperHqInsideJpg,
  bgSolidJpg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchDeveloper_ProjAsk_Demolish_IgnoreRisks_Approved_Ignore() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot13Png, align: 'bottom'}}>
        —Ну как же так…
      </Say>

      <Scene src={bgAskBeforeFenceGif} durationMs={6000} />
      <Scene src={bgAskAfterJpg} />

      <Say>Вы успешно реконструировали АСК</Say>

      <Say>
        Здание утратило первоначальный облик и больше не представляет
        исторической ценности. Теперь Вам будет сложнее работать с
        общественностью
      </Say>

      <Scene src={bgSolidJpg} />

      <Say durationMs={8000}>
        {'В память об архитекторе Александре Коржемпо\n1934-2022'}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
