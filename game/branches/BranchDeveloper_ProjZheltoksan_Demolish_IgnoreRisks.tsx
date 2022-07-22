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
import {Branch, Say, Scene} from '~/lib/game-engine'

export function BranchDeveloper_ProjZheltoksan_Demolish_IgnoreRisks() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqOutsideJpg.src} />

      <Say>Идёт разработка проекта сноса</Say>

      <Scene src={bgDeveloperHqInsideJpg.src} />

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        —Проект сноса готов!
      </Say>

      <Say image={{uri: developerRepB10Png.src, align: 'bottom'}}>
        —Следующий шаг… Представить проект в акимате!
      </Say>

      <Scene src={bgCityHallOutsideJpg.src} />
      <Scene src={bgCityHallSignJpg.src} />
      <Scene src={bgCityHallConferenceRoomJpg.src} />

      <Say
        image={{uri: developerRepB6Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Дальше',
            onClick: (ctx) => {
              const options: BranchId[] = [
                'Developer_ProjZheltoksan_Demolish_IgnoreRisks_Approved',
                'Developer_ProjZheltoksan_Demolish_IgnoreRisks_Rejected',
              ]
              ctx.goToBranch(
                options[Math.floor(Math.random() * options.length)],
              )
            },
          },
        ]}>
        —Здесь будет большой зал. А здесь большие колонны. И ещё, большая
        лестница
      </Say>
    </Branch>
  )
}
