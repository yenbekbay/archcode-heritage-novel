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
  const goToNextFrame = useStableCallback(() => {
    const completed = ctx.completeActivePanel()
    if (!completed) {
      ctx.setActiveFrame((prev) => Math.min(children.length - 1, prev + 1))
    }
  })
  return (
    <Flex
      ref={containerRef}
      css={{flex: 1, position: 'relative'}}
      tabIndex={-1}
      onClick={() => goToNextFrame()}>
      {BackgroundComponent && (
        <Flex direction="column" css={{position: 'absolute', inset: 0}}>
          <BackgroundComponent
            containerSize={containerSize}
            completedPercent={(ctx.activeFrame + 1) / children.length}
          />
        </Flex>
      )}

      {children.map((child, idx) => (
        <Panel
          key={child.key}
          index={idx}
          visible={
            ctx.activeFrame >= idx &&
            ctx.activeFrame <= idx + (ctx.panelMap.get(idx)?.retainFor ?? 0)
          }
          goToNextFrame={goToNextFrame}>
          {child}
        </Panel>
      ))}
    </Flex>
  )
}
