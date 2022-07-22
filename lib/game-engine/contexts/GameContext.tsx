import {useLocalStorageValue, useUpdateEffect} from '@react-hookz/web'
import {
  BooleanParam,
  StringParam,
  useQueryParam,
  withDefault,
} from 'next-query-params'
import React from 'react'
import type {GameHistory, GameLocation} from './internal'
import {
  makeGameHistory,
  makeGameLocationId,
  parseGameLocation,
} from './internal'

export type SoundName = 'click' | 'skip' | 'not_allowed'

export interface GameOptions {
  onGoHome?: () => void
  onLinkClick?: (href: string, name: string, event: React.MouseEvent) => void
  onPlaySound?: (name: SoundName) => void
}

export interface GameContextValue {
  options: GameOptions
  focusedLocation: GameLocation
  paused: boolean
  setPaused: React.Dispatch<React.SetStateAction<boolean | null | undefined>>
  goToBranch: (branchId: BranchId) => void
  goToLocation: (branchId: BranchId, statementIndex: number) => void
  goBack: () => boolean
  canGoBack: () => boolean
}

const GameContext = React.createContext<GameContextValue | null>(null)

export interface GameProviderProps {
  children: React.ReactNode
  initialBranchId: BranchId
  onGoHome?: () => void
  onLinkClick?: (href: string, name: string, event: React.MouseEvent) => void
  onPlaySound?: (name: SoundName) => void
}

export function GameProvider({
  children,
  initialBranchId,
  onGoHome,
  onLinkClick,
  onPlaySound,
}: GameProviderProps) {
  const initialLocation: GameLocation = {
    branchId: initialBranchId,
    statementIndex: 0,
  }
  const [storedFocusedLocationId, setStoredFocusedLocationId] = useQueryParam(
    'location',
    withDefault(StringParam, makeGameLocationId(initialLocation)),
  )
  const [focusedLocation, setFocusedLocation] = React.useState(
    () => parseGameLocation(storedFocusedLocationId) ?? initialLocation,
  )
  const [paused, setPaused] = useQueryParam(
    'paused',
    withDefault(BooleanParam, false),
  )
  const [locations, setLocations] = useLocalStorageValue<GameLocation[]>(
    '@GameContext/locations',
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
      options: {onGoHome, onLinkClick, onPlaySound},
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
    [
      focusedLocation,
      history,
      onGoHome,
      onLinkClick,
      onPlaySound,
      paused,
      setPaused,
    ],
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
