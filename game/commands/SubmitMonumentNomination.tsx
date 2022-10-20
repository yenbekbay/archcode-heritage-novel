import type {definitions} from 'api'
import {getSupabase} from 'api'
import {motion} from 'framer-motion'
import type {BranchId, CommandViewColorScheme, Frame} from 'react-visual-novel'
import {
  Command,
  styleForFrame,
  useBranchContext,
  useGameContext,
} from 'react-visual-novel'
import {twMerge} from 'tailwind-merge'
import {TextForm} from './internal'

export interface SubmitMonumentNominationProps {
  onDone: (ctx: {
    goToBranch: (branchId: BranchId) => void
    goToStatement: (statementLabel: string) => void
    goToNextStatement: (plusIndex?: number) => void
  }) => void
  frame?: Frame
  scheme?: CommandViewColorScheme
}

export function SubmitMonumentNomination({
  onDone,
  frame,
  scheme,
}: SubmitMonumentNominationProps) {
  const {goToBranch} = useGameContext()
  const {containerRect, goToStatement, goToNextStatement} = useBranchContext()
  return (
    <Command name="SubmitMonumentNomination" behavior={['non_skippable']}>
      {(controls) => (
        <motion.div
          variants={{
            initial: {opacity: 0},
            entrance: {
              opacity: 1,
              transition: {duration: 1},
            },
            exit: {
              opacity: 0,
              transition: {duration: 0.5, ease: 'easeOut'},
            },
          }}
          initial="initial"
          animate={controls}
          className={twMerge(
            'rvn-text absolute flex flex-col',
            scheme === 'dark' && 'rvn-text--dark',
            !frame && 'inset-0 p-8 py-20',
          )}
          style={frame && styleForFrame({containerRect}, frame)}
        >
          <TextForm
            rows={3}
            scheme={scheme}
            inputLabel="Названия зданий"
            submitLabel="Сохранить"
            onSubmit={async (values) => {
              await getSupabase()
                .from<definitions['monument_nominations']>(
                  'monument_nominations',
                )
                .insert({
                  body: values.body,
                  name: values.name || undefined,
                })
              onDone({goToStatement, goToBranch, goToNextStatement})
            }}
          />
        </motion.div>
      )}
    </Command>
  )
}
