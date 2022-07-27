import {
  angryCrowd1Png,
  bgBusStop4Jpg,
  bgCityHallMayorOfficeJpg,
  mayor2Png,
} from 'assets/game'
import {Branch, Say, Scene} from 'lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_GovPrograms_Continue() {
  return (
    <Branch>
      <Scene src={bgBusStop4Jpg.src} audio={SCENE_AUDIO.city} />

      <Say>
        Демонтаж продолжается, но идет медленно и проблемно из-за крепких
        конструкций
      </Say>

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={SCENE_AUDIO.chatter}>
        За день общественность успевает распространить информацию о демонтаже. В
        акимат пришло несколько писем от активистов с просьбой остановить
        демонтаж остановки
      </Say>

      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Продолжить демонтаж',
            onClick: (ctx) =>
              ctx.goToBranch('Akim_GovPrograms_Continue_Continue'),
          },
          {
            label: 'Остановить демонтаж',
            onClick: (ctx) => ctx.goToBranch('Akim_GovPrograms_Stop'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
