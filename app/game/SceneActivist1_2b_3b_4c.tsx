import bgArchcodeOfficeSrc from '~/assets/game/bg-archcode-office.png'
import bgCourtyardSrc from '~/assets/game/bg-courtyard.png'
import bgPhoneHandSrc from '~/assets/game/bg-phone-hand.png'
import redhead19Src from '~/assets/game/redhead-19.png'
import redhead20Src from '~/assets/game/redhead-20.png'
import sillhouetteSrc from '~/assets/game/sillhouette.png'
import {Blank, Foreground, Options, Say, Title} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer} from './components'

export const sceneActivist1_2b_3b_4cAssets = [
  bgArchcodeOfficeSrc,
  bgCourtyardSrc,
  bgPhoneHandSrc,
  redhead19Src,
  redhead20Src,
  sillhouetteSrc,
]

export function SceneActivist1_2b_3b_4c() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Blank duration={3000} />

      <Say
        large
        foregroundSrc={redhead19Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Алло, здравствуйте, это Архкод?
      </Say>

      <Foreground
        src={bgArchcodeOfficeSrc}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        duration={0}
        transitory
        retained={1}
      />

      <Say
        large
        foregroundSrc={sillhouetteSrc}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory>
        Здравствуйте, да, я вас слушаю.
      </Say>

      <Say
        foregroundSrc={redhead19Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Непонятно, что творится! Забор там! Здание снесут! Унчтожат!
        Испоганят!!! Что делать???
      </Say>

      <Foreground
        src={bgArchcodeOfficeSrc}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        duration={0}
        transitory
        retained={1}
      />

      <Say
        large
        foregroundSrc={sillhouetteSrc}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory>
        Без паники. Приходите, поделимся опытом
      </Say>

      <Say
        href="tel://+77071210483"
        large
        textStyle={{
          marginTop: 64,
          width: 220,
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
        }}
        foregroundSrc={bgPhoneHandSrc}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Позвонить в Архкод
      </Say>

      <Title transitory retained>
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
      src={bgCourtyardSrc}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover"
    />
  )
}
