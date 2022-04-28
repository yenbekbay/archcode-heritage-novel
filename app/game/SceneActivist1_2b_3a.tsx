import bgBldg1FenceSrc from '~/assets/game/bg-bldg-1-fence.png'
import bgPhoneFingerSrc from '~/assets/game/bg-phone-finger.png'
import redhead2Src from '~/assets/game/redhead-2.png'
import redhead5Src from '~/assets/game/redhead-5.png'
import redhead7Src from '~/assets/game/redhead-7.png'
import {Options, Say, Title} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer} from './components'

export const sceneActivist1_2b_3aAssets = [
  bgBldg1FenceSrc,
  bgPhoneFingerSrc,
  redhead2Src,
  redhead5Src,
  redhead7Src,
]

export function SceneActivist1_2b_3a() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        large
        foregroundSrc={redhead5Src}
        foregroundStyle={{width: '90%', bottom: 0}}
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
        foregroundStyle={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(1.25)',
        }}>
        Варианты отчаяния:
      </Say>

      <Options
        dark
        options={[
          {
            label: 'Загрузить мем',
            onClick: (ctx) => ctx.goToFrame(ctx.frame + 2),
          },
        ]}
        foregroundSrc={bgPhoneFingerSrc}
        foregroundStyle={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(2) rotate(-9.5deg) translateX(-20px)',
        }}
      />

      <Options
        dark
        options={[
          {
            label: 'Загрузить пост',
            onClick: (ctx) => ctx.goToFrame(ctx.frame + 1),
          },
        ]}
        foregroundSrc={bgPhoneFingerSrc}
        foregroundStyle={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(2) rotate(-9.5deg) translateX(-20px)',
        }}
      />

      <Say
        large
        foregroundSrc={redhead7Src}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory>
        ПОЗДРАВЛЯЕМ!!! ВАШИ ПОСТЫ/МЕМЫ УВИДЕЛА ИЗВЕСТНАЯ АКТИВИСТКА ТИНА ШТУНЕР,
        И ТЕПЕРЬ ОНА БУДЕТ ДОБИВАТЬСЯ СПРАВЕДЛИВОСТИ
      </Say>

      <Options
        placement="top"
        options={[
          {
            label: 'Что я ещё могу сделать?',
            onClick: (ctx) => ctx.goToScene('Activist1_2b_3b'),
          },
          {
            label: 'Я сделала всё что было в моих силах',
            onClick: (ctx) => ctx.goToNextFrame(),
          },
        ]}
        foregroundSrc={redhead2Src}
        foregroundStyle={{width: '90%', bottom: 0}}
      />

      <Title transitory lingers>
        Конец игры
      </Title>

      <Options
        dark
        options={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToScene('Intro'),
          },
        ]}
      />
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <img
      src={bgBldg1FenceSrc}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover"
    />
  )
}
