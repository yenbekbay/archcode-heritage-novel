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
import {Image} from '~/lib'
import {Blank, Foreground, Options, Say} from './commands'
import {SceneBackgroundComponentProps, SceneContainer} from './components'

export const assets = [
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

export function Scene5B() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Blank duration={3000} />

      <Foreground
        src={aptOutsideWindowSrc}
        css={{height: '100%', width: '100%', objectFit: 'cover'}}
        duration={3000}
        transitory
        retained={1}
      />

      <Foreground
        src={aptEntranceSrc}
        css={{height: '100%', width: '100%', objectFit: 'cover'}}
        duration={3000}
        transitory
        retained={1}
      />

      <Foreground
        src={aptKitchenSrc}
        css={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        retained={7}
      />

      <Say
        large
        foregroundSrc={redhead14Src}
        foregroundCss={{width: '100%', bottom: 0}}
        transitory
        retained={1}>
        БЕСПРЕДЕЛ!
      </Say>

      <Say
        dark
        foregroundSrc={bgPhoneHandSrc}
        foregroundCss={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translate(-15px, 20px)',
        }}
        transitory
        retained={1}>
        *рассылка в whatsapp
      </Say>

      <Say
        textCss={{
          mt: 80,
          width: 190,
          transform: 'rotate(-6deg)',
          textAlign: 'right',
        }}>
        {
          'Беспредел!\n\nСносят Фурманова, 00. Присоединяйтесь, чтобы вместе действовать в защиту истории!'
        }
      </Say>

      <Say
        large
        foregroundSrc={redhead15Src}
        foregroundCss={{width: '100%', bottom: 0}}
        transitory>
        Ты представляешь, что происходит ??
      </Say>

      <Say
        large
        foregroundSrc={redhead16Src}
        foregroundCss={{width: '100%', bottom: 0}}
        transitory>
        {'*pop up\n\nзвуки уведомлений'}
      </Say>

      <Say
        foregroundSrc={bgLaptopStandaloneSrc}
        foregroundCss={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(75px)',
        }}
        transitory
        retained={1}>
        *whatsapp web
      </Say>

      <Say
        textCss={{
          mt: 90,
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
        foregroundCss={{width: '100%', bottom: 0}}
        transitory
        retained={2}>
        *встреча активистов
      </Say>

      <Foreground
        src={guyASrc}
        css={{width: '100%', bottom: 0, transform: 'translateX(-25%)'}}
        retained={1}
      />

      <Foreground
        src={redhead17Src}
        css={{
          width: '100%',
          bottom: 0,
          transform: 'translateX(25%) scaleX(-1)',
        }}
      />

      <Say
        foregroundSrc={guyASrc}
        foregroundCss={{width: '100%', bottom: 0}}
        transitory>
        {
          'Действовать надо последовательно…\n\nДля начала давайте узнаем, кто здесь - заинтересованные стороны'
        }
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        large
        textCss={{mt: 64, width: 200, transform: 'rotate(-6deg)'}}
        foregroundSrc={bgPhoneHandSrc}
        foregroundCss={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка*24 кто такие стейкхолдеры
      </Say>

      <Say
        foregroundSrc={redhead5Src}
        foregroundCss={{width: '100%', bottom: 0}}
        transitory>
        {
          'И узнать надо побольше.\n\nИ не только почитать новости, а проверить, правду ли говорят'
        }
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        large
        textCss={{mt: 64, transform: 'rotate(-6deg)'}}
        foregroundSrc={bgPhoneHandSrc}
        foregroundCss={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Ссылка*фактчек
      </Say>

      <Say
        foregroundSrc={guyBSrc}
        foregroundCss={{width: '100%', bottom: 0}}
        transitory>
        {
          'Нужно как можно больше писать в соц.сети. \n\nЧем больше людей знают, тем сложнее что-то скрыть!'
        }
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        large
        textCss={{mt: 64, width: 240, transform: 'rotate(-6deg)'}}
        foregroundSrc={bgPhoneHandSrc}
        foregroundCss={{
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
        foregroundCss={{width: '100%', bottom: 0}}
        transitory>
        Еще мы должны участвовать в общественных слушаниях...
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        large
        textCss={{mt: 64, width: 240, transform: 'rotate(-6deg)'}}
        foregroundSrc={bgPhoneHandSrc}
        foregroundCss={{
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
        foregroundCss={{width: '100%', bottom: 0}}
        transitory>
        Будем писать во все инстанции!!!
      </Say>

      <Say
        large
        foregroundSrc={guyASrc}
        foregroundCss={{width: '100%', bottom: 0, transform: 'scaleX(-1)'}}
        transitory>
        А куда можно написать?
      </Say>

      <Say
        dark
        foregroundSrc={bgPhoneFingerSrc}
        foregroundCss={{
          width: '100%',
          transform: 'scale(2.5) translate(-30px, -150px)',
          transformOrigin: 'top',
        }}
        duration={0}
        transitory
        retained={1}>
        Вот!
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        textCss={{
          mt: 80,
          width: 190,
          transform: 'rotate(9deg)',
        }}>
        *ссылка на примеры писем по разным ситуациям. Проверить информацию из
        СМИ *Ссылка *23 на инструкцию по факт чеку
      </Say>

      <Say
        large
        foregroundSrc={redhead18Src}
        foregroundCss={{width: '100%', bottom: 0, transform: 'scaleX(-1)'}}
        transitory>
        А если не будет дельных ответов, просто устроим протестную акцию!
      </Say>

      <Say
        large
        foregroundSrc={guyBSrc}
        foregroundCss={{width: '100%', bottom: 0}}
        transitory>
        А я тут новости читал. Есть группа Архкод, вроде как наследием
        занимается
      </Say>

      <Say
        dark
        foregroundSrc={bgPhoneFingerSrc}
        foregroundCss={{
          width: '100%',
          transform: 'scale(2.5) translate(-30px, -150px)',
          transformOrigin: 'top',
        }}
        duration={0}
        transitory
        retained={1}>
        Вот!
      </Say>

      <Say
        href="https://archcode.kz"
        large
        textCss={{
          mt: 80,
          width: 190,
          transform: 'rotate(9deg)',
        }}>
        сайт Архкода
      </Say>

      <Say
        large
        foregroundSrc={guyASrc}
        foregroundCss={{width: '100%', bottom: 0}}
        transitory>
        Да, давайте позвоним им
      </Say>

      <Options
        optionsBottom={[
          {
            label: 'Что ещё?',
            onClick: (ctx) => ctx.goToScene('4B'),
          },
        ]}
      />
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <Image
      src={bgCourtyardSrc}
      css={{flex: 0, minHeight: '100%', objectFit: 'cover'}}
    />
  )
}
