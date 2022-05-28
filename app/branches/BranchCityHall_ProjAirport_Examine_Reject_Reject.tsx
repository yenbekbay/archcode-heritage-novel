import {
  bgAirportFenceGif,
  bgCityHallMayorOfficeJpg,
  developerRepB6Png,
  mayor3Png,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjAirport_Examine_Reject_Reject() {
  return (
    <Branch.Root background={bgCityHallMayorOfficeJpg}>
      <Branch.Say
        foregroundSrc={mayor3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —В проекте действительно есть ряд нарушений, нужно его изменить
      </Branch.Say>

      <Branch.Say
        tag="Девелопер:"
        foregroundSrc={developerRepB6Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Мы учли мнение общественности и данный проект сохранияет наше
        историко-культурное наследие
      </Branch.Say>

      <Branch.Foreground
        src={bgAirportFenceGif}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={6000}
        transitory
        lingers
      />

      <Branch.Say transitory>
        ПОЗДРАВЛЯЕМ! Не смотря ни на что, вы защищаете культурное и историческое
        наследие: Ваш рейтинг повышается, так как вы учли мнение общественности
        и уровень доверия к вам повышается. Сохранив странное здание VIP
        терминала, вы повышаете рейтинг аэропорта; растет интерес туристов
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
