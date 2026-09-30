import { bgArchcodeOfficeJpg } from "#assets/game/index.ts";
import { FeedbackDiscussion } from "#components/FeedbackDiscussion.tsx";
import { Hero, HeroBackground, RoughCard } from "#components/index.ts";
import { buildPageMetadata } from "#lib/metadata.ts";

export const metadata = buildPageMetadata({
  pathname: "/feedback",
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

      <section className="container mx-auto">
        <div className="mx-auto flex max-w-full flex-col py-8 md:w-[640px] md:px-8 lg:mx-0">
          <RoughCard contentClassName="max-w-none">
            <FeedbackDiscussion />
          </RoughCard>
        </div>
      </section>
    </main>
  );
}
