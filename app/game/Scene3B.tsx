import {AnimatePresence, motion} from 'framer-motion'
import animatedBackgroundSrc from '~/assets/game/bg-bldg-1.gif'
import staticBackgroundSrc from '~/assets/game/bg-bldg-1.png'
import fenceSrc from '~/assets/game/fence.png'
import redhead2Src from '~/assets/game/redhead-2.png'
import redhead4Src from '~/assets/game/redhead-4.png'
import {Box, Image} from '~/lib'
import {Blank, Options, Say} from './commands'
import {
  SceneBackgroundComponentProps,
  SceneContainer,
  useSceneContext,
} from './components'

export const assets = [
  animatedBackgroundSrc,
  staticBackgroundSrc,
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
        autoContinue>
        Мутят что-то без доклада народу. Надо разобраться!
      </Say>

      <Blank autoContinueIn={10000} />

      <Say
        large
        foregroundSrc={redhead2Src}
        foregroundCss={{width: '90%'}}
        autoContinue
        retain>
        Это что за новости?!?! Уничтожают историю, значит?
      </Say>

      <Options
        options={[
          {
            label: 'Как-то печально всё это',
            action: {
              type: 'go_to_scene',
              sceneId: '4A',
            },
          },
          {
            label: 'Что я могу сделать?',
            action: {
              type: 'go_to_scene',
              sceneId: '4B',
            },
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
      <Image
        src={activeFrame < 1 ? staticBackgroundSrc : animatedBackgroundSrc}
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
