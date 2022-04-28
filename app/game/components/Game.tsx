import {useSyncedRef} from '@react-hookz/web'
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

export interface GameInstance
  extends Pick<GameHistory, 'canGoBack' | 'goBack' | 'on' | 'off'> {}

export const Game = React.forwardRef(function Game(
  {assets, initialSceneId, onClose, children: childrenProp}: GameProps,
  forwardedRef: React.ForwardedRef<GameInstance>,
) {
  const initialFrame = {
    sceneId: initialSceneId,
    frameIndex: 0,
  }
  const [focusedFrame, setFocusedFrame] = useFocusedFrame(initialFrame)
  const [history] = React.useState<GameHistory>(() =>
    makeGameHistory(focusedFrame),
  )
  const children = React.useMemo(
    () =>
      (flattenChildren(childrenProp) as React.ReactElement[]).filter(
        (el) => el.type === Scene,
      ),
    [childrenProp],
  )

  React.useImperativeHandle(forwardedRef, (): GameInstance => history, [
    history,
  ])

  React.useEffect(() => {
    function handleChange(frames: Frame[]) {
      setFocusedFrame(frames[frames.length - 1])
    }
    history.on('change', handleChange)
    return () => {
      history.off('change', handleChange)
    }
  }, [setFocusedFrame, history])

  const ctx = React.useMemo(
    (): GameContextValue => ({
      focusedFrame,
      goToScene(sceneId) {
        if (sceneId !== focusedFrame.sceneId) {
          history.push({sceneId, frameIndex: 0})
        }
      },
      goToFrame(sceneId, frameIndex) {
        if (
          sceneId !== focusedFrame.sceneId ||
          frameIndex !== focusedFrame.frameIndex
        ) {
          history.push({sceneId, frameIndex})
        }
      },
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
})

export function useFocusedFrame(defaultFrame: Frame) {
  const [focusedFrameId, setFocusedFrameId] = useSearchParam<string>(
    'f',
    makeFrameId(defaultFrame),
  )
  const focusedFrame = parseFrameId(focusedFrameId) ?? defaultFrame
  const latestFocusedFrameRef = useSyncedRef(focusedFrame)
  const setFocusedFrame = React.useCallback(
    (action: React.SetStateAction<Frame>) =>
      setFocusedFrameId(
        makeFrameId(
          typeof action === 'function'
            ? action(latestFocusedFrameRef.current)
            : action,
        ),
      ),
    [latestFocusedFrameRef, setFocusedFrameId],
  )
  return [focusedFrame, setFocusedFrame] as const
}
