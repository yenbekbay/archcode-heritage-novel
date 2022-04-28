import {motion} from 'framer-motion'
import type {CommandContainerProps, CommandViewVariants} from '../components'
import {CommandContainer} from '../components'

export interface TitleProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  children: string
  variants?: CommandViewVariants
}

export function Title({
  children,
  variants = {
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
    <CommandContainer skippable {...restProps}>
      {(controls) => (
        <div className="flex flex-1 flex-col justify-center p-8">
          <motion.span
            className="text-center font-calligraph text-5xl font-semibold text-red-500"
            style={{textShadow: '0 1px hsl(206, 24.0%, 9.0%)'}}
            variants={variants}
            initial="initial"
            animate={controls}>
            {children}
          </motion.span>
        </div>
      )}
    </CommandContainer>
  )
}
