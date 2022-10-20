import * as assets from 'assets/game'
import {usePreloadAssets} from 'react-visual-novel'

export interface PreloadMyGameAssetsProps {
  concurrency?: number
  onLoaded?: () => void
}

export default function PreloadMyGameAssets({
  concurrency,
  onLoaded,
}: PreloadMyGameAssetsProps) {
  usePreloadAssets(assets, {concurrency, onLoaded})
  return null
}
