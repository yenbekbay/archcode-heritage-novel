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
import {Blank, Foreground, Options, Say, SceneContainer} from '~/lib'

export function SceneActivist1_2b_3b_4b() {
  return (
    <SceneContainer background={bgCourtyardJpg}>
      <Blank durationMs={3000} transitory />

      <Foreground
        src={bgAptOutsideWindowJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Foreground
        src={bgAptEntranceJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Foreground
        src={bgAptKitchenJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={7}
      />

      <Say
        size="lg"
        foregroundSrc={redhead14Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        lingers={1}>
        БЕСПРЕДЕЛ!
      </Say>

      <Say
        dark
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translate(-12px, 20px)',
        }}
        transitory
        lingers={1}>
        *рассылка в whatsapp
      </Say>

      <Say
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
          },
        }}
        textStyle={{
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
          textAlign: 'right',
        }}>
        {
          'Беспредел!\n\nСносят Фурманова, 00. Присоединяйтесь, чтобы вместе действовать в защиту истории!'
        }
      </Say>

      <Say
        size="lg"
        foregroundSrc={redhead15Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Ты представляешь, что происходит ??
      </Say>

      <Say
        size="lg"
        foregroundSrc={redhead16Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {'*pop up\n\nзвуки уведомлений'}
      </Say>

      <Say
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
        lingers={1}>
        *whatsapp web
      </Say>

      <Say
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
      </Say>

      <Say
        size="lg"
        foregroundSrc={activistBPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        lingers={2}>
        *встреча активистов
      </Say>

      <Foreground
        src={activistAPng}
        style={{width: '100%', bottom: 0, transform: 'translateX(-25%)'}}
        transitory
        lingers={1}
      />

      <Foreground
        src={redhead17Png}
        style={{
          width: '100%',
          bottom: 0,
          transform: 'translateX(25%) scaleX(-1)',
        }}
      />

      <Say
        foregroundSrc={activistAPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {
          'Действовать надо последовательно…\n\nДля начала давайте узнаем, кто здесь - заинтересованные стороны'
        }
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="lg"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
          },
        }}
        textStyle={{
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
        }}
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка*24 кто такие стейкхолдеры
      </Say>

      <Say
        foregroundSrc={redhead5Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {
          'И узнать надо побольше.\n\nИ не только почитать новости, а проверить, правду ли говорят'
        }
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="lg"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
          },
        }}
        textStyle={{
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
        }}
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка*фактчек
      </Say>

      <Say
        foregroundSrc={activistBPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {
          'Нужно как можно больше писать в соц.сети. \n\nЧем больше людей знают, тем сложнее что-то скрыть!'
        }
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="lg"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
          },
        }}
        textStyle={{
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
        }}
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка *22 “как написать пост в соц.сети и быть услышанным.”
      </Say>

      <Say
        size="lg"
        foregroundSrc={activistAPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Еще мы должны участвовать в общественных слушаниях…
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="lg"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
          },
        }}
        textStyle={{
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
        }}
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка *6 “Как участвовать в общественных слушаниях”
      </Say>

      <Say
        size="lg"
        foregroundSrc={redhead1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Будем писать во все инстанции!!!
      </Say>

      <Say
        size="lg"
        foregroundSrc={activistAPng}
        foregroundStyle={{width: '100%', bottom: 0, transform: 'scaleX(-1)'}}
        transitory>
        А куда можно написать?
      </Say>

      <Say
        dark
        foregroundSrc={bgPhoneFingerJpg}
        foregroundStyle={{
          width: '100%',
          top: 120,
          transform: 'scale(2.5) translateX(-7%)',
        }}
        durationMs={0}
        transitory
        lingers={1}>
        Вот!
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 280,
            width: 520,
          },
        }}
        textStyle={{
          transform: 'rotate(9deg) translateX(16px)',
          transformOrigin: 'top',
        }}>
        *ссылка на примеры писем по разным ситуациям. Проверить информацию из
        СМИ *Ссылка *23 на инструкцию по факт чеку
      </Say>

      <Say
        size="lg"
        foregroundSrc={redhead18Png}
        foregroundStyle={{width: '100%', bottom: 0, transform: 'scaleX(-1)'}}
        transitory>
        А если не будет дельных ответов, просто устроим протестную акцию!
      </Say>

      <Say
        size="lg"
        foregroundSrc={activistBPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        А я тут новости читал. Есть группа Архкод, вроде как наследием
        занимается
      </Say>

      <Say
        dark
        foregroundSrc={bgPhoneFingerJpg}
        foregroundStyle={{
          width: '100%',
          top: 120,
          transform: 'scale(2.5) translateX(-7%)',
        }}
        durationMs={0}
        transitory
        lingers={1}>
        Вот!
      </Say>

      <Say
        href="https://archcode.kz"
        size="lg"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 280,
            width: 520,
          },
        }}
        textStyle={{
          transform: 'rotate(9deg) translateX(16px)',
          transformOrigin: 'top',
        }}>
        сайт Архкода
      </Say>

      <Say
        size="lg"
        foregroundSrc={activistAPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Да, давайте позвоним им
      </Say>

      <Options
        options={[
          {
            label: 'Позвонить в Архкод',
            onClick: (ctx) => ctx.goToScene('Activist1_2b_3b_4c'),
          },
        ]}
      />
    </SceneContainer>
  )
}
