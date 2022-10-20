import useFontFaceObserver from 'use-font-face-observer'
import {Footer} from './Footer'
import {Header} from './Header'

export interface LayoutProps {
  children: React.ReactNode
}

export function Layout({children}: LayoutProps) {
  const fontsLoaded = useFontFaceObserver([{family: 'Moniqa'}])
  if (!fontsLoaded) {
    return null
  }
  return (
    <div className="min-h-screen-safe relative flex flex-col overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
