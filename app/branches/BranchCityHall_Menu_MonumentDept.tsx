import {
  bgCityHallMayorOfficeJpg,
  bgMonumentDeptDoorJpg,
  bgMonumentDeptDoorwayJpg,
  mayor1Png,
  mayor5Png,
  mayor6Png,
  monumentDeptStaff1Png,
  monumentDeptStaff2Png,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchCityHall_Menu_MonumentDept() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg} />

      <Say image={{uri: mayor1Png, align: 'bottom'}}>
        Что у нас делает отдел памятников?
      </Say>

      <Scene src={bgMonumentDeptDoorJpg} />

      <Say image={{uri: mayor5Png, align: 'bottom'}}>
        Посмотрим, что они тут делают…
      </Say>

      <Scene src={bgMonumentDeptDoorwayJpg} />

      <Show src={{uri: monumentDeptStaff1Png, align: 'bottom'}} />
      <Show src={{uri: monumentDeptStaff2Png, align: 'bottom'}} />

      <Say
        image={{uri: mayor6Png, align: 'bottom'}}
        menu={[
          {
            label: 'Чай!',
            onClick: (ctx) => ctx.goToBranch('CityHall_MonumentDept_Tea'),
          },
          {
            label: 'Навести порядок',
            onClick: (ctx) => ctx.goToBranch('CityHall_MonumentDept_Rant'),
          },
        ]}>
        Я хочу…
      </Say>
    </Branch>
  )
}
