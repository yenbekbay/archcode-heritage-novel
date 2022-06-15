import {
  bgCityHallMayorOfficeJpg,
  bgCityHallOutsideJpg,
  bgCityHallSignJpg,
  bgMayorDeskJpg,
  mayor1Png,
} from '~/assets/game'
import {Branch, Menu, Say, Scene} from '~/lib'

export function BranchCityHall_0Menu() {
  return (
    <Branch>
      <Scene src={bgCityHallOutsideJpg} />
      <Scene src={bgCityHallSignJpg} />
      <Scene src={bgCityHallMayorOfficeJpg} />

      <Say image={{uri: mayor1Png, style: {width: '100%', bottom: 0}}}>
        Так-с…Что у нас на повестке дня?
      </Say>

      <Scene src={bgMayorDeskJpg} />

      <Menu
        scheme="dark"
        choices={[
          {
            label: 'Проекты девелопера',
            frame: {
              viewport: [1080, 1920],
              rect: {
                x: 580,
                y: 680,
                width: 420,
                height: 500,
                transform: 'rotate(13deg)',
              },
            },
            onClick: (ctx) => ctx.goToBranch('CityHall_Menu_Projects'),
          },
          {
            label: 'Отдел памятников',
            frame: {
              viewport: [1080, 1920],
              rect: {
                x: -20,
                y: 1000,
                width: 400,
                height: 500,
                transform: 'rotate(-17deg)',
              },
            },
            onClick: (ctx) => ctx.goToBranch('CityHall_Menu_MonumentDept'),
          },
          {
            label: 'Государственные программы',
            frame: {
              viewport: [1080, 1920],
              rect: {
                x: 580,
                y: 1320,
                width: 400,
                height: 500,
                transform: 'rotate(13deg)',
              },
            },
            onClick: (ctx) => ctx.goToBranch('CityHall_Menu_GovPrograms'),
          },
        ]}
      />
    </Branch>
  )
}
