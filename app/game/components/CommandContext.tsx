import React from 'react'
import {CommandT} from './SceneContext'

export interface CommandContextValue {
  frame: number
  active: boolean
  visible: boolean
  registerCommand: (command: CommandT) => () => void
  goToNextFrame: () => void
}

export const CommandContext = React.createContext<CommandContextValue | null>(
  null,
)

export function useCommandContext() {
  const ctx = React.useContext(CommandContext)
  if (!ctx) {
    throw new Error(
      '`useCommandContext` can only be used inside a Command component',
    )
  }
  return ctx
}

export function useRegisterCommand(command: CommandT) {
  const ctx = useCommandContext()
  React.useEffect(() => {
    return ctx.registerCommand(command)
  }, [command, ctx])
}
