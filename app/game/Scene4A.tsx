import bgBldg1FenceSrc from '~/assets/game/bg-bldg-1-fence.png'
import bgPhoneFingerSrc from '~/assets/game/bg-phone-finger.png'
import redhead2Src from '~/assets/game/redhead-2.png'
import redhead5Src from '~/assets/game/redhead-5.png'
import redhead7Src from '~/assets/game/redhead-7.png'
import {Image} from '~/lib'
import {Options, Say, Title} from './commands'
import {SceneBackgroundComponentProps, SceneContainer} from './components'

export const assets = [
  bgBldg1FenceSrc,
  bgPhoneFingerSrc,
  redhead2Src,
  redhead5Src,
  redhead7Src,
]

export function Scene4A() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        large
        foregroundSrc={redhead5Src}
        foregroundCss={{width: '90%', bottom: 0}}
        transitory>
        В моменты отчаяния всегда можно вылить свою боль в соц. сети
      </Say>

      <Say
        large
        optionsDark
        optionsBottom={[
          {
            label: 'Создать мем',
            onClick: (ctx) => ctx.goToFrame(ctx.frame + 1),
          },
          {
            label: 'Написать пост о том, как всё плохо',
            onClick: (ctx) => ctx.goToFrame(ctx.frame + 2),
          },
        ]}
        foregroundSrc={bgPhoneFingerSrc}
        foregroundCss={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(1.25)',
        }}>
        Варианты отчаяния:
      </Say>

      <Options
        dark
        optionsBottom={[
          {
            label: 'Загрузить мем',
            onClick: (ctx) => ctx.goToFrame(ctx.frame + 2),
          },
        ]}
        foregroundSrc={bgPhoneFingerSrc}
        foregroundCss={{
          width: '100%',
          transform: 'scale(2) translateX(-20px) rotate(-9.5deg)',
        }}
      />

      <Options
        dark
        optionsBottom={[
          {
            label: 'Загрузить пост',
            onClick: (ctx) => ctx.goToFrame(ctx.frame + 1),
          },
        ]}
        foregroundSrc={bgPhoneFingerSrc}
        foregroundCss={{
          width: '100%',
          transform: 'scale(2) translateX(-20%) rotate(-9.5deg)',
        }}
      />

      <Say
        large
        foregroundSrc={redhead7Src}
        foregroundCss={{width: '90%', bottom: 0}}
        transitory>
        ПОЗДРАВЛЯЕМ!!! ВАШИ ПОСТЫ/МЕМЫ УВИДЕЛА ИЗВЕСТНАЯ АКТИВИСТКА ТИНА ШТУНЕР,
        И ТЕПЕРЬ ОНА БУДЕТ ДОБИВАТЬСЯ СПРАВЕДЛИВОСТИ
      </Say>

      <Options
        optionsTop={[
          {
            label: 'Что я еще могу сделать?',
            onClick: (ctx) => ctx.goToScene('4B'),
          },
          {
            label: 'Я сделала всё что было в моих силах',
            onClick: (ctx) => ctx.goToNextFrame(),
          },
        ]}
        foregroundSrc={redhead2Src}
        foregroundCss={{width: '90%', bottom: 0}}
      />

      <Title transitory retained>
        Конец игры
      </Title>

      <Options
        dark
        optionsBottom={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToScene('1'),
          },
        ]}
      />
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <Image
      src={bgBldg1FenceSrc}
      css={{flex: 0, minHeight: '100%', objectFit: 'cover'}}
    />
  )
}
