import {bgAirportJpg} from '~/assets/game'
import {Hero} from '~/components'

export default function AboutBot() {
  return (
    <section>
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-[position:center_top] bg-no-repeat"
          style={{backgroundImage: `url(${bgAirportJpg})`}}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Hero title="Телеграм-бот">
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
          <a
            className="btn-invert btn btn-outline"
            href="https://t.me/archcode_bot">
            Перейти в Телеграм
          </a>
        </p>
      </Hero>
    </section>
  )
}
