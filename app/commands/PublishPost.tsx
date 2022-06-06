import clsx from 'clsx'
import {motion} from 'framer-motion'
import type {CommandViewAnimation, CommandViewColorScheme, Frame} from '~/lib'
import {
  Command,
  ForegroundView,
  styleForFrame,
  useBranchContext,
  useGameContext,
} from '~/lib'
import type {definitions} from '~/supabase'
import {getSupabase} from '~/supabase'
import {TextForm} from './internal'

export interface PublishPostProps {
  onDone: (ctx: {
    goToBranch: (branchId: BranchId) => void
    goToStatement: (statementLabel: string) => void
    skip: () => void
  }) => void
  frame?: Frame
  scheme?: CommandViewColorScheme
  foregroundSrc?: string
  foregroundStyle?: React.CSSProperties
  foregroundAnimation?: CommandViewAnimation
}

export function PublishPost({
  onDone,
  frame,
  scheme,
  foregroundSrc,
  foregroundStyle,
  foregroundAnimation,
}: PublishPostProps) {
  const {goToBranch} = useGameContext()
  const {containerSize, goToStatement, skip} = useBranchContext()
  return (
    <Command>
      {(controls) => (
        <>
          {foregroundSrc && (
            <ForegroundView
              src={foregroundSrc}
              style={foregroundStyle}
              animation={foregroundAnimation}
              controls={controls}
            />
          )}

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
              rows={10}
              scheme={scheme}
              inputLabel="Текст поста"
              submitLabel="Опубликовать пост"
              onSubmit={async (values) => {
                await getSupabase()
                  .from<definitions['post_submissions']>('post_submissions')
                  .insert({
                    body: values.body,
                    name: values.name || undefined,
                  })
                onDone({goToStatement, goToBranch, skip})
              }}
            />
          </motion.div>
        </>
      )}
    </Command>
  )
}
