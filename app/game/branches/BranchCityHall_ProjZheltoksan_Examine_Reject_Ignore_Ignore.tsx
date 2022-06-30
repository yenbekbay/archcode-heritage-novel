import {
  angryCrowd1Png,
  bgCityHallMayorOfficeJpg,
  bgZheltoksanBeforeJpg,
  letterPng,
  mayor4Png,
  stampApprovedPng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'

export function BranchCityHall_ProjZheltoksan_Examine_Reject_Ignore_Ignore() {
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
      />

      <Scene src={bgZheltoksanBeforeJpg} />

      <Say image={{uri: angryCrowd1Png, align: 'bottom'}}>Массовый протест</Say>

      <Say
        image={{uri: mayor4Png, align: 'bottom'}}
        menu={[
          {
            label: 'Учесть мнение',
            onClick: (ctx) =>
              ctx.goToBranch(
                'CityHall_ProjZheltoksan_Examine_Reject_Ignore_Ignore_Listen',
              ),
          },
          {
            label: 'Игнорировать',
            onClick: (ctx) =>
              ctx.goToBranch(
                'CityHall_ProjZheltoksan_Examine_Reject_Ignore_Ignore_Ignore',
              ),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}