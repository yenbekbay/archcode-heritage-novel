import {
  logoArchcodePng,
  logoGamePng,
  logoNonmuseumPng,
  logoSorosPng,
} from 'assets/www'
import Image from 'next/future/image'
import Link from 'next/link'
import {GameController as GameControllerIcon} from 'phosphor-react'
import {
  InstagramLogo as InstagramLogoIcon,
  TelegramLogo as TelegramLogoIcon,
} from 'phosphor-react'

export function Footer() {
  return (
    <footer className="flex-1 bg-chicago-900 text-content-invert">
      <div className="container footer mx-auto bg-chicago-900 px-8 py-16">
        <div className="grid grid-flow-row gap-8 lg:grid-flow-col lg:items-center">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://t.me/archcode_kazakhstan/"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-invert btn-circle btn text-2xl"
            >
              <TelegramLogoIcon />
            </a>
            <a
              href="https://instagram.com/heritage_novel/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-invert btn-circle btn text-2xl"
            >
              <InstagramLogoIcon />
            </a>
          </div>
          <div className="grid grid-flow-row items-center gap-4 lg:grid-flow-col lg:pr-4">
            <Link
              href="/play"
              className="btn-invert btn-sm btn gap-2 normal-case"
            >
              <GameControllerIcon weight="fill" />
              Играть
            </Link>
            <Link href="/" className="link-hover link">
              Главная
            </Link>
            <Link href="/about-novel" className="link-hover link">
              Визуальная новелла
            </Link>
            <Link href="/about-bot" className="link-hover link">
              Телеграм-бот
            </Link>
            <Link href="/about-us" className="link-hover link">
              О команде
            </Link>
            <Link href="/links" className="link-hover link">
              Ссылки
            </Link>
            <a
              href="https://archcode.kz/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover link"
            >
              Архкод
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-row space-x-3">
            <Link href="/" className="shrink-0">
              <Image
                src={logoGamePng}
                alt="Логотип «Снести нельзя оставить»"
                priority
                className="h-[3rem] w-auto"
              />
            </Link>

            <a
              href="https://archcode.kz/journal/view?category=article&sefname=otkrytie-prostranstva"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Image
                src={logoNonmuseumPng}
                alt="Логотип «Немузей Архитектуры»"
                priority
                className="h-[3rem] w-auto"
              />
            </a>

            <a
              href="https://archcode.kz/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Image
                src={logoArchcodePng}
                alt="Логотип «Архкод Алматы»"
                priority
                className="h-[3rem] w-auto"
              />
            </a>

            <a
              href="https://soros.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Image
                src={logoSorosPng}
                alt="Логотип «Фонд Cорос-Казахстан»"
                priority
                className="h-[3rem] w-auto bg-white"
              />
            </a>
          </div>

          <p>© Архкод Алматы, 2022. Все права защищены</p>

          <p>
            Исходный код этого сайта находится в{' '}
            <a
              href="https://github.com/yenbekbay/archcode-heritage-novel"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              открытом доступе
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
