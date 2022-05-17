import {
  activistAPng,
  activistBPng,
  bgAptEntranceJpg,
  bgAptKitchenJpg,
  bgAptOutsideWindowJpg,
  bgCourtyardJpg,
  bgLaptopStandaloneJpg,
  bgPhoneFingerJpg,
  bgPhoneHandJpg,
  redhead14Png,
  redhead15Png,
  redhead16Png,
  redhead17Png,
  redhead18Png,
  redhead1Png,
  redhead5Png,
} from '~/assets/game'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneActivist1_2b_3b() {
  return (
    <Scene.Container background={bgCourtyardJpg}>
      <Scene.Blank durationMs={3000} transitory />

      <Scene.Foreground
        src={bgAptOutsideWindowJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Scene.Foreground
        src={bgAptEntranceJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Scene.Foreground
        src={bgAptKitchenJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={7}
      />

      <Scene.Say
        size="xl"
        foregroundSrc={redhead14Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        lingers={1}>
        БЕСПРЕДЕЛ!
      </Scene.Say>

      <Scene.Say
        variant="dark"
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translate(-12px, 20px)',
        }}
        transitory
        durationMs={0}
        lingers={1}>
        *рассылка в whatsapp
      </Scene.Say>

      <Scene.Say
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
            transform: 'rotate(-6deg)',
          },
        }}
        textStyle={{textAlign: 'right'}}>
        {
          'Беспредел!\n\nСносят Фурманова, 00. Присоединяйтесь, чтобы вместе действовать в защиту истории!'
        }
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={redhead15Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Ты представляешь, что происходит ??
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={redhead16Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {'*pop up\n\nзвуки уведомлений'}
      </Scene.Say>

      <Scene.Say
        foregroundSrc={bgLaptopStandaloneJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(75px)',
        }}
        textStyle={{
          marginTop: -24,
        }}
        transitory
        durationMs={0}
        lingers={1}>
        *whatsapp web
      </Scene.Say>

      <Scene.Say
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 420,
            x: 140,
            width: 800,
          },
        }}
        textStyle={{
          fontSize: '$2',
          textAlign: 'left',
        }}>
        {[
          '-Здравствуйте! Меня тоже все это возмущает! Мы должны действовать сообща!',
          '                            -Здравое дело! Я с вами!',
          '-Готовы встретиться, назначайте время и место',
        ].join('\n\n')}
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={activistBPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        lingers={2}>
        *встреча активистов
      </Scene.Say>

      <Scene.Foreground
        src={activistAPng}
        style={{width: '100%', bottom: 0, transform: 'translateX(-25%)'}}
        transitory
        lingers={1}
      />

      <Scene.Foreground
        src={redhead17Png}
        style={{
          width: '100%',
          bottom: 0,
          transform: 'translateX(25%) scaleX(-1)',
        }}
      />

      <Scene.Say
        foregroundSrc={activistAPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {
          'Действовать надо последовательно…\n\nДля начала давайте узнаем, кто здесь - заинтересованные стороны'
        }
      </Scene.Say>

      <Scene.Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="lg"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
            transform: 'rotate(-6deg)',
          },
        }}
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка*24 кто такие стейкхолдеры
      </Scene.Say>

      <Scene.Say
        foregroundSrc={redhead5Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {
          'И узнать надо побольше.\n\nИ не только почитать новости, а проверить, правду ли говорят'
        }
      </Scene.Say>

      <Scene.Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="lg"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
            transform: 'rotate(-6deg)',
          },
        }}
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка*фактчек
      </Scene.Say>

      <Scene.Say
        foregroundSrc={activistBPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {
          'Нужно как можно больше писать в соц.сети. \n\nЧем больше людей знают, тем сложнее что-то скрыть!'
        }
      </Scene.Say>

      <Scene.Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="lg"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
            transform: 'rotate(-6deg)',
          },
        }}
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка *22 “как написать пост в соц.сети и быть услышанным.”
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={activistAPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Еще мы должны участвовать в общественных слушаниях…
      </Scene.Say>

      <Scene.Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="lg"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
            transform: 'rotate(-6deg)',
          },
        }}
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка *6 “Как участвовать в общественных слушаниях”
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={redhead1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Будем писать во все инстанции!!!
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={activistAPng}
        foregroundStyle={{width: '100%', bottom: 0, transform: 'scaleX(-1)'}}
        transitory>
        А куда можно написать?
      </Scene.Say>

      <Scene.Say
        variant="dark"
        foregroundSrc={bgPhoneFingerJpg}
        foregroundStyle={{
          width: '100%',
          top: 120,
          transform: 'scale(2.5) translateX(-7%)',
        }}
        transitory
        durationMs={0}
        lingers={1}>
        Вот!
      </Scene.Say>

      <Scene.Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 280,
            width: 520,
            transform: 'rotate(9deg) translateX(16px)',
          },
        }}>
        *ссылка на примеры писем по разным ситуациям. Проверить информацию из
        СМИ *Ссылка *23 на инструкцию по факт чеку
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={redhead18Png}
        foregroundStyle={{width: '100%', bottom: 0, transform: 'scaleX(-1)'}}
        transitory>
        А если не будет дельных ответов, просто устроим протестную акцию!
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={activistBPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        А я тут новости читал. Есть группа Архкод, вроде как наследием
        занимается
      </Scene.Say>

      <Scene.Say
        variant="dark"
        foregroundSrc={bgPhoneFingerJpg}
        foregroundStyle={{
          width: '100%',
          top: 120,
          transform: 'scale(2.5) translateX(-7%)',
        }}
        transitory
        durationMs={0}
        lingers={1}>
        Вот!
      </Scene.Say>

      <Scene.Say
        href="https://archcode.kz"
        size="lg"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 280,
            width: 520,
            transform: 'rotate(9deg) translateX(16px)',
          },
        }}>
        сайт Архкода
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={activistAPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Да, давайте позвоним им
      </Scene.Say>

      <Scene.Choices
        choices={[
          {
            label: 'Позвонить в Архкод',
            onClick: (ctx) => ctx.goToScene('Activist1_2b_3c'),
          },
        ]}
      />
    </Scene.Container>
  )
}
