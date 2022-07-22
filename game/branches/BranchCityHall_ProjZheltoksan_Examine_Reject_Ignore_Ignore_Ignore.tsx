import {
  bgZheltoksanAfterJpg,
  bgZheltoksanBeforeFenceGif,
  bgZheltoksanBeforeJpg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_ProjZheltoksan_Examine_Reject_Ignore_Ignore_Ignore() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeJpg.src} />
      <Scene src={bgZheltoksanBeforeFenceGif.src} durationMs={6000} />
      <Scene src={bgZheltoksanAfterJpg.src} />

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
