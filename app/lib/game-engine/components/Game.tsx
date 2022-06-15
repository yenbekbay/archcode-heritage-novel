import * as PopoverPrimitive from '@radix-ui/react-popover'
import {
  ArrowCounterClockwise as ArrowCounterClockwiseIcon,
  ArrowLeft as ArrowLeftIcon,
  CaretRight as CaretRightIcon,
  House as HouseIcon,
  Pause as PauseIcon,
  Play as PlayIcon,
  Wrench as WrenchIcon,
  X as XIcon,
} from 'phosphor-react'
import React from 'react'
import {BranchProvider, GameProvider, useGameContext} from '../contexts'
import {MobileDeviceChrome, WithAssets} from './internal'

export interface GameProps {
  assets: Record<string, string>
  branches: Record<string, React.ComponentType>
  initialBranchId: BranchId
  onClose?: () => void
}

export function Game({assets, branches, initialBranchId, onClose}: GameProps) {
  return (
    <GameProvider initialBranchId={initialBranchId}>
      <GameView
        assets={assets}
        branches={branches}
        initialBranchId={initialBranchId}
        onClose={onClose}
      />
    </GameProvider>
  )
}

// MARK: GameView

interface GameViewProps {
  assets: Record<string, string>
  branches: Record<string, React.ComponentType>
  initialBranchId: BranchId
  onClose?: () => void
}

function GameView({assets, branches, initialBranchId, onClose}: GameViewProps) {
  const {focusedLocation, paused, setPaused, goToBranch, goBack, canGoBack} =
    useGameContext()
  return (
    <div className="h-screen">
      <div className="navbar absolute z-50 p-4">
        <div className="navbar-start space-x-2">
          <button
            className="btn btn-ghost btn-circle bg-white text-xl shadow-md"
            onClick={() => goToBranch(initialBranchId)}>
            <ArrowCounterClockwiseIcon />
          </button>

          {canGoBack() && (
            <button
              className="btn btn-ghost btn-circle bg-white text-xl shadow-md"
              onClick={() => goBack()}>
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
        <div className="absolute bottom-4 right-4 z-50 space-x-2">
          <button
            className="btn btn-ghost btn-circle bg-white text-xl shadow-md"
            onClick={() => setPaused(!paused)}>
            {paused ? <PlayIcon /> : <PauseIcon />}
          </button>

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
              className="no-animation flex flex-col overflow-hidden rounded-lg bg-white p-2 shadow-md radix-side-top:animate-slide-up"
              style={{
                width: 'min(calc(100vw - 2rem), 30rem)',
                maxHeight: 'calc(100vh - calc(4rem + 8px))',
              }}>
              <div className="navbar">
                <div className="navbar-start"></div>
                <div className="navbar-end">
                  <PopoverPrimitive.Close className="btn btn-ghost btn-circle btn-sm">
                    <XIcon />
                  </PopoverPrimitive.Close>
                </div>
              </div>

              <div className="space-y-4 overflow-y-auto">
                <div>
                  <div className="prose p-2">
                    <span className="text-lg font-semibold">Go to branch</span>
                  </div>

                  {Object.keys(branches).map((branchId) => (
                    <button
                      key={branchId}
                      className="btn btn-ghost btn-sm btn-block justify-between normal-case"
                      onClick={() => goToBranch(branchId as BranchId)}>
                      <span className="flex w-full flex-row items-center justify-between space-x-1">
                        <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left">
                          {branchId}
                        </span>

                        <CaretRightIcon />
                      </span>
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
                  <BranchProvider key={branchId} branchId={branchId}>
                    <BranchComp />
                  </BranchProvider>
                ),
            )}
          </div>
        </WithAssets>
      </MobileDeviceChrome>
    </div>
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
        exportName.replace(BRANCH_PREFIX_RE, ''),
        exportVal,
      ]),
  ) as {
    [K in keyof typeof _branches as K extends `Branch${infer TId}`
      ? TId
      : never]: typeof _branches[K]
  }
  return branches
}

const BRANCH_PREFIX_RE = /^Branch/
