import * as PopoverPrimitive from '@radix-ui/react-popover'
import {useRect} from '@radix-ui/react-use-rect'
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
  onGoHome?: () => void
  onLinkClick?: (href: string, name: string, event: React.MouseEvent) => void
}

export function Game({
  assets,
  branches,
  initialBranchId,
  onGoHome,
  onLinkClick,
}: GameProps) {
  return (
    <GameProvider
      initialBranchId={initialBranchId}
      onGoHome={onGoHome}
      onLinkClick={onLinkClick}>
      <GameView
        assets={assets}
        branches={branches}
        initialBranchId={initialBranchId}
      />
    </GameProvider>
  )
}

// MARK: GameView

interface GameViewProps {
  assets: Record<string, string>
  branches: Record<string, React.ComponentType>
  initialBranchId: BranchId
}

function GameView({assets, branches, initialBranchId}: GameViewProps) {
  const {
    options,
    focusedLocation,
    paused,
    setPaused,
    goToLocation,
    goBack,
    canGoBack,
  } = useGameContext()
  const [loaded, setLoaded] = React.useState(false)
  return (
    <MobileDeviceChrome>
      <div className="navbar absolute z-[120] p-4">
        <div className="navbar-start space-x-2">
          {loaded && canGoBack() && (
            <button
              className="btn btn-ghost btn-circle bg-base-100 text-xl shadow-md hover:bg-base-200"
              onClick={() => goBack()}>
              <ArrowLeftIcon />
            </button>
          )}
        </div>

        <div className="navbar-end space-x-2">
          {loaded && (
            <button
              className="btn btn-ghost btn-circle bg-base-100 text-xl shadow-md hover:bg-base-200"
              onClick={() => goToLocation(initialBranchId, 0)}>
              <ArrowCounterClockwiseIcon />
            </button>
          )}

          {options.onGoHome && (
            <button
              className="btn btn-ghost btn-circle bg-base-100 text-xl shadow-md hover:bg-base-200"
              onClick={options.onGoHome}>
              <HouseIcon />
            </button>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-[120] space-x-2">
        {loaded && (
          <button
            className="btn btn-ghost btn-circle bg-base-100 text-xl shadow-md hover:bg-base-200"
            onClick={() => setPaused(!paused)}>
            {paused ? <PlayIcon /> : <PauseIcon />}
          </button>
        )}

        {process.env.NODE_ENV === 'development' && (
          <DebugPopover branches={branches} />
        )}
      </div>

      <WithAssets assets={assets} onLoaded={() => setLoaded(true)}>
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
  )
}

// MARK: DebugPopover

interface DebugPopoverProps {
  branches: Record<string, React.ComponentType>
}

function DebugPopover({branches}: DebugPopoverProps) {
  const {goToLocation} = useGameContext()
  const [button, setButton] = React.useState<HTMLButtonElement | null>(null)
  const buttonRect = useRect(button)
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>
        <button
          ref={setButton}
          className="btn btn-ghost btn-circle bg-base-100 text-xl shadow-md hover:bg-base-200">
          <WrenchIcon />
        </button>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Content
        align="center"
        side="top"
        sideOffset={4}
        className="no-animation flex flex-col overflow-hidden rounded-lg bg-base-100 p-2 shadow-md radix-side-top:animate-slide-up"
        style={{
          width: 'min(calc(100vw - 2rem), 30rem)',
          ...(buttonRect && {
            maxHeight: buttonRect.top - 4,
          }),
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
                onClick={() => goToLocation(branchId as BranchId, 0)}>
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
