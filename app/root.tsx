import type {LinksFunction, MetaFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
} from '@remix-run/react'
import {Toaster} from 'react-hot-toast'
import {Footer, Header} from '~/components'
import tailwindStylesUrl from '~/__generated__/tailwind.css'

export async function loader() {
  return json({
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
      IMGFLIP_USERNAME: process.env.IMGFLIP_USERNAME,
      IMGFLIP_PASSWORD: process.env.IMGFLIP_PASSWORD,
    },
  })
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  description: 'Сохраняем архитектурную идентичность Алматы',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: tailwindStylesUrl,
  },
  {
    rel: 'stylesheet',
    href: 'https://rsms.me/inter/inter.css',
  },
]

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
        <section>
          <div className="container mx-auto px-4 py-16">
            <div className="prose mx-auto flex flex-col space-y-2">
              <h1>Что-то пошло не так!</h1>

              <pre className="alert alert-error whitespace-pre-line font-mono">
                {error.message}
              </pre>

              <p>
                Мы уже в курсе этой ошибки, и постараемся её исправить как можно
                скорее.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  const caught = useCatch()
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
        <section>
          <div className="container mx-auto px-4 py-16">
            <div className="prose mx-auto flex flex-col space-y-2">
              <h1>
                {caught.status}: {caught.statusText}
              </h1>

              <p>{message}</p>
            </div>
          </div>
        </section>
      </Layout>
    </Document>
  )
}

function Document({
  children,
  title = 'Снести нельзя оставить!',
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />

        <title>{title}</title>
      </head>

      <body>
        {children}
        <Toaster />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <GoatCounter />
        <Env />
      </body>
    </html>
  )
}

function Layout({children}: {children: React.ReactNode}) {
  const location = useLocation()
  const isInteractive = location.pathname.includes('/interactive')
  return (
    <div className="relative min-h-screen">
      <div className="bg-gradient absolute inset-0 -z-10" />

      {isInteractive ? (
        children
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </div>
  )
}

function GoatCounter() {
  return (
    <script
      data-goatcounter="https://archcode-heritage-novel.goatcounter.com/count"
      async
      src="//gc.zgo.at/count.js"
    />
  )
}

function Env() {
  const data = useLoaderData()
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
      }}
    />
  )
}

declare global {
  interface Window {
    ENV: {
      SUPABASE_URL: string
      SUPABASE_ANON_KEY: string
      IMGFLIP_USERNAME: string
      IMGFLIP_PASSWORD: string
    }
  }
}
