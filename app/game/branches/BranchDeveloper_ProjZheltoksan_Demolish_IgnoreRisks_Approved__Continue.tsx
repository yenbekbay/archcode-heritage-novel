import {bgZheltoksanAfterJpg, bgZheltoksanBeforeFenceGif} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchDeveloper_ProjZheltoksan_Demolish_IgnoreRisks_Approved__Continue() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeFenceGif} durationMs={6000} />

      <Scene src={bgZheltoksanAfterJpg} />

      <Say>Вы успешно реконструировали Желтоксан 115</Say>

      <Say>
        Здание утратило первоначальный облик и больше не представляет
        исторической ценности. Арендаторы находятся с трудом, половина помещений
        ещё долго пустуют. Понизился уровень доверия общественности к Вам
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
