import {NavLink} from '@remix-run/react'
import {Link} from '@remix-run/react'
import {
  TelegramLogo as TelegramLogoIcon,
  InstagramLogo as InstagramLogoIcon,
} from 'phosphor-react'
import gameLogoPng from '~/assets/game-logo.png'

export function Footer() {
  return (
    <footer className="bg-chicago-900 text-content-invert">
      <div className="container footer mx-auto bg-chicago-900 px-8 py-16">
        <div className="grid grid-flow-row gap-8 lg:grid-flow-col lg:items-center">
          <div className="grid grid-flow-col gap-4">
            <a
              className="btn btn-circle text-2xl"
              href="https://t.me/archcode_kazakhstan/"
              aria-label="Telegram">
              <TelegramLogoIcon />
            </a>
            <a
              className="btn btn-circle text-2xl"
              href="https://instagram.com/heritage_novel/"
              aria-label="Instagram">
              <InstagramLogoIcon />
            </a>
          </div>
          <div className="grid grid-flow-row gap-4 lg:grid-flow-col lg:pr-4">
            <NavLink className="link link-hover" to="/">
              Главная
            </NavLink>
            <NavLink className="link link-hover" to="/about-novel">
              Визуальная новелла
            </NavLink>
            <NavLink className="link link-hover" to="/about-bot">
              Telegram-Бот
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
            <NavLink className="link link-hover" to="/play">
              Играть
            </NavLink>
          </div>
        </div>

        <div className="space-y-4">
          <Link to="/">
            <img
              style={{height: '3rem'}}
              src={gameLogoPng}
              alt="Логотип «Снести нельзя оставить»"
            />
          </Link>

          <p>© Архкод Алматы, 2022. Все права защищены</p>
        </div>
      </div>
    </footer>
  )
}
