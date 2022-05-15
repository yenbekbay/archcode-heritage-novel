import type {Statement} from './statement-id'

export interface GameHistory {
  peek: () => Statement
  push: (statement: Statement) => void
  reset: (statement?: Statement) => void
  goBack: () => boolean
  canGoBack: () => boolean
}

export function makeGameHistory({
  initialStatement,
  onChange,
}: {
  initialStatement: Statement
  onChange?: (newStatements: Statement[]) => void
}): GameHistory {
  let items = [initialStatement]
  return {
    peek: () => items[items.length - 1],
    push: (statement) => {
      items = [...items, statement]
      onChange?.(items)
    },
    reset: (statement) => {
      items = [statement ?? initialStatement]
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
