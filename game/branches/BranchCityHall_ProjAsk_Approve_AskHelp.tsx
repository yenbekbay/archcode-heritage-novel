import {
  angryCrowd1Png,
  angryCrowd2Png,
  bgAskAfterJpg,
  bgAskBeforeFenceGif,
  bgAskBeforeJpg,
  bgCityHallMayorOfficeJpg,
  bgPhoneFingerJpg,
  bgSolidJpg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_ProjAsk_Approve_AskHelp() {
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

      <Scene src={bgAskBeforeJpg.src} />

      <Say image={{uri: angryCrowd1Png.src, align: 'bottom'}}>
        {'—Надувательство\n\n—Бред собачий'}
      </Say>

      <Say image={{uri: angryCrowd2Png.src, align: 'bottom'}}>
        —Продажные чуваки
      </Say>

      <Scene src={bgAskBeforeFenceGif.src} durationMs={6000} />
      <Scene src={bgAskAfterJpg.src} />

      <Say>Вы успешно реконструировали АСК</Say>

      <Say>
        Здание утратило первоначальный облик и больше не представляет
        исторической ценности. Теперь Вам будет сложнее работать с
        общественностью
      </Say>

      <Scene src={bgSolidJpg.src} />

      <Say durationMs={8000}>
        {'В память об архитекторе Александре Коржемпо\n1934-2022'}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
