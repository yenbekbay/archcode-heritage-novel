import {
  architectPng,
  bgCityHallConferenceRoomJpg,
  bgCityHallOutsideJpg,
  bgCityHallSignJpg,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  developerRepB6Png,
  developerRepB10Png,
  transition1Mp3,
  transition2ShortMp3,
  transition3ShortMp3,
} from 'assets/game'
import type {BranchId} from 'react-visual-novel'
import {Branch, Say, Scene} from 'react-visual-novel'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_ProjAirport_Demolish_IgnoreRisks() {
  return (
    <Branch>
      <Scene
        src={bgDeveloperHqOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />

      <Say>Идёт разработка проекта сноса</Say>

      <Scene
        src={bgDeveloperHqInsideJpg.src}
        audio={{...SCENE_AUDIO.indoor, onEntrance: transition2ShortMp3}}
      />

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}
      >
        —Проект сноса готов!
      </Say>

      <Say image={{uri: developerRepB10Png.src, align: 'bottom'}}>
        —Следующий шаг… Представить проект в акимате!
      </Say>

      <Scene
        src={bgCityHallOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />
      <Scene
        src={bgCityHallSignJpg.src}
        audio={{onEntrance: transition2ShortMp3}}
      />
      <Scene
        src={bgCityHallConferenceRoomJpg.src}
        audio={{onEntrance: transition3ShortMp3}}
      />

      <Say
        image={{uri: developerRepB6Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Дальше',
            onClick: (ctx) => {
              const options: BranchId[] = [
                'Developer_ProjAirport_Demolish_IgnoreRisks_Approved',
                'Developer_ProjAirport_Demolish_IgnoreRisks_Rejected',
              ]
              ctx.goToBranch(
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                options[Math.floor(Math.random() * options.length)]!,
              )
            },
          },
        ]}
      >
        —Здесь будет большой зал. А здесь большие колонны. И ещё большая
        лестница
      </Say>
    </Branch>
  )
}
