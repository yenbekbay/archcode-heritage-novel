import {
  bgZheltoksanAfterJpg,
  bgZheltoksanBeforeFenceGif,
  bgZheltoksanBeforeJpg,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchCityHall_ProjZheltoksan_Examine_Reject_Ignore_Ignore_Ignore() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeJpg} />
      <Scene src={bgZheltoksanBeforeFenceGif} durationMs={6000} />
      <Scene src={bgZheltoksanAfterJpg} />

      <Say>Вы успешно реконструировали Желтоксан 115</Say>

      <Say>
        Здание утратило первоначальный облик и больше не представляет
        исторической ценности. Теперь Вам будет сложнее работать с
        общественностью
      </Say>

      <Title hide={-1}>Конец игры</Title>

      <Menu
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch>
  )
}
