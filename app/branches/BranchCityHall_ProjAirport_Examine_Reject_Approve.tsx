import {
  bgAirportJpg,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  mayor4Png,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjAirport_Examine_Reject_Approve() {
  return (
    <Branch.Root background={bgCityHallMayorOfficeJpg}>
      <Branch.Say
        foregroundSrc={mayor4Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Тише едешь — дальше будешь, пусть строят как хотят!
      </Branch.Say>

      <Branch.Foreground
        src={bgCityHallConferenceRoomJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={2}
      />

      <Branch.Say transitory>
        В результате слушаний собралась рабочая группа по мониторингу проекта от
        общественности
      </Branch.Say>

      <Branch.Foreground
        src={bgAirportJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers
      />

      <Branch.Say transitory lingers={1}>
        Рабочая группа от общественности отправила письмо в EBRD
      </Branch.Say>

      <Branch.Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        placement="bottom">
        *Ссылка на письмо
      </Branch.Say>

      <Branch.Foreground
        src={bgCityHallConferenceRoomJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={2}
      />

      <Branch.Say transitory>
        А еще они организовали пресс конференцию
      </Branch.Say>

      <Branch.Say transitory>
        Возникли трудности, вы не можете продолжить реализацию проекта и
        вынуждены временно его заморозить
      </Branch.Say>

      <Branch.Say transitory lingers>
        Продолжение следует…
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
