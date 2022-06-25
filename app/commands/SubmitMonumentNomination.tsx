import clsx from 'clsx'
import {motion} from 'framer-motion'
import type {CommandViewColorScheme, Frame} from '~/lib'
import {Command, styleForFrame, useBranchContext, useGameContext} from '~/lib'
import type {definitions} from '~/supabase'
import {getSupabase} from '~/supabase'
import {TextForm} from './internal'

export interface SubmitMonumentNominationProps {
  onDone: (ctx: {
    goToBranch: (branchId: BranchId) => void
    goToStatement: (statementLabel: string) => void
    skip: () => void
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
  const {containerRect, goToStatement, skip} = useBranchContext()
  return (
    <Command name="SubmitMonumentNomination" behavior={['non_skippable']}>
      {(controls) => (
        <motion.div
          className={clsx(
            'GameEngine-text absolute flex flex-col',
            scheme === 'dark' && 'GameEngine-text--dark',
            !frame && 'inset-0 p-8 pt-20',
          )}
          style={frame && styleForFrame({containerRect}, frame)}
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
          animate={controls}>
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
              onDone({goToStatement, goToBranch, skip})
            }}
          />
        </motion.div>
      )}
    </Command>
  )
}
