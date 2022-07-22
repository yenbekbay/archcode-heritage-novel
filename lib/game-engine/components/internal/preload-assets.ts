import AsyncPreloader from 'async-preloader'

export async function preloadAssets(
  srcs: string[],
  onProgress?: (progress: number) => void,
) {
  let loadedCount = 0
  await Promise.all(
    srcs.map(async (src) => {
      await AsyncPreloader.loadItem({src})
      loadedCount += 1
      onProgress?.(loadedCount / srcs.length)
    }),
  )
}
