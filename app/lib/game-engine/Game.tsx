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
import {GameContext, BranchIdProvider} from './contexts'
import type {GameHistory, GameLocation} from './utils'
import {makeGameHistory, makeGameLocationId, parseGameLocation} from './utils'

export interface GameProps {
  assets: Record<string, string>
  branches: Record<string, React.ComponentType>
  initialBranchId: BranchId
  onClose?: () => void
}

export function Game({assets, branches, initialBranchId, onClose}: GameProps) {
  const initialLocation: GameLocation = {
    branchId: initialBranchId,
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
      (storedFocusedLocation.branchId !== focusedLocation.branchId ||
        storedFocusedLocation.statementIndex !== focusedLocation.statementIndex)
    ) {
      history.reset(storedFocusedLocation)
    }
  }, [storedFocusedLocationId])

  const ctx = React.useMemo(
    (): GameContextValue => ({
      focusedLocation,
      paused,
      goToBranch: (branchId) => {
        if (branchId !== focusedLocation.branchId) {
          history.push({branchId, statementIndex: 0})
          setPaused(false)
        }
      },
      goToLocation: (branchId, statementIndex) => {
        if (
          branchId !== focusedLocation.branchId ||
          statementIndex !== focusedLocation.statementIndex
        ) {
          history.push({branchId, statementIndex})
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
                      <h4>Go to branch</h4>
                    </div>

                    {Object.keys(branches).map((branchId) => (
                      <button
                        key={branchId}
                        className="btn btn-ghost btn-sm btn-block justify-between normal-case"
                        onClick={() => ctx.goToBranch(branchId as BranchId)}>
                        {branchId}
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
              {Object.entries(branches).map(
                ([branchId, BranchComp]) =>
                  branchId === focusedLocation.branchId && (
                    <BranchIdProvider key={branchId} id={branchId}>
                      <BranchComp />
                    </BranchIdProvider>
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

export function prepareBranches<
  TRawBranches extends Record<string, React.ComponentType>,
>(_branches: TRawBranches) {
  const branches = Object.fromEntries(
    Object.entries(_branches)
      .filter(([exportName]) => exportName.startsWith('Branch'))
      .map(([exportName, exportVal]) => [
        exportName.replace(SCENE_PREFIX_RE, ''),
        exportVal,
      ]),
  ) as {
    [K in keyof typeof _branches as K extends `Branch${infer TId}`
      ? TId
      : never]: typeof _branches[K]
  }
  return branches
}

const SCENE_PREFIX_RE = /^Branch/
