import {bgDeveloperHqInsideJpg, developerRepB9Png} from '~/assets/game'
import {Branch, Menu, Scene, Show} from '~/lib'

export function BranchDeveloper_No() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg} />

      <Show src={{uri: developerRepB9Png, align: 'bottom'}} hide={1} />

      <Menu
        choices={[
          {
            label: 'Вернуться к выбору',
            onClick: (ctx) =>
              // HACK
              ctx.goToLocation('Intro', 7),
          },
        ]}
      />
    </Branch>
  )
}
