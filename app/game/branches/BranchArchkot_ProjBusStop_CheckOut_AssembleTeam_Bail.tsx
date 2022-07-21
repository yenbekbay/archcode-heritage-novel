import {
  archbot1Png,
  archkot7Png,
  bgBusStop4Jpg,
  bgBusStop6Jpg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_Bail() {
  return (
    <Branch>
      <Scene src={bgBusStop4Jpg} />

      <Scene src={bgBusStop6Jpg} />

      <Say>
        Остановка изменена до неузнаваемости, и теперь это уже не имеет
        отношения к историко-культурному наследию
      </Say>

      <Say image={{uri: archkot7Png, align: 'bottom'}}>
        Была история, и нет истории. Зря Дядь Юра старался
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png, align: 'bottom'}}>
        {'—А могло бы быть вот так:\n\n[Ссылка на зарубежные примеры](#)'}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
