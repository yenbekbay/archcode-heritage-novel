import {logoGamePng} from 'assets/www'
import Image from 'next/future/image'
import Link from 'next/link'
import type {IconProps} from 'phosphor-react'
import {
  GameController as GameControllerIcon,
  List as ListIcon,
} from 'phosphor-react'
import React from 'react'
import {twMerge} from 'tailwind-merge'
import {ActiveLink} from './ActiveLink'

type Link = {label: string; icon?: React.ComponentType<IconProps>} & (
  | {
      to: string
      href?: never
    }
  | {
      to?: never
      href: string
    }
)

const LINKS: Link[] = [
  {
    to: '/about-novel',
    label: 'Визуальная новелла',
  },
  {
    to: '/about-bot',
    label: 'Телеграм-бот',
  },
  {
    to: '/about-us',
    label: 'О команде',
  },
  {
    to: '/links',
    label: 'Ссылки',
  },
  {
    href: 'https://archcode.kz/',
    label: 'Архкод',
  },
  {
    to: '/play',
    label: 'Играть',
    icon: GameControllerIcon,
  },
]

export function Header() {
  return (
    <header className="container mx-auto text-content-invert">
      <div className="navbar p-4">
        <div className="flex-1">
          <Link href="/" className="shrink-0">
            <Image
              src={logoGamePng}
              alt="Логотип «Снести нельзя оставить»"
              priority
              className="h-32 w-auto"
            />
          </Link>
        </div>

        <div className="flex-none">
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn text-xl lg:hidden">
              <ListIcon />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-content shadow-md"
            >
              {LINKS.map((l) => {
                const key = l.to ? l.to : l.href
                return (
                  <li key={key}>
                    {l.to ? (
                      <ActiveLink
                        href={l.to}
                        className="link-exact-active:bg-primary link-exact-active:text-primary-content"
                      >
                        {l.icon && <l.icon size="1.25em" weight="fill" />}
                        {l.label}
                      </ActiveLink>
                    ) : (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.icon && <l.icon size="1.25em" weight="fill" />}
                        {l.label}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <ul className="menu menu-horizontal hidden gap-2 p-0 lg:flex">
            {LINKS.map((l) => {
              const key = l.to ? l.to : l.href
              return (
                <li key={key} className={twMerge(l.icon && 'item-invert')}>
                  {l.to ? (
                    <ActiveLink
                      href={l.to}
                      className="link-exact-active:bg-primary link-exact-active:text-primary-content"
                    >
                      {l.icon && <l.icon size="1.25em" weight="fill" />}
                      {l.label}
                    </ActiveLink>
                  ) : (
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.icon && <l.icon size="1.25em" weight="fill" />}
                      {l.label}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}
