import useSize from '@react-hook/size'
import {motion, useAnimation} from 'framer-motion'
import React from 'react'
import backgroundSrc from '~/assets/game/bg-intro.png'
import {Image} from '~/lib'
import {Options, Say, Title} from './commands'
import {SceneBackgroundComponentProps, SceneContainer} from './components'

export const assets = [backgroundSrc]

export function Scene1() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say autoContinue>
        В городе, с цветущими яблонями и журчащими арыками, где возвышалось
        здание с изогнутой золотой крышей и стучали об рельсы трамваи, на
        центральной площади что-то строил старик, а перед ним табличка: “Я верну
        голубое небо”
      </Say>

      <Say autoContinue>
        Его считали городским сумасшедшим, ведь небо всегда было серое, но никто
        его не трогал, потому что всем было дико интересно, что же он строит.
        Когда-то он был архитектором, и по неизвестной причине лишился всего,
        что у него было. Он уверял, что никто не видит неба из-за призраков
        застывщих над городом.
      </Say>

      <Say autoContinue>
        Город показывается сверху, и это оказывается плотный смог из призраков
        снесенных зданий. Вокруг небо обычное. И вот настал день, когда старик
        завершил строение.
      </Say>

      <Say large autoContinue>
        “Это машина времени, которая вернет вас туда, где небо было голубым.
        Наше настоящее в ваших руках!” - были его последние слова.
      </Say>

      <Title autoContinue retain>
        Снести нельзя оставить
      </Title>

      <Options
        options={[
          {
            label: 'Выбрать персонажа',
            action: {
              type: 'go_to_scene',
              sceneId: '2',
            },
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
    <Image
      ref={imgRef}
      as={motion.img}
      src={backgroundSrc}
      initial={{y: 0}}
      animate={controls}
      css={{width: '100%'}}
    />
  )
}

const BACKGROUND_TRANSITION_DURATION_PER_PANEL = 8000
