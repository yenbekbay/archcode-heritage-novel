import {motion} from 'framer-motion'
import React from 'react'
import {Button, CSS, Flex} from '~/lib'
import {
  CommandContainer,
  CommandContainerProps,
  CommandViewVariants,
  ForegroundView,
  useGameContext,
  useSceneContext,
} from '../components'

export interface Option {
  label: string
  action:
    | {type: 'go_to_scene'; sceneId: string}
    | {type: 'go_to_frame'; frame: number}
}

export interface OptionsProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  options: Option[]
  foregroundSrc?: string
  foregroundCss?: CSS
  variants?: CommandViewVariants
}

export function Options({
  options,
  foregroundSrc,
  foregroundCss,
  variants = {
    initial: {opacity: 0},
    mount: (idx) => ({
      opacity: 1,
      transition: {delay: 0.5 + 0.02 * idx},
    }),
    exit: {
      opacity: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  },
  ...restProps
}: OptionsProps) {
  const {goToScene} = useGameContext()
  const {goToFrame} = useSceneContext()
  return (
    <CommandContainer {...restProps}>
      {(controls) => (
        <>
          {foregroundSrc && (
            <ForegroundView
              src={foregroundSrc}
              css={foregroundCss}
              variants={variants}
              controls={controls}
            />
          )}

          <Flex
            css={{flex: 1, padding: '$4'}}
            direction="column"
            justify="end"
            align="center"
            gap="2">
            {options.map((o, idx) => (
              <Flex
                key={o.label}
                as={motion.div}
                direction="column"
                variants={variants}
                initial="initial"
                animate={controls}
                custom={idx}>
                <Button
                  as={motion.div}
                  variant="transparentBlack"
                  css={{
                    height: 'auto',
                    lineHeight: '$4',
                    textAlign: 'center',
                    fontFamily: '$calligraph',
                    fontSize: '$4',
                    color: 'white',
                    textShadow: '0 1px $colors$slate12',
                    boxShadow: '0 2px rgba(0, 0, 0, .35)',
                  }}
                  animate={{y: -8}}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 0.05 * idx,
                    duration: 1,
                    ease: 'easeInOut',
                  }}
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation()
                    switch (o.action.type) {
                      case 'go_to_scene':
                        goToScene(o.action.sceneId)
                        break
                      case 'go_to_frame':
                        goToFrame(o.action.frame)
                        break
                    }
                  }}>
                  {o.label}
                </Button>
              </Flex>
            ))}
          </Flex>
        </>
      )}
    </CommandContainer>
  )
}
