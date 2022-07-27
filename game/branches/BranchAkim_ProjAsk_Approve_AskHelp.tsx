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
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjAsk_Approve_AskHelp() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

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

      <Scene src={bgAskBeforeJpg.src} audio={SCENE_AUDIO.city} />

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={SCENE_AUDIO.chatter}>
        {`
          —Надувательство

          —Бред собачий
        `}
      </Say>

      <Say
        image={{uri: angryCrowd2Png.src, align: 'bottom'}}
        audio={SCENE_AUDIO.chatter}>
        —Продажные чуваки
      </Say>

      <Scene
        src={bgAskBeforeFenceGif.src}
        audio={SCENE_AUDIO.city}
        durationMs={6000}
      />
      <Scene src={bgAskAfterJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>Вы успешно реконструировали АСК</Say>

      <Say>
        Здание утратило первоначальный облик и больше не представляет
        исторической ценности. Теперь Вам будет сложнее работать с
        общественностью
      </Say>

      <Scene src={bgSolidJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say durationMs={8000}>
        {`
          В память об архитекторе Александре Коржемпо
          1934-2022
        `}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
