import type {LinksFunction, MetaFunction} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
} from '@remix-run/react'
import React from 'react'
import {Footer, Header} from '~/components'
import {MediaContextProvider, mediaStyle} from '~/lib'
import tailwindStylesUrl from '~/tailwind.css'

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
        <style id="fresnel" dangerouslySetInnerHTML={{__html: mediaStyle}} />
      </head>

      <body>
        <MediaContextProvider>{children}</MediaContextProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
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
