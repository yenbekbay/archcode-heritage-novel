import {
  archbot1Png,
  archbot2Png,
  archbot3Png,
  archkot10Png,
  archkot11Png,
  archkot8Png,
  archkot9Png,
  archtok1Png,
  archtok2Png,
  bgArchcodeOfficeJpg,
  bgAskBeforeJpg,
  bgPhoneHandJpg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib'

export function BranchArchkot_ProjAsk_CheckOut_AssembleTeam() {
  return (
    <Branch>
      <Scene src={bgAskBeforeJpg} />

      <Say image={{uri: archkot8Png, style: {width: '100%', bottom: 0}}}>
        Быстро! Быстро! Надо собрать команду и разобраться, что тут происходит!
      </Say>

      <Say
        frame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
            transform: 'rotate(-6deg)',
          },
        }}
        style_={{fontSize: 24}}
        image={{
          uri: bgPhoneHandJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.25) translateX(-15px)',
          },
        }}>
        Команда Архкод: срочно собираемся в офисе
      </Say>

      <Scene src={bgArchcodeOfficeJpg} />

      <Say
        tag="АрхКот:"
        image={{uri: archkot9Png, style: {width: '100%', bottom: 0}}}>
        —В городе беда. Здание АСК обнесено забором, и никто ничего об этом не
        знает! Мы должны что-то делать
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok1Png, style: {width: '100%', bottom: 0}}}>
        —Первое, что необходимо выяснить — это является ли здание АСК памятником
        историко-культурного наследия
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot1Png, style: {width: '100%', bottom: 0}}}>
        {
          '—Загляните в ГОСУДАРСТВЕННЫЙ РЕЕСТР ПАМЯТНИКОВ. Там можно поискать нужное нам здание.\n\n[*Ссылка РЕЕСТР](https://www.youtube.com/watch?v=dQw4w9WgXcQ)'
        }
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok2Png, style: {width: '100%', bottom: 0}}}
        menu={[
          {
            label: 'Да',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Нет',
            onClick: (ctx) => ctx.skip(2),
          },
        ]}>
        Является ли здание АСК памятником?
      </Say>

      <Scene src={bgAskBeforeJpg} />

      <Say>Здание АСК не является памятником</Say>

      <Scene src={bgArchcodeOfficeJpg} />

      <Say
        tag="АрхКот:"
        image={{
          uri: archkot10Png,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —ЭТО НЕ ПАМЯТНИК!!!
      </Say>

      <Say
        image={{uri: archkot11Png, style: {width: '100%', bottom: 0}}}
        menu={[
          {
            label: 'Подумаю о дальнейших действиях',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Ничего уже не поделаешь…',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjAsk_CheckOut_SocialMedia'),
          },
        ]}>
        Что делать?
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok1Png, style: {width: '100%', bottom: 0}}}>
        —Надо вести мониторинг ситуации. Проверить информацию, которая есть в
        СМИ
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot2Png, style: {width: '100%', bottom: 0}}}>
        —Я проверил различные СМИ. В результате отслеживания статей в СМИ
        найдено то, что нужно
      </Say>

      <Say image={{uri: archbot3Png, style: {width: '100%', bottom: 0}}}>
        {
          '—Представляю вам документ, который я условно назвал “Список Байбека”\n\n[*Cсылка cтатья "Список Байбека"](https://www.youtube.com/watch?v=dQw4w9WgXcQ)'
        }
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok2Png, style: {width: '100%', bottom: 0}}}>
        —Значит, это не памятник, но и не совсем непамятник?
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot1Png, style: {width: '100%', bottom: 0}}}>
        {
          '—Я нашел закон, в котором говорится о зданиях, которые заявлены, как возможные памятники\n\n[*Cсылка на закон](https://www.youtube.com/watch?v=dQw4w9WgXcQ)'
        }
      </Say>

      <Scene src={bgAskBeforeJpg} />

      <Say>
        Выяснили АрхКот, АрхБот и АрхТок, что АСК, хоть и не является
        памятником, имеет все права настоящего памятника
      </Say>

      <Say>
        Теперь, зная это, они будут действовать, чтобы сохранить здание, которое
        так дорого сердцам
      </Say>

      <Say
        menu={[
          {
            label: 'Инициировать открытое обсуждение',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjAsk_CheckOut_AssembleTeam_Debate'),
          },
          {
            label: 'Статья с рекомендациями',
            // FIXME
            onClick: () => alert('Не готово'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
