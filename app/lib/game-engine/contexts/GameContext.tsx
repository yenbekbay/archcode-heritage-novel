import {useLocalStorageValue, useUpdateEffect} from '@react-hookz/web'
import React from 'react'
import {useSearchParam} from '~/lib/hooks'
import type {GameHistory, GameLocation} from './internal'
import {
  makeGameHistory,
  makeGameLocationId,
  parseGameLocation,
} from './internal'

export interface GameContextValue {
  focusedLocation: GameLocation
  paused: boolean
  setPaused: React.Dispatch<React.SetStateAction<boolean>>
  goToBranch: (branchId: BranchId) => void
  goToLocation: (branchId: BranchId, statementIndex: number) => void
  goBack: () => boolean
  canGoBack: () => boolean
}

const GameContext = React.createContext<GameContextValue | null>(null)

export interface GameProviderProps {
  children: React.ReactNode
  initialBranchId: BranchId
}

export function GameProvider({children, initialBranchId}: GameProviderProps) {
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
  const [locations, setLocations] = useLocalStorageValue<GameLocation[]>(
    'gameHistory',
    [focusedLocation],
  )
  const [history] = React.useState<GameHistory>(() =>
    makeGameHistory({
      locations,
      onChange: (newLocations) => {
        setLocations(newLocations)
        setFocusedLocation(newLocations[newLocations.length - 1])
      },
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
      setPaused,
      goToBranch: (branchId) => {
        if (branchId !== focusedLocation.branchId) {
          history.push({branchId, statementIndex: 0})
        }
      },
      goToLocation: (branchId, statementIndex) => {
        if (
          branchId !== focusedLocation.branchId ||
          statementIndex !== focusedLocation.statementIndex
        ) {
          history.push({branchId, statementIndex})
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

  return <GameContext.Provider value={ctx}>{children}</GameContext.Provider>
}

export function useGameContext() {
  const ctx = React.useContext(GameContext)
  if (!ctx) {
    throw new Error('`useGameContext` can only be used inside a Game component')
  }
  return ctx
}
