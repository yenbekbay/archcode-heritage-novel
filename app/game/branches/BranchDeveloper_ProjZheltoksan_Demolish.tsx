import {
  bgDeveloperHqInsideJpg,
  botBuilderPng,
  developerRepAPng,
  developerRepB9Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'

export function BranchDeveloper_ProjZheltoksan_Demolish() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg} />

      <Say image={{uri: developerRepB9Png, align: 'bottom'}}>
        —Здание старое, никакой ценности не представляет. В проекте важно что?
        Успех! Больше площади — больше успеха
      </Say>

      <Say
        tag={{text: 'Менеджер проекта:', color: '#A57B55'}}
        image={{uri: developerRepAPng, align: 'bottom'}}>
        —В любом случае, необходимо взвесить риски
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng, align: 'bottom'}}>
        {'Возможные риски при изменении/сносе Желтоксан 115:\n\n[Ссылка](#)'}
      </Say>

      <Say
        image={{uri: developerRepB9Png, align: 'bottom'}}
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
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}