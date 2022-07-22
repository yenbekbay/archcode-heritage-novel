import {
  bgAirportJpg,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  mayor4Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_ProjAirport_Examine_Reject_Approve() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} />

      <Say image={{uri: mayor4Png.src, align: 'bottom'}}>
        Тише едешь — дальше будешь, пусть строят как хотят!
      </Say>

      <Scene src={bgCityHallConferenceRoomJpg.src} />

      <Say>
        В результате слушаний собралась рабочая группа по мониторингу проекта от
        общественности
      </Say>

      <Scene src={bgAirportJpg.src} />

      <Say durationMs={0} hide={1}>
        Рабочая группа от общественности отправила письмо в EBRD
      </Say>

      <Say placement="bottom">[Ссылка на письмо](#)</Say>

      <Scene src={bgCityHallConferenceRoomJpg.src} />

      <Say>А ещё они организовали пресс конференцию</Say>

      <Say>
        Из-за действий общественности возникли трудности, вы не можете
        продолжить реализацию проекта и вынуждены временно его заморозить
      </Say>

      <Say hide={-1}>Продолжение следует…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
