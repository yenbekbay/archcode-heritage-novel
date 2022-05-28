import {
  assistant3Png,
  bgAskAfterAltJpg,
  bgAskBeforeFenceGif,
  bgDeveloperHqInsidePng,
  mayor1Png,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjAsk_Approve_Debate_Intervene() {
  return (
    <Branch.Root background={bgDeveloperHqInsidePng}>
      <Branch.Say
        size="lg"
        tag="Работник акимата:"
        foregroundSrc={assistant3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Мы предоставим группу сотрудников для ведения мониторинга
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={mayor1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Отлично, договоримся о серии встреч с девелопером
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
        ПОЗДРАВЛЯЕМ! Реставрация объекта завершена. У вашего отдела новые
        перспективы Тема памятников двигается на городской, а затем и на
        государственный уровень Вам удалось простроить схему взаимодействия с
        общественностью в дальнейшем
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
