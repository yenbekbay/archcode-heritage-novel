import Image from 'next/future/image'
import Link from 'next/link'
import {GameController as GameControllerIcon} from 'phosphor-react'
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
            <Link href="/play">
              <a className="btn-invert btn btn-sm gap-2 normal-case">
                <GameControllerIcon weight="fill" />
                Играть
              </a>
            </Link>
            <Link href="/">
              <a className="link link-hover">Главная</a>
            </Link>
            <Link href="/about-novel">
              <a className="link link-hover">Визуальная новелла</a>
            </Link>
            <Link href="/about-bot">
              <a className="link link-hover">Телеграм-бот</a>
            </Link>
            <Link href="/about-us">
              <a className="link link-hover">О команде</a>
            </Link>
            <Link href="/links">
              <a className="link link-hover">Ссылки</a>
            </Link>
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
            <Link href="/">
              <a>
                <Image
                  className="h-[3rem] w-auto"
                  src={logoGamePng}
                  alt="Логотип «Снести нельзя оставить»"
                />
              </a>
            </Link>

            <a
              href="https://archcode.kz/journal/view?category=article&sefname=otkrytie-prostranstva"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                className="h-[3rem] w-auto"
                src={logoNonmuseumPng}
                alt="Логотип «Немузей Архитектуры»"
              />
            </a>

            <a
              href="https://archcode.kz/"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                className="h-[3rem] w-auto"
                src={logoArchcodePng}
                alt="Логотип «Архкод Алматы»"
              />
            </a>

            <a
              href="https://soros.kz"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                className="h-[3rem] w-auto bg-white"
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
