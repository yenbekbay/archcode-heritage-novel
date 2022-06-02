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
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_Menu_MonumentDept() {
  return (
    <Branch.Root background={bgCityHallMayorOfficeJpg}>
      <Branch.Say
        foregroundSrc={mayor1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Что у нас делает отдел памятников?
      </Branch.Say>

      <Branch.Foreground
        src={bgMonumentDeptDoorJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={2}
      />

      <Branch.Say
        foregroundSrc={mayor5Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Посмотрим, что они тут делают…
      </Branch.Say>

      <Branch.Foreground
        src={bgMonumentDeptDoorwayJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={2}
      />

      <Branch.Foreground
        src={monumentDeptStaff1Png}
        style={{width: '100%', bottom: 0}}
        durationMs={3000}
        transitory
      />

      <Branch.Foreground
        src={monumentDeptStaff2Png}
        style={{width: '100%', bottom: 0}}
        durationMs={3000}
        transitory
      />

      <Branch.Say
        foregroundSrc={mayor6Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Я хочу…
      </Branch.Say>

      <Branch.Choices
        scheme="dark"
        choices={[
          {
            label: 'Чай!',
            onClick: (ctx) => ctx.goToBranch('CityHall_MonumentDept_Tea'),
          },
          {
            label: 'Навести порядок',
            onClick: (ctx) => ctx.goToBranch('CityHall_MonumentDept_Rant'),
          },
        ]}
      />
    </Branch.Root>
  )
}
