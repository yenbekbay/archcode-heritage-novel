import {GameController as GameControllerIcon} from 'phosphor-react'
import {Link, NavLink} from '@remix-run/react'
import {
  InstagramLogo as InstagramLogoIcon,
  TelegramLogo as TelegramLogoIcon,
} from 'phosphor-react'
import {
  logoArchcodePng,
  logoGamePng,
  logoNonmuseumPng,
  logoSorosPng,
} from '~/assets/www'

export function Footer() {
  return (
    <footer className="flex-1 bg-chicago-900 text-content-invert">
      <div className="container footer mx-auto bg-chicago-900 px-8 py-16">
        <div className="grid grid-flow-row gap-8 lg:grid-flow-col lg:items-center">
          <div className="grid grid-flow-col gap-4">
            <a
              className="btn-invert btn btn-circle text-2xl"
              href="https://t.me/archcode_kazakhstan/"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer">
              <TelegramLogoIcon />
            </a>
            <a
              className="btn-invert btn btn-circle text-2xl"
              href="https://instagram.com/heritage_novel/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer">
              <InstagramLogoIcon />
            </a>
          </div>
          <div className="grid grid-flow-row items-center gap-4 lg:grid-flow-col lg:pr-4">
            <NavLink
              className="btn-invert btn btn-sm gap-2 normal-case"
              to="/play">
              <GameControllerIcon weight="fill" />
              Играть
            </NavLink>
            <NavLink className="link link-hover" to="/">
              Главная
            </NavLink>
            <NavLink className="link link-hover" to="/about-novel">
              Визуальная новелла
            </NavLink>
            <NavLink className="link link-hover" to="/about-bot">
              Телеграм-бот
            </NavLink>
            <NavLink className="link link-hover" to="/about-us">
              О команде
            </NavLink>
            <a
              className="link link-hover"
              href="https://archcode.kz/"
              target="_blank"
              rel="noopener noreferrer">
              Архкод
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-row space-x-3">
            <Link to="/">
              <img
                className="h-[3rem]"
                src={logoGamePng}
                alt="Логотип «Снести нельзя оставить»"
              />
            </Link>

            <a
              href="https://archcode.kz/journal/view?category=article&sefname=otkrytie-prostranstva"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="h-[3rem]"
                src={logoNonmuseumPng}
                alt="Логотип «Немузей Архитектуры»"
              />
            </a>

            <a
              href="https://archcode.kz/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="h-[3rem]"
                src={logoArchcodePng}
                alt="Логотип «Архкод Алматы»"
              />
            </a>

            <a href="https://soros.kz">
              <img
                className="h-[3rem] bg-white"
                src={logoSorosPng}
                alt="Логотип «Фонд Cорос-Казахстан»"
              />
            </a>
          </div>

          <p>© Архкод Алматы, 2022. Все права защищены</p>
        </div>
      </div>
    </footer>
  )
}
