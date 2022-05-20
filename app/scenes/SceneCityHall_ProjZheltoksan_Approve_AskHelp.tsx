import {
  angryCrowd1Png,
  angryCrowd2Png,
  bgCityHallOfficeJpg,
  bgPhoneFingerJpg,
  bgZheltoksanAfterJpg,
  bgZheltoksanBeforeFenceGif,
  bgZheltoksanBeforeJpg,
} from '~/assets/game'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneCityHall_ProjZheltoksan_Approve_AskHelp() {
  return (
    <Scene.Container background={bgCityHallOfficeJpg}>
      <Scene.Say
        size="lg"
        foregroundSrc={bgPhoneFingerJpg}
        foregroundStyle={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(1.5)',
        }}
        lingers={1}>
        “Ребята, напишите, что реконструкция крутая”
      </Scene.Say>

      <Scene.Foreground
        src={bgZheltoksanBeforeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers
      />

      <Scene.Say
        size="lg"
        foregroundSrc={angryCrowd1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {`-Надувательство\n\n-Бред собачий`}
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={angryCrowd2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        -Продажные чуваки
      </Scene.Say>

      <Scene.Foreground
        src={bgZheltoksanBeforeFenceGif}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={6000}
        lingers={1}
        transitory
      />

      <Scene.Foreground
        src={bgZheltoksanAfterJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        lingers
        transitory
      />

      <Scene.Say size="lg" transitory>
        Вы успешно реконструировали Желтоксан 115
      </Scene.Say>

      <Scene.Say transitory>
        Здание утратило первоначальный облик и больше не представляет
        исторической ценности. Теперь Вам будет сложнее работать с
        общественностью
      </Scene.Say>

      <Scene.Title transitory lingers>
        Конец игры
      </Scene.Title>

      <Scene.Choices
        variant="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToScene('Intro'),
          },
        ]}
      />
    </Scene.Container>
  )
}
