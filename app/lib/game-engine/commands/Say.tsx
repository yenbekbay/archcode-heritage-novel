import clsx from 'clsx'
import {motion} from 'framer-motion'
import type {
  CommandProps,
  CommandViewAnimation,
  CommandViewColorScheme,
} from '../components'
import {Command} from '../components'
import {useBranchContext} from '../contexts'
import type {Frame} from './views'
import {ForegroundView, styleForFrame} from './views'

export interface SayProps extends Partial<Omit<CommandProps, 'children'>> {
  children: string
  href?: string
  tag?: string
  placement?: 'top' | 'middle' | 'bottom'
  scheme?: CommandViewColorScheme
  style?: React.CSSProperties
  textStyle?: React.CSSProperties
  textFrame?: Frame
  animation?: CommandViewAnimation
  foregroundSrc?: string
  foregroundStyle?: React.CSSProperties
  foregroundAnimation?: CommandViewAnimation
}

export function Say({
  children,
  href,
  tag,
  placement = 'top',
  scheme,
  style,
  textStyle,
  textFrame,
  animation = {
    initial: {opacity: 0},
    entrance: (idx) => ({
      opacity: 1,
      transition: {delay: 0.5 + 0.02 * idx},
    }),
    exit: {
      opacity: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  },
  foregroundSrc,
  foregroundStyle,
  foregroundAnimation,
  ...restProps
}: SayProps) {
  const {containerSize} = useBranchContext()
  const chars = children.split('')
  const TextComp = href ? motion.a : motion.span
  const size: 'md' | 'lg' | 'xl' = (() => {
    if (chars.length > 90) {
      return 'md'
    }
    if (chars.length > 40) {
      return 'lg'
    }
    return 'xl'
  })()
  return (
    <Command durationMs={3000 + chars.length * 40} skippable {...restProps}>
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

          <div
            className={clsx(
              'absolute inset-0 flex flex-col items-center p-8 pt-20',
              {
                top: 'justify-start',
                middle: 'justify-center',
                bottom: 'justify-end',
              }[placement],
            )}
            style={style}>
            {tag && (
              <motion.span
                className="text-md GameEngine-tag mb-1 whitespace-pre-wrap rounded-md px-1 text-center font-calligraph"
                variants={animation}
                initial="initial"
                animate={controls}>
                {tag}
              </motion.span>
            )}

            <TextComp
              className={clsx(
                'GameEngine-text whitespace-pre-wrap text-center font-calligraph',
                scheme === 'dark' && 'GameEngine-text--dark',
                {
                  md: 'text-md',
                  lg: 'text-xl',
                  xl: 'text-3xl',
                }[size],
              )}
              style={{
                ...(href && {
                  textDecoration: 'underline',
                  textUnderlineOffset: size ? '6px' : '4px',
                }),
                ...textStyle,
                ...(textFrame && styleForFrame({containerSize}, textFrame)),
              }}
              {...(href && {
                href,
                target: '_blank',
                rel: 'noopener noreferrer',
                onClick: (event) => event.stopPropagation(),
              })}
              variants={animation}
              initial="initial"
              animate={controls}>
              {chars.map((char, idx) => (
                <motion.span
                  key={`${char}_${idx}`}
                  style={{
                    // Scale font size according to container size
                    fontSize: `${containerSize[0] / REFERENCE_SIZE[0]}em`,
                  }}
                  variants={animation}
                  initial="initial"
                  animate={controls}
                  custom={idx}>
                  {char}
                </motion.span>
              ))}
            </TextComp>
          </div>
        </>
      )}
    </Command>
  )
}

const REFERENCE_SIZE = [375, 667] as const
