import {Panel} from './Panel'
import {Panel as PanelT, SceneContext, SceneContextValue} from './SceneContext'
import {AnimatePresence} from 'framer-motion'
import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {useElementSize} from 'usehooks-ts'
import {useLatestRef} from '~/hooks/useLatestRef'
import {useSearchParam} from '~/hooks/useSearchParam'
import {Flex} from '~/styles/Flex'

export interface SceneBackgroundComponentProps {
  containerSize: {width: number; height: number}
  /** 0 to 1 */
  completedPercent: number
}

export interface SceneProps {
  id: string
  BackgroundComponent?: React.ComponentType<SceneBackgroundComponentProps>
  children?: React.ReactElement[] | React.ReactElement
}

export function Scene({
  id,
  BackgroundComponent,
  children: childrenProp,
}: SceneProps) {
  const [containerRef, containerSize] = useElementSize()
  const [activePanelIndex, setActivePanelIndex] = useActivePanelIndex(id)
  const [panelMap] = React.useState(() => new Map<number, PanelT>())
  const children = React.useMemo(
    () => flattenChildren(childrenProp) as React.ReactElement[],
    [childrenProp],
  )
  const ctx = React.useMemo(
    (): SceneContextValue => ({
      continue: () =>
        setActivePanelIndex((prev) => Math.min(children.length - 1, prev + 1)),
      registerPanel: (index, panel) => {
        panelMap.set(index, panel)
        return () => panelMap.delete(index)
      },
    }),
    [children.length, panelMap, setActivePanelIndex],
  )

  return (
    <SceneContext.Provider value={ctx}>
      <Flex
        ref={containerRef}
        css={{flex: 1, position: 'relative'}}
        tabIndex={-1}
        onClick={() => {
          const activePanel = panelMap.get(activePanelIndex)
          const skipped = activePanel?.onSkip?.()
          if (skipped) {
            return
          }

          ctx.continue()
        }}>
        {BackgroundComponent && (
          <BackgroundComponent
            containerSize={containerSize}
            completedPercent={(activePanelIndex + 1) / children.length}
          />
        )}

        <AnimatePresence>
          {children.map(
            (child, idx) =>
              activePanelIndex === idx && (
                <Panel key={child.key} index={idx}>
                  {child}
                </Panel>
              ),
          )}
        </AnimatePresence>
      </Flex>
    </SceneContext.Provider>
  )
}

function useActivePanelIndex(sceneId: string) {
  const [activePanelId, setActivePanelId] = useSearchParam<string>(
    'p',
    `${sceneId}_${0}`,
  )

  let activePanelIndex = Number(activePanelId.replace(`${sceneId}_`, ''))
  if (Number.isNaN(activePanelIndex)) {
    activePanelIndex = 0
  }

  const latestActivePanelIndexRef = useLatestRef(activePanelIndex)
  const setActivePanelIndex = React.useCallback(
    (action: React.SetStateAction<number>) => {
      const newValue =
        typeof action === 'function'
          ? action(latestActivePanelIndexRef.current)
          : action
      setActivePanelId(`${sceneId}_${newValue}`)
    },
    [latestActivePanelIndexRef, sceneId, setActivePanelId],
  )
  return [activePanelIndex, setActivePanelIndex] as const
}
