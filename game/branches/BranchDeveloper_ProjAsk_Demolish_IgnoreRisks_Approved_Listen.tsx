import {
  archbot1Png,
  bgArchcodeOfficeJpg,
  bgAskAfterAltJpg,
  bgAskBeforeFenceGif,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  bgSolidJpg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_ProjAsk_Demolish_IgnoreRisks_Approved_Listen() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say>Встреча с общественностью прошла успешно!</Say>

      <Scene src={bgDeveloperHqOutsideJpg.src} audio={SCENE_AUDIO.city} />

      <Say>
        АрхТок, АрхБот и АрхКот договорились с девелопером о том, что будут
        встречаться в процессе работы и обсуждать процесс стройки
      </Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        {'А вот и протоколы встреч\n\n[Ссылки](#)'}
      </Say>

      <Scene
        src={bgAskBeforeFenceGif.src}
        audio={SCENE_AUDIO.city}
        durationMs={6000}
      />
      <Scene src={bgAskAfterAltJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        Поздравляем! Облик здания сохранен! Ваши усилия не были напрасны, и вот
        результат — деликатная реставрация объекта
      </Say>

      <Say>
        Здание АСК при внесении в список памятников может стать новым активом.
        Обновленное здание с первозданным обликом привлекает всё больше туристов
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
