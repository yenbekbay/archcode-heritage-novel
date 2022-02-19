import React from 'react'
import {CommandContext, CommandContextValue} from './CommandContext'
import {SceneContext} from './SceneContext'

export interface CommandProps {
  index: number
  visible: boolean
  goToNextFrame: () => void
  children: React.ReactNode
}

export function Command({
  index,
  visible,
  goToNextFrame,
  children,
}: CommandProps) {
  const sceneCtx = React.useContext(SceneContext)
  const commandCtx = React.useMemo(
    (): CommandContextValue => ({
      index,
      visible,
      registerCommand: (command) =>
        sceneCtx?.registerCommand(index, command) ?? (() => {}),
      goToNextFrame,
    }),
    [index, sceneCtx, goToNextFrame, visible],
  )
  return (
    <CommandContext.Provider value={commandCtx}>
      {children}
    </CommandContext.Provider>
  )
}
