import {AnimatePresence, motion} from 'framer-motion'
import bgBldg1GifSrc from '~/assets/game/bg-bldg-1.gif'
import bgBldg1StaticSrc from '~/assets/game/bg-bldg-1.png'
import fenceSrc from '~/assets/game/fence.png'
import redhead2Src from '~/assets/game/redhead-2.png'
import redhead3Src from '~/assets/game/redhead-3.png'
import {Blank, Options, Say, Title} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer, useSceneContext} from './components'

export const assets = [
  bgBldg1GifSrc,
  bgBldg1StaticSrc,
  fenceSrc,
  redhead2Src,
  redhead3Src,
]

export function SceneActivist1_2a() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        large
        foregroundSrc={redhead2Src}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Скорее всего, ничего особенного. Очередное...да не важно
      </Say>

      <Say
        large
        foregroundSrc={redhead3Src}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Поберегу нервы, семья ждет, пойду дома чай попью
      </Say>

      <Blank duration={10000} />

      <Title transitory retained>
        Конец игры
      </Title>

      <Options
        dark
        optionsBottom={[
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
  const {activeFrame} = useSceneContext()
  return (
    <>
      <img
        src={activeFrame < 2 ? bgBldg1StaticSrc : bgBldg1GifSrc}
        className="min-h-full flex-1 object-cover"
      />

      <AnimatePresence>
        {activeFrame < 2 && (
          <motion.div
            className="absolute inset-0"
            exit={{
              x: '-400%',
              transition: {delay: 0.5, duration: 2},
            }}>
            <img
              src={fenceSrc}
              className="absolute h-full max-w-none"
              style={{transform: 'translate(-50%) scale(1.15)'}}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
