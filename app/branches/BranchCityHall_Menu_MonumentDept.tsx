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

      <Say image={{uri: mayor1Png, style: {width: '100%', bottom: 0}}}>
        Что у нас делает отдел памятников?
      </Say>

      <Scene src={bgMonumentDeptDoorJpg} />

      <Say image={{uri: mayor5Png, style: {width: '100%', bottom: 0}}}>
        Посмотрим, что они тут делают…
      </Say>

      <Scene src={bgMonumentDeptDoorwayJpg} />

      <Show
        src={{uri: monumentDeptStaff1Png, style: {width: '100%', bottom: 0}}}
      />
      <Show
        src={{uri: monumentDeptStaff2Png, style: {width: '100%', bottom: 0}}}
      />

      <Say
        image={{uri: mayor6Png, style: {width: '100%', bottom: 0}}}
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
