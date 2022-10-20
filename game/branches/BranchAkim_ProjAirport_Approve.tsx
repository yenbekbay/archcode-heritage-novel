import {
  bgCityHallMayorOfficeJpg,
  letterPng,
  mayor2Png,
  mayor3Png,
  stampApprovedPng,
} from 'assets/game'
import {Branch, Menu, Say, Scene, Show} from 'react-visual-novel'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjAirport_Approve() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Show
        src={{
          uri: letterPng.src,
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
          uri: stampApprovedPng.src,
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

      <Say image={{uri: mayor2Png.src, align: 'bottom'}}>
        Мнение общественности учитывать не обязательно. Сохранить старый
        терминал — путь архаичного советского мышления
      </Say>

      <Say image={{uri: mayor3Png.src, align: 'bottom'}}>
        Однако, по закону необходимо провести общественные слушания по проекту
      </Say>

      <Menu
        choices={[
          {
            label: 'Дальше',
            onClick: (ctx) =>
              // HACK
              ctx.goToLocation('Akim_ProjAirport_Examine_Reject', 4),
          },
        ]}
      />
    </Branch>
  )
}
