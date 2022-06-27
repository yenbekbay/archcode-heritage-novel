import {NavLink} from '@remix-run/react'
import {List as ListIcon} from 'phosphor-react'
import gameLogoPng from '~/assets/game-logo.png'

type Link = {label: string} & (
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
    label: 'Telegram-Бот',
  },
  {
    to: '/about-us',
    label: 'О команде',
  },
  {
    href: 'https://archcode.kz/',
    label: 'Архкод',
  },
  {
    to: '/play',
    label: 'Играть',
  },
]

export function Header() {
  return (
    <header className="container mx-auto text-content-invert">
      <div className="navbar p-4">
        <div className="flex-1">
          <NavLink className="flex-shrink-0" to="/">
            <img
              className="h-32"
              src={gameLogoPng}
              alt="Логотип «Снести нельзя оставить»"
            />
          </NavLink>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-xl lg:hidden">
              <ListIcon />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-content shadow-md">
              {LINKS.map((l) =>
                l.to ? (
                  <li key={l.to}>
                    <NavLink
                      className={({isActive}) => (isActive ? 'active' : '')}
                      to={l.to}>
                      {l.label}
                    </NavLink>
                  </li>
                ) : (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <ul className="menu menu-horizontal hidden p-0 lg:flex">
            {LINKS.map((l) =>
              l.to ? (
                <li key={l.to}>
                  <NavLink
                    className={({isActive}) => (isActive ? 'active' : '')}
                    to={l.to}>
                    {l.label}
                  </NavLink>
                </li>
              ) : (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </header>
  )
}
