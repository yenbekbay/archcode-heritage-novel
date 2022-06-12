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

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB6Png, align: 'bottom'}}>
        —Мы учли мнение общественности и данный проект сохранияет наше
        историко-культурное наследие
      </Say>

      <Scene src={bgAirportFenceGif} durationMs={6000} />

      <Say>
        ПОЗДРАВЛЯЕМ! Несмотря ни на что, вы защищаете культурное и историческое
        наследие: Вы учли мнение общественности, повысив уровень их доверия к
        Вам. Сохранив странное здание VIP терминала, вы повышаете рейтинг
        аэропорта; растет интерес туристов
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
