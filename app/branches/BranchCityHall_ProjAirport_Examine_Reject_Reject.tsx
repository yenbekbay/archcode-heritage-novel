import {
  bgAirportFenceGif,
  bgCityHallMayorOfficeJpg,
  developerRepB6Png,
  mayor3Png,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchCityHall_ProjAirport_Examine_Reject_Reject() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg} />

      <Say image={{uri: mayor3Png, align: 'bottom'}}>
        —В проекте действительно есть ряд нарушений, нужно его изменить
      </Say>

      <Say tag="Девелопер:" image={{uri: developerRepB6Png, align: 'bottom'}}>
        —Мы учли мнение общественности и данный проект сохранияет наше
        историко-культурное наследие
      </Say>

      <Scene src={bgAirportFenceGif} durationMs={6000} />

      <Say>
        ПОЗДРАВЛЯЕМ! Не смотря ни на что, вы защищаете культурное и историческое
        наследие: Ваш рейтинг повышается, так как вы учли мнение общественности
        и уровень доверия к вам повышается. Сохранив странное здание VIP
        терминала, вы повышаете рейтинг аэропорта; растет интерес туристов
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
