import {
  angryCrowd1Png,
  angryCrowd2Png,
  bgCityHallMayorOfficeJpg,
  bgPhoneFingerJpg,
  bgZheltoksanAfterJpg,
  bgZheltoksanBeforeFenceGif,
  bgZheltoksanBeforeJpg,
} from 'assets/game'
import {Branch, Say, Scene} from 'lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjZheltoksan_Approve_AskHelp() {
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

      <Scene src={bgZheltoksanBeforeJpg.src} audio={SCENE_AUDIO.city} />

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
        src={bgZheltoksanBeforeFenceGif.src}
        audio={SCENE_AUDIO.city}
        durationMs={6000}
      />
      <Scene src={bgZheltoksanAfterJpg.src} audio={SCENE_AUDIO.calmLoop} />

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
