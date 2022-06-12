import {
  archbot1Png,
  archkot6Png,
  archkot7Png,
  bgBusStop1Jpg,
  bgBusStop4Jpg,
  bgBusStop6Jpg,
  fencePng,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Show, Title} from '~/lib'

export function BranchArchkot_ProjBusStop_WalkPast() {
  return (
    <Branch>
      <Show
        src={{
          uri: fencePng,
          style: {height: '100%', transform: 'translate(-50%) scale(1.15)'},
          animation: {
            initial: {},
            entrance: {},
            exit: {x: '-400%', transition: {duration: 2}},
          },
        }}
        hide={1}
        zIndex={100}
      />

      <Say
        image={{
          uri: archkot6Png,
          align: 'bottom',
          style: {filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))'},
        }}
        zIndex={101}>
        Не стоит зря терять времени, дедлайны горят, дома кот некормленный, да
        сериал недосмотренный
      </Say>

      <Scene src={bgBusStop1Jpg} />

      <Say>За забором была автобусная остановка «Казмеханобр»</Say>

      <Scene src={bgBusStop4Jpg} />

      <Scene src={bgBusStop6Jpg} />

      <Say>
        Остановка изменена до неузнаваемости, и теперь это уже не имеет
        отношения к историко-культурному наследию
      </Say>

      <Say image={{uri: archkot7Png, align: 'bottom'}}>
        Была история, и нет истории. Зря Дядь Юра старался
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png, align: 'bottom'}}>
        {'—А могло бы быть вот так:\n\n[Ссылка на зарубежные примеры](#)'}
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
