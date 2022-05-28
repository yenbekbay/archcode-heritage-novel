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
import {SubmitMonuments} from '~/commands'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_MonumentDept_Rant() {
  return (
    <Branch.Root background={bgCityHallMayorOfficeJpg}>
      <Branch.Foreground
        src={bgMayorDoorwayJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={2}
      />

      <Branch.Say
        size="lg"
        foregroundSrc={mayor8Png}
        foregroundStyle={{width: '100%', bottom: '-10%'}}
        transitory>
        —БЫСТРО ВСЕМ ЗА РАБОТУ!!!
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={mayor9Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Подготовить базу для внесения зданий в список
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        На самом деле много зданий, которые могут быть официальными памятниками…
      </Branch.Say>

      <Branch.Say
        size="xl"
        foregroundSrc={mayor10Png}
        foregroundStyle={{width: '100%', bottom: 0, transform: 'scaleX(-1)'}}
        transitory>
        Привлекут больше туристов
      </Branch.Say>

      <Branch.Say
        size="xl"
        foregroundSrc={mayor10Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Да и ценность их вырастет
      </Branch.Say>

      <Branch.Foreground
        src={mayor1Png}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(1.5)',
          transformOrigin: 'bottom',
        }}
        transitory
        durationMs={0}
        lingers={5}
      />

      <Branch.Say size="xl" transitory durationMs={0} lingers={2}>
        Ну что, приступим к списку…
      </Branch.Say>

      <Branch.Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="md"
        textStyle={{textAlign: 'left'}}
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            x: 140,
            y: 1300,
            width: 720,
          },
        }}
        transitory
        durationMs={0}
        lingers={1}>
        “Какие здания уже в реестре памятников?” Ссылка*РЕЕСТР
      </Branch.Say>

      <Branch.Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="md"
        textStyle={{textAlign: 'left'}}
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            x: 140,
            y: 1500,
            width: 720,
          },
        }}>
        “Какие здания хотел внести список аким Байбек. *Ссылка*2
      </Branch.Say>

      <Branch.Say size="xl" transitory durationMs={0} lingers={1}>
        Какие здания города надо бы добавить в этот список?
      </Branch.Say>

      <SubmitMonuments
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

      <Branch.Say
        size="lg"
        placement="bottom"
        foregroundSrc={mayor11Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Попробую отправить запрос на внесение в список
      </Branch.Say>

      <Branch.Say
        size="xl"
        foregroundSrc={mayor12Png}
        foregroundStyle={{width: '100%', bottom: '-12%'}}
        transitory
        lingers={1}>
        Подожду коммисию, а пока выпью чая
      </Branch.Say>

      <Branch.Choices
        choices={[
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
        ]}
      />
    </Branch.Root>
  )
}
