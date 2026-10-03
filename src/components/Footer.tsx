import {
  logoArchcodePng,
  logoGamePng,
  logoNonmuseumPng,
  logoSorosPng,
} from "#assets/www/index.ts";
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
import {
  GameController as GameControllerIcon,
  InstagramLogo as InstagramLogoIcon,
  TelegramLogo as TelegramLogoIcon,
} from "./Icons.tsx";

export function Footer() {
  return (
    <footer className="flex flex-1 flex-col bg-chicago-900 text-content-invert">
      <div className="container grid w-full grid-flow-row place-items-start gap-x-4 gap-y-10 self-center bg-chicago-900 px-8 py-16 text-sm/[1.25] md:grid-flow-col">
        <div className="grid grid-flow-row gap-8 lg:grid-flow-col lg:items-center">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://t.me/archcode_kazakhstan/"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="action-button action-circle text-2xl action-invert"
            >
              <TelegramLogoIcon />
            </a>

            <a
              href="https://instagram.com/heritage_novel/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="action-button action-circle text-2xl action-invert"
            >
              <InstagramLogoIcon />
            </a>
          </div>

          <div className="grid grid-flow-row items-center gap-4 lg:grid-flow-col lg:pr-4">
            <Link
              href={buildPlayHref()}
              className="action-button action-sm gap-2 normal-case action-invert"
            >
              <GameControllerIcon weight="fill" />
              Играть
            </Link>

            <Link href={buildHomeHref()} className="hover:underline">
              Главная
            </Link>

            <Link href={buildAboutNovelHref()} className="hover:underline">
              Визуальная новелла
            </Link>

            <Link href={buildAboutBotHref()} className="hover:underline">
              Телеграм-бот
            </Link>

            <Link href={buildAboutUsHref()} className="hover:underline">
              О команде
            </Link>

            <Link href={buildSavedLinksHref()} className="hover:underline">
              Ссылки
            </Link>

            <a
              href="https://archcode.kz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Архкод
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row gap-x-3">
            <Link href={buildHomeHref()} className="shrink-0">
              <Image
                src={logoGamePng}
                sizes={`${Math.ceil((48 * logoGamePng.width) / logoGamePng.height)}px`}
                alt="Логотип «Снести нельзя оставить»"
                className="h-12 w-auto"
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
                sizes={`${Math.ceil((48 * logoNonmuseumPng.width) / logoNonmuseumPng.height)}px`}
                alt="Логотип «Немузей Архитектуры»"
                className="h-12 w-auto"
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
                sizes={`${Math.ceil((48 * logoArchcodePng.width) / logoArchcodePng.height)}px`}
                alt="Логотип «Архкод Алматы»"
                className="h-12 w-auto"
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
                sizes={`${Math.ceil((48 * logoSorosPng.width) / logoSorosPng.height)}px`}
                alt="Логотип «Фонд Cорос-Казахстан»"
                className="h-12 w-auto bg-white"
              />
            </a>
          </div>

          <p>© Архкод Алматы, 2022. Все права защищены</p>

          <p>
            Исходный код этого сайта находится в{" "}
            <a
              href="https://github.com/yenbekbay/archcode-heritage-novel"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              открытом доступе
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
