import {
  bgArchcodeOfficeJpg,
  bgCourtyardJpg,
  bgPhoneHandJpg,
  redhead19Png,
  sillhouettePng,
} from '~/assets/game'
import {Blank, Foreground, Choices, Say, SceneContainer, Title} from '~/lib'

export function SceneActivist1_2b_3b_4c() {
  return (
    <SceneContainer background={bgCourtyardJpg}>
      <Blank durationMs={3000} transitory />

      <Say
        size="lg"
        foregroundSrc={redhead19Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Алло, здравствуйте, это Архкод?
      </Say>

      <Foreground
        src={bgArchcodeOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={1}
      />

      <Say
        size="lg"
        foregroundSrc={sillhouettePng}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory>
        Здравствуйте, да, я вас слушаю.
      </Say>

      <Say
        foregroundSrc={redhead19Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Непонятно, что творится! Забор там! Здание снесут! Унчтожат!
        Испоганят!!! Что делать???
      </Say>

      <Foreground
        src={bgArchcodeOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={1}
      />

      <Say
        size="lg"
        foregroundSrc={sillhouettePng}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory>
        Без паники. Приходите, поделимся опытом
      </Say>

      <Say
        href="tel://+77071210483"
        size="lg"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
          },
        }}
        textStyle={{
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
        }}
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Позвонить в Архкод
      </Say>

      <Title transitory lingers>
        Конец игры
      </Title>

      <Choices
        dark
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToScene('Intro'),
          },
        ]}
      />
    </SceneContainer>
  )
}
