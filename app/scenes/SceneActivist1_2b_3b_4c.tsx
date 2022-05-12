import {
  bgArchcodeOfficeJpg,
  bgCourtyardJpg,
  bgPhoneHandJpg,
  redhead19Png,
  sillhouettePng,
} from '~/assets/game'
import type {SceneBackgroundComponentProps} from '~/lib'
import {Blank, Foreground, Options, Say, SceneContainer, Title} from '~/lib'

export function SceneActivist1_2b_3b_4c() {
  return (
    <SceneContainer BackgroundComponent={Background}>
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
        textStyle={{
          marginTop: 64,
          width: 220,
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

      <Options
        dark
        options={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToScene('Intro'),
          },
        ]}
      />
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <img
      src={bgCourtyardJpg}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover"
    />
  )
}
