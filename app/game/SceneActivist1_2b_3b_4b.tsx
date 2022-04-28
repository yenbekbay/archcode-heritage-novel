import aptEntranceSrc from '~/assets/game/apt-entrance.png'
import aptKitchenSrc from '~/assets/game/apt-kitchen.png'
import aptOutsideWindowSrc from '~/assets/game/apt-outside-window.png'
import bgCourtyardSrc from '~/assets/game/bg-courtyard.png'
import bgLaptopStandaloneSrc from '~/assets/game/bg-laptop-standalone.png'
import bgPhoneFingerSrc from '~/assets/game/bg-phone-finger.png'
import bgPhoneHandSrc from '~/assets/game/bg-phone-hand.png'
import guyASrc from '~/assets/game/guy-a.png'
import guyBSrc from '~/assets/game/guy-b.png'
import redhead1Src from '~/assets/game/redhead-1.png'
import redhead5Src from '~/assets/game/redhead-5.png'
import redhead14Src from '~/assets/game/redhead-14.png'
import redhead15Src from '~/assets/game/redhead-15.png'
import redhead16Src from '~/assets/game/redhead-16.png'
import redhead17Src from '~/assets/game/redhead-17.png'
import redhead18Src from '~/assets/game/redhead-18.png'
import {Blank, Foreground, Options, Say} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer} from './components'

export const sceneActivist1_2b_3b_4bAssets = [
  aptEntranceSrc,
  aptKitchenSrc,
  aptOutsideWindowSrc,
  bgCourtyardSrc,
  bgLaptopStandaloneSrc,
  bgPhoneFingerSrc,
  bgPhoneHandSrc,
  guyASrc,
  guyBSrc,
  redhead1Src,
  redhead5Src,
  redhead14Src,
  redhead15Src,
  redhead16Src,
  redhead17Src,
  redhead18Src,
]

export function SceneActivist1_2b_3b_4b() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Blank durationMs={3000} />

      <Foreground
        src={aptOutsideWindowSrc}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Foreground
        src={aptEntranceSrc}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Foreground
        src={aptKitchenSrc}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={7}
      />

      <Say
        large
        foregroundSrc={redhead14Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        lingers={1}>
        БЕСПРЕДЕЛ!
      </Say>

      <Say
        dark
        foregroundSrc={bgPhoneHandSrc}
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
        textStyle={{
          marginTop: 80,
          width: 190,
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
          textAlign: 'right',
        }}>
        {
          'Беспредел!\n\nСносят Фурманова, 00. Присоединяйтесь, чтобы вместе действовать в защиту истории!'
        }
      </Say>

      <Say
        large
        foregroundSrc={redhead15Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Ты представляешь, что происходит ??
      </Say>

      <Say
        large
        foregroundSrc={redhead16Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {'*pop up\n\nзвуки уведомлений'}
      </Say>

      <Say
        foregroundSrc={bgLaptopStandaloneSrc}
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
        textStyle={{
          marginTop: 72,
          width: 280,
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
        large
        foregroundSrc={guyBSrc}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        lingers={2}>
        *встреча активистов
      </Say>

      <Foreground
        src={guyASrc}
        style={{width: '100%', bottom: 0, transform: 'translateX(-25%)'}}
        lingers={1}
      />

      <Foreground
        src={redhead17Src}
        style={{
          width: '100%',
          bottom: 0,
          transform: 'translateX(25%) scaleX(-1)',
        }}
      />

      <Say
        foregroundSrc={guyASrc}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {
          'Действовать надо последовательно…\n\nДля начала давайте узнаем, кто здесь - заинтересованные стороны'
        }
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        large
        textStyle={{
          marginTop: 64,
          width: 220,
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
        }}
        foregroundSrc={bgPhoneHandSrc}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка*24 кто такие стейкхолдеры
      </Say>

      <Say
        foregroundSrc={redhead5Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {
          'И узнать надо побольше.\n\nИ не только почитать новости, а проверить, правду ли говорят'
        }
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        large
        textStyle={{
          marginTop: 64,
          width: 220,
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
        }}
        foregroundSrc={bgPhoneHandSrc}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка*фактчек
      </Say>

      <Say
        foregroundSrc={guyBSrc}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {
          'Нужно как можно больше писать в соц.сети. \n\nЧем больше людей знают, тем сложнее что-то скрыть!'
        }
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        large
        textStyle={{
          marginTop: 64,
          width: 220,
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
        }}
        foregroundSrc={bgPhoneHandSrc}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка *22 “как написать пост в соц.сети и быть услышанным.”
      </Say>

      <Say
        large
        foregroundSrc={guyASrc}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Еще мы должны участвовать в общественных слушаниях...
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        large
        textStyle={{
          marginTop: 64,
          width: 220,
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
        }}
        foregroundSrc={bgPhoneHandSrc}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка *6 “Как участвовать в общественных слушаниях”
      </Say>

      <Say
        large
        foregroundSrc={redhead1Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Будем писать во все инстанции!!!
      </Say>

      <Say
        large
        foregroundSrc={guyASrc}
        foregroundStyle={{width: '100%', bottom: 0, transform: 'scaleX(-1)'}}
        transitory>
        А куда можно написать?
      </Say>

      <Say
        dark
        foregroundSrc={bgPhoneFingerSrc}
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
        textStyle={{
          marginTop: 80,
          width: 190,
          transform: 'rotate(9deg) translateX(16px)',
          transformOrigin: 'top',
        }}>
        *ссылка на примеры писем по разным ситуациям. Проверить информацию из
        СМИ *Ссылка *23 на инструкцию по факт чеку
      </Say>

      <Say
        large
        foregroundSrc={redhead18Src}
        foregroundStyle={{width: '100%', bottom: 0, transform: 'scaleX(-1)'}}
        transitory>
        А если не будет дельных ответов, просто устроим протестную акцию!
      </Say>

      <Say
        large
        foregroundSrc={guyBSrc}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        А я тут новости читал. Есть группа Архкод, вроде как наследием
        занимается
      </Say>

      <Say
        dark
        foregroundSrc={bgPhoneFingerSrc}
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
        large
        textStyle={{
          marginTop: 80,
          width: 190,
          transform: 'rotate(9deg) translateX(16px)',
          transformOrigin: 'top',
        }}>
        сайт Архкода
      </Say>

      <Say
        large
        foregroundSrc={guyASrc}
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

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <img
      src={bgCourtyardSrc}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover"
    />
  )
}
