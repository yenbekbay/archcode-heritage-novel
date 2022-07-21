import {Menu} from '~/lib/game-engine'

export function GameOverMenu() {
  return (
    <Menu
      choices={[
        {
          label: 'Начать заново',
          onClick: (ctx) => ctx.goToBranch('Intro'),
        },
      ]}
    />
  )
}
