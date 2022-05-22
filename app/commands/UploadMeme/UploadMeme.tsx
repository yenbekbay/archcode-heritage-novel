import clsx from 'clsx'
import {AnimatePresence, motion} from 'framer-motion'
import type {CommandViewAnimation, CommandViewColorScheme, Frame} from '~/lib'
import {Command, ForegroundView, styleForFrame, useBranchContext} from '~/lib'
import {MemeBuilder} from './MemeBuilder'

export interface UploadMemeProps {
  frame?: Frame
  scheme?: CommandViewColorScheme
  foregroundSrc?: string
  foregroundStyle?: React.CSSProperties
  foregroundAnimation?: CommandViewAnimation
}

export function UploadMeme({
  frame,
  scheme,
  foregroundSrc,
  foregroundStyle,
  foregroundAnimation,
}: UploadMemeProps) {
  const {containerSize} = useBranchContext()
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

          <AnimatePresence>
            <motion.div
              className={clsx(
                'GameEngine-text absolute flex flex-col',
                scheme === 'dark' && 'GameEngine-text--dark',
                !frame && 'inset-0 p-8 pt-20',
              )}
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
              style={frame && styleForFrame({containerSize}, frame)}
              initial="initial"
              animate="entrance"
              exit="exit">
              <MemeBuilder scheme={scheme} />
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </Command>
  )
}
