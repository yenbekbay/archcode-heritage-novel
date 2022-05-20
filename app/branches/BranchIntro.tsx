import useSize from '@react-hook/size'
import {motion, useAnimation} from 'framer-motion'
import React from 'react'
import {bgIntroJpg} from '~/assets/game'
import type {BranchBackgroundComponentProps} from '~/lib'
import {makeBranch} from '~/lib'

const Branch = makeBranch()

export function BranchIntro() {
  return (
    <Branch.Container background={Background}>
      <Branch.Choices
        size="lg"
        placement="middle"
        choices={[
          {
            label: 'Начать',
            onClick: (ctx) => ctx.skip(),
          },
        ]}
      />

      <Branch.Say transitory>
        В городе, с цветущими яблонями и журчащими арыками, где возвышалось
        здание с изогнутой золотой крышей и стучали об рельсы трамваи, на
        центральной площади что-то строил старик, а перед ним табличка: “Я верну
        голубое небо”
      </Branch.Say>

      <Branch.Say transitory>
        Его считали городским сумасшедшим, ведь небо всегда было серое, но никто
        его не трогал, потому что всем было дико интересно, что же он строит.
        Когда-то он был архитектором, и по неизвестной причине лишился всего,
        что у него было. Он уверял, что никто не видит неба из-за призраков
        застывщих над городом.
      </Branch.Say>

      <Branch.Say transitory>
        Город показывается сверху, и это оказывается плотный смог из призраков
        снесенных зданий. Вокруг небо обычное. И вот настал день, когда старик
        завершил строение.
      </Branch.Say>

      <Branch.Say size="lg" transitory>
        “Это машина времени, которая вернет вас туда, где небо было голубым.
        Наше настоящее в ваших руках!” - были его последние слова.
      </Branch.Say>

      <Branch.Title transitory lingers>
        Снести нельзя оставить
      </Branch.Title>

      <Branch.Choices
        variant="dark"
        label="Выбрать персонажа"
        choices={[
          {
            label: 'Активист',
            onClick: (ctx) => ctx.goToBranch('Activist_0Juncture'),
          },
          {
            label: 'Акимат',
            onClick: (ctx) => ctx.goToBranch('CityHall_0Menu'),
          },
        ]}
      />
    </Branch.Container>
  )
}

function Background({
  containerSize,
  enteredPercent,
}: BranchBackgroundComponentProps) {
  const controls = useAnimation()
  const imgRef = React.useRef<HTMLImageElement>(null)
  const imgSize = useSize(imgRef)
  React.useLayoutEffect(() => {
    if (containerSize[1] === 0 || imgSize[1] === 0) {
      return
    }

    controls.stop()
    controls.start({
      y: `calc(${containerSize[1] - imgSize[1]}px * ${enteredPercent})`,
      transition: {
        duration: BACKGROUND_TRANSITION_DURATION_PER_PANEL / 1000,
        ease: 'easeOut',
      },
    })
  }, [enteredPercent, containerSize, controls, imgSize])

  return (
    <motion.img
      ref={imgRef}
      className="w-full"
      src={bgIntroJpg}
      initial={{y: 0}}
      animate={controls}
    />
  )
}

const BACKGROUND_TRANSITION_DURATION_PER_PANEL = 8000
