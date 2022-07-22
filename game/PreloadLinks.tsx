import * as assets from '~/assets/game'

export function PreloadLinks() {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/calligraph.otf"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {Object.values(assets)
        .map((a) => (typeof a === 'object' ? a.src : a))
        .map((src) => {
          if (
            src.endsWith('jpg') ||
            src.endsWith('jpeg') ||
            src.endsWith('png') ||
            src.endsWith('gif')
          ) {
            return <link key={src} rel="preload" href={src} as="image" />
          }
          return null
        })}
    </>
  )
}
