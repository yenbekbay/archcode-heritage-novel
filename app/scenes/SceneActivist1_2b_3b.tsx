import {redhead8Png} from '~/assets/game'
import bgBldg1FenceSrc from '~/assets/game/bg-bldg-1-fence.jpg'
import {Say, SceneContainer} from '~/lib'

export function SceneActivist1_2b_3b() {
  return (
    <SceneContainer background={bgBldg1FenceSrc}>
      <Say
        size="lg"
        choicesDark
        choices={[
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
