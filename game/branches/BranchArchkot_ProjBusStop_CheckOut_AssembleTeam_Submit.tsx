import {
  archbot1Png,
  archbot2Png,
  archbot3Png,
  archkot11Png,
  archkot12Png,
  archkot9Png,
  archtok1Png,
  archtok2Png,
  bgArchcodeOfficeJpg,
  bgBusStop1Jpg,
} from 'assets/game'
import {Branch, Say, Scene} from 'lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_Submit() {
  return (
    <Branch>
      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot9Png.src, align: 'bottom'}}>
        {`
          —Мы сами можем разобраться! Памятниками должны стать…

          [Правила выявления памятников](${LINKS.monument_detection_rules})
        `}
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot9Png.src, align: 'bottom'}}>
        {`
          —Хмм… Посмотрим критерии ЮНЕСКО?

          [Конвенция ЮНЕСКО](${LINKS.monument_criteria_unesco})
        `}
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok1Png.src, align: 'bottom'}}>
        —На самом деле, точных критериев, по которым можно определить, какие
        здания внести в список памятников нет, поэтому…
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot2Png.src, align: 'bottom'}}>
        {`
          —Идея! Мы проведем опрос среди горожан. Я уже составил пару вопросов

          [Опрос](${LINKS.poll_monument_criteria})
        `}
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok1Png.src, align: 'bottom'}}>
        {`
          —Ну, неплохо… А вообще конечно, есть Конвенция ЮНЕСКО… Вполне логичный вариант — опираться на нее

          [Конвенция ЮНЕСКО](${LINKS.monument_criteria_unesco})
        `}
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot3Png.src, align: 'bottom'}}>
        —Мы составили список зданий, необходимых для внесения в список....
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot12Png.src, align: 'bottom'}}>
        —Дааааа! Можем нести его в акимат!
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok2Png.src, align: 'bottom'}}>
        {`
          —Погоди…Теперь необходимо провести экспертизу

          [Закон об экспертизе](${LINKS.expertise_rules})
        `}
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot11Png.src, align: 'bottom'}}>
        —Фух…
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        {`
          —Поздравляем! документы готовы

          [Письмо в акимат](${LINKS.letter_bus_stop})
        `}
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot11Png.src, align: 'bottom'}}>
        —Не всё так просто в этом мире, милый кот. Не всё так просто в этом
        городе
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot9Png.src, align: 'bottom'}}>
        —Нееет, я не отчаиваюсь…
      </Say>

      <Scene src={bgBusStop1Jpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        {`
          Объект сохранен, но так и не стал памятником историко-культурного наследия

          [Статья о том, как это происходило](${LINKS.article_bus_stop_restoration})

          [Пост в Инстаграме](${LINKS.instagram_post_bus_stop_restoration})
        `}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
