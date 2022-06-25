import {useMeasure} from '@react-hookz/web'
import {motion, useAnimation} from 'framer-motion'
import React from 'react'
import {bgIntroJpg, logoPng} from '~/assets/game'
import {
  Branch,
  Command,
  Menu,
  Say,
  Show,
  useBranchContext,
} from '~/lib/game-engine'

export function BranchIntro() {
  return (
    <Branch>
      <IntroScene />

      <Menu
        placement="middle"
        choices={[
          {
            label: 'Начать',
            onClick: (ctx) => ctx.skip(),
          },
        ]}
      />

      <Say>
        В городе с цветущими яблонями и журчащими арыками, где возвышалось
        здание с изогнутой золотой крышей и стучали об рельсы трамваи, на
        центральной площади что-то строил старик, а перед ним табличка: “Я верну
        голубое небо”
      </Say>

      <Say>
        Его считали городским сумасшедшим, ведь небо всегда было серое, но никто
        его не трогал, потому что всем было дико интересно, что же он строит.
        Когда-то он был архитектором, и по неизвестной причине лишился всего,
        что у него было. Он уверял, что никто не видит неба из-за призраков
        застывщих над городом.
      </Say>

      <Say>
        Город показывается сверху, и это оказывается плотный смог из призраков
        снесённых зданий. Вокруг небо обычное. И вот настал день, когда старик
        завершил строение.
      </Say>

      <Say>
        “Это машина времени, которая вернёт вас туда, где небо было голубым.
        Наше настоящее в ваших руках!” — были его последние слова.
      </Say>

      <Show src={{uri: logoPng, align: 'top', style: {top: '5rem'}}} hide={1} />

      <Menu
        label="Выберите персонажа"
        choices={[
          {
            label: 'Активист',
            onClick: (ctx) => ctx.goToBranch('Activist_0Juncture'),
          },
          {
            label: 'АрхКот',
            onClick: (ctx) => ctx.goToBranch('Archkot_0Juncture'),
          },
          {
            label: 'Девелопер',
            onClick: (ctx) => ctx.goToBranch('Developer_0Intro'),
          },
          {
            label: 'Акимат',
            onClick: (ctx) => ctx.goToBranch('CityHall_0Menu'),
          },
        ]}
      />
    </Branch>
  )
}

function IntroScene() {
  const {containerRect, focusedStatementIndex, getStatementCount} =
    useBranchContext()
  const controls = useAnimation()
  const [imgRect, imgRef] = useMeasure<HTMLImageElement>()
  React.useLayoutEffect(() => {
    if (!imgRect) {
      return
    }

    const enteredPercent = Math.min(
      1,
      (focusedStatementIndex + 1) / getStatementCount(),
    )
    controls.stop()
    controls.start({
      y: `calc(${containerRect.height - imgRect.height}px * ${enteredPercent})`,
      transition: {
        duration: INTRO_SCENE_TRANSITION_DURATION_PER_STATEMENT / 1000,
        ease: 'easeOut',
      },
    })
  }, [
    containerRect,
    controls,
    focusedStatementIndex,
    getStatementCount,
    imgRect,
  ])

  return (
    <>
      <Command
        name="IntroScene"
        behavior={['skippable_timed', {durationMs: 0}]}
        hide={-1}>
        {() => null}
      </Command>

      <motion.img
        ref={imgRef}
        className="w-full"
        src={bgIntroJpg}
        initial={{y: 0}}
        animate={controls}
      />
    </>
  )
}

const INTRO_SCENE_TRANSITION_DURATION_PER_STATEMENT = 8000
