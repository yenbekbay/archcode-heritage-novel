import {
  archkot7Png,
  bgAskAfterJpg,
  bgAskBeforeFenceGif,
  bgLaptopStandaloneJpg,
  bgSolidJpg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchArchkot_ProjAsk_CheckOut_AssembleTeam_Article() {
  return (
    <Branch>
      <Say
        image={{
          uri: bgLaptopStandaloneJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}>
        Статья вышла неплохая. Просмотров было достаточно, а процесс
        реконструкции продолжался
      </Say>

      <Scene src={bgAskBeforeFenceGif} durationMs={6000} />

      <Scene src={bgAskAfterJpg} />

      <Say image={{uri: archkot7Png, align: 'bottom'}}>
        Здание изменено до неузнаваемости, и теперь это уже не имеет отношения к
        историко-культурному наследию
      </Say>

      <Scene src={bgSolidJpg} />

      <Say durationMs={8000}>
        {'В память об архитекторе Александре Коржемпо\n1934-2022'}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
