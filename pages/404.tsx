import {bgArchcodeOfficeJpg} from '~/assets/game'
import {Card, HeroBackground, Layout} from '~/components'

export default function Custom404() {
  return (
    <Layout>
      <main>
        <HeroBackground src={bgArchcodeOfficeJpg} className="bg-cover" />

        <section className="flex flex-col py-28">
          <Card className="self-center">
            <h1>404 Not Found</h1>

            <p>
              Ой! Кажется, вы пытаетесь открыть страницу, которая не существует.
            </p>
          </Card>
        </section>
      </main>
    </Layout>
  )
}
