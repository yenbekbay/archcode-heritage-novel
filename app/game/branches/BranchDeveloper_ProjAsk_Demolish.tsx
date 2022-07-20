import {
  bgDeveloperHqInsideJpg,
  botBuilderPng,
  developerRepAPng,
  developerRepB9Png,
  hologramOgg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'

export function BranchDeveloper_ProjAsk_Demolish() {
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
        image={{uri: botBuilderPng, align: 'bottom'}}
        audio={hologramOgg}>
        {'Возможные риски при изменении/сносе АСК:\n\n[Ссылка](#)'}
      </Say>

      <Say
        image={{uri: developerRepB9Png, align: 'bottom'}}
        menu={[
          {
            label: 'Пересмотреть выбор',
            onClick: (ctx) =>
              // HACK
              ctx.goToLocation('Developer_ProjAsk', 16),
          },
          {
            label: 'Игнорировать риски',
            onClick: (ctx) =>
              ctx.goToBranch('Developer_ProjAsk_Demolish_IgnoreRisks'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
