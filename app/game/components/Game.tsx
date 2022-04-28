import {useUpdateEffect} from '@react-hookz/web'
import {
  ArrowCounterClockwise as ArrowCounterClockwiseIcon,
  ArrowLeft as ArrowLeftIcon,
  House as HouseIcon,
} from 'phosphor-react'
import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {useSearchParam} from '~/lib'
import type {GameHistory} from '../utils'
import {makeFrameId, makeGameHistory, parseFrameId} from '../utils'
import type {Frame, GameContextValue} from './GameContext'
import {GameContext} from './GameContext'
import {MobileDeviceChrome} from './MobileDeviceChrome'
import {Scene} from './Scene'
import {WithAssets} from './WithAssets'

export interface GameProps {
  assets: string[]
  initialSceneId: SceneId
  onClose?: () => void
  children?: React.ReactElement[] | React.ReactElement
}

export const Game = function Game({
  assets,
  initialSceneId,
  onClose,
  children: childrenProp,
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
  const children = React.useMemo(
    () =>
      (flattenChildren(childrenProp) as React.ReactElement[]).filter(
        (el) => el.type === Scene,
      ),
    [childrenProp],
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

        <MobileDeviceChrome>
          <WithAssets assets={assets}>
            <div className="flex h-full w-full overflow-hidden bg-base-100">
              {children.map(
                (child) => focusedFrame.sceneId === child.props.id && child,
              )}
            </div>
          </WithAssets>
        </MobileDeviceChrome>
      </div>
    </GameContext.Provider>
  )
}
