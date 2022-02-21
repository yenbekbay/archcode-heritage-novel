import React from 'react'
import {CommandContext, CommandContextValue} from './CommandContext'
import {useSceneContext} from './SceneContext'

export interface CommandProps {
  frame: number
  children: React.ReactNode
}

export function Command({frame, children}: CommandProps) {
  const sceneCtx = useSceneContext()
  const command = sceneCtx.getCommand(frame)
  const commandCtx = React.useMemo(
    (): CommandContextValue => ({
      frame,
      active: sceneCtx.activeFrame === frame,
      visible:
        sceneCtx.activeFrame >= frame &&
        sceneCtx.activeFrame <= frame + (command?.retainedFor ?? 0),
    }),
    [command?.retainedFor, frame, sceneCtx.activeFrame],
  )
  return (
    <CommandContext.Provider value={commandCtx}>
      {children}
    </CommandContext.Provider>
  )
}
