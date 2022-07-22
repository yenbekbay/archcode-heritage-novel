import {
  assistant1Png,
  assistant2Png,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  bgCityHallOutsideJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  expert1Png,
  expert2Png,
  expert3Png,
  mayor2Png,
  portalOgg,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'

export function BranchCityHall_ProjAsk_Examine() {
  return (
    <Branch>
      <Scene src={bgCityHallOutsideJpg.src} />

      <Say placement="middle" scheme="dark">
        Экспертиза
      </Say>

      <Scene src={bgCityHallConferenceRoomJpg.src} />

      <Say
        tag={{text: 'Эксперт:', color: '#687065'}}
        image={{uri: expert1Png.src, align: 'bottom'}}>
        —Вижу нарушения…
      </Say>

      <Say
        tag={{text: 'Эксперт:', color: '#687065'}}
        image={{uri: expert2Png.src, align: 'bottom'}}>
        —Ещё одно! Ещё нарушение!!!
      </Say>

      <Show src={{uri: expert3Png.src, align: 'bottom'}} audio={portalOgg} />

      <Scene src={bgMayorDoorJpg.src} />

      <Say scheme="dark">*тук-тук</Say>

      <Scene src={bgMayorDoorwayJpg.src} />

      <Say
        scheme="dark"
        tag={{text: 'Помощник:', color: '#687065'}}
        image={{
          uri: assistant1Png.src,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —Экспертиза выявила несколько нарушений
      </Say>

      <Show
        src={{
          uri: assistant2Png.src,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}
      />

      <Scene src={bgMayorDoorJpg.src} />

      <Say scheme="dark">*хдыщ</Say>

      <Scene src={bgCityHallMayorOfficeJpg.src} />

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Не одобрять',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAsk_Examine_Reject'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAsk_Approve'),
          },
        ]}>
        Что делать с проектом?
      </Say>
    </Branch>
  )
}
