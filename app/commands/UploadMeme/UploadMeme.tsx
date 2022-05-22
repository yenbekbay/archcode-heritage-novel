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
import {MemeBuilder} from './MemeBuilder'

export interface UploadMemeProps {
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

export function UploadMeme({
  onDone,
  frame,
  scheme,
  foregroundSrc,
  foregroundStyle,
  foregroundAnimation,
}: UploadMemeProps) {
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
            <MemeBuilder
              scheme={scheme}
              onDone={() => onDone({goToStatement, goToBranch, skip})}
            />
          </motion.div>
        </>
      )}
    </Command>
  )
}
