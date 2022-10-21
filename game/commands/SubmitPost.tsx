import type {definitions} from 'api'
import {getSupabase} from 'api'
import {motion} from 'framer-motion'
import type {BranchId, Frame, ImageViewProps} from 'react-visual-novel'
import {
  Command,
  ImageView,
  styleForFrame,
  useBranchContext,
  useGameContext,
} from 'react-visual-novel'
import {twMerge} from 'tailwind-merge'
import {TextForm} from './internal'

export interface SubmitPostProps {
  onDone: (ctx: {
    goToBranch: (branchId: BranchId) => void
    goToStatement: (statementLabel: string) => void
    goToNextStatement: (plusIndex?: number) => void
  }) => void
  frame?: Frame
  image?: string | Omit<ImageViewProps, 'controls'>
}

export function SubmitPost({onDone, frame, image}: SubmitPostProps) {
  const {goToBranch} = useGameContext()
  const {containerRect, goToStatement, goToNextStatement} = useBranchContext()
  const imageProps = typeof image === 'string' ? {uri: image} : image
  return (
    <Command name="SubmitPost" behavior={['non_skippable']}>
      {(controls) => (
        <>
          {imageProps && <ImageView controls={controls} {...imageProps} />}

          <motion.div
            className={twMerge(
              'rvn-text absolute flex flex-col',
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
            animate={controls}
          >
            <TextForm
              rows={10}
              inputLabel="Текст поста"
              submitLabel="Опубликовать пост"
              onSubmit={async (values) => {
                await getSupabase()
                  .from<definitions['post_submissions']>('post_submissions')
                  .insert({
                    body: values.body,
                    name: values.name || undefined,
                  })
                onDone({goToStatement, goToBranch, goToNextStatement})
              }}
            />
          </motion.div>
        </>
      )}
    </Command>
  )
}
