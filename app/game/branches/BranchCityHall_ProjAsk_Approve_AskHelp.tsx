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
      <Scene src={bgCityHallMayorOfficeJpg} />

      <Say
        image={{
          uri: bgPhoneFingerJpg,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.5)',
          },
        }}>
        “Ребята, напишите, что реконструкция крутая”
      </Say>

      <Scene src={bgAskBeforeJpg} />

      <Say image={{uri: angryCrowd1Png, align: 'bottom'}}>
        {'—Надувательство\n\n—Бред собачий'}
      </Say>

      <Say image={{uri: angryCrowd2Png, align: 'bottom'}}>
        —Продажные чуваки
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
