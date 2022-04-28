import bgCityHallOfficeSrc from '~/assets/game/bg-city-hall-office.jpg'
import bgCityHallOutsideSrc from '~/assets/game/bg-city-hall-outside.jpg'
import bgCityHallSignSrc from '~/assets/game/bg-city-hall-sign.jpg'
import bgMayorDeskSrc from '~/assets/game/bg-mayor-desk.jpg'
import mayor1Src from '~/assets/game/mayor-1.png'
import {Blank, Foreground, Say} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer} from './components'

export const sceneCityHall1Assets = [
  bgCityHallOutsideSrc,
  bgCityHallSignSrc,
  bgCityHallOfficeSrc,
  bgMayorDeskSrc,
  mayor1Src,
]

export function SceneCityHall1() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Blank durationMs={3000} />

      <Foreground
        src={bgCityHallSignSrc}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Foreground
        src={bgCityHallOfficeSrc}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={2}
      />

      <Say
        large
        foregroundSrc={mayor1Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        -Так-с…Что у нас на повестке дня?
      </Say>

      <Foreground
        src={bgMayorDeskSrc}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <img
      src={bgCityHallOutsideSrc}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover"
    />
  )
}
