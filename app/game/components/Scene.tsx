import React from 'react'

export const SceneIdContext = React.createContext<string | null>(null)

export interface SceneProps {
  id: string
  children?: React.ReactNode
}

export function Scene({id, children}: SceneProps) {
  return (
    <SceneIdContext.Provider value={id}>{children}</SceneIdContext.Provider>
  )
}

export function useSceneId() {
  const ctx = React.useContext(SceneIdContext)
  if (!ctx) {
    throw new Error('`useSceneId` can only be used inside a Scene component')
  }
  return ctx
}
