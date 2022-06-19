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
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_Submit() {
  return (
    <Branch>
      <Scene src={bgArchcodeOfficeJpg} />

      <Say
        tag="АрхКот:"
        image={{uri: archkot9Png, style: {width: '100%', bottom: 0}}}>
        {'—Мы сами можем разобраться! Памятниками должны стать…\n\n[Ссылка](#)'}
      </Say>

      <Say
        tag="АрхКот:"
        image={{uri: archkot9Png, style: {width: '100%', bottom: 0}}}>
        {'—Хмм…\n\n[Ссылка 9*10](#)'}
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok1Png, style: {width: '100%', bottom: 0}}}>
        —На самом деле, точных критериев, по которым можно определить, какие
        здания внести в список памятников нет, поэтому…
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot2Png, style: {width: '100%', bottom: 0}}}>
        {
          '—Идея! Мы проведем опрос среди горожан. Я уже составил пару вопросов\n\n[Ссылка СМИ*4](#)'
        }
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok1Png, style: {width: '100%', bottom: 0}}}>
        —Ну, неплохо… А вообще конечно, есть Конвенция ЮНЕСКО…. Вполне логичный
        вариант — опираться на нее
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot3Png, style: {width: '100%', bottom: 0}}}>
        —Мы составили список зданий, необходимых для внесения в список....
      </Say>

      <Say
        tag="АрхКот:"
        image={{uri: archkot12Png, style: {width: '100%', bottom: 0}}}>
        —Дааааа! Можем нести его в акимат!
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok2Png, style: {width: '100%', bottom: 0}}}>
        {
          '—Погоди…Теперь необходимо провести экспертизу\n\n[Ссылка на закон об экспертизе *7](#)'
        }
      </Say>

      <Say
        tag="АрхКот:"
        image={{uri: archkot11Png, style: {width: '100%', bottom: 0}}}>
        —Фух…
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot1Png, style: {width: '100%', bottom: 0}}}>
        {
          '—Поздравляем! документы готовы\n\n[Ссылка написать письмо акиму с пакетом документов](#)'
        }
      </Say>

      <Say
        tag="АрхКот:"
        image={{uri: archkot11Png, style: {width: '100%', bottom: 0}}}>
        —Не всё так просто в этом мире, милый кот. Не всё так просто в этом
        городе
      </Say>

      <Say
        tag="АрхКот:"
        image={{uri: archkot9Png, style: {width: '100%', bottom: 0}}}>
        —Нееет, я не отчаиваюсь…
      </Say>

      <Say>FIXME</Say>

      <Title hide={-1}>Конец игры</Title>

      <Menu
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch>
  )
}
