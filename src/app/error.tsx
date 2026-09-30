"use client";

import { bgArchcodeOfficeJpg } from "#assets/game/index.ts";
import { HeroBackground } from "#components/HeroBackground.tsx";
import { Layout } from "#components/Layout.tsx";
import { RoughCard } from "#components/RoughCard.tsx";
import { WebsiteProviders } from "#components/WebsiteProviders.tsx";
import { useEffect } from "react";

export default function ErrorPage(props: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error("Route rendering failed", { digest: props.error.digest });
  }, [props.error.digest]);

  return (
    <WebsiteProviders>
      <Layout>
        <main>
          <HeroBackground src={bgArchcodeOfficeJpg} className="bg-cover" />

          <section className="flex flex-col py-28">
            <RoughCard className="self-center">
              <h1>Что-то пошло не так!</h1>
              <p>Не удалось открыть страницу. Попробуйте еще раз.</p>

              <button type="button" className="btn" onClick={props.retry}>
                Попробовать снова
              </button>
            </RoughCard>
          </section>
        </main>
      </Layout>
    </WebsiteProviders>
  );
}
