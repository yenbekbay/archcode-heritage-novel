import Image from 'next/future/image'
import {TelegramLogo as TelegramLogoIcon} from 'phosphor-react'
import {bgAirportJpg} from '~/assets/game'
import {telegramBotQrCodePng} from '~/assets/www'
import {Hero, HeroBackground, Layout} from '~/components'

export default function AboutBot() {
  return (
    <Layout>
      <main>
        <HeroBackground
          src={bgAirportJpg}
          // https://www.wolframalpha.com/input?i=fit+linear+%281024%2C+400%29%2C+%282560%2C+1600%29
          className="bg-cover bg-[position:center_top_-12rem] bg-no-repeat lg:bg-[length:100%_auto] lg:bg-[position:center_top_calc(-1*calc(78vw-400px))]"
        />

        <Hero
          title="Телеграм-бот"
          image={
            <a
              href="https://t.me/archcode_bot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Перейти в Телеграм">
              <Image
                className="max-h-[18rem] w-auto"
                src={telegramBotQrCodePng}
              />
            </a>
          }>
          <p>
            Это обучающий бот, который даёт представление об общей ситуации в
            области сохранения архитектурного наследия в Казахстане. Раздел
            Телеграм-бота «Бюрократический пинг-понг» — это симуляция переписки
            в процессе попытки инициировать внесение зданий в списки памятников
            наследия. Он показывает абсурдность нынешней ситуации и подчёркивает
            необходимость создания новых прецедентов общественного участия,
            которые смогут преодолеть бюрократический барьер.
          </p>

          <p>
            Проект будет презентован в формате одноименной выставки, которая
            находится в процессе подготовки.
          </p>

          <p>
            <a
              className="btn-invert btn gap-2"
              href="https://t.me/archcode_bot">
              <TelegramLogoIcon className="text-xl" weight="fill" />
              Перейти в Телеграм
            </a>
          </p>
        </Hero>
      </main>
    </Layout>
  )
}
