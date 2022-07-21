import {
  bgBusStop5Jpg,
  bgBusStop6Jpg,
  bgCityHallConferenceRoomJpg,
  mayor15Png,
  mayor3Png,
  mayor9Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_GovPrograms_Stop_Dismiss() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say image={{uri: mayor9Png, align: 'bottom'}}>
        —Никакой ценности эти остановки не имеют!
      </Say>

      <Say image={{uri: mayor15Png, align: 'bottom'}}>
        —Всё это-пережитки советского прошлого!
      </Say>

      <Say image={{uri: mayor3Png, align: 'bottom'}}>—Не одобрять проект!</Say>

      <Scene src={bgBusStop5Jpg} />

      <Say>Вы успешно демонтировали остановку</Say>

      <Scene src={bgBusStop6Jpg} />

      <Say>Советские остановки исчезли по всему городу…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
