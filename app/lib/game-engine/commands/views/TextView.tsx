import clsx from 'clsx'
import type {AnimationControls} from 'framer-motion'
import {motion} from 'framer-motion'
import React from 'react'
import type {
  CommandViewAnimation,
  CommandViewColorScheme,
} from '../../components'
import {useBranchContext} from '../../contexts'
import type {CharGroup} from './char-group'
import type {Frame} from './frame'
import {styleForFrame} from './frame'

export type TextPlacement = 'top' | 'middle' | 'bottom'

export interface TextViewProps {
  groups: CharGroup[]
  controls: AnimationControls
  tag?: string
  placement?: TextPlacement
  style_?: React.CSSProperties
  frame?: Frame
  scheme?: CommandViewColorScheme
}

export function TextView({
  groups,
  controls,
  tag,
  placement = 'top',
  style_: style,
  frame,
  scheme,
}: TextViewProps) {
  const {containerSize} = useBranchContext()
  const length = groups.flatMap((g) => g.chars).length
  const size: 'md' | 'lg' | 'xl' = (() => {
    if (length > 90) {
      return 'md'
    }
    if (length > 40) {
      return 'lg'
    }
    return 'xl'
  })()
  const fontSize = `${containerSize[0] / REFERENCE_SIZE[0]}em`
  return (
    <div
      className={clsx(
        'absolute inset-0 flex flex-col items-center p-8 pt-20',
        {
          top: 'justify-start',
          middle: 'justify-center',
          bottom: 'justify-end',
        }[placement],
      )}>
      {tag && (
        <motion.span
          className="text-md GameEngine-tag mb-1 whitespace-pre-wrap rounded-md px-1 text-center font-calligraph"
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
          {tag}
        </motion.span>
      )}

      <div
        className={clsx(
          'GameEngine-text whitespace-pre-wrap text-center font-calligraph leading-tight',
          scheme === 'dark' && 'GameEngine-text--dark',
          {
            md: 'text-md',
            lg: 'text-xl',
            xl: 'text-3xl',
          }[size],
        )}
        style={{
          ...style,
          ...(frame && styleForFrame({containerSize}, frame)),
        }}>
        {groups.map((group, groupIdx) => {
          switch (group.type) {
            case 'text':
              return (
                <React.Fragment key={groupIdx}>
                  {group.chars.map((char, charIdx) => (
                    <motion.span
                      key={`${char}_${group.startIndex + charIdx}`}
                      style={{fontSize}}
                      variants={charAnimation}
                      initial="initial"
                      animate={controls}
                      custom={group.startIndex + charIdx}>
                      {char}
                    </motion.span>
                  ))}
                </React.Fragment>
              )
            case 'link':
              return (
                <a
                  key={groupIdx}
                  className="underline"
                  style={{fontSize, textUnderlineOffset: size ? '6px' : '4px'}}
                  href={group.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}>
                  {group.chars.map((char, charIdx) => (
                    <motion.span
                      key={`${char}_${group.startIndex + charIdx}`}
                      variants={charAnimation}
                      initial="initial"
                      animate={controls}
                      custom={group.startIndex + charIdx}>
                      {char}
                    </motion.span>
                  ))}
                </a>
              )
          }
        })}
      </div>
    </div>
  )
}

const charAnimation: CommandViewAnimation = {
  initial: {opacity: 0},
  entrance: (idx) => ({
    opacity: 1,
    transition: {delay: 0.5 + 0.02 * idx},
  }),
  exit: {
    opacity: 0,
    transition: {duration: 0.5, ease: 'easeOut'},
  },
}

const REFERENCE_SIZE = [375, 667] as const
