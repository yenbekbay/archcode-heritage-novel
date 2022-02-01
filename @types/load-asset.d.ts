declare module 'load-asset' {
  type AssetType =
    | 'image'
    | 'json'
    | 'text'
    | 'audio'
    | 'video'
    | 'binary'
    | 'blob'

  type AssetItem = string | {url: string; type?: AssetType}
  type ProgressCallback = (event: {
    count: number
    total: number
    progress: number
    target: AssetItem
    value: unknown
  }) => void

  function loadAsset(item: AssetItem): Promise<unknown>
  function all(
    items: AssetItem[],
    progress?: ProgressCallback,
  ): Promise<unknown[]>
  function any(
    items: AssetItem[],
    progress?: ProgressCallback,
  ): Promise<unknown[]>

  exports = loadAsset
  exports.all = all
  exports.any = any
}
