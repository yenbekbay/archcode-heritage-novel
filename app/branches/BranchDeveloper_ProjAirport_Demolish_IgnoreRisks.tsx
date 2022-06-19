import {
  architectPng,
  bgCityHallConferenceRoomJpg,
  bgCityHallOutsideJpg,
  bgCityHallSignJpg,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  developerRepB10Png,
  developerRepB6Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib'

export function BranchDeveloper_ProjAirport_Demolish_IgnoreRisks() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>Идёт разработка проекта сноса</Say>

      <Scene src={bgDeveloperHqInsideJpg} />

      <Say tag="Архитектор:" image={{uri: architectPng, align: 'bottom'}}>
        —Проект сноса готов!
      </Say>

      <Say image={{uri: developerRepB10Png, align: 'bottom'}}>
        —Следующий шаг… Представить проект в акимате!
      </Say>

      <Scene src={bgCityHallOutsideJpg} />
      <Scene src={bgCityHallSignJpg} />
      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say
        image={{uri: developerRepB6Png, align: 'bottom'}}
        menu={[
          {
            label: 'Дальше',
            onClick: (ctx) => {
              const options: BranchId[] = [
                'Developer_ProjAirport_Demolish_IgnoreRisks_Approved',
                'Developer_ProjAirport_Demolish_IgnoreRisks_Rejected',
              ]
              ctx.goToBranch(
                options[Math.floor(Math.random() * options.length)],
              )
            },
          },
        ]}>
        —Здесь будет большой зал. А здесь большие колонны. И ещё большая
        лестница
      </Say>
    </Branch>
  )
}
