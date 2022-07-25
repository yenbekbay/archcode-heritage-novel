import useEmblaCarousel from 'embla-carousel-react'
import {WheelGesturesPlugin} from 'embla-carousel-wheel-gestures'
import Image from 'next/future/image'
import Link from 'next/link'
import {bgAskBeforeJpg} from '~/assets/game'
import {
  phoneScreenshotPng,
  phoneSwirlPng,
  screenshot1Png,
  screenshot2Png,
  screenshot3Png,
  screenshot4Png,
  screenshot5Png,
  screenshot6Png,
} from '~/assets/www'
import {
  RoughCard,
  FenceSection,
  Hero,
  HeroBackground,
  Layout,
} from '~/components'

export default function AboutNovel() {
  return (
    <Layout>
      <main>
        <HeroBackground
          src={bgAskBeforeJpg}
          // https://www.wolframalpha.com/input?i=fit+linear+%281024%2C+0%29%2C+%282560%2C+400%29
          className="bg-cover bg-[position:center_top_-12rem] bg-no-repeat lg:bg-[length:100%_auto] lg:bg-[position:center_top_calc(-1*calc(26vw-270px))]"
        />

        <Hero
          title="Визуальная новелла"
          image={
            <Link href="/play">
              <a aria-label="Играть">
                <Image
                  className="h-[36rem] w-auto object-contain"
                  src={phoneSwirlPng}
                />
              </a>
            </Link>
          }>
          <p>
            Новелла «Снести нельзя оставить» повествует о четырёх героях,
            которые напоминают характерных персонажей типичного постсоветского
            города. Их истории переплетаются друг с другом из-за неравнодушия к
            архитектурному облику города, расходятся лишь их намерения…
          </p>

          <p>
            <Link href="/play">
              <a className="btn-invert btn btn-outline">Играть</a>
            </Link>
          </p>
        </Hero>

        <FenceSection>
          <div className="flex flex-col space-y-8">
            <RoughCard className="self-center">
              <h2>Об игре</h2>

              <p>
                «Снести нельзя оставить» — ролевая игра, где игроку предоставлен
                выбор из четырёх персонажей, влияющих на судьбу разных зданий в
                городе Аталма, при этом у каждого персонажа свой уровень
                влияния. Так, Архкот и Активистка вкладывают неимоверные усилия
                и время, а Аким и Девелопер действуют быстро и легко.
              </p>

              <p>
                Процесс игры напоминает привычную 2D визуальную новеллу, где
                присутствует фон, персонаж, текст и выбор, к тому же имеет
                образовательный характер.
              </p>
            </RoughCard>

            <ScreenshotCarousel />

            <div className="grid grid-flow-row gap-8 lg:grid-flow-col">
              <Image
                className="relative h-auto w-[30rem]"
                src={phoneScreenshotPng}
              />

              <RoughCard className="justify-self-center">
                <p>
                  Игра посвящена привлечению внимания общественности к теме
                  сохранения архитектурного наследия и права на коллективную
                  память, запечатлённую в архитектуре города.
                </p>

                <p>
                  Визуальная новелла/роман (от англ. <i>Visual novel</i>) — это
                  жанр компьютерных игр, подвид текстового квеста, в котором
                  игроку демонстрируется история при помощи вывода на экран
                  текста, статичных или анимированных изображений персонажей и
                  локаций, звукового и/или музыкального сопровождения.
                  (Википедия)
                </p>

                <p>
                  Этот жанр был выбран нами для создания интерактивной истории,
                  исход которой зависит от выбора игрока, принимающего решения
                  за главного героя. У пользователя визуальной новеллы есть
                  возможность примерить на себя роль четырех персонажей:
                  Активист, Архкот, Аким и Девелопер, и посмотреть на проблему с
                  разных сторон.
                </p>

                <p>
                  Визуальная новелла создана на основе прецедентов,
                  инициированных группой «Архкод Алматы» за шесть лет работы в
                  адвокации за сохранение архитектурного наследия Алматы с
                  широким вовлечением общественности.
                </p>
              </RoughCard>
            </div>
          </div>
        </FenceSection>
      </main>
    </Layout>
  )
}

function ScreenshotCarousel() {
  const [viewportRef] = useEmblaCarousel(
    {align: 'start', loop: false, skipSnaps: true},
    [WheelGesturesPlugin()],
  )
  return (
    <div className="ScreenshotCarousel overflow-hidden" ref={viewportRef}>
      <div className="flex">
        {[
          screenshot1Png,
          screenshot2Png,
          screenshot3Png,
          screenshot4Png,
          screenshot5Png,
          screenshot6Png,
        ].map((data) => (
          <div
            className="relative w-[80%] flex-[0_0_auto] md:w-[40%] lg:w-[18%]"
            key={data.src}>
            <Image src={data} />
          </div>
        ))}
      </div>
    </div>
  )
}
