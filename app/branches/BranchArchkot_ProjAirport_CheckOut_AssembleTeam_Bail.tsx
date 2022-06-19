import {
  archbot1Png,
  archtok3Png,
  bgAirportFenceGif,
  fencePng,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Show, Title} from '~/lib'

export function BranchArchkot_ProjAirport_CheckOut_AssembleTeam_Bail() {
  return (
    <Branch>
      <Scene src={bgAirportFenceGif} durationMs={6000} />

      <Say>
        Здание изменено до неузнаваемости, и теперь это уже не имеет отношения к
        историко-культурному наследию
      </Say>

      <Show
        src={{
          uri: fencePng,
          style: {height: '100%', transform: 'translate(-50%) scale(1.15)'},
          animation: {
            initial: {x: '250%', scale: 0.5, originY: 1},
            entrance: {
              x: 0,
              scale: 1,
              transition: {duration: 2},
            },
            exit: {
              opacity: 0,
              transition: {duration: 0.5, ease: 'easeOut'},
            },
          },
        }}
        hide={-1}
      />

      <Say
        tag="АрхБот:"
        image={{uri: archbot1Png, style: {width: '100%', bottom: 0}}}>
        {'—А могло бы быть вот так:\n\n[Ссылка на зарубежные примеры](#)'}
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok3Png, style: {width: '100%', bottom: 0}}}>
        —Это больше не памятник. Надо выносить его из списка
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot1Png, style: {width: '100%', bottom: 0}}}>
        {
          '—Правила вынесения объекта из списка памятников историко-культурного наследия выглядят так:\n\n[Ссылка 3](#)'
        }
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
