import {
  archkot7Png,
  bgAskAfterJpg,
  bgAskBeforeFenceGif,
  bgLaptopStandaloneJpg,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchArchkot_ProjAsk_CheckOut_AssembleTeam_Article() {
  return (
    <Branch>
      <Say
        image={{
          uri: bgLaptopStandaloneJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}>
        Статья вышла неплохая. Просмотров было достаточно, а процесс
        реконструкции продолжался
      </Say>

      <Scene src={bgAskBeforeFenceGif} durationMs={6000} />

      <Scene src={bgAskAfterJpg} />

      <Say image={{uri: archkot7Png, style: {width: '100%', bottom: 0}}}>
        Здание изменено до неузнаваемости, и теперь это уже не имеет отношения к
        историко-культурному наследию
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
