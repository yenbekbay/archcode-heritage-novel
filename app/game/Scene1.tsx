import {Say} from './commands/Say'
import {Title} from './commands/Title'
import {Scene, SceneBackgroundComponentProps} from './components/Scene'
import {motion, useAnimation} from 'framer-motion'
import React from 'react'
import backgroundSrc from '~/assets/game/scene-1-bg.png'
import {Box} from '~/styles/Box'

export function Scene1() {
  return (
    <Scene id="Prologue" BackgroundComponent={Scene1Background}>
      <Say continue>
        В городе, с цветущими яблонями и журчащими арыками, где возвышалось
        здание с изогнутой золотой крышей и стучали об рельсы трамваи, на
        центральной площади что-то строил старик, а перед ним табличка: “Я верну
        голубое небо”
      </Say>

      <Say continue>
        Его считали городским сумасшедшим, ведь небо всегда было серое, но никто
        его не трогал, потому что всем было дико интересно, что же он строит.
        Когда-то он был архитектором, и по неизвестной причине лишился всего,
        что у него было. Он уверял, что никто не видит неба из-за призраков
        застывщих над городом.
      </Say>

      <Say continue>
        Город показывается сверху, и это оказывается плотный смог из призраков
        снесенных зданий. Вокруг небо обычное. И вот настал день, когда старик
        завершил строение.
      </Say>

      <Say continue>
        “Это машина времени, которая вернет вас туда, где небо было голубым.
        Наше настоящее в ваших руках!” - были его последние слова.
      </Say>

      <Title
        options={[
          {
            label: 'Выбрать персонажа',
            action: {
              type: 'show_options',
              options: [],
            },
          },
        ]}>
        Снести нельзя оставить
      </Title>
    </Scene>
  )
}

export function Scene1Background({
  containerSize,
  completedPercent,
}: SceneBackgroundComponentProps) {
  const controls = useAnimation()
  React.useEffect(() => {
    if (containerSize.height === 0) {
      return
    }

    controls.stop()
    controls.start({
      y: `calc(calc(${containerSize.height}px - 100%) * ${completedPercent})`,
      transition: {
        duration: BACKGROUND_TRANSITION_DURATION_PER_PANEL / 1000,
        ease: 'easeInOut',
      },
    })
  }, [completedPercent, containerSize.height, controls])

  if (containerSize.height === 0) {
    return null
  }

  return (
    <Box
      as={motion.img}
      src={backgroundSrc}
      initial={{y: 0}}
      animate={controls}
      css={{
        position: 'absolute',
        top: 0,
        width: '100%',
      }}
    />
  )
}

const BACKGROUND_TRANSITION_DURATION_PER_PANEL = 8000
