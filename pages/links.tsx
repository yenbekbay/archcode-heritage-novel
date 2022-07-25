import Link from 'next/link'
import {bgArchcodeOfficeJpg} from '~/assets/game'
import {Hero, HeroBackground, Layout, LinkCard} from '~/components'
import {useSavedLinks} from '~/game/LinkPrompt'

export default function Links() {
  const savedLinks = useSavedLinks()
  return (
    <Layout>
      <main>
        <HeroBackground src={bgArchcodeOfficeJpg} className="bg-cover" />

        <Hero title="Ссылки">
          {savedLinks.length > 0 ? (
            <p>Ссылки, сохранённые во время игры.</p>
          ) : (
            <>
              <p>У вас ещё нет сохранённых ссылок.</p>

              <p>
                <Link href="/play">
                  <a className="btn-invert btn btn-outline">Играть</a>
                </Link>
              </p>
            </>
          )}
        </Hero>

        {savedLinks.length > 0 && (
          <section className="container mx-auto">
            <div className="mx-auto flex max-w-full flex-col space-y-4 py-8 md:w-[640px] md:px-8 lg:mx-0">
              {savedLinks.map((l) => (
                <LinkCard className="w-full" key={l.href} url={l.href} />
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}
