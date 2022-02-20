import bldgBackgroundSrc from '~/assets/game/bg-bldg-1-fence.png'
import phoneBackgroundSrc from '~/assets/game/bg-phone-hands.png'
import redhead2Src from '~/assets/game/redhead-2.png'
import redhead5Src from '~/assets/game/redhead-5.png'
import redhead7Src from '~/assets/game/redhead-7.png'
import {Image} from '~/lib'
import {Options, Say, Title} from './commands'
import {SceneBackgroundComponentProps, SceneContainer} from './components'

export const assets = [
  bldgBackgroundSrc,
  phoneBackgroundSrc,
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
        foregroundCss={{width: '90%'}}
        transitory>
        В моменты отчаяния всегда можно вылить свою боль в соц. сети
      </Say>

      <Say
        large
        optionsDark
        options={[
          {
            label: 'Создать мем',
            action: {
              type: 'go_to_frame',
              frame: 2,
            },
          },
          {
            label: 'Написать пост о том, как всё плохо',
            action: {
              type: 'go_to_frame',
              frame: 3,
            },
          },
        ]}
        foregroundSrc={phoneBackgroundSrc}
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
        options={[
          {
            label: 'Загрузить мем',
            action: {
              type: 'go_to_frame',
              frame: 4,
            },
          },
        ]}
        foregroundSrc={phoneBackgroundSrc}
        foregroundCss={{
          width: '100%',
          transform: 'scale(2) translate(-4%, 0) rotate(-9.5deg)',
        }}
      />

      <Options
        dark
        options={[
          {
            label: 'Загрузить пост',
            action: {
              type: 'go_to_frame',
              frame: 4,
            },
          },
        ]}
        foregroundSrc={phoneBackgroundSrc}
        foregroundCss={{
          width: '100%',
          transform: 'scale(2) translate(-4%, 0) rotate(-9.5deg)',
        }}
      />

      <Say
        large
        foregroundSrc={redhead7Src}
        foregroundCss={{width: '90%'}}
        transitory>
        ПОЗДРАВЛЯЕМ!!! ВАШИ ПОСТЫ/МЕМЫ УВИДЕЛА ИЗВЕСТНАЯ АКТИВИСТКА ТИНА ШТУНЕР,
        И ТЕПЕРЬ ОНА БУДЕТ ДОБИВАТЬСЯ СПРАВЕДЛИВОСТИ
      </Say>

      <Options
        placement="top"
        options={[
          {
            label: 'Что я еще могу сделать?',
            action: {
              type: 'go_to_scene',
              sceneId: 'TODO',
            },
          },
          {
            label: 'Я сделала всё что было в моих силах',
            action: {
              type: 'go_to_next_frame',
            },
          },
        ]}
        foregroundSrc={redhead2Src}
        foregroundCss={{width: '90%'}}
      />

      <Title transitory retained>
        Конец игры
      </Title>

      <Options
        dark
        options={[
          {
            label: 'Начать заново',
            action: {
              type: 'go_to_scene',
              sceneId: '1',
            },
          },
        ]}
      />
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <Image
      src={bldgBackgroundSrc}
      css={{flex: 0, minHeight: '100%', objectFit: 'cover'}}
    />
  )
}
