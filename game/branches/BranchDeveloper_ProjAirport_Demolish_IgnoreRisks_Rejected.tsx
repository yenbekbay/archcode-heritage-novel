import {
  bgCityHallConferenceRoomJpg,
  letterPng,
  mayor6Png,
  stampRejectedPng,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Show} from '~/lib/game-engine'

export function BranchDeveloper_ProjAirport_Demolish_IgnoreRisks_Rejected() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} />

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
        hide={1}
      />

      <Show
        src={{
          uri: stampRejectedPng.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'translateY(-15%)',
          },
        }}
      />

      <Say
        tag={{text: 'Аким:', color: '#687065'}}
        image={{uri: mayor6Png.src, align: 'bottom'}}>
        —Я возмущён! Ведь здание представляет историческую ценность для города.
        Вам приходется разрабатывать новый проект и сохранить VIP терминал
      </Say>

      <Menu
        choices={[
          {
            label: 'Дальше',
            onClick: (ctx) =>
              ctx.goToLocation('Developer_ProjAirport_Preserve', 11),
          },
        ]}
      />
    </Branch>
  )
}