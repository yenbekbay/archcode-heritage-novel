import {motion} from 'framer-motion'
import type {CommandProps, CommandViewAnimation} from '../components'
import {Command} from '../components'

export interface TitleProps extends Partial<Omit<CommandProps, 'children'>> {
  children: string
  animation?: CommandViewAnimation
}

export function Title({
  children,
  animation = {
    initial: {opacity: 0},
    entrance: {
      opacity: 1,
      transition: {delay: 0.5, duration: 4},
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  },
  ...restProps
}: TitleProps) {
  return (
    <Command skippable {...restProps}>
      {(controls) => (
        <div className="flex flex-1 flex-col justify-center p-8">
          <motion.span
            className="GameEngine-title text-center font-calligraph text-5xl font-semibold"
            variants={animation}
            initial="initial"
            animate={controls}>
            {children}
          </motion.span>
        </div>
      )}
    </Command>
  )
}
