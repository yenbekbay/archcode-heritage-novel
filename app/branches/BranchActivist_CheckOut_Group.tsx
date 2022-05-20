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
import {makeBranch} from '~/lib'

const Branch = makeBranch()

export function BranchActivist_CheckOut_Group() {
  return (
    <Branch.Container background={bgCourtyardJpg}>
      <Branch.Blank durationMs={3000} transitory />

      <Branch.Foreground
        src={bgAptOutsideWindowJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Branch.Foreground
        src={bgAptEntranceJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Branch.Foreground
        src={bgAptKitchenJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={7}
      />

      <Branch.Say
        size="xl"
        foregroundSrc={redhead14Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        lingers={1}>
        БЕСПРЕДЕЛ!
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={redhead15Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Ты представляешь, что происходит ??
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={redhead16Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {'*pop up\n\nзвуки уведомлений'}
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={activistBPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        lingers={2}>
        *встреча активистов
      </Branch.Say>

      <Branch.Foreground
        src={activistAPng}
        style={{width: '100%', bottom: 0, transform: 'translateX(-25%)'}}
        transitory
        lingers={1}
      />

      <Branch.Foreground
        src={redhead17Png}
        style={{
          width: '100%',
          bottom: 0,
          transform: 'translateX(25%) scaleX(-1)',
        }}
      />

      <Branch.Say
        foregroundSrc={activistAPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {
          'Действовать надо последовательно…\n\nДля начала давайте узнаем, кто здесь - заинтересованные стороны'
        }
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        foregroundSrc={redhead5Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {
          'И узнать надо побольше.\n\nИ не только почитать новости, а проверить, правду ли говорят'
        }
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        foregroundSrc={activistBPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {
          'Нужно как можно больше писать в соц.сети. \n\nЧем больше людей знают, тем сложнее что-то скрыть!'
        }
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={activistAPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Еще мы должны участвовать в общественных слушаниях…
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={redhead1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Будем писать во все инстанции!!!
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={activistAPng}
        foregroundStyle={{width: '100%', bottom: 0, transform: 'scaleX(-1)'}}
        transitory>
        А куда можно написать?
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={redhead18Png}
        foregroundStyle={{width: '100%', bottom: 0, transform: 'scaleX(-1)'}}
        transitory>
        А если не будет дельных ответов, просто устроим протестную акцию!
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={activistBPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        А я тут новости читал. Есть группа Архкод, вроде как наследием
        занимается
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={activistAPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Да, давайте позвоним им
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Позвонить в Архкод',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Org'),
          },
        ]}
      />
    </Branch.Container>
  )
}
