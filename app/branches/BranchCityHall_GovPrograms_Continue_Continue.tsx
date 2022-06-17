import {bgBusStop4Jpg, bgBusStop5Jpg, bgBusStop6Jpg} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchCityHall_GovPrograms_Continue_Continue() {
  return (
    <Branch>
      <Scene src={bgBusStop4Jpg} />
      <Scene src={bgBusStop5Jpg} />

      <Say>Вы успешно демонтировали остановку</Say>

      <Scene src={bgBusStop6Jpg} />

      <Say>Советские остановки исчезли по всему городу…</Say>

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
