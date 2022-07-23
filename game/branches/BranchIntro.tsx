import {useMeasure} from '@react-hookz/web'
import {motion, useAnimation} from 'framer-motion'
import React from 'react'
import {
  bgIntroJpg,
  calligraphyLogoPng,
  calmLoopMp3,
  generalThemeMp3,
  introMp3,
  introTailMp3,
} from '~/assets/game'
import {
  Branch,
  Command,
  Menu,
  Play,
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
        audio={{uri: introMp3, loop: true}}
        choices={[
          {
            label: 'Начать',
            audio: introTailMp3,
            onClick: (ctx) => ctx.skip(),
          },
        ]}
      />

      <Play
        audio={{uri: generalThemeMp3, loop: true}}
        hide={(s) => s.command === 'Menu'}
      />

      <Say>
        {[
          '*Проект инициирован группой АрхКод, которая занимается вопросом сохранения архитектурного наследия. АрхКот, АрхТок и АрхБот — это персонажи, основанные на образах участников АрхКод Алматы.',
          'Все прочие совпадения с реальностью случайны.',
        ].join('\n\n')}
      </Say>

      <Say>Это город Аталма,</Say>

      <Say>В котором внезапно вырастают алюминиевые заборы,</Say>

      <Say>За которыми разворачиваются строительные работы,</Say>

      <Say>За которыми как правило стоят Девелоперы,</Say>

      <Say>Которые могут поддерживаться Акимами,</Say>

      <Say>За которыми часто следят активисты,</Say>

      <Say>Которые сильно переживают за город,</Say>

      <Say>Который теряет свой колорит.</Say>

      <Show
        src={{
          uri: calligraphyLogoPng.src,
          align: 'top',
          style: {paddingLeft: '2rem', paddingRight: '2rem', top: '5rem'},
          animation: {
            initial: {opacity: 0},
            entrance: {
              opacity: 1,
              transition: {duration: 8},
            },
            exit: {},
          },
        }}
        hide={-1}
      />

      <Menu
        label="Выберите персонажа"
        audio={{uri: calmLoopMp3, loop: true, fadeOut: true}}
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
            label: 'Аким',
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
        src={bgIntroJpg.src}
        initial={{y: 0}}
        animate={controls}
      />
    </>
  )
}

const INTRO_SCENE_TRANSITION_DURATION_PER_STATEMENT = 8000
