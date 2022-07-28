import Link from 'next/link'
import {twMerge} from 'tailwind-merge'
import {bgArchcodeOfficeJpg} from 'assets/game'
import type {RoughCardProps} from 'components'
import {Hero, HeroBackground, Layout, RoughCard} from 'components'
import {useSavedLinks} from 'game/LinkPrompt'
import type {LinkCardProps} from 'lib/components'
import {LinkCard} from 'lib/components'

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
                <RoughLinkCard className="w-full" key={l.href} url={l.href} />
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

function RoughLinkCard(props: LinkCardProps) {
  return <LinkCard CardComponent={StyledRoughCard as any} {...props} />
}

function StyledRoughCard({contentClassName, ...restProps}: RoughCardProps) {
  return (
    <RoughCard
      contentClassName={twMerge('p-[4px] max-w-none', contentClassName)}
      {...restProps}
    />
  )
}
