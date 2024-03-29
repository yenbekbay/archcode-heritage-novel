import {
  activistAPng,
  activistBPng,
  alertsMp3,
  bgAptEntranceJpg,
  bgAptKitchenJpg,
  bgAptOutsideWindowJpg,
  bgCourtyardJpg,
  bgLaptopStandaloneJpg,
  bgPhoneFingerJpg,
  bgPhoneHandJpg,
  redhead1Png,
  redhead5Png,
  redhead14Png,
  redhead15Png,
  redhead16Png,
  redhead17Png,
  redhead18Png,
  transition1Mp3,
  transition2ShortMp3,
  transition3ShortMp3,
} from 'assets/game'
import {Branch, Menu, Say, Scene, Show} from 'react-visual-novel'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchActivist_CheckOut_Act_Group() {
  return (
    <Branch>
      <Scene src={bgCourtyardJpg.src} audio={{onEntrance: transition1Mp3}} />
      <Scene
        src={bgAptOutsideWindowJpg.src}
        audio={{onEntrance: transition2ShortMp3}}
      />
      <Scene
        src={bgAptEntranceJpg.src}
        audio={{onEntrance: transition3ShortMp3}}
      />
      <Scene src={bgAptKitchenJpg.src} />

      <Say image={{uri: redhead14Png.src, align: 'bottom'}}>—БЕСПРЕДЕЛ!</Say>

      <Say
        scheme="dark"
        style={{fontSize: 20, marginTop: -24}}
        image={{
          uri: bgPhoneHandJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translate(-12px, 20px)',
          },
        }}
        durationMs={0}
        hide={1}
      >
        *рассылка в whatsapp
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
        style={{fontSize: 20, textAlign: 'right'}}
      >
        {`
          Беспредел!

          Сносят Желтоксан 115. Присоединяйтесь, чтобы вместе действовать в защиту истории!
        `}
      </Say>

      <Say image={{uri: redhead15Png.src, align: 'bottom'}}>
        —Ты представляешь, что происходит ??
      </Say>

      <Say
        image={{uri: redhead16Png.src, align: 'bottom'}}
        audio={{onEntrance: alertsMp3}}
      >
        {`
          *pop up

          звуки уведомлений
        `}
      </Say>

      <Say
        style={{fontSize: 20, marginTop: -24}}
        image={{
          uri: bgLaptopStandaloneJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(75px)',
          },
        }}
        durationMs={0}
        hide={1}
      >
        *whatsapp web
      </Say>

      <Say
        frame={{
          viewport: [1080, 1920],
          rect: {
            y: 420,
            x: 140,
            width: 800,
          },
        }}
        style={{fontSize: 16, textAlign: 'left'}}
      >
        {`
          —Здравствуйте! Меня тоже всё это возмущает! Мы должны действовать сообща!
                                      —Здравое дело! Я с вами!
          —Готовы встретиться, назначайте время и место
        `}
      </Say>

      <Scene
        src={bgCourtyardJpg.src}
        audio={{...SCENE_AUDIO.city, onEntrance: transition1Mp3}}
      />

      <Say image={{uri: activistBPng.src, align: 'bottom'}} hide={2}>
        *встреча активистов
      </Say>

      <Show
        src={{
          uri: activistAPng.src,
          align: 'bottom',
          style: {transform: 'translateX(-25%)'},
        }}
        hide={1}
      />

      <Show
        src={{
          uri: redhead17Png.src,
          align: 'bottom',
          style: {transform: 'translateX(25%) scaleX(-1)'},
        }}
      />

      <Say image={{uri: activistAPng.src, align: 'bottom'}}>
        {`
          —Действовать надо последовательно…

          Для начала давайте узнаем, кто здесь - заинтересованные стороны
        `}
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
        }}
      >
        {`[Кто такие стейкхолдеры?](${LINKS.who_is_stakeholder})`}
      </Say>

      <Say image={{uri: redhead5Png.src, align: 'bottom'}}>
        {`
          —И узнать надо побольше.

          И не только почитать новости, а проверить, правду ли говорят
        `}
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
        }}
      >
        {`[Как делать фактчекинг?](${LINKS.how_to_factcheck})`}
      </Say>

      <Say image={{uri: activistBPng.src, align: 'bottom'}}>
        {`
          —Нужно как можно больше писать в соц.сети.

          Чем больше людей знают, тем сложнее что-то скрыть!
        `}
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
        }}
      >
        {`[Как написать пост в соц.сети и быть услышанным?](${LINKS.how_to_write_an_effective_article})`}
      </Say>

      <Say image={{uri: activistAPng.src, align: 'bottom'}}>
        —Еще мы должны участвовать в общественных слушаниях…
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
        }}
      >
        {`[Как участвовать в общественных слушаниях?](${LINKS.how_to_prepare_for_public_hearings})`}
      </Say>

      <Say image={{uri: redhead1Png.src, align: 'bottom'}}>
        —Будем писать во все инстанции!!!
      </Say>

      <Say
        image={{
          uri: activistAPng.src,
          align: 'bottom',
          style: {transform: 'scaleX(-1)'},
        }}
      >
        —А куда можно написать?
      </Say>

      <Say
        scheme="dark"
        image={{
          uri: bgPhoneFingerJpg.src,
          style: {
            width: '100%',
            top: 120,
            transform: 'scale(2.5) translateX(-7%)',
          },
        }}
        durationMs={0}
        hide={1}
      >
        —Вот!
      </Say>

      <Say
        frame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 280,
            width: 520,
            transform: 'rotate(9deg) translateX(16px)',
          },
        }}
        style={{fontSize: 20}}
      >
        {`[Как и кому писать письма?](${LINKS.how_and_who_to_write_letters_to})`}
      </Say>

      <Say
        image={{
          uri: redhead18Png.src,
          align: 'bottom',
          style: {transform: 'scaleX(-1)'},
        }}
      >
        —А если не будет дельных ответов, просто устроим протестную акцию!
      </Say>

      <Say image={{uri: activistBPng.src, align: 'bottom'}}>
        —А я тут новости читал. Есть группа Архкод, вроде как наследием
        занимается
      </Say>

      <Say
        scheme="dark"
        image={{
          uri: bgPhoneFingerJpg.src,
          style: {
            width: '100%',
            top: 120,
            transform: 'scale(2.5) translateX(-7%)',
          },
        }}
        durationMs={0}
        hide={1}
      >
        —Вот!
      </Say>

      <Say
        frame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 280,
            width: 520,
            transform: 'rotate(9deg) translateX(16px)',
          },
        }}
        style={{fontSize: 24}}
      >
        {`[сайт Архкода](${LINKS.archcode})`}
      </Say>

      <Say image={{uri: activistAPng.src, align: 'bottom'}}>
        —Да, давайте позвоним им
      </Say>

      <Menu
        choices={[
          {
            label: 'Позвонить в Архкод',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Act_Org'),
          },
        ]}
      />
    </Branch>
  )
}
