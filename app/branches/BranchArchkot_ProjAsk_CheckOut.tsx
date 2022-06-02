import {AnimatePresence, motion} from 'framer-motion'
import {
  archkot1Png,
  archkot2Png,
  archkot8Png,
  bgAskBeforeJpg,
  fencePng,
} from '~/assets/game'
import type {BranchBackgroundComponentProps} from '~/lib'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchArchkot_ProjAsk_CheckOut() {
  return (
    <Branch.Root background={Background}>
      <Branch.Say
        size="lg"
        foregroundSrc={archkot1Png}
        foregroundStyle={{
          width: '100%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        —Я не усну спокойно, не посмотрев, что за забором
      </Branch.Say>

      <Branch.Blank durationMs={3000} transitory />

      <Branch.Say
        size="lg"
        foregroundSrc={archkot8Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        -Что за напасть! Здание аппаратно-студийного комплекса перестроить
        решили
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={archkot2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        -А я был здесь ребенком еще, у мамы на работе, мне по лестницам этим так
        бегать нравилось
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={archkot1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        lingers={1}>
        —Что можно сделать мне, простому АрхКоту?
      </Branch.Say>

      <Branch.Choices
        scheme="dark"
        choices={[
          {
            label: 'Погрустить',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjAsk_CheckOut_SocialMedia'),
          },
          {
            label: 'Собрать команду',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjAsk_CheckOut_AssembleTeam'),
          },
        ]}
      />
    </Branch.Root>
  )
}

function Background(_props: BranchBackgroundComponentProps) {
  const {focusedStatementIndex} = Branch.useBranchContext()
  return (
    <>
      <img src={bgAskBeforeJpg} className="min-h-full flex-1 object-cover" />

      <AnimatePresence>
        {focusedStatementIndex < 1 && (
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
