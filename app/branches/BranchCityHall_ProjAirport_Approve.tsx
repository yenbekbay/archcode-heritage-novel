import {
  bgCityHallMayorOfficeJpg,
  letterPng,
  mayor2Png,
  mayor3Png,
  stampApprovedPng,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Show} from '~/lib'

export function BranchCityHall_ProjAirport_Approve() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg} />

      <Show
        src={{
          uri: letterPng,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            backgroundColor: '#e7dbab',
            transform: 'scale(2.5)',
            transformOrigin: '50% 35%',
          },
        }}
        hide={2}
      />

      <Show
        src={{
          uri: stampApprovedPng,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'translateY(-15%)',
          },
        }}
        hide={1}
      />

      <Say>Указ: Одобрить снос здания VIP терминала Аэропорта</Say>

      <Say image={{uri: mayor2Png, align: 'bottom'}}>
        Мнение общественности учитывать не обязательно. Сохранить старый
        терминал — путь архаичного советского мышления
      </Say>

      <Say image={{uri: mayor3Png, align: 'bottom'}}>
        Однако, по закону необходимо провести общественные слушания по проекту
      </Say>

      <Menu
        choices={[
          {
            label: 'Дальше',
            onClick: (ctx) =>
              ctx.goToLocation('CityHall_ProjAirport_Examine_Reject', 4),
          },
        ]}
      />
    </Branch>
  )
}
