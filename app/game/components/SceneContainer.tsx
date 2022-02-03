import {Panel} from './Panel'
import {useSceneContext} from './SceneContext'
import useSize from '@react-hook/size'
import {AnimatePresence} from 'framer-motion'
import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {Flex} from '~/lib/components/Flex'
import {useStableCallback} from '~/lib/hooks/useStableCallback'

export interface SceneBackgroundComponentProps {
  containerSize: [number, number]
  /** 0 to 1 */
  completedPercent: number
}

export interface SceneContainerProps {
  BackgroundComponent?: React.ComponentType<SceneBackgroundComponentProps>
  children?: React.ReactElement[] | React.ReactElement
}

export function SceneContainer({
  BackgroundComponent,
  children: childrenProp,
}: SceneContainerProps) {
  const ctx = useSceneContext()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const containerSize = useSize(containerRef)
  const children = React.useMemo(
    () => flattenChildren(childrenProp) as React.ReactElement[],
    [childrenProp],
  )
  const skipToNextPanel = useStableCallback(() => {
    const skipped = ctx.skipActivePanel()
    if (!skipped) {
      ctx.setActivePanelIndex((prev) => Math.min(children.length - 1, prev + 1))
    }
  })
  return (
    <Flex
      ref={containerRef}
      css={{flex: 1, position: 'relative'}}
      tabIndex={-1}
      onClick={() => skipToNextPanel()}>
      {BackgroundComponent && (
        <BackgroundComponent
          containerSize={containerSize}
          completedPercent={(ctx.activePanelIndex + 1) / children.length}
        />
      )}

      <AnimatePresence>
        {children.map(
          (child, idx) =>
            ctx.activePanelIndex === idx && (
              <Panel
                key={child.key}
                index={idx}
                skipToNextPanel={skipToNextPanel}>
                {child}
              </Panel>
            ),
        )}
      </AnimatePresence>
    </Flex>
  )
}
