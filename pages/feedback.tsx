import {bgArchcodeOfficeJpg} from 'assets/game'
import {Hero, HeroBackground, Layout, RoughCard} from 'components'
import {DiscussionEmbed} from 'disqus-react'

export default function Feedback() {
  return (
    <Layout>
      <main>
        <HeroBackground src={bgArchcodeOfficeJpg} className="bg-cover" />

        <Hero title="Отзывы">
          <p>Здесь вы можете оставить отзыв, пожелание или предложение.</p>
        </Hero>

        <section className="container mx-auto">
          <div className="mx-auto flex max-w-full flex-col py-8 md:w-[640px] md:px-8 lg:mx-0">
            <RoughCard contentClassName="max-w-none">
              <DiscussionEmbed
                shortname="archcode-heritage-novel"
                config={{
                  url: 'https://heritage-novel.com',
                  identifier: 'default',
                  title: 'Визуальная новелла «Снести нельзя оставить»',
                  language: 'ru',
                }}
              />
            </RoughCard>
          </div>
        </section>
      </main>
    </Layout>
  )
}
