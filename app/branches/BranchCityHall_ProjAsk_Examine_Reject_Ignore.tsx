import {
  archkot2Png,
  archkot3Png,
  bgAskAfterAltJpg,
  bgAskBeforeFenceGif,
  bgDeveloperHqInsidePng,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchCityHall_ProjAsk_Examine_Reject_Ignore() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsidePng} />

      <Say
        tag="АрхКот:"
        image={{uri: archkot2Png, style: {width: '100%', bottom: 0}}}>
        —Мы предлагаем свою кандидатуру в качестве мониторинговой группы
      </Say>

      <Say image={{uri: archkot3Png, style: {width: '100%', bottom: 0}}}>
        —Давайте договоримся о серии встреч с девелопером.
      </Say>

      <Say>
        и прошли обсуждения, где обсуждали, реставрация ли, реконструкция ли, и
        какое стекло важнее
      </Say>

      <Scene src={bgAskBeforeFenceGif} durationMs={6000} />
      <Scene src={bgAskAfterAltJpg} />

      <Say>Вы успешно реконструировали АСК</Say>

      <Say>
        Здание АСК может быть внесено в список памятников и стать новым активом
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
