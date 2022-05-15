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
import type {Statement, GameHistory} from '../utils'
import {makeStatementId, makeGameHistory, parseStatementId} from '../utils'
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
  const initialStatement: Statement = {
    sceneId: initialSceneId,
    statementIndex: 0,
  }
  const [storedFocusedStatementId, setStoredFocusedStatementId] =
    useSearchParam<string>('f', makeStatementId(initialStatement))
  const [focusedStatement, setFocusedStatement] = React.useState(
    () => parseStatementId(storedFocusedStatementId) ?? initialStatement,
  )
  const [paused, setPaused] = useSearchParam<boolean>('paused', false)
  const [history] = React.useState<GameHistory>(() =>
    makeGameHistory({
      initialStatement: focusedStatement,
      onChange: (newStatements) =>
        setFocusedStatement(newStatements[newStatements.length - 1]),
    }),
  )

  useUpdateEffect(() => {
    setStoredFocusedStatementId(makeStatementId(focusedStatement))
  }, [focusedStatement])

  useUpdateEffect(() => {
    const storedFocusedStatement = parseStatementId(storedFocusedStatementId)
    if (
      storedFocusedStatement &&
      (storedFocusedStatement.sceneId !== focusedStatement.sceneId ||
        storedFocusedStatement.statementIndex !==
          focusedStatement.statementIndex)
    ) {
      history.reset(storedFocusedStatement)
    }
  }, [storedFocusedStatementId])

  const ctx = React.useMemo(
    (): GameContextValue => ({
      focusedStatement,
      paused,
      goToScene: (sceneId) => {
        if (sceneId !== focusedStatement.sceneId) {
          history.push({sceneId, statementIndex: 0})
        }
      },
      goToStatement: (sceneId, statementIndex) => {
        if (
          sceneId !== focusedStatement.sceneId ||
          statementIndex !== focusedStatement.statementIndex
        ) {
          history.push({sceneId, statementIndex})
        }
      },
      goBack: history.goBack,
      canGoBack: history.canGoBack,
    }),
    [focusedStatement, history, paused],
  )

  return (
    <GameContext.Provider value={ctx}>
      <div className="h-screen">
        <div className="navbar absolute z-10 p-4">
          <div className="navbar-start space-x-2">
            <button
              className="btn btn-ghost btn-circle bg-white text-xl shadow-md"
              onClick={() => history.push(initialStatement)}>
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
                  sceneId === focusedStatement.sceneId && (
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
