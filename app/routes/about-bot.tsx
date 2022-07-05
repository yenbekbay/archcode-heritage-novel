import {TelegramLogo as TelegramLogoIcon} from 'phosphor-react'
import {ParallaxBanner} from 'react-scroll-parallax'
import {bgAirportJpg} from '~/assets/game'
import {telegramBotQrCodePng} from '~/assets/www'
import {Hero} from '~/components'

export default function AboutBot() {
  return (
    <main>
      <div className="absolute inset-0 -z-10">
        <ParallaxBanner
          className="h-full"
          layers={[
            {
              children: (
                <div
                  className="h-full w-full bg-cover bg-[position:center_top] bg-no-repeat lg:bg-[length:100%_auto] lg:bg-[position:center_top_-30rem]"
                  style={{backgroundImage: `url(${bgAirportJpg})`}}
                />
              ),
              speed: -16,
            },
          ]}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Hero
        title="Телеграм-бот"
        image={<img className="max-h-[18rem]" src={telegramBotQrCodePng} />}>
        <p>
          Это обучающий бот, который даёт представление об общей ситуации в
          области сохранения архитектурного наследия в Казахстане. Раздел
          Телеграм-бота «Бюрократический пинг-понг» — это симуляция переписки в
          процессе попытки инициировать внесение зданий в списки памятников
          наследия. Он показывает абсурдность нынешней ситуации и подчёркивает
          необходимость создания новых прецедентов общественного участия,
          которые смогут преодолеть бюрократический барьер.
        </p>

        <p>
          Проект будет презентован в формате одноименной выставки, которая
          находится в процессе подготовки.
        </p>

        <p>
          <a className="btn-invert btn gap-2" href="https://t.me/archcode_bot">
            <TelegramLogoIcon className="text-xl" weight="fill" />
            Перейти в Телеграм
          </a>
        </p>
      </Hero>
    </main>
  )
}
