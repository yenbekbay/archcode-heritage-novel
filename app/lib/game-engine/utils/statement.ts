export interface Statement {
  sceneId: SceneId
  statementIndex: number
}

export function makeStatementId(statement: Statement) {
  return `${statement.sceneId}_${statement.statementIndex}`
}

export function parseStatementId(statementId: string): Statement | null {
  if (typeof statementId === 'string' && statementId.includes('_')) {
    const sceneId = statementId.split('_').slice(0, -1).join('_') as SceneId
    const _statementIndex = Number(statementId.split('_').slice(-1)[0]!)
    const statementIndex = Number.isNaN(_statementIndex) ? 0 : _statementIndex
    return {sceneId, statementIndex}
  }
  return null
}
