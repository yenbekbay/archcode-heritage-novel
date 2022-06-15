import {
  bgCityHallConferenceRoomJpg,
  bgZheltoksanBeforeJpg,
  mayor3Png,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchCityHall_ProjZheltoksan_Examine_Reject_Listen() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say image={{uri: mayor3Png, style: {width: '100%', bottom: 0}}}>
        Выявлен ряд нарушений! Девелопер должен пересмотреть проект
      </Say>

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
