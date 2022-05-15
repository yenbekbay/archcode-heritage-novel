import clsx from 'clsx'
import {motion} from 'framer-motion'
import {cover} from 'intrinsic-scale'
import type {
  CommandContainerProps,
  CommandViewVariants,
  Choice,
} from '../components'
import {
  CommandContainer,
  ForegroundView,
  ChoicesView,
  useSceneContext,
} from '../components'

export interface SayProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  children: string
  href?: string
  tag?: string
  size?: 'md' | 'lg' | 'xl'
  placement?: 'top' | 'middle' | 'bottom'
  dark?: boolean
  style?: React.CSSProperties
  textStyle?: React.CSSProperties
  textFrame?: {
    viewport: [number, number]
    rect: {
      y: number
      x: number
      width?: number
      height?: number
    }
  }
  choices?: Choice[]
  choicesDark?: boolean
  foregroundSrc?: string
  foregroundStyle?: React.CSSProperties
  variants?: CommandViewVariants
}

export function Say({
  children,
  href,
  tag,
  size = 'md',
  placement = 'top',
  dark,
  style,
  textStyle,
  textFrame,
  choices,
  choicesDark,
  foregroundSrc,
  foregroundStyle,
  variants = {
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
  ...restProps
}: SayProps) {
  const {containerSize} = useSceneContext()
  let backgroundXScale = 1
  let backgroundYScale = 1
  let backgroundOffset = {x: 0, y: 0}
  if (textFrame) {
    const backgroundResizeInfo = cover(
      containerSize[0],
      containerSize[1],
      textFrame.viewport[0],
      textFrame.viewport[1],
    )
    backgroundXScale = backgroundResizeInfo.width / textFrame.viewport[0]
    backgroundYScale = backgroundResizeInfo.height / textFrame.viewport[1]
    backgroundOffset = backgroundResizeInfo
      ? {x: backgroundResizeInfo.x, y: backgroundResizeInfo.y}
      : {x: 0, y: 0}
  }
  const chars = children.split('')
  const TextComp = href ? motion.a : motion.span
  return (
    <CommandContainer
      durationMs={3000 + chars.length * 20}
      skippable
      {...restProps}>
      {(controls) => (
        <>
          {foregroundSrc && (
            <ForegroundView
              src={foregroundSrc}
              style={foregroundStyle}
              variants={variants}
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
                className="text-md mb-1 whitespace-pre-wrap rounded-md px-1 text-center font-calligraph"
                style={{
                  color: '#fBf9e0',
                  background: 'rgba(165, 123, 85, .75)',
                }}
                variants={variants}
                initial="initial"
                animate={controls}>
                {tag}
              </motion.span>
            )}

            <TextComp
              className={clsx(
                'whitespace-pre-wrap text-center font-calligraph',
                {
                  md: 'text-md',
                  lg: 'text-xl',
                  xl: 'text-3xl',
                }[size],
              )}
              style={{
                color: dark ? '#fBf9e0' : 'hsl(206, 24.0%, 9.0%)',
                textShadow: dark
                  ? '0 -1px rgba(0, 0, 0, .35), 0 2px hsl(206, 24.0%, 9.0%), 0 0 4px rgba(0, 0, 0), 0 0 4px rgba(0, 0, 0), 0 0 4px rgba(0, 0, 0)'
                  : '0 1px hsl(209, 12.2%, 93.2%), 0 0 4px rgba(255, 255, 255), 0 0 4px rgba(255, 255, 255), 0 0 4px rgba(255, 255, 255)',
                ...(href && {
                  textDecoration: 'underline',
                  textUnderlineOffset: size ? '6px' : '4px',
                }),
                ...textStyle,
                ...(textFrame && {
                  position: 'absolute',
                  left:
                    textFrame.rect.x * backgroundXScale + backgroundOffset.x,
                  top: textFrame.rect.y * backgroundYScale + backgroundOffset.y,
                  ...(textFrame.rect.width && {
                    width: textFrame.rect.width * backgroundXScale,
                  }),
                  ...(textFrame.rect.height && {
                    height: textFrame.rect.height * backgroundYScale,
                  }),
                }),
              }}
              {...(href && {
                href,
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              variants={variants}
              initial="initial"
              animate={controls}>
              {chars.map((char, idx) => (
                <motion.span
                  key={`${char}_${idx}`}
                  style={{
                    // Scale font size according to container size
                    fontSize: `${containerSize[0] / REFERENCE_SIZE[0]}em`,
                  }}
                  variants={variants}
                  initial="initial"
                  animate={controls}
                  custom={idx}>
                  {char}
                </motion.span>
              ))}
            </TextComp>
          </div>

          {choices && (
            <ChoicesView
              dark={choicesDark}
              choices={choices}
              variants={variants}
              controls={controls}
            />
          )}
        </>
      )}
    </CommandContainer>
  )
}

const REFERENCE_SIZE = [375, 667] as const
