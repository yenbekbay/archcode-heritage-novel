import bldgBackgroundSrc from '~/assets/game/bg-bldg-1-fence.png'
import phoneBackgroundSrc from '~/assets/game/bg-phone-hands.png'
import redhead5Src from '~/assets/game/redhead-5.png'
import {Image} from '~/lib'
import {Options, Say} from './commands'
import {SceneBackgroundComponentProps, SceneContainer} from './components'

export const assets = [bldgBackgroundSrc, phoneBackgroundSrc, redhead5Src]

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
        foregroundSrc={phoneBackgroundSrc}
        foregroundCss={{transform: 'scale(1.25)'}}
        duration={0}
        transitory
        retained>
        Варианты отчаяния:
      </Say>

      <Options
        options={[
          {
            label: 'Создать мем',
            action: {
              type: 'go_to_frame',
              frame: 3,
            },
          },
          {
            label: 'Написать пост о том, как всё плохо',
            action: {
              type: 'go_to_frame',
              frame: 4,
            },
          },
        ]}
      />

      <Options
        options={[
          {
            label: 'Загрузить мем',
            action: {
              type: 'go_to_scene',
              sceneId: 'TODO',
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
        options={[
          {
            label: 'Загрузить пост',
            action: {
              type: 'go_to_scene',
              sceneId: 'TODO',
            },
          },
        ]}
        foregroundSrc={phoneBackgroundSrc}
        foregroundCss={{
          width: '100%',
          transform: 'scale(2) translate(-4%, 0) rotate(-9.5deg)',
        }}
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
