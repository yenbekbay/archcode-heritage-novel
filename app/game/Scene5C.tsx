import bgArchcodeOfficeSrc from '~/assets/game/bg-archcode-office.png'
import bgCourtyardSrc from '~/assets/game/bg-courtyard.png'
import bgPhoneHandSrc from '~/assets/game/bg-phone-hand.png'
import redhead19Src from '~/assets/game/redhead-19.png'
import redhead20Src from '~/assets/game/redhead-20.png'
import sillhouetteSrc from '~/assets/game/sillhouette.png'
import {Image} from '~/lib'
import {Blank, Foreground, Options, Say, Title} from './commands'
import {SceneBackgroundComponentProps, SceneContainer} from './components'

export const assets = [
  bgArchcodeOfficeSrc,
  bgCourtyardSrc,
  bgPhoneHandSrc,
  redhead19Src,
  redhead20Src,
  sillhouetteSrc,
]

export function Scene5C() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Blank duration={3000} />

      <Say
        large
        foregroundSrc={redhead19Src}
        foregroundCss={{width: '100%', bottom: 0}}
        transitory>
        Алло, здравствуйте, это Архкод?
      </Say>

      <Foreground
        src={bgArchcodeOfficeSrc}
        css={{height: '100%', width: '100%', objectFit: 'cover'}}
        duration={0}
        transitory
        retained={1}
      />

      <Say
        large
        foregroundSrc={sillhouetteSrc}
        foregroundCss={{width: '90%', bottom: 0}}
        transitory>
        Здравствуйте, да, я вас слушаю.
      </Say>

      <Say
        foregroundSrc={redhead19Src}
        foregroundCss={{width: '100%', bottom: 0}}
        transitory>
        Непонятно, что творится! Забор там! Здание снесут! Унчтожат!
        Испоганят!!! Что делать???
      </Say>

      <Foreground
        src={bgArchcodeOfficeSrc}
        css={{height: '100%', width: '100%', objectFit: 'cover'}}
        duration={0}
        transitory
        retained={1}
      />

      <Say
        large
        foregroundSrc={sillhouetteSrc}
        foregroundCss={{width: '90%', bottom: 0}}
        transitory>
        Без паники. Приходите, поделимся опытом
      </Say>

      <Say
        href="tel://+77071210483"
        large
        textCss={{
          mt: 64,
          width: 220,
          transform: 'rotate(-6deg)',
          transformOrigin: 'top',
        }}
        foregroundSrc={bgPhoneHandSrc}
        foregroundCss={{
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
        optionsBottom={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToScene('1'),
          },
        ]}
      />
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <Image
      src={bgCourtyardSrc}
      css={{flex: 0, minHeight: '100%', objectFit: 'cover'}}
    />
  )
}
