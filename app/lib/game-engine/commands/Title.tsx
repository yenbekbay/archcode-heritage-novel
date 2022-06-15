import {motion} from 'framer-motion'
import {Command} from '../components'

export interface TitleProps {
  children: string
  durationMs?: number
  visibility?: number | 'indefinite'
  zIndex?: number
}

export function Title({
  children,
  durationMs = 3000,
  visibility,
  zIndex,
}: TitleProps) {
  return (
    <Command
      behavior={['skippable_timed', {durationMs}]}
      visibility={visibility}
      zIndex={zIndex}>
      {(controls) => (
        <div className="flex flex-1 flex-col justify-center p-8">
          <motion.span
            className="GameEngine-title text-center font-calligraph text-5xl font-semibold"
            variants={{
              initial: {opacity: 0},
              entrance: {
                opacity: 1,
                transition: {delay: 0.5, duration: 4},
              },
              exit: {
                opacity: 0,
                transition: {duration: 0.5, ease: 'easeOut'},
              },
            }}
            initial="initial"
            animate={controls}>
            {children}
          </motion.span>
        </div>
      )}
    </Command>
  )
}
