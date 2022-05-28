import clsx from 'clsx'
import {motion} from 'framer-motion'
import type {CommandViewColorScheme, Frame} from '~/lib'
import {Command, styleForFrame, useBranchContext, useGameContext} from '~/lib'
import {TextForm} from './internal'

export interface SubmitMonumentsProps {
  onDone: (ctx: {
    goToBranch: (branchId: BranchId) => void
    goToStatement: (statementLabel: string) => void
    skip: () => void
  }) => void
  frame?: Frame
  scheme?: CommandViewColorScheme
}

export function SubmitMonuments({onDone, frame, scheme}: SubmitMonumentsProps) {
  const {goToBranch} = useGameContext()
  const {containerSize, goToStatement, skip} = useBranchContext()
  return (
    <Command>
      {(controls) => (
        <motion.div
          className={clsx(
            'GameEngine-text absolute flex flex-col',
            scheme === 'dark' && 'GameEngine-text--dark',
            !frame && 'inset-0 p-8 pt-20',
          )}
          style={frame && styleForFrame({containerSize}, frame)}
          variants={{
            initial: {opacity: 0},
            entrance: {
              opacity: 1,
              transition: {delay: 0.5, duration: 1},
            },
            exit: {
              opacity: 0,
              transition: {duration: 0.5, ease: 'easeOut'},
            },
          }}
          initial="initial"
          animate={controls}>
          <TextForm
            rows={3}
            scheme={scheme}
            inputLabel="Названия зданий"
            submitLabel="Сохранить"
            onSubmit={() => {
              // FIXME: Persist the data
              onDone({goToStatement, goToBranch, skip})
            }}
          />
        </motion.div>
      )}
    </Command>
  )
}
