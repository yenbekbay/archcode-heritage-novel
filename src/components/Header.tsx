"use client";

import { logoGamePng } from "#assets/www/index.ts";
import { Image } from "#components/Image.tsx";
import { Link } from "#components/Link.tsx";
import {
  buildAboutBotHref,
  buildAboutNovelHref,
  buildAboutUsHref,
  buildHomeHref,
  buildPlayHref,
  buildSavedLinksHref,
} from "#lib/routes.ts";
import type { IconProps } from "phosphor-react";
import type { MouseEvent } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";
import { ActiveLink } from "./ActiveLink";
import {
  GameController as GameControllerIcon,
  List as ListIcon,
} from "./Icons";

type NavigationLink = {
  label: string;
  icon?: React.ComponentType<IconProps>;
} & (
  | {
      to: string;
      href?: never;
    }
  | {
      to?: never;
      href: string;
    }
);

const LINKS: NavigationLink[] = [
  {
    to: buildAboutNovelHref(),
    label: "Визуальная новелла",
  },
  {
    to: buildAboutBotHref(),
    label: "Телеграм-бот",
  },
  {
    to: buildAboutUsHref(),
    label: "О команде",
  },
  {
    to: buildSavedLinksHref(),
    label: "Ссылки",
  },
  {
    href: "https://archcode.kz/",
    label: "Архкод",
  },
  {
    to: buildPlayHref(),
    label: "Играть",
    icon: GameControllerIcon,
  },
];

export function Header() {
  return (
    <header className="container self-center text-content-invert">
      <div className="flex min-h-16 w-full items-center p-4">
        <div className="flex-1">
          <Link href={buildHomeHref()} className="shrink-0">
            <Image
              src={logoGamePng}
              sizes={`${Math.ceil((128 * logoGamePng.width) / logoGamePng.height)}px`}
              alt="Логотип «Снести нельзя оставить»"
              eager
              className="h-32 w-auto"
            />
          </Link>
        </div>

        <div className="flex-none">
          <details className="relative lg:hidden">
            <summary
              aria-label="Открыть меню"
              className="action-button list-none text-xl action-ghost [&::-webkit-details-marker]:hidden"
            >
              <ListIcon />
            </summary>

            <ul className="absolute top-full right-0 z-10 flex w-52 translate-y-3 flex-col rounded-control bg-white p-2 text-content shadow-md">
              {LINKS.map((l) => {
                const key = l.to ?? l.href;

                return (
                  <li key={key}>
                    {l.to !== undefined ? (
                      <ActiveLink
                        href={l.to}
                        onClick={closeNavigationMenu}
                        className="flex min-h-11 items-center gap-2 rounded-control px-3 py-2 text-sm/[1.5] hover:bg-chicago-50 data-link-exact-active:bg-primary data-link-exact-active:text-white data-link-exact-active:shadow-md data-link-exact-active:hover:bg-primary"
                      >
                        {l.icon && (
                          <l.icon
                            className="size-[1.25em] shrink-0"
                            weight="fill"
                          />
                        )}

                        {l.label}
                      </ActiveLink>
                    ) : (
                      <a
                        href={l.href}
                        onClick={closeNavigationMenu}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-11 items-center gap-2 rounded-control px-3 py-2 text-sm/[1.5] hover:bg-chicago-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        {l.icon && (
                          <l.icon
                            className="size-[1.25em] shrink-0"
                            weight="fill"
                          />
                        )}

                        {l.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </details>

          <ul className="hidden items-center gap-2 lg:flex">
            {LINKS.map((l) => {
              const key = l.to ?? l.href;

              return (
                <li key={key}>
                  {l.to !== undefined ? (
                    <ActiveLink
                      href={l.to}
                      className={twMerge(
                        "flex items-center gap-2 rounded-control px-4 py-3 text-base/[1.5] hover:bg-white/10 data-link-exact-active:bg-primary data-link-exact-active:text-white data-link-exact-active:shadow-md data-link-exact-active:hover:bg-primary",
                        l.icon !== undefined &&
                          "bg-content-invert text-content shadow-md hover:bg-content-invert-focus",
                      )}
                    >
                      {l.icon && (
                        <l.icon
                          className="size-[1.25em] shrink-0"
                          weight="fill"
                        />
                      )}

                      {l.label}
                    </ActiveLink>
                  ) : (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-control px-4 py-3 text-base/[1.5] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {l.icon && (
                        <l.icon
                          className="size-[1.25em] shrink-0"
                          weight="fill"
                        />
                      )}

                      {l.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

function closeNavigationMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}
