import {
  angryCrowd1Png,
  angryCrowd2Png,
  bgCityHallMayorOfficeJpg,
  bgPhoneFingerJpg,
  bgZheltoksanAfterJpg,
  bgZheltoksanBeforeFenceGif,
  bgZheltoksanBeforeJpg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_ProjZheltoksan_Approve_AskHelp() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} />

      <Say
        image={{
          uri: bgPhoneFingerJpg.src,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.5)',
          },
        }}>
        “Ребята, напишите, что реконструкция крутая”
      </Say>

      <Scene src={bgZheltoksanBeforeJpg.src} />

      <Say image={{uri: angryCrowd1Png.src, align: 'bottom'}}>
        {'—Надувательство\n\n—Бред собачий'}
      </Say>

      <Say image={{uri: angryCrowd2Png.src, align: 'bottom'}}>
        —Продажные чуваки
      </Say>

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
