import useSize from '@react-hook/size'
import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {Flex, useStableCallback} from '~/lib'
import {Panel} from './Panel'
import {useSceneContext} from './SceneContext'

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

      {children.map((child, idx) => (
        <Panel
          key={child.key}
          index={idx}
          visible={
            ctx.activePanelIndex === idx ||
            (ctx.activePanelIndex > idx && !!ctx.panelMap.get(idx)?.fixed)
          }
          skipToNextPanel={skipToNextPanel}>
          {child}
        </Panel>
      ))}
    </Flex>
  )
}
