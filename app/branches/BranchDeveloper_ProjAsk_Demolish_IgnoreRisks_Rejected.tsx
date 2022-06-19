import {
  bgCityHallConferenceRoomJpg,
  letterPng,
  mayor6Png,
  stampRejectedPng,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Show} from '~/lib'

export function BranchDeveloper_ProjAsk_Demolish_IgnoreRisks_Rejected() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg} />

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
        hide={1}
      />

      <Show
        src={{
          uri: stampRejectedPng,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'translateY(-15%)',
          },
        }}
      />

      <Say tag="Аким:" image={{uri: mayor6Png, align: 'bottom'}}>
        —Я возмущён! Ведь здание представляет историческую ценность для города.
        Вам приходется разрабатывать новый проект и сохранить АСК
      </Say>

      <Menu
        choices={[
          {
            label: 'Дальше',
            onClick: (ctx) =>
              ctx.goToLocation('Developer_ProjAsk_Preserve', 11),
          },
        ]}
      />
    </Branch>
  )
}
