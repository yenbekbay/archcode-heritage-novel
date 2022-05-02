import {redhead8Png} from '~/assets/game'
import bgBldg1FenceSrc from '~/assets/game/bg-bldg-1-fence.jpg'
import {Say} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer} from './components'

export function SceneActivist1_2b_3b() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        large
        optionsDark
        options={[
          {
            label: 'Разберусь сама',
            onClick: (ctx) => ctx.goToScene('Activist1_2b_3b_4a'),
          },
          {
            label: 'Объединиться в команду',
            onClick: (ctx) => ctx.goToScene('Activist1_2b_3b_4b'),
          },
          {
            label: 'Обратиться в организации',
            onClick: (ctx) => ctx.goToScene('Activist1_2b_3b_4c'),
          },
        ]}
        foregroundSrc={redhead8Png}
        foregroundStyle={{width: '90%', bottom: 0}}>
        Что я могу?
      </Say>
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
