import {
  archkot2Png,
  archkot3Png,
  bgAskAfterAltJpg,
  bgAskBeforeFenceGif,
  bgDeveloperHqInsideJpg,
  bgSolidJpg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_ProjAsk_Examine_Reject_Ignore() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg.src} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot2Png.src, align: 'bottom'}}>
        —Мы предлагаем свою кандидатуру в качестве мониторинговой группы
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot3Png.src, align: 'bottom'}}>
        —Давайте договоримся о серии встреч с девелопером.
      </Say>

      <Say>
        И прошли обсуждения, где обсуждали, реставрация ли, реконструкция ли, и
        какое стекло важнее
      </Say>

      <Scene src={bgAskBeforeFenceGif.src} durationMs={6000} />
      <Scene src={bgAskAfterAltJpg.src} />

      <Say>Вы успешно реконструировали АСК</Say>

      <Say>
        Здание АСК может быть внесено в список памятников, стать новым активом.
        Обновленное здание привлекает множество туристов
      </Say>

      <Scene src={bgSolidJpg.src} />

      <Say durationMs={8000}>
        {'В память об архитекторе Александре Коржемпо\n1934-2022'}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
