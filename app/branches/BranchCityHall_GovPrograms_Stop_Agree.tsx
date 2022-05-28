import {
  bgBusStop1Jpg,
  bgCityHallConferenceRoomJpg,
  mayor3Png,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_GovPrograms_Stop_Agree() {
  return (
    <Branch.Root background={bgCityHallConferenceRoomJpg}>
      <Branch.Say
        size="xl"
        foregroundSrc={mayor3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Спасибо, отличная работа!
      </Branch.Say>

      <Branch.Say
        foregroundSrc={mayor3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Мы возьмем этот процесс под свой контроль и позаботимся о том, чтобы
        придать этим остановкам особый статус
      </Branch.Say>

      <Branch.Foreground
        src={bgBusStop1Jpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Branch.Say size="lg" transitory>
        Советские остановки стали достопримечательностью города!
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
