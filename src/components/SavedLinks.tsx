"use client";

import { bgArchcodeOfficeJpg } from "#assets/game/index.ts";
import { Link } from "#components/Link.tsx";
import { useSavedLinks } from "#game/saved-links.ts";
import { buildPlayHref } from "#lib/routes.ts";
import { Hero } from "./Hero";
import { HeroBackground } from "./HeroBackground";
import { LinkCard } from "./LinkCard";
import { RoughCard } from "./RoughCard";

export function SavedLinks() {
  const savedLinks = useSavedLinks();

  return (
    <main>
      <HeroBackground src={bgArchcodeOfficeJpg} className="bg-cover" />

      <Hero title="Ссылки">
        {savedLinks.length > 0 ? (
          <p>Ссылки, сохранённые во время игры.</p>
        ) : (
          <>
            <p>У вас ещё нет сохранённых ссылок.</p>

            <p>
              <Link
                href={buildPlayHref()}
                className="action-button action-outline action-invert"
              >
                Играть
              </Link>
            </p>
          </>
        )}
      </Hero>

      {savedLinks.length > 0 && (
        <section className="container flex flex-col items-center lg:items-start">
          <div className="flex w-full max-w-full flex-col gap-y-4 py-8 md:w-[640px] md:px-8">
            {savedLinks.map((l) => (
              <RoughCard
                className="w-full"
                key={l.href}
                contentClassName="max-w-none p-1"
              >
                <LinkCard url={l.href} />
              </RoughCard>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
