import {
  bgDeveloperHqInsideJpg,
  botBuilderPng,
  developerRepAPng,
  developerRepB9Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib'

export function BranchDeveloper_ProjAsk_Demolish() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg} />

      <Say image={{uri: developerRepB9Png, align: 'bottom'}}>
        —Здание старое, никакой ценности не представляет. В проекте важно что?
        Успех! Больше площади — больше успеха
      </Say>

      <Say
        tag="Менеджер проекта:"
        image={{uri: developerRepAPng, align: 'bottom'}}>
        —В любом случае, необходимо взвесить риски
      </Say>

      <Say tag="Бот-билдер:" image={{uri: botBuilderPng, align: 'bottom'}}>
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
