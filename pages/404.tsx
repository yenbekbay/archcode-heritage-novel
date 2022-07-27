import {bgArchcodeOfficeJpg} from 'assets/game'
import {RoughCard, HeroBackground, Layout} from 'components'

export default function Custom404() {
  return (
    <Layout>
      <main>
        <HeroBackground src={bgArchcodeOfficeJpg} className="bg-cover" />

        <section className="flex flex-col py-28">
          <RoughCard className="self-center">
            <h1>404 Not Found</h1>

            <p>
              Ой! Кажется, вы пытаетесь открыть страницу, которая не существует.
            </p>
          </RoughCard>
        </section>
      </main>
    </Layout>
  )
}
