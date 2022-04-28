import React from 'react'
import type {CommandContextValue} from './CommandContext'
import {CommandContext} from './CommandContext'
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
      focused: sceneCtx.focusedFrame === frame,
      visible:
        sceneCtx.focusedFrame >= frame &&
        sceneCtx.focusedFrame <= frame + (command?.visibleExtra ?? 0),
    }),
    [command?.visibleExtra, frame, sceneCtx.focusedFrame],
  )
  return (
    <CommandContext.Provider value={commandCtx}>
      {children}
    </CommandContext.Provider>
  )
}
