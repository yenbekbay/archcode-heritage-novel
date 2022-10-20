import {
  bgAirportJpg,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  mayor4Png,
} from 'assets/game'
import {Branch, Play, Say, Scene} from 'react-visual-novel'
import {GameOverMenu, GameOverTitle} from '../commands'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjAirport_Examine_Reject_Approve() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{uri: mayor4Png.src, align: 'bottom'}}>
        Тише едешь — дальше будешь, пусть строят как хотят!
      </Say>

      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say>
        В результате слушаний собралась рабочая группа по мониторингу проекта от
        общественности
      </Say>

      <Scene src={bgAirportJpg.src} audio={SCENE_AUDIO.city} />

      <Say durationMs={0}>
        {`
          Рабочая группа от общественности отправила письмо в EBRD

          [Письмо в EBRD](${LINKS.letter_airport})
        `}
      </Say>

      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say>А ещё они организовали пресс конференцию</Say>

      <Say>
        Из-за действий общественности возникли трудности, вы не можете
        продолжить реализацию проекта и вынуждены временно его заморозить
      </Say>

      <Play audio={SCENE_AUDIO.calmLoop} hide={-1} />

      <Say hide={-1}>Продолжение следует…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
