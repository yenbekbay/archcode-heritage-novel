import {
  assistant3Png,
  bgAskAfterAltJpg,
  bgAskBeforeFenceGif,
  bgDeveloperHqInsideJpg,
  bgSolidJpg,
  mayor1Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchCityHall_ProjAsk_Examine_Reject_Intervene() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'Работник акимата:', color: '#687065'}}
        image={{uri: assistant3Png.src, align: 'bottom'}}>
        —Мы предоставим группу сотрудников для ведения мониторинга
      </Say>

      <Say
        tag={{text: 'Работник акимата:', color: '#687065'}}
        image={{uri: mayor1Png.src, align: 'bottom'}}>
        —Отлично, договоримся о серии встреч с девелопером
      </Say>

      <Say>
        и прошли обсуждения, где обсуждали, реставрация ли, реконструкция ли, и
        какое стекло важнее
      </Say>

      <Scene
        src={bgAskBeforeFenceGif.src}
        audio={SCENE_AUDIO.city}
        durationMs={6000}
      />
      <Scene src={bgAskAfterAltJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>Вы успешно реконструировали АСК</Say>

      <Say>
        ПОЗДРАВЛЯЕМ! Реставрация объекта завершена. У вашего отдела новые
        перспективы. Тема памятников двигается на городской, а затем и на
        государственный уровень. Вам удалось простроить схему взаимодействия с
        общественностью в дальнейшем
      </Say>

      <Scene src={bgSolidJpg.src} />

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
