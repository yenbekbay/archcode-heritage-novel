import {
  bgDeveloperHqInsideJpg,
  developerRepB8Png,
  transition1Mp3,
} from 'assets/game'
import {Branch, Play, Say, Scene, Show} from 'lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_0Intro() {
  return (
    <Branch>
      <Scene
        src={bgDeveloperHqInsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />

      <Play audio={SCENE_AUDIO.developerTheme} hide={-1} />

      <Show src={{uri: developerRepB8Png.src, align: 'bottom'}} hide={-1} />

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
