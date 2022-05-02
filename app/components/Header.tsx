import {NavLink as RemixNavLink} from '@remix-run/react'
import {List as ListIcon} from 'phosphor-react'
import archcodeLogoUrl from '~/assets/logo.png'

const LINKS: {to: string; label: string}[] = [
  {
    to: '/about',
    label: 'О нас',
  },
  {
    to: '/interactive',
    label: 'Интерактив',
  },
  {
    to: '/materials',
    label: 'Материалы',
  },
  {
    to: '/contact',
    label: 'Контакты',
  },
]

export function Header() {
  return (
    <header className="container mx-auto">
      <div className="navbar p-4">
        <div className="flex-1">
          <RemixNavLink className="flex-shrink-0" to="/">
            <img
              style={{height: '3rem'}}
              src={archcodeLogoUrl}
              alt="Логотип Архкод"
            />
          </RemixNavLink>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-xl lg:hidden">
              <ListIcon />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow-md">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <RemixNavLink
                    className={({isActive}) => (isActive ? 'focused' : '')}
                    to={l.to}>
                    {l.label}
                  </RemixNavLink>
                </li>
              ))}
            </ul>
          </div>

          <ul className="menu menu-horizontal hidden p-0 lg:flex">
            {LINKS.map((l) => (
              <li key={l.to}>
                <RemixNavLink
                  className={({isActive}) => (isActive ? 'focused' : '')}
                  to={l.to}>
                  {l.label}
                </RemixNavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
