import {Footer} from './Footer'
import {Header} from './Header'

export interface LayoutProps {
  children: React.ReactNode
}

export function Layout({children}: LayoutProps) {
  return (
    <div className="min-h-screen-safe relative flex flex-col overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
