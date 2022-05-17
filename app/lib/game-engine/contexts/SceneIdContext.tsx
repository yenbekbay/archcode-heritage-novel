import React from 'react'

export const SceneIdContext = React.createContext<SceneId | null>(null)

export interface SceneIdProviderProps {
  id: SceneId
  children?: React.ReactNode
}

export function SceneIdProvider({id, children}: SceneIdProviderProps) {
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
