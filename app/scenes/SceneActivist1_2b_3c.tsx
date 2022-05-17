import {
  bgArchcodeOfficeJpg,
  bgCourtyardJpg,
  bgPhoneHandJpg,
  redhead19Png,
  sillhouettePng,
} from '~/assets/game'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneActivist1_2b_3c() {
  return (
    <Scene.Container background={bgCourtyardJpg}>
      <Scene.Blank durationMs={3000} transitory />

      <Scene.Say
        size="lg"
        foregroundSrc={redhead19Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Алло, здравствуйте, это Архкод?
      </Scene.Say>

      <Scene.Foreground
        src={bgArchcodeOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={1}
      />

      <Scene.Say
        size="lg"
        foregroundSrc={sillhouettePng}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory>
        Здравствуйте, да, я вас слушаю.
      </Scene.Say>

      <Scene.Say
        foregroundSrc={redhead19Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Непонятно, что творится! Забор там! Здание снесут! Унчтожат!
        Испоганят!!! Что делать???
      </Scene.Say>

      <Scene.Foreground
        src={bgArchcodeOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={1}
      />

      <Scene.Say
        size="lg"
        foregroundSrc={sillhouettePng}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory>
        Без паники. Приходите, поделимся опытом
      </Scene.Say>

      <Scene.Say
        href="tel://+77071210483"
        size="lg"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
            transform: 'rotate(-6deg)',
          },
        }}
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Позвонить в Архкод
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
