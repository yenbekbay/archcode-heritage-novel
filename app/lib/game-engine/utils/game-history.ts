import type {Frame} from './frame-id'

export interface GameHistory {
  peek: () => Frame
  push: (frame: Frame) => void
  reset: (frame?: Frame) => void
  goBack: () => boolean
  canGoBack: () => boolean
}

export function makeGameHistory({
  initialFrame,
  onChange,
}: {
  initialFrame: Frame
  onChange?: (newFrames: Frame[]) => void
}): GameHistory {
  let items = [initialFrame]
  return {
    peek: () => items[items.length - 1],
    push: (frame) => {
      items = [...items, frame]
      onChange?.(items)
    },
    reset: (frame) => {
      items = [frame ?? initialFrame]
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
