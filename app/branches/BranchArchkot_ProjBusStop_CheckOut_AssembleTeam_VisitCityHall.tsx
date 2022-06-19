import {
  archkot13Png,
  archkot4Png,
  archtok3Png,
  bgArchcodeOfficeJpg,
  bgCityHallOutsideJpg,
  bgMonumentDeptDoorJpg,
  bgMonumentDeptDoorwayJpg,
  monumentDeptStaff3Png,
  monumentDeptStaff4Png,
} from '~/assets/game'
import {Branch, Menu, Say, Scene} from '~/lib'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_VisitCityHall() {
  return (
    <Branch>
      <Scene src={bgCityHallOutsideJpg} />

      <Say>Акимат г. Аталма</Say>

      <Scene src={bgMonumentDeptDoorJpg} />
      <Scene src={bgMonumentDeptDoorwayJpg} />

      <Say
        tag="АрхКот:"
        image={{uri: archkot4Png, style: {width: '100%', bottom: 0}}}>
        —Мы составили карту остановок!
      </Say>

      <Say
        tag="Сотрудник:"
        image={{uri: monumentDeptStaff3Png, style: {width: '100%', bottom: 0}}}>
        —Да да… очень интересно
      </Say>

      <Say
        tag="АрхКот:"
        image={{uri: archkot4Png, style: {width: '100%', bottom: 0}}}>
        —Мы подготовили меморандум о прекращении демонтажа советских остановок
      </Say>

      <Say
        tag="Сотрудник:"
        image={{uri: monumentDeptStaff3Png, style: {width: '100%', bottom: 0}}}>
        —Да да… очень интересно
      </Say>

      <Say
        tag="АрхКот:"
        image={{uri: archkot13Png, style: {width: '100%', bottom: 0}}}>
        —Сохраним остановки?!
      </Say>

      <Say
        tag="Сотрудник:"
        image={{uri: monumentDeptStaff4Png, style: {width: '100%', bottom: 0}}}>
        —Да да… очень интересно
      </Say>

      <Scene src={bgArchcodeOfficeJpg} />

      <Say
        tag="АрхТок:"
        image={{uri: archtok3Png, style: {width: '100%', bottom: 0}}}
        hide={1}>
        —Как-то не очень обнадеживает встреча в акимате. Надо действовать самим…
      </Say>

      <Menu
        choices={[
          {
            label: 'Дальше',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Archkot_ProjBusStop_CheckOut_AssembleTeam_Submit',
              ),
          },
        ]}
      />
    </Branch>
  )
}
