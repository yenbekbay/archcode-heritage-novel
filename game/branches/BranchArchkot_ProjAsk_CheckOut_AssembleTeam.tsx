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
import {Branch, Say, Scene} from '~/lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchArchkot_ProjAsk_CheckOut_AssembleTeam() {
  return (
    <Branch>
      <Scene src={bgAskBeforeJpg.src} audio={SCENE_AUDIO.city} />

      <Say image={{uri: archkot8Png.src, align: 'bottom'}}>
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
        style={{fontSize: 24}}
        image={{
          uri: bgPhoneHandJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.25) translateX(-15px)',
          },
        }}>
        Команда Архкод: срочно собираемся в офисе
      </Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot9Png.src, align: 'bottom'}}>
        —В городе беда. Здание АСК обнесено забором, и никто ничего об этом не
        знает! Мы должны что-то делать
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok1Png.src, align: 'bottom'}}>
        —Первое, что необходимо выяснить — это является ли здание АСК памятником
        историко-культурного наследия
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        —Загляните в ГОСУДАРСТВЕННЫЙ РЕЕСТР ПАМЯТНИКОВ
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        {'—Там можно поискать нужное нам здание.\n\n[Ссылка РЕЕСТР](#)'}
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok2Png.src, align: 'bottom'}}
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

      <Scene src={bgAskBeforeJpg.src} audio={SCENE_AUDIO.city} />

      <Say>Здание АСК не является памятником</Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{
          uri: archkot10Png.src,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —ЭТО НЕ ПАМЯТНИК!!!
      </Say>

      <Say
        image={{uri: archkot11Png.src, align: 'bottom'}}
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
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok1Png.src, align: 'bottom'}}>
        —Надо вести мониторинг ситуации. Проверить информацию, которая есть в
        СМИ
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot2Png.src, align: 'bottom'}}>
        —Я проверил различные СМИ. В результате отслеживания статей в СМИ
        найдено то, что нужно
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot3Png.src, align: 'bottom'}}>
        {
          '—Представляю вам документ, который я условно назвал “Список Байбека”\n\n[*Cсылка cтатья "Список Байбека"](#)'
        }
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok2Png.src, align: 'bottom'}}>
        —Значит, это не памятник, но и не совсем непамятник?
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        {
          '—Я нашел закон, в котором говорится о зданиях, которые заявлены, как возможные памятники\n\n[*Cсылка на закон](#)'
        }
      </Say>

      <Scene src={bgAskBeforeJpg.src} audio={SCENE_AUDIO.city} />

      <Say>
        Выяснили АрхКот, АрхБот и АрхТок, что АСК, хоть и не является
        памятником, имеет все права настоящего памятника
      </Say>

      <Say>
        Теперь, зная это, они будут действовать, чтобы сохранить здание, которое
        так дорого их сердцам
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
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjAsk_CheckOut_AssembleTeam_Article'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
