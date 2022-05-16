export interface GameLocation {
  sceneId: SceneId
  statementIndex: number
}

export function makeGameLocationId(location: GameLocation) {
  return `${location.sceneId}_${location.statementIndex}`
}

export function parseGameLocation(locationId: string): GameLocation | null {
  if (typeof locationId === 'string' && locationId.includes('_')) {
    const sceneId = locationId.split('_').slice(0, -1).join('_') as SceneId
    const _statementIndex = Number(locationId.split('_').slice(-1)[0]!)
    const statementIndex = Number.isNaN(_statementIndex) ? 0 : _statementIndex
    return {sceneId, statementIndex}
  }
  return null
}
