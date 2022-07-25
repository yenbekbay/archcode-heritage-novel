import {
  bgCityHallMayorOfficeJpg,
  bgCityHallOutsideJpg,
  bgCityHallSignJpg,
  bgMayorDeskJpg,
  mayor1Png,
  transition1Mp3,
  transition2ShortMp3,
  transition3ShortMp3,
} from '~/assets/game'
import {Branch, Menu, Play, Say, Scene} from '~/lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_0Menu() {
  return (
    <Branch>
      <Scene
        src={bgCityHallOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />
      <Scene
        src={bgCityHallSignJpg.src}
        audio={{onEntrance: transition2ShortMp3}}
      />
      <Scene
        src={bgCityHallMayorOfficeJpg.src}
        audio={{onEntrance: transition3ShortMp3}}
      />

      <Play audio={SCENE_AUDIO.akimTheme} hide={-1} />

      <Say image={{uri: mayor1Png.src, align: 'bottom'}}>
        Так-с…Что у нас на повестке дня?
      </Say>

      <Scene src={bgMayorDeskJpg.src} audio={SCENE_AUDIO.akimTheme} />

      <Menu
        scheme="dark"
        choices={[
          {
            label: 'Проекты девелопера',
            frame: {
              viewport: [1080, 1920],
              rect: {
                x: 580,
                y: 680,
                width: 420,
                height: 500,
                transform: 'rotate(13deg)',
              },
            },
            onClick: (ctx) => ctx.goToBranch('Akim_Menu_Projects'),
          },
          {
            label: 'Отдел памятников',
            frame: {
              viewport: [1080, 1920],
              rect: {
                x: -20,
                y: 1000,
                width: 400,
                height: 500,
                transform: 'rotate(-17deg)',
              },
            },
            onClick: (ctx) => ctx.goToBranch('Akim_Menu_MonumentDept'),
          },
          {
            label: 'Государственные программы',
            frame: {
              viewport: [1080, 1920],
              rect: {
                x: 580,
                y: 1320,
                width: 400,
                height: 500,
                transform: 'rotate(13deg)',
              },
            },
            onClick: (ctx) => ctx.goToBranch('Akim_Menu_GovPrograms'),
          },
        ]}
      />
    </Branch>
  )
}
