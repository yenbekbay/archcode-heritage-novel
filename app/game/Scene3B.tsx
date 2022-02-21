import {AnimatePresence, motion} from 'framer-motion'
import bgBldg1GifSrc from '~/assets/game/bg-bldg-1.gif'
import bgBldg1StaticSrc from '~/assets/game/bg-bldg-1.png'
import fenceSrc from '~/assets/game/fence.png'
import redhead2Src from '~/assets/game/redhead-2.png'
import redhead4Src from '~/assets/game/redhead-4.png'
import {Box, Image} from '~/lib'
import {Blank, Say} from './commands'
import {
  SceneBackgroundComponentProps,
  SceneContainer,
  useSceneContext,
} from './components'

export const assets = [
  bgBldg1GifSrc,
  bgBldg1StaticSrc,
  fenceSrc,
  redhead2Src,
  redhead4Src,
]

export function Scene3B() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        large
        foregroundSrc={redhead4Src}
        foregroundCss={{
          width: '90%',
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Мутят что-то без доклада народу. Надо разобраться!
      </Say>

      <Blank duration={10000} />

      <Say
        large
        optionsDark
        optionsBottom={[
          {
            label: 'Как-то печально всё это',
            onClick: (ctx) => ctx.goToScene('4A'),
          },
          {
            label: 'Что я могу сделать?',
            onClick: (ctx) => ctx.goToScene('4B'),
          },
        ]}
        foregroundSrc={redhead2Src}
        foregroundCss={{width: '90%'}}>
        Это что за новости?!?! Уничтожают историю, значит?
      </Say>
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  const {activeFrame} = useSceneContext()
  return (
    <>
      <Image
        src={activeFrame < 1 ? bgBldg1StaticSrc : bgBldg1GifSrc}
        css={{flex: 1, minHeight: '100%', objectFit: 'cover'}}
      />

      <AnimatePresence>
        {activeFrame < 1 && (
          <Box
            as={motion.div}
            css={{position: 'absolute', inset: 0}}
            exit={{
              x: '-400%',
              transition: {delay: 0.5, duration: 2},
            }}>
            <Image
              src={fenceSrc}
              css={{
                position: 'absolute',
                height: '100%',
                transform: 'translate(-50%) scale(1.15)',
              }}
            />
          </Box>
        )}
      </AnimatePresence>
    </>
  )
}
