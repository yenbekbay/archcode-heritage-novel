import {
  bgAirportJpg,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  mayor4Png,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchCityHall_ProjAirport_Examine_Reject_Approve() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg} />

      <Say image={{uri: mayor4Png, style: {width: '100%', bottom: 0}}}>
        Тише едешь — дальше будешь, пусть строят как хотят!
      </Say>

      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say>
        В результате слушаний собралась рабочая группа по мониторингу проекта от
        общественности
      </Say>

      <Scene src={bgAirportJpg} />

      <Say durationMs={0} visibility={1}>
        Рабочая группа от общественности отправила письмо в EBRD
      </Say>

      <Say placement="bottom">
        [*Ссылка на письмо](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
      </Say>

      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say>А еще они организовали пресс конференцию</Say>

      <Say>
        Возникли трудности, вы не можете продолжить реализацию проекта и
        вынуждены временно его заморозить
      </Say>

      <Say visibility="indefinite">Продолжение следует…</Say>

      <Title visibility="indefinite">Конец игры</Title>

      <Menu
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch>
  )
}
