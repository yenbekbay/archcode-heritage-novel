import {
  bgCityHallMayorOfficeJpg,
  bgCityHallOutsideJpg,
  mayor13Png,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchCityHall_MonumentDept_Rant_NotOk() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg} />

      <Say image={{uri: mayor13Png, style: {width: '100%', bottom: 0}}}>
        {'Хммм…\nЧто-то долго'}
      </Say>

      <Scene src={bgCityHallOutsideJpg} />

      <Say>
        Срок Акима прошел, комиссия так и не состоялась. Новый аким обнуляет все
        действия предыдущего. Все ваши предложения отменяются.
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
