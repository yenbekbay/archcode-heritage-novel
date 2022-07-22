import {
  angryCrowd1Png,
  bgCityHallMayorOfficeJpg,
  bgZheltoksanBeforeJpg,
  chatterWebm,
  letterPng,
  mayor4Png,
  stampApprovedPng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'

export function BranchCityHall_ProjZheltoksan_Approve() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} />

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
      />

      <Scene src={bgZheltoksanBeforeJpg.src} />

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={{uri: chatterWebm, loop: true}}>
        Общественность возмущена
      </Say>

      <Say
        image={{uri: mayor4Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Попросить помощи у блоггеров',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjZheltoksan_Approve_AskHelp'),
          },
          {
            label: 'Вступить в диалог',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjZheltoksan_Approve_Debate'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
