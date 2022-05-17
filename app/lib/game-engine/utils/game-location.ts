export interface GameLocation {
  sceneId: SceneId
  statementIndex: number
}

export function makeGameLocationId(location: GameLocation) {
  return `${location.sceneId}-${location.statementIndex}`
}

export function parseGameLocation(locationId: string): GameLocation | null {
  const [_sceneId, __statementIndex] = locationId.split('-')
  const sceneId = _sceneId as SceneId
  const _statementIndex = Number(__statementIndex)
  const statementIndex = Number.isNaN(_statementIndex) ? 0 : _statementIndex
  return {sceneId, statementIndex}
}
