import React from 'react'
import {CommandContext, CommandContextValue} from './CommandContext'
import {useSceneContext} from './SceneContext'

export interface CommandProps {
  frame: number
  children: React.ReactNode
}

export function Command({frame, children}: CommandProps) {
  const sceneCtx = useSceneContext()
  const commandCtx = React.useMemo(
    (): CommandContextValue => ({
      frame,
      active: sceneCtx.activeFrame === frame,
      visible:
        sceneCtx.activeFrame >= frame &&
        sceneCtx.activeFrame <=
          frame + (sceneCtx.getCommand(frame)?.retainedFor ?? 0),
    }),
    [frame, sceneCtx],
  )
  return (
    <CommandContext.Provider value={commandCtx}>
      {children}
    </CommandContext.Provider>
  )
}
