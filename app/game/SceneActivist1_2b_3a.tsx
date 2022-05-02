import {
  bgBldg1FenceJpg,
  bgPhoneFingerJpg,
  redhead2Png,
  redhead5Png,
  redhead7Png,
} from '~/assets/game'
import {Options, Say, Title} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer} from './components'

export function SceneActivist1_2b_3a() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        large
        foregroundSrc={redhead5Png}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory>
        В моменты отчаяния всегда можно вылить свою боль в соц. сети
      </Say>

      <Say
        large
        optionsDark
        options={[
          {
            label: 'Создать мем',
            onClick: (ctx) => ctx.goToFrame(ctx.frameIndex + 1),
          },
          {
            label: 'Написать пост о том, как всё плохо',
            onClick: (ctx) => ctx.goToFrame(ctx.frameIndex + 2),
          },
        ]}
        foregroundSrc={bgPhoneFingerJpg}
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
            onClick: (ctx) => ctx.goToFrame(ctx.frameIndex + 2),
          },
        ]}
        foregroundSrc={bgPhoneFingerJpg}
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
            onClick: (ctx) => ctx.goToFrame(ctx.frameIndex + 1),
          },
        ]}
        foregroundSrc={bgPhoneFingerJpg}
        foregroundStyle={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(2) rotate(-9.5deg) translateX(-20px)',
        }}
      />

      <Say
        large
        foregroundSrc={redhead7Png}
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
            onClick: (ctx) => ctx.skip(),
          },
        ]}
        foregroundSrc={redhead2Png}
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
      src={bgBldg1FenceJpg}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover"
    />
  )
}
