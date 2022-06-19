import {bgBusStop1Jpg} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_StopHalfway() {
  return (
    <Branch>
      <Scene src={bgBusStop1Jpg} />

      <Say>
        Объект сохранен, но так и не стал памятником историко-культурного
        наследия
      </Say>

      <Title hide={-1}>Конец игры</Title>

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
