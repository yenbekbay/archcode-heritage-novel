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

  const loadAsset: {
    (item: AssetItem): Promise<unknown>
    all(items: AssetItem[], progress?: ProgressCallback): Promise<unknown[]>
    any(items: AssetItem[], progress?: ProgressCallback): Promise<unknown[]>
  }

  export default loadAsset
}
