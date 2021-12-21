import {
  Container,
  DesignSystemProvider,
  getCssText,
  Section,
} from '@modulz/design-system'
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
} from 'remix'
import {Footer} from '~/components/Footer'
import {InteractivePage} from '~/components/InteractivePage'
import tailwindStylesUrl from '~/tailwind.css'

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: tailwindStylesUrl,
    },
  ]
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({error}: {error: Error}) {
  console.error(error)
  return (
    <Document title="Ошибка!">
      <Layout>
        <Section size={{'@initial': '2', '@bp1': '3'}}>
          <Container size="3">
            <h1>Что-то пошло не так!</h1>
            <p>{error.message}</p>
            <hr />
            <p>
              Мы уже в курсе этой ошибки, и постараемся её исправить как можно
              скорее.
            </p>
          </Container>
        </Section>
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Ой! Кажется, вы пытаетесь открыть страницу, к которой у вас нет
          доступа.
        </p>
      )
      break
    case 404:
      message = (
        <p>
          Ой! Кажется, вы пытаетесь открыть страницу, которая не существует.
        </p>
      )
      break
    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  )
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}} />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>

      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({children}: {children: React.ReactNode}) {
  let location = useLocation()
  const isInteractive = location.pathname.includes('/interactive')
  return (
    <DesignSystemProvider>
      {isInteractive ? <InteractivePage>{children}</InteractivePage> : children}
      {!isInteractive && <Footer />}
    </DesignSystemProvider>
  )
}
