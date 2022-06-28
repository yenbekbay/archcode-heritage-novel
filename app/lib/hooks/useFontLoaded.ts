import FontFaceObserver from 'fontfaceobserver'
import React from 'react'

export function useFontLoaded(fontFamilyName: string) {
  const [loaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const font = new FontFaceObserver(fontFamilyName)
      setLoaded(false)
      font.load().finally(() => setLoaded(true))
    }
  }, [fontFamilyName])
  return loaded
}
