import {
  architectPng,
  bgAirportFenceGif,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  developerRepB9Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchDeveloper_ProjAirport_Demolish_IgnoreRisks_Approved_Listen() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqOutsideJpg} />
      <Scene src={bgDeveloperHqInsideJpg} />

      <Say image={{uri: developerRepB9Png, align: 'bottom'}}>
        —Я принял решение пересмотреть проект. Риски велики. Невозможно и дальше
        игнорировать общественность
      </Say>

      <Say image={{uri: architectPng, align: 'bottom'}}>
        —Будем делать новый проект, сохраняя памятник, который так же нужно
        отреставрировать
      </Say>

      <Scene src={bgAirportFenceGif} durationMs={6000} />

      <Say>
        ПОЗДРАВЛЯЕМ! Вы сделали все возможное чтобы сохранить исторический облик
        здания
      </Say>

      <Say hide={-1}>Продолжение следует…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
