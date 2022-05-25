import {AnimatePresence, motion} from 'framer-motion'
import {
  bgBldg1FenceGif,
  bgBldg1Jpg,
  fencePng,
  redhead2Png,
  redhead4Png,
} from '~/assets/game'
import type {BranchBackgroundComponentProps} from '~/lib'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchActivist_CheckOut() {
  return (
    <Branch.Root background={Background}>
      <Branch.Say
        size="lg"
        foregroundSrc={redhead4Png}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        —Мутят что-то без доклада народу. Надо разобраться!
      </Branch.Say>

      <Branch.Blank durationMs={10000} transitory />

      <Branch.Say
        size="lg"
        foregroundSrc={redhead2Png}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        —Это что за новости?!?! Уничтожают историю, значит?
      </Branch.Say>

      <Branch.Choices
        scheme="dark"
        choices={[
          {
            label: 'Как-то печально всё это',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_SocialMedia'),
          },
          {
            label: 'Что я могу сделать?',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Act'),
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
      <img
        src={focusedStatementIndex < 1 ? bgBldg1Jpg : bgBldg1FenceGif}
        className="min-h-full flex-1 object-cover"
      />

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
