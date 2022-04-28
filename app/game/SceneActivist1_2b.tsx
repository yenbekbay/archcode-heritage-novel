import {AnimatePresence, motion} from 'framer-motion'
import bgBldg1GifSrc from '~/assets/game/bg-bldg-1.gif'
import bgBldg1StaticSrc from '~/assets/game/bg-bldg-1.png'
import fenceSrc from '~/assets/game/fence.png'
import redhead2Src from '~/assets/game/redhead-2.png'
import redhead4Src from '~/assets/game/redhead-4.png'
import {Blank, Say} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer, useSceneContext} from './components'

export const sceneActivist1_2bAssets = [
  bgBldg1GifSrc,
  bgBldg1StaticSrc,
  fenceSrc,
  redhead2Src,
  redhead4Src,
]

export function SceneActivist1_2b() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        large
        foregroundSrc={redhead4Src}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Мутят что-то без доклада народу. Надо разобраться!
      </Say>

      <Blank durationMs={10000} />

      <Say
        large
        optionsDark
        optionsBottom={[
          {
            label: 'Как-то печально всё это',
            onClick: (ctx) => ctx.goToScene('Activist1_2b_3a'),
          },
          {
            label: 'Что я могу сделать?',
            onClick: (ctx) => ctx.goToScene('Activist1_2b_3b'),
          },
        ]}
        foregroundSrc={redhead2Src}
        foregroundStyle={{width: '90%', bottom: 0}}>
        Это что за новости?!?! Уничтожают историю, значит?
      </Say>
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  const {focusedFrameIndex: focusedFrame} = useSceneContext()
  return (
    <>
      <img
        src={focusedFrame < 1 ? bgBldg1StaticSrc : bgBldg1GifSrc}
        className="min-h-full flex-1 object-cover"
      />

      <AnimatePresence>
        {focusedFrame < 1 && (
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
