import React from 'react'
import type {CommandT} from './SceneContext'
import {useSceneContext} from './SceneContext'

export interface CommandContextValue {
  frame: number
  /** Is this the current frame? */
  active: boolean
  /** Is this frame still shown but not necessarily active? */
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
  const {frame} = useCommandContext()
  React.useEffect(() => {
    return sceneCtx.registerCommand(frame, command)
  }, [command, frame, sceneCtx])
}
