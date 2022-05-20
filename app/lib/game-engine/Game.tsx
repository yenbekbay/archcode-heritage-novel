import * as PopoverPrimitive from '@radix-ui/react-popover'
import {useUpdateEffect} from '@react-hookz/web'
import {
  ArrowCounterClockwise as ArrowCounterClockwiseIcon,
  ArrowLeft as ArrowLeftIcon,
  CaretRight as CaretRightIcon,
  House as HouseIcon,
  Wrench as WrenchIcon,
  X as XIcon,
} from 'phosphor-react'
import React from 'react'
import {useSearchParam} from '../hooks'
import {MobileDeviceChrome, WithAssets} from './components'
import type {GameContextValue} from './contexts'
import {GameContext, SceneIdProvider} from './contexts'
import type {GameHistory, GameLocation} from './utils'
import {makeGameHistory, makeGameLocationId, parseGameLocation} from './utils'

export interface GameProps {
  assets: Record<string, string>
  scenes: Record<string, React.ComponentType>
  initialSceneId: SceneId
  onClose?: () => void
}

export function Game({assets, scenes, initialSceneId, onClose}: GameProps) {
  const initialLocation: GameLocation = {
    sceneId: initialSceneId,
    statementIndex: 0,
  }
  const [storedFocusedLocationId, setStoredFocusedLocationId] =
    useSearchParam<string>('location', makeGameLocationId(initialLocation))
  const [focusedLocation, setFocusedLocation] = React.useState(
    () => parseGameLocation(storedFocusedLocationId) ?? initialLocation,
  )
  const [paused, setPaused] = useSearchParam<boolean>('paused', false)
  const [history] = React.useState<GameHistory>(() =>
    makeGameHistory({
      initialLocation: focusedLocation,
      onChange: (newLocations) =>
        setFocusedLocation(newLocations[newLocations.length - 1]),
    }),
  )

  useUpdateEffect(() => {
    setStoredFocusedLocationId(makeGameLocationId(focusedLocation))
  }, [focusedLocation])

  useUpdateEffect(() => {
    const storedFocusedLocation = parseGameLocation(storedFocusedLocationId)
    if (
      storedFocusedLocation &&
      (storedFocusedLocation.sceneId !== focusedLocation.sceneId ||
        storedFocusedLocation.statementIndex !== focusedLocation.statementIndex)
    ) {
      history.reset(storedFocusedLocation)
    }
  }, [storedFocusedLocationId])

  const ctx = React.useMemo(
    (): GameContextValue => ({
      focusedLocation,
      paused,
      goToScene: (sceneId) => {
        if (sceneId !== focusedLocation.sceneId) {
          history.push({sceneId, statementIndex: 0})
          setPaused(false)
        }
      },
      goToLocation: (sceneId, statementIndex) => {
        if (
          sceneId !== focusedLocation.sceneId ||
          statementIndex !== focusedLocation.statementIndex
        ) {
          history.push({sceneId, statementIndex})
          setPaused(false)
        }
      },
      goBack: () => {
        const ok = history.goBack()
        if (ok) {
          setPaused(true)
        }
        return ok
      },
      canGoBack: history.canGoBack,
    }),
    [focusedLocation, history, paused, setPaused],
  )

  return (
    <GameContext.Provider value={ctx}>
      <div className="h-screen">
        <div className="navbar absolute z-10 p-4">
          <div className="navbar-start space-x-2">
            <button
              className="btn btn-ghost btn-circle bg-white text-xl shadow-md"
              onClick={() => history.push(initialLocation)}>
              <ArrowCounterClockwiseIcon />
            </button>

            {history.canGoBack() && (
              <button
                className="btn btn-ghost btn-circle bg-white text-xl shadow-md"
                onClick={() => history.goBack()}>
                <ArrowLeftIcon />
              </button>
            )}
          </div>

          <div className="navbar-end space-x-2">
            {onClose && (
              <button
                className="btn btn-ghost btn-circle bg-white text-xl shadow-md"
                onClick={() => onClose()}>
                <HouseIcon />
              </button>
            )}
          </div>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="absolute bottom-4 right-4 z-10">
            <PopoverPrimitive.Root>
              <PopoverPrimitive.Trigger asChild>
                <button className="btn btn-ghost btn-circle bg-white text-xl shadow-md">
                  <WrenchIcon />
                </button>
              </PopoverPrimitive.Trigger>

              <PopoverPrimitive.Content
                align="center"
                side="top"
                sideOffset={4}
                className="no-animation flex w-72 flex-col overflow-hidden rounded-lg bg-white p-2 shadow-md radix-side-top:animate-slide-up"
                style={{maxHeight: 'calc(100vh - calc(4rem + 8px))'}}>
                <div className="navbar">
                  <div className="navbar-start"></div>
                  <div className="navbar-end">
                    <PopoverPrimitive.Close className="btn btn-ghost btn-circle btn-sm">
                      <XIcon />
                    </PopoverPrimitive.Close>
                  </div>
                </div>

                <div className="space-y-4 overflow-y-auto">
                  <button
                    className="btn btn-outline btn-sm btn-block"
                    onClick={() => setPaused(!paused)}>
                    {paused ? 'Resume' : 'Pause'}
                  </button>

                  <div>
                    <div className="prose p-2">
                      <h4>Go to scene</h4>
                    </div>

                    {Object.keys(scenes).map((sceneId) => (
                      <button
                        key={sceneId}
                        className="btn btn-ghost btn-sm btn-block justify-between normal-case"
                        onClick={() => ctx.goToScene(sceneId as SceneId)}>
                        {sceneId}
                        <CaretRightIcon />
                      </button>
                    ))}
                  </div>
                </div>
              </PopoverPrimitive.Content>
            </PopoverPrimitive.Root>
          </div>
        )}

        <MobileDeviceChrome>
          <WithAssets assets={assets}>
            <div className="flex h-full w-full overflow-hidden bg-base-100">
              {Object.entries(scenes).map(
                ([sceneId, SceneComp]) =>
                  sceneId === focusedLocation.sceneId && (
                    <SceneIdProvider key={sceneId} id={sceneId}>
                      <SceneComp />
                    </SceneIdProvider>
                  ),
              )}
            </div>
          </WithAssets>
        </MobileDeviceChrome>
      </div>
    </GameContext.Provider>
  )
}

// MARK: Helpers

export function prepareScenes<
  TRawScenes extends Record<string, React.ComponentType>,
>(_scenes: TRawScenes) {
  const scenes = Object.fromEntries(
    Object.entries(_scenes)
      .filter(([exportName]) => exportName.startsWith('Scene'))
      .map(([exportName, exportVal]) => [
        exportName.replace(SCENE_PREFIX_RE, ''),
        exportVal,
      ]),
  ) as {
    [K in keyof typeof _scenes as K extends `Scene${infer TId}`
      ? TId
      : never]: typeof _scenes[K]
  }
  return scenes
}

const SCENE_PREFIX_RE = /^Scene/
