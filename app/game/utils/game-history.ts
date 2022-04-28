import type {Emitter} from 'mitt'
import mitt from 'mitt'
import type {Frame} from './frame-id'

export type GameHistoryEvents = {
  change: Frame[]
}

export interface GameHistory extends Emitter<GameHistoryEvents> {
  push(frame: Frame): void
  goBack(): boolean
  canGoBack: () => boolean
}

export function makeGameHistory(initialFrame: Frame): GameHistory {
  const items = [initialFrame]
  const events = mitt<GameHistoryEvents>()
  return {
    ...events,
    push: (frame) => {
      items.push(frame)
      events.emit('change', items)
    },
    goBack: () => {
      if (items.length > 1) {
        items.pop()
        events.emit('change', items)
        return true
      }
      return false
    },
    canGoBack: () => items.length > 1,
  }
}
