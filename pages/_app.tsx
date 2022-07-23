import {NextQueryParamProvider} from 'next-query-params'
import type {AppProps} from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import {ErrorBoundary, FallbackProps} from 'react-error-boundary'
import {Toaster} from 'react-hot-toast'
import {ParallaxProvider} from 'react-scroll-parallax'
import {bgArchcodeOfficeJpg} from '~/assets/game'
import {Card, HeroBackground, Layout} from '~/components'
import '../__generated__/tailwind.css'

const PreloadMyGameAssets = dynamic(
  () => import('~/game/PreloadMyGameAssets'),
  {ssr: false},
)

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Снести нельзя оставить!</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          content="Сохраняем архитектурную идентичность Алматы"
          name="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {Component.name !== 'Play' && <PreloadMyGameAssets concurrency={10} />}

      <NextQueryParamProvider>
        <ParallaxProvider>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Component {...pageProps} />
          </ErrorBoundary>
        </ParallaxProvider>
      </NextQueryParamProvider>

      <Toaster />
    </>
  )
}

function ErrorFallback({error}: FallbackProps) {
  return (
    <Layout>
      <main>
        <HeroBackground src={bgArchcodeOfficeJpg} className="bg-cover" />

        <section className="flex flex-col py-28">
          <Card className="self-center">
            <h1>Что-то пошло не так!</h1>

            <pre className="alert alert-error items-start whitespace-pre-line font-mono">
              {error.message}
            </pre>

            <p>
              Мы уже в курсе этой ошибки, и постараемся её исправить как можно
              скорее.
            </p>
          </Card>
        </section>
      </main>
    </Layout>
  )
}
