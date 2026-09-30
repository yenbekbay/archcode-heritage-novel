import { bgArchcodeOfficeJpg } from "#assets/game/index.ts";
import { FeedbackDiscussion } from "#components/FeedbackDiscussion.tsx";
import { Hero, HeroBackground, RoughCard } from "#components/index.ts";
import { buildPageMetadata } from "#lib/metadata.ts";
import { buildFeedbackHref } from "#lib/routes.ts";

export const metadata = buildPageMetadata({
  pathname: buildFeedbackHref(),
  title: "Отзывы",
  description:
    "Отзывы, пожелания и предложения об игре «Снести нельзя оставить».",
});

export default function Feedback() {
  return (
    <main>
      <HeroBackground src={bgArchcodeOfficeJpg} className="bg-cover" />

      <Hero title="Отзывы">
        <p>Здесь вы можете оставить отзыв, пожелание или предложение.</p>
      </Hero>

      <section className="container flex flex-col items-center lg:items-start">
        <div className="flex w-full max-w-full flex-col py-8 md:w-[640px] md:px-8">
          <RoughCard contentClassName="max-w-none">
            <FeedbackDiscussion />
          </RoughCard>
        </div>
      </section>
    </main>
  );
}
