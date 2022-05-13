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
import {useSearchParam} from '~/lib'
import type {Frame, GameHistory} from '../utils'
import {makeFrameId, makeGameHistory, parseFrameId} from '../utils'
import type {GameContextValue} from './GameContext'
import {GameContext} from './GameContext'
import {MobileDeviceChrome} from './MobileDeviceChrome'
import {Scene} from './Scene'
import {WithAssets} from './WithAssets'

export interface GameProps {
  assets: string[]
  scenes: Record<string, React.ComponentType>
  initialSceneId: SceneId
  onClose?: () => void
}

export const Game = function Game({
  assets,
  scenes,
  initialSceneId,
  onClose,
}: GameProps) {
  const initialFrame: Frame = {sceneId: initialSceneId, frameIndex: 0}
  const [storedFocusedFrameId, setStoredFocusedFrameId] =
    useSearchParam<string>('f', makeFrameId(initialFrame))
  const [focusedFrame, setFocusedFrame] = React.useState(
    () => parseFrameId(storedFocusedFrameId) ?? initialFrame,
  )
  const [history] = React.useState<GameHistory>(() =>
    makeGameHistory({
      initialFrame: focusedFrame,
      onChange: (newFrames) => setFocusedFrame(newFrames[newFrames.length - 1]),
    }),
  )

  useUpdateEffect(() => {
    setStoredFocusedFrameId(makeFrameId(focusedFrame))
  }, [focusedFrame])

  useUpdateEffect(() => {
    const storedFocusedFrame = parseFrameId(storedFocusedFrameId)
    if (
      storedFocusedFrame &&
      (storedFocusedFrame.sceneId !== focusedFrame.sceneId ||
        storedFocusedFrame.frameIndex !== focusedFrame.frameIndex)
    ) {
      history.reset(storedFocusedFrame)
    }
  }, [storedFocusedFrameId])

  const ctx = React.useMemo(
    (): GameContextValue => ({
      focusedFrame,
      goToScene: (sceneId) => {
        if (sceneId !== focusedFrame.sceneId) {
          history.push({sceneId, frameIndex: 0})
        }
      },
      goToFrame: (sceneId, frameIndex) => {
        if (
          sceneId !== focusedFrame.sceneId ||
          frameIndex !== focusedFrame.frameIndex
        ) {
          history.push({sceneId, frameIndex})
        }
      },
      goBack: history.goBack,
      canGoBack: history.canGoBack,
    }),
    [focusedFrame, history],
  )

  return (
    <GameContext.Provider value={ctx}>
      <div className="h-screen">
        <div className="navbar absolute z-10 p-4">
          <div className="navbar-start space-x-2">
            <button
              className="btn btn-ghost btn-circle bg-white text-xl shadow-md"
              onClick={() => history.push(initialFrame)}>
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
          <div className="absolute bottom-4 right-4">
            <PopoverPrimitive.Root>
              <PopoverPrimitive.Trigger asChild>
                <button className="btn btn-ghost btn-circle bg-white text-xl shadow-md">
                  <WrenchIcon />
                </button>
              </PopoverPrimitive.Trigger>

              <PopoverPrimitive.Content
                align="center"
                sideOffset={4}
                className="no-animation w-72 rounded-lg bg-white p-2 shadow-md radix-side-top:animate-slide-up">
                <div className="navbar">
                  <div className="prose navbar-start">
                    <h4>Go to scene</h4>
                  </div>

                  <div className="navbar-end">
                    <PopoverPrimitive.Close className="btn btn-ghost btn-circle btn-sm">
                      <XIcon />
                    </PopoverPrimitive.Close>
                  </div>
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
              </PopoverPrimitive.Content>
            </PopoverPrimitive.Root>
          </div>
        )}

        <MobileDeviceChrome>
          <WithAssets assets={assets}>
            <div className="flex h-full w-full overflow-hidden bg-base-100">
              {Object.entries(scenes).map(
                ([sceneId, SceneComp]) =>
                  sceneId === focusedFrame.sceneId && (
                    <Scene key={sceneId} id={sceneId}>
                      <SceneComp />
                    </Scene>
                  ),
              )}
            </div>
          </WithAssets>
        </MobileDeviceChrome>
      </div>
    </GameContext.Provider>
  )
}
