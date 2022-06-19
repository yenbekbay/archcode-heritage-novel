import {
  archbot1Png,
  archkot7Png,
  bgBusStop4Jpg,
  bgBusStop6Jpg,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_Bail() {
  return (
    <Branch>
      <Scene src={bgBusStop4Jpg} />

      <Scene src={bgBusStop6Jpg} />

      <Say>
        Остановка изменена до неузнаваемости, и теперь это уже не имеет
        отношения к историко-культурному наследию
      </Say>

      <Say image={{uri: archkot7Png, style: {width: '100%', bottom: 0}}}>
        Была история, и нет истории. Зря Дядь Юра старался
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot1Png, style: {width: '100%', bottom: 0}}}>
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
