import '__generated__/main.css'
import {bgArchcodeOfficeJpg} from 'assets/game'
import {openGraphJpg} from 'assets/www'
import {HeroBackground, Layout, RoughCard} from 'components'
import {NextAdapter} from 'next-query-params'
import {DefaultSeo} from 'next-seo'
import type {AppProps} from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import type {FallbackProps} from 'react-error-boundary'
import {ErrorBoundary} from 'react-error-boundary'
import {Toaster} from 'react-hot-toast'
import {ParallaxProvider} from 'react-scroll-parallax'
import {QueryParamProvider} from 'use-query-params'

const PreloadMyGameAssets = dynamic(() => import('game/PreloadMyGameAssets'), {
  ssr: false,
})

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <DefaultSeo
        title="Снести нельзя оставить!"
        description="Сохраняем архитектурную идентичность Алматы"
        openGraph={{
          images: [
            {
              url: openGraphJpg.src,
              width: openGraphJpg.width,
              height: openGraphJpg.height,
            },
          ],
        }}
      />

      {Component.name !== 'Play' && <PreloadMyGameAssets concurrency={10} />}

      <QueryParamProvider adapter={NextAdapter}>
        <ParallaxProvider>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Component {...pageProps} />
          </ErrorBoundary>
        </ParallaxProvider>
      </QueryParamProvider>

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
          <RoughCard className="self-center">
            <h1>Что-то пошло не так!</h1>

            <pre className="alert alert-error items-start whitespace-pre-line">
              {error.message}
            </pre>

            <p>
              Мы уже в курсе этой ошибки, и постараемся её исправить как можно
              скорее.
            </p>
          </RoughCard>
        </section>
      </main>
    </Layout>
  )
}
