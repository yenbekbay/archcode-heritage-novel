import useSize from '@react-hook/size'
import {motion, useAnimation} from 'framer-motion'
import React from 'react'
import {bgIntroJpg} from '~/assets/game'
import {Branch, Command, Menu, Say, Title, useBranchContext} from '~/lib'

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
        В городе, с цветущими яблонями и журчащими арыками, где возвышалось
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
        снесенных зданий. Вокруг небо обычное. И вот настал день, когда старик
        завершил строение.
      </Say>

      <Say>
        “Это машина времени, которая вернет вас туда, где небо было голубым.
        Наше настоящее в ваших руках!” — были его последние слова.
      </Say>

      <Title hide={-1}>Снести нельзя оставить</Title>

      <Menu
        scheme="dark"
        label="Выбрать персонажа"
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
            // FIXME
            onClick: () => alert('Не готово'),
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
  const {containerSize, focusedStatementIndex, getStatementCount} =
    useBranchContext()
  const controls = useAnimation()
  const imgRef = React.useRef<HTMLImageElement>(null)
  const imgSize = useSize(imgRef)
  React.useLayoutEffect(() => {
    if (containerSize[1] === 0 || imgSize[1] === 0) {
      return
    }

    const enteredPercent = (focusedStatementIndex + 1) / getStatementCount()
    controls.stop()
    controls.start({
      y: `calc(${containerSize[1] - imgSize[1]}px * ${enteredPercent})`,
      transition: {
        duration: INTRO_SCENE_TRANSITION_DURATION_PER_STATEMENT / 1000,
        ease: 'easeOut',
      },
    })
  }, [
    containerSize,
    controls,
    imgSize,
    focusedStatementIndex,
    getStatementCount,
  ])

  return (
    <Command
      name="IntroScene"
      behavior={['skippable_timed', {durationMs: 0}]}
      hide={-1}>
      {() => (
        <motion.img
          ref={imgRef}
          className="w-full"
          src={bgIntroJpg}
          initial={{y: 0}}
          animate={controls}
        />
      )}
    </Command>
  )
}

const INTRO_SCENE_TRANSITION_DURATION_PER_STATEMENT = 8000
