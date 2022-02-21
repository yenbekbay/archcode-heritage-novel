import {CSS} from '~/lib'
import {
  CommandContainer,
  CommandContainerProps,
  CommandViewVariants,
  ForegroundView,
} from '../components'

export interface ForegroundProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  src: string
  css?: CSS
  variants?: CommandViewVariants
}

export function Foreground({
  src,
  css,
  variants = {
    initial: {opacity: 0},
    mount: {
      opacity: 1,
      transition: {delay: 0.5, duration: 1},
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  },
  ...restProps
}: ForegroundProps) {
  return (
    <CommandContainer duration={500} skippable {...restProps}>
      {(controls) => (
        <ForegroundView
          src={src}
          css={css}
          variants={variants}
          controls={controls}
        />
      )}
    </CommandContainer>
  )
}
