import {AnimatePresence, motion} from 'framer-motion'
import animatedBackgroundSrc from '~/assets/game/bg-2_1.gif'
import staticBackgroundSrc from '~/assets/game/bg-2_1.png'
import fenceSrc from '~/assets/game/fence.png'
import redhead2Src from '~/assets/game/redhead-2.png'
import redhead3Src from '~/assets/game/redhead-3.png'
import {Box, Image} from '~/lib'
import {Blank, Options, Say, Title} from './commands'
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
  redhead3Src,
]

export function Scene2_1() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        large
        foregroundSrc={redhead2Src}
        foregroundCss={{
          width: '90%',
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        autoContinue>
        Скорее всего, ничего особенного. Очередное...да не важно.
      </Say>

      <Say
        large
        foregroundSrc={redhead3Src}
        foregroundCss={{
          width: '90%',
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        autoContinue>
        Поберегу нервы, семья ждет, пойду дома чай попью.
      </Say>

      <Blank autoContinueIn={10000} />

      <Title autoContinue retain>
        Конец
      </Title>

      <Options
        options={[
          {
            label: 'В начало',
            action: {
              type: 'go_to_scene',
              sceneId: '1',
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
        src={activeFrame < 2 ? staticBackgroundSrc : animatedBackgroundSrc}
        css={{flex: 1, minHeight: '100%', objectFit: 'cover'}}
      />

      <AnimatePresence>
        {activeFrame < 2 && (
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
