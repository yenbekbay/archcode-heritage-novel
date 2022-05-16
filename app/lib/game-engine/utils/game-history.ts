import type {GameLocation} from './game-location'

export interface GameHistory {
  peek: () => GameLocation
  push: (location: GameLocation) => void
  reset: (location?: GameLocation) => void
  goBack: () => boolean
  canGoBack: () => boolean
}

export function makeGameHistory({
  initialLocation,
  onChange,
}: {
  initialLocation: GameLocation
  onChange?: (newLocations: GameLocation[]) => void
}): GameHistory {
  let items = [initialLocation]
  return {
    peek: () => items[items.length - 1],
    push: (location) => {
      items = [...items, location]
      onChange?.(items)
    },
    reset: (location) => {
      items = [location ?? initialLocation]
      onChange?.(items)
    },
    goBack: () => {
      if (items.length > 1) {
        items = items.slice(0, -1)
        onChange?.(items)
        return true
      }
      return false
    },
    canGoBack: () => items.length > 1,
  }
}
