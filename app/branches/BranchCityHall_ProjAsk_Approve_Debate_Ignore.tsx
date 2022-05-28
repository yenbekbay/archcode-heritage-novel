import {
  archkot2Png,
  archkot3Png,
  bgAskAfterAltJpg,
  bgAskBeforeFenceGif,
  bgDeveloperHqInsidePng,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjAsk_Approve_Debate_Ignore() {
  return (
    <Branch.Root background={bgDeveloperHqInsidePng}>
      <Branch.Say
        size="lg"
        tag="Архкот:"
        foregroundSrc={archkot2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Мы предлагаем свою кандидатуру в качестве мониторинговой группы
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={archkot3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Давайте договоримся о серии встреч с девелопером.
      </Branch.Say>

      <Branch.Say size="lg" transitory>
        и прошли обсуждения, где обсуждали, реставрация ли, реконструкция ли, и
        какое стекло важнее
      </Branch.Say>

      <Branch.Foreground
        src={bgAskBeforeFenceGif}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={6000}
        lingers={1}
        transitory
      />

      <Branch.Foreground
        src={bgAskAfterAltJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        lingers
        transitory
      />

      <Branch.Say size="xl" transitory>
        Вы успешно реконструировали АСК
      </Branch.Say>

      <Branch.Say transitory>
        Здание АСК может быть внесено в список памятников и стать новым активом
      </Branch.Say>

      <Branch.Title transitory lingers>
        Конец игры
      </Branch.Title>

      <Branch.Choices
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch.Root>
  )
}
