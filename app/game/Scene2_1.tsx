import {AnimatePresence, motion} from 'framer-motion'
import animatedBackgroundSrc from '~/assets/game/bg-2_1.gif'
import staticBackgroundSrc from '~/assets/game/bg-2_1.png'
import fenceSrc from '~/assets/game/fence.png'
import readhead2Src from '~/assets/game/readhead-2.png'
import readhead3Src from '~/assets/game/readhead-3.png'
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
  readhead2Src,
  readhead3Src,
]

export function Scene2_1() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        large
        foregroundSrc={readhead2Src}
        foregroundCss={{width: '90%'}}
        autoContinue>
        Скорее всего, ничего особенного. Очередное...да не важно.
      </Say>

      <Say
        large
        foregroundSrc={readhead3Src}
        foregroundCss={{width: '90%'}}
        autoContinue>
        Поберегу нервы, семья ждет, пойду дома чай попью.
      </Say>

      <Blank autoContinueIn={5000} />

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
