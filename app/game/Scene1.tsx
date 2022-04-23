import useSize from '@react-hook/size'
import {motion, useAnimation} from 'framer-motion'
import React from 'react'
import bgIntroSrc from '~/assets/game/bg-intro.png'
import {Options, Say, Title} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer} from './components'

export const assets = [bgIntroSrc]

export function Scene1() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say transitory>
        В городе, с цветущими яблонями и журчащими арыками, где возвышалось
        здание с изогнутой золотой крышей и стучали об рельсы трамваи, на
        центральной площади что-то строил старик, а перед ним табличка: “Я верну
        голубое небо”
      </Say>

      <Say transitory>
        Его считали городским сумасшедшим, ведь небо всегда было серое, но никто
        его не трогал, потому что всем было дико интересно, что же он строит.
        Когда-то он был архитектором, и по неизвестной причине лишился всего,
        что у него было. Он уверял, что никто не видит неба из-за призраков
        застывщих над городом.
      </Say>

      <Say transitory>
        Город показывается сверху, и это оказывается плотный смог из призраков
        снесенных зданий. Вокруг небо обычное. И вот настал день, когда старик
        завершил строение.
      </Say>

      <Say large transitory>
        “Это машина времени, которая вернет вас туда, где небо было голубым.
        Наше настоящее в ваших руках!” - были его последние слова.
      </Say>

      <Title transitory retained>
        Снести нельзя оставить
      </Title>

      <Options
        dark
        optionsBottom={[
          {
            label: 'Выбрать персонажа',
            onClick: (ctx) => ctx.goToScene('2'),
          },
        ]}
      />
    </SceneContainer>
  )
}

function Background({
  containerSize,
  completedPercent,
}: SceneBackgroundComponentProps) {
  const controls = useAnimation()
  const imgRef = React.useRef<HTMLImageElement>(null)
  const imgSize = useSize(imgRef)
  React.useLayoutEffect(() => {
    if (containerSize[1] === 0 || imgSize[1] === 0) {
      return
    }

    controls.stop()
    controls.start({
      y: `calc(${containerSize[1] - imgSize[1]}px * ${completedPercent})`,
      transition: {
        duration: BACKGROUND_TRANSITION_DURATION_PER_PANEL / 1000,
        ease: 'easeOut',
      },
    })
  }, [completedPercent, containerSize, controls, imgSize])

  return (
    <motion.img
      ref={imgRef}
      className="w-full"
      src={bgIntroSrc}
      initial={{y: 0}}
      animate={controls}
    />
  )
}

const BACKGROUND_TRANSITION_DURATION_PER_PANEL = 8000
