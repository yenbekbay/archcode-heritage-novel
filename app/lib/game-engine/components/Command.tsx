import React from 'react'
import type {CommandContextValue} from './CommandContext'
import {CommandContext} from './CommandContext'
import {useSceneContext} from './SceneContext'

export interface CommandProps {
  frameIndex: number
  children: React.ReactNode
}

export function Command({frameIndex, children}: CommandProps) {
  const sceneCtx = useSceneContext()
  const command = sceneCtx.getCommand(frameIndex)
  const commandCtx = React.useMemo(
    (): CommandContextValue => ({
      frameIndex,
      focused: sceneCtx.focusedFrameIndex === frameIndex,
      visible:
        sceneCtx.focusedFrameIndex >= frameIndex &&
        sceneCtx.focusedFrameIndex <= frameIndex + (command?.visibleExtra ?? 0),
    }),
    [command?.visibleExtra, frameIndex, sceneCtx.focusedFrameIndex],
  )
  return (
    <CommandContext.Provider value={commandCtx}>
      {children}
    </CommandContext.Provider>
  )
}
