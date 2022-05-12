export interface Frame {
  sceneId: SceneId
  frameIndex: number
}

export function makeFrameId(frame: Frame) {
  return `${frame.sceneId}_${frame.frameIndex}`
}

export function parseFrameId(frameId: string): Frame | null {
  if (typeof frameId === 'string' && frameId.includes('_')) {
    const sceneId = frameId.split('_').slice(0, -1).join('_') as SceneId
    const _frameIndex = Number(frameId.split('_').slice(-1)[0]!)
    const frameIndex = Number.isNaN(_frameIndex) ? 0 : _frameIndex
    return {sceneId, frameIndex}
  }
  return null
}
