import React from 'react'
import type {CommandT} from './SceneContext'
import {useSceneContext} from './SceneContext'

export interface CommandContextValue {
  frameIndex: number
  /** Is this the current frameIndex? */
  focused: boolean
  /** Is this frameIndex still shown but not necessarily focused? */
  visible: boolean
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
  const sceneCtx = useSceneContext()
  const {frameIndex} = useCommandContext()
  React.useEffect(
    () => sceneCtx.registerCommand(frameIndex, command),
    [command, frameIndex, sceneCtx],
  )
}
