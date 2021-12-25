import {Box} from './styles/Box'
import {Flex} from './styles/Flex'
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
import {useMediaQuery} from 'usehooks-ts'
import {Footer} from '~/components/Footer'
import GradientBackground from '~/components/GradientBackground'
import {Header} from '~/components/Header'
import {getCssText} from '~/stitches.config'
import {Container} from '~/styles/Container'
import {Heading} from '~/styles/Heading'
import {Section} from '~/styles/Section'
import {Text} from '~/styles/Text'
import {globalStyles} from '~/styles/global'
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
        <Section>
          <Container>
            <Flex direction="column" gap="2">
              <Heading>Что-то пошло не так!</Heading>

              <Text
                as="pre"
                variant="red"
                css={{
                  padding: '$3',
                  backgroundColor: '$redA3',
                  fontFamily: '$mono',
                }}>
                {error.message}
              </Text>

              <Text as="p">
                Мы уже в курсе этой ошибки, и постараемся её исправить как можно
                скорее.
              </Text>
            </Flex>
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
        <Section>
          <Container>
            <Flex direction="column" gap="2">
              <Heading>
                {caught.status}: {caught.statusText}
              </Heading>

              <Text as="p">{message}</Text>
            </Flex>
          </Container>
        </Section>
      </Layout>
    </Document>
  )
}

const FONT_INTER =
  'https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap'

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  globalStyles()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={FONT_INTER} rel="preload" as="style" />
        <link href={FONT_INTER} rel="stylesheet" media="all" />
        <Links />

        <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}} />
        {title ? <title>{title}</title> : null}
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
    <Box css={{position: 'relative'}}>
      <GradientBackground />

      {isInteractive ? (
        children
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </Box>
  )
}
