import {bgCityHallMayorOfficeJpg, bgCityHallOutsideJpg} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchCityHall_MonumentDept_Rant_Ok() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg} />
      <Scene src={bgCityHallOutsideJpg} />

      <Say>Состоялась комиссия. ПОЗДРАВЛЯЕМ!!!</Say>

      <Say>
        Здания внесены в список! Теперь они все — памятники и могут стать новым
        активом!
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
