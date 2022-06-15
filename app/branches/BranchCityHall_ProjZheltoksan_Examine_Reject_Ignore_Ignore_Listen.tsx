import {bgZheltoksanBeforeJpg} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchCityHall_ProjZheltoksan_Examine_Reject_Ignore_Ignore_Listen() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeJpg} />

      <Say>
        Поздравляем! Вы защищаете наследие! К тому же, при дальнейшем внесении
        здания в список памятников, оно может стать активом
      </Say>

      <Title visibility="indefinite">Конец игры</Title>

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
