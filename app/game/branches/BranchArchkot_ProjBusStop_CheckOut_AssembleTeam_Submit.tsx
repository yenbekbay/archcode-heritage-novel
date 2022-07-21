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
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_Submit() {
  return (
    <Branch>
      <Scene src={bgArchcodeOfficeJpg} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot9Png, align: 'bottom'}}>
        {'—Мы сами можем разобраться! Памятниками должны стать…\n\n[Ссылка](#)'}
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot9Png, align: 'bottom'}}>
        {'—Хмм…\n\n[Ссылка 9*10](#)'}
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok1Png, align: 'bottom'}}>
        —На самом деле, точных критериев, по которым можно определить, какие
        здания внести в список памятников нет, поэтому…
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot2Png, align: 'bottom'}}>
        {
          '—Идея! Мы проведем опрос среди горожан. Я уже составил пару вопросов\n\n[Ссылка СМИ*4](#)'
        }
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok1Png, align: 'bottom'}}>
        —Ну, неплохо… А вообще конечно, есть Конвенция ЮНЕСКО…. Вполне логичный
        вариант — опираться на нее
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot3Png, align: 'bottom'}}>
        —Мы составили список зданий, необходимых для внесения в список....
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot12Png, align: 'bottom'}}>
        —Дааааа! Можем нести его в акимат!
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok2Png, align: 'bottom'}}>
        {
          '—Погоди…Теперь необходимо провести экспертизу\n\n[Ссылка на закон об экспертизе *7](#)'
        }
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot11Png, align: 'bottom'}}>
        —Фух…
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png, align: 'bottom'}}>
        {
          '—Поздравляем! документы готовы\n\n[Ссылка написать письмо акиму с пакетом документов](#)'
        }
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot11Png, align: 'bottom'}}>
        —Не всё так просто в этом мире, милый кот. Не всё так просто в этом
        городе
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot9Png, align: 'bottom'}}>
        —Нееет, я не отчаиваюсь…
      </Say>

      {/** FIXME */}
      <Say hide={-1}>Продолжение следует…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
