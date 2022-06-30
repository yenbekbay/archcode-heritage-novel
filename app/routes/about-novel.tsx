import {NavLink} from '@remix-run/react'
import {Card, FenceSection, Hero} from '~/components'

export default function AboutNovel() {
  return (
    <section>
      <Hero title="Визуальная новелла">
        <p>
          Новелла «Снести нельзя оставить» повествует о четырёх героях, которые
          напоминают характерных персонажей типичного постсоветского города. Их
          истории переплетаются друг с другом из-за неравнодушия к
          архитектурному облику города, расходятся лишь их намерения…
        </p>

        <p>
          <NavLink className="btn-invert btn btn-outline" to="/play">
            Играть
          </NavLink>
        </p>
      </Hero>

      <FenceSection>
        <div className="flex flex-col space-y-8">
          <Card>
            <h2>Об игре</h2>

            <p>
              «Снести нельзя оставить» — ролевая игра, где игроку предоставлен
              выбор из четырёх персонажей, влияющих на судьбу разных зданий в
              городе Аталма, при этом у каждого персонажа свой уровень влияния.
              Так, Архкот и Активистка вкладывают неимоверные усилия и время, а
              Аким и Девелопер действуют быстро и легко.
            </p>

            <p>
              Процесс игры напоминает привычную 2D визуальную новеллу, где
              присутствует фон, персонаж, текст и выбор, к тому же имеет
              образовательный характер.
            </p>
          </Card>

          <Card>
            <p>
              Игра посвящена привлечению внимания общественности к теме
              сохранения архитектурного наследия и права на коллективную память,
              запечатлённую в архитектуре города.
            </p>

            <p>
              Визуальная новелла/роман (от англ. Visual novel) — это жанр
              компьютерных игр, подвид текстового квеста, в котором игроку
              демонстрируется история при помощи вывода на экран текста,
              статичных или анимированных изображений персонажей и локаций,
              звукового и/или музыкального сопровождения. (Википедия)
            </p>

            <p>
              Этот жанр был выбран нами для создания интерактивной истории,
              исход которой зависит от выбора игрока, принимающего решения за
              главного героя. У пользователя визуальной новеллы есть возможность
              примерить на себя роль четырех персонажей: Активист, Архкот, Аким
              и Девелопер, и посмотреть на проблему с разных сторон.
            </p>

            <p>
              Визуальная новелла создана на основе прецедентов, инициированных
              группой «Архкод Алматы» за шесть лет работы в адвокации за
              сохранение архитектурного наследия Алматы с широким вовлечением
              общественности.
            </p>
          </Card>
        </div>
      </FenceSection>
    </section>
  )
}