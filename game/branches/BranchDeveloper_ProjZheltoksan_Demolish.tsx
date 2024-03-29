import {
  bgDeveloperHqInsideJpg,
  botBuilderPng,
  developerRepAPng,
  developerRepB9Png,
  hologramMp3,
} from 'assets/game'
import {Branch, Say, Scene} from 'react-visual-novel'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_ProjZheltoksan_Demolish() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{uri: developerRepB9Png.src, align: 'bottom'}}>
        —Здание старое, никакой ценности не представляет. В проекте важно что?
        Успех! Больше площади — больше успеха
      </Say>

      <Say
        tag={{text: 'Менеджер проекта:', color: '#A57B55'}}
        image={{uri: developerRepAPng.src, align: 'bottom'}}
      >
        —В любом случае, необходимо взвесить риски
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={{onEntrance: hologramMp3}}
      >
        {`
          Возможные риски при изменении/сносе Желтоксан 115:

          [Посмотреть](${LINKS.potential_demolition_risks_zheltoksan})
        `}
      </Say>

      <Say
        image={{uri: developerRepB9Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Пересмотреть выбор',
            onClick: (ctx) =>
              // HACK
              ctx.goToLocation('Developer_ProjZheltoksan', 14),
          },
          {
            label: 'Игнорировать риски',
            onClick: (ctx) =>
              ctx.goToBranch('Developer_ProjZheltoksan_Demolish_IgnoreRisks'),
          },
        ]}
      >
        Что делать?
      </Say>
    </Branch>
  )
}
