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
} from '~/assets/game'
import {Branch, Play, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sound'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_Submit() {
  return (
    <Branch>
      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot9Png.src, align: 'bottom'}}>
        {'—Мы сами можем разобраться! Памятниками должны стать…\n\n[Ссылка](#)'}
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot9Png.src, align: 'bottom'}}>
        {'—Хмм…\n\n[Ссылка 9*10](#)'}
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
        {
          '—Идея! Мы проведем опрос среди горожан. Я уже составил пару вопросов\n\n[Ссылка СМИ*4](#)'
        }
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok1Png.src, align: 'bottom'}}>
        —Ну, неплохо… А вообще конечно, есть Конвенция ЮНЕСКО…. Вполне логичный
        вариант — опираться на нее
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
        {
          '—Погоди…Теперь необходимо провести экспертизу\n\n[Ссылка на закон об экспертизе *7](#)'
        }
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot11Png.src, align: 'bottom'}}>
        —Фух…
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        {
          '—Поздравляем! документы готовы\n\n[Ссылка написать письмо акиму с пакетом документов](#)'
        }
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

      <Play audio={SCENE_AUDIO.calmLoop} hide={-1} />

      {/** FIXME */}
      <Say hide={-1}>Продолжение следует…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
