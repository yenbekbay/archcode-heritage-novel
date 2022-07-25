import {motion} from 'framer-motion'
import {twMerge} from 'tailwind-merge'
import type {definitions} from '~/api'
import {getSupabase} from '~/api'
import type {
  CommandViewColorScheme,
  Frame,
  ImageViewProps,
} from '~/lib/game-engine'
import {
  Command,
  ImageView,
  styleForFrame,
  useBranchContext,
  useGameContext,
} from '~/lib/game-engine'
import {TextForm} from './internal'

export interface SubmitPostProps {
  onDone: (ctx: {
    goToBranch: (branchId: BranchId) => void
    goToStatement: (statementLabel: string) => void
    skip: () => void
  }) => void
  scheme?: CommandViewColorScheme
  frame?: Frame
  image?: string | Omit<ImageViewProps, 'controls'>
}

export function SubmitPost({onDone, frame, scheme, image}: SubmitPostProps) {
  const {goToBranch} = useGameContext()
  const {containerRect, goToStatement, skip} = useBranchContext()
  const imageProps = typeof image === 'string' ? {uri: image} : image
  return (
    <Command name="SubmitPost" behavior={['non_skippable']}>
      {(controls) => (
        <>
          {imageProps && <ImageView controls={controls} {...imageProps} />}

          <motion.div
            className={twMerge(
              'GameEngine-text absolute flex flex-col',
              scheme === 'dark' && 'GameEngine-text--dark',
              !frame && 'inset-0 p-8 py-20',
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
