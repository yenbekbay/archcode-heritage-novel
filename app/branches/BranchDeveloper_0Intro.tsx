import {bgDeveloperHqInsideJpg, developerRepB8Png} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchDeveloper_0Intro() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg} />

      <Show src={{uri: developerRepB8Png, align: 'bottom'}} hide={-1} />

      <Say>Кто такой девелопер?</Say>

      <Say>
        Девелопер — предприниматель, занимающийся созданием новых объектов
        недвижимости
      </Say>

      <Say
        menu={[
          {
            label: 'Да',
            onClick: (ctx) => ctx.goToBranch('Developer_Menu_Projects'),
          },
          {
            label: 'Нет',
            onClick: (ctx) => ctx.goToBranch('Developer_No'),
          },
        ]}>
        Ты хочешь быть девелопером?
      </Say>
    </Branch>
  )
}
