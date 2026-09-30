import { bgArchcodeOfficeJpg } from "#assets/game/index.ts";
import { HeroBackground, Layout, RoughCard } from "#components/index.ts";
import { WebsiteProviders } from "#components/WebsiteProviders.tsx";

export const metadata = { robots: { index: false, follow: false } };

export default function NotFoundPage() {
  return (
    <WebsiteProviders>
      <Layout>
        <main>
          <HeroBackground src={bgArchcodeOfficeJpg} className="bg-cover" />

          <section className="flex flex-col py-28">
            <RoughCard className="self-center">
              <h1>404 Not Found</h1>

              <p>
                Ой! Кажется, вы пытаетесь открыть страницу, которая не
                существует.
              </p>
            </RoughCard>
          </section>
        </main>
      </Layout>
    </WebsiteProviders>
  );
}
