import {
  bgCityHallMayorOfficeJpg,
  bgMayorDoorwayJpg,
  mayor10Png,
  mayor11Png,
  mayor12Png,
  mayor1Png,
  mayor2Png,
  mayor8Png,
  mayor9Png,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'
import {SubmitMonumentNomination} from '../commands'

export function BranchCityHall_MonumentDept_Rant() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} />

      <Scene src={bgMayorDoorwayJpg.src} />

      <Say image={{uri: mayor8Png.src, style: {width: '100%', bottom: '-10%'}}}>
        —БЫСТРО ВСЕМ ЗА РАБОТУ!!!
      </Say>

      <Say image={{uri: mayor9Png.src, align: 'bottom'}}>
        —Подготовить базу для внесения зданий в список
      </Say>

      <Say image={{uri: mayor2Png.src, align: 'bottom'}}>
        На самом деле много зданий, которые могут быть официальными памятниками…
      </Say>

      <Say
        image={{
          uri: mayor10Png.src,
          align: 'bottom',
          style: {transform: 'scaleX(-1)'},
        }}>
        Привлекут больше туристов
      </Say>

      <Say image={{uri: mayor10Png.src, align: 'bottom'}}>
        Да и ценность их вырастет
      </Say>

      <Show
        src={{
          uri: mayor1Png.src,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.5)',
            transformOrigin: 'bottom',
          },
        }}
        durationMs={0}
        hide={5}
      />

      <Say durationMs={0} hide={2}>
        Ну что, приступим к списку…
      </Say>

      <Say
        frame={{
          viewport: [1080, 1920],
          rect: {
            x: 140,
            y: 1300,
            width: 720,
          },
        }}
        style={{fontSize: 16, textAlign: 'left'}}
        hide={1}>
        “Какие здания уже в реестре памятников?” [Ссылка РЕЕСТР](#)
      </Say>

      <Say
        frame={{
          viewport: [1080, 1920],
          rect: {
            x: 140,
            y: 1500,
            width: 720,
          },
        }}
        style={{fontSize: 16, textAlign: 'left'}}>
        “Какие здания хотел внести список аким Байбек. [Ссылка 2](#)
      </Say>

      <Say durationMs={0} hide={1}>
        Какие здания города надо бы добавить в этот список?
      </Say>

      <SubmitMonumentNomination
        onDone={(ctx) => ctx.skip()}
        frame={{
          viewport: [1080, 1920],
          rect: {
            x: 140,
            y: 1300,
            width: 720,
            height: 400,
          },
        }}
      />

      <Say placement="bottom" image={{uri: mayor11Png.src, align: 'bottom'}}>
        Попробую отправить запрос на внесение в список
      </Say>

      <Say
        image={{uri: mayor12Png.src, style: {width: '100%', bottom: '-12%'}}}
        menu={[
          {
            label: 'Дальше',
            onClick: (ctx) => {
              const options: BranchId[] = [
                'CityHall_MonumentDept_Rant_Ok',
                'CityHall_MonumentDept_Rant_NotOk',
              ]
              ctx.goToBranch(
                options[Math.floor(Math.random() * options.length)],
              )
            },
          },
        ]}>
        Подожду коммисию, а пока выпью чая
      </Say>
    </Branch>
  )
}
