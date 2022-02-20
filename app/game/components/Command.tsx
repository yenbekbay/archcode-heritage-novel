import React from 'react'
import {CommandContext, CommandContextValue} from './CommandContext'
import {SceneContext} from './SceneContext'

export interface CommandProps {
  frame: number
  visible: boolean
  goToNextFrame: () => void
  children: React.ReactNode
}

export function Command({
  frame,
  visible,
  goToNextFrame,
  children,
}: CommandProps) {
  const sceneCtx = React.useContext(SceneContext)
  const commandCtx = React.useMemo(
    (): CommandContextValue => ({
      frame,
      active: sceneCtx?.activeFrame === frame,
      visible,
      registerCommand: (command) =>
        sceneCtx?.registerCommand(frame, command) ?? (() => {}),
      goToNextFrame,
    }),
    [frame, sceneCtx, goToNextFrame, visible],
  )
  return (
    <CommandContext.Provider value={commandCtx}>
      {children}
    </CommandContext.Provider>
  )
}
