import {AnimatePresence, motion} from 'framer-motion'
import {
  bgBldg1FenceGif,
  bgBldg1Jpg,
  fencePng,
  redhead2Png,
  redhead3Png,
} from '~/assets/game'
import type {SceneBackgroundComponentProps} from '~/lib'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneActivist1_2a() {
  return (
    <Scene.Container background={Background}>
      <Scene.Say
        size="lg"
        foregroundSrc={redhead2Png}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Скорее всего, ничего особенного. Очередное…да не важно
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={redhead3Png}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Поберегу нервы, семья ждет, пойду дома чай попью
      </Scene.Say>

      <Scene.Blank durationMs={10000} transitory />

      <Scene.Title transitory lingers>
        Конец игры
      </Scene.Title>

      <Scene.Choices
        variant="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToScene('Intro'),
          },
        ]}
      />
    </Scene.Container>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  const {focusedStatementIndex} = Scene.useSceneContext()
  return (
    <>
      <img
        src={focusedStatementIndex < 2 ? bgBldg1Jpg : bgBldg1FenceGif}
        className="min-h-full flex-1 object-cover"
      />

      <AnimatePresence>
        {focusedStatementIndex < 2 && (
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
