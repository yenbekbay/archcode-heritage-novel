import bgBldg1FenceSrc from '~/assets/game/bg-bldg-1-fence.png'
import redhead8Src from '~/assets/game/redhead-8.png'
import {Image} from '~/lib'
import {Say} from './commands'
import {SceneBackgroundComponentProps, SceneContainer} from './components'

export const assets = [bgBldg1FenceSrc, redhead8Src]

export function Scene4B() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        large
        optionsDark
        optionsBottom={[
          {
            label: 'Разберусь сама',
            onClick: (ctx) => ctx.goToScene('5A'),
          },
          {
            label: 'Объединиться в команду',
            onClick: () => alert('Ещё не сделано!'),
          },
          {
            label: 'Обратиться в организации',
            onClick: () => alert('Ещё не сделано!'),
          },
        ]}
        foregroundSrc={redhead8Src}
        foregroundCss={{width: '90%'}}>
        Что я могу?
      </Say>
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
