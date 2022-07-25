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
  transition1Mp3,
  transition2ShortMp3,
} from '~/assets/game'
import {Branch, Menu, Say, Scene} from '~/lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_VisitCityHall() {
  return (
    <Branch>
      <Scene
        src={bgCityHallOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />

      <Say>Акимат г. Аталма</Say>

      <Scene
        src={bgMonumentDeptDoorJpg.src}
        audio={{...SCENE_AUDIO.indoor, onEntrance: transition2ShortMp3}}
      />
      <Scene src={bgMonumentDeptDoorwayJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png.src, align: 'bottom'}}>
        —Мы составили карту остановок!
      </Say>

      <Say
        tag={{text: 'Сотрудник:', color: '#798275'}}
        image={{uri: monumentDeptStaff3Png.src, align: 'bottom'}}>
        —Да да… очень интересно
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png.src, align: 'bottom'}}>
        —Мы подготовили меморандум о прекращении демонтажа советских остановок
      </Say>

      <Say
        tag={{text: 'Сотрудник:', color: '#798275'}}
        image={{uri: monumentDeptStaff3Png.src, align: 'bottom'}}>
        —Да да… очень интересно
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot13Png.src, align: 'bottom'}}>
        —Сохраним остановки?!
      </Say>

      <Say
        tag={{text: 'Сотрудник:', color: '#798275'}}
        image={{uri: monumentDeptStaff4Png.src, align: 'bottom'}}>
        —Да да… очень интересно
      </Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok3Png.src, align: 'bottom'}}
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
