import {AnimatePresence, motion} from 'framer-motion'
import {
  bgBldg1FenceGif,
  bgBldg1Jpg,
  fencePng,
  redhead2Png,
  redhead3Png,
} from '~/assets/game'
import type {SceneBackgroundComponentProps} from '~/lib'
import {
  Blank,
  Choices,
  Say,
  SceneContainer,
  Title,
  useSceneContext,
} from '~/lib'

export function SceneActivist1_2a() {
  return (
    <SceneContainer background={Background}>
      <Say
        size="lg"
        foregroundSrc={redhead2Png}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Скорее всего, ничего особенного. Очередное…да не важно
      </Say>

      <Say
        size="lg"
        foregroundSrc={redhead3Png}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Поберегу нервы, семья ждет, пойду дома чай попью
      </Say>

      <Blank durationMs={10000} transitory />

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

function Background(_props: SceneBackgroundComponentProps) {
  const {focusedFrameIndex} = useSceneContext()
  return (
    <>
      <img
        src={focusedFrameIndex < 2 ? bgBldg1Jpg : bgBldg1FenceGif}
        className="min-h-full flex-1 object-cover"
      />

      <AnimatePresence>
        {focusedFrameIndex < 2 && (
          <motion.div
            className="absolute inset-0"
            exit={{
              x: '-400%',
              transition: {delay: 0.5, duration: 2},
            }}>
            <img
              src={fencePng}
              className="absolute h-full max-w-none"
              style={{transform: 'translate(-50%) scale(1.15)'}}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
