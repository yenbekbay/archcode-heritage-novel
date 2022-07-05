import {ParallaxBanner} from 'react-scroll-parallax'
import {bgMapJpg} from '~/assets/game'
import {
  paperRipPng,
  polaroidAnelPng,
  polaroidAruzhanPng,
  polaroidInzhuPng,
  polaroidNadiraPng,
  teamPhotoJpg,
} from '~/assets/www'
import {Card, Hero} from '~/components'

export default function AboutUs() {
  return (
    <main>
      <div className="absolute inset-0 -z-10 max-h-[60rem]">
        <ParallaxBanner
          className="h-full"
          layers={[
            {
              children: (
                <div
                  className="h-full w-full bg-cover bg-[position:center_top] bg-no-repeat"
                  style={{backgroundImage: `url(${teamPhotoJpg})`}}
                />
              ),
              speed: -4,
            },
          ]}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10">
        <Hero className="pt-96" title="Команда" />

        <img
          className="absolute bottom-0 w-full translate-y-[54%]"
          src={paperRipPng}
        />
      </div>

      <section className="relative flex flex-col pt-28 pb-[26rem]">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{backgroundImage: `url(${bgMapJpg})`}}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="flex flex-col space-y-8">
          <Card className="self-center">
            <div className="grid grid-flow-row gap-4 lg:grid-flow-col">
              <img src={polaroidAnelPng} alt="Фотография Анель" />

              <div>
                <h2 className="mb-0">Анель Молдахметова</h2>
                <h3>Креативное продюссирование</h3>
                <p>
                  Для меня это проект, который позволяет мне упаковать и
                  систематизировать колоссальный опыт инициативы Архкод Алматы,
                  который мы готовы передать общественности. Это смелый
                  эксперимент и сотворчество, когда каждый участник команды в
                  нём растет.
                </p>
              </div>
            </div>
          </Card>

          <Card className="self-center">
            <div className="grid grid-flow-row gap-4 lg:grid-flow-col">
              <div>
                <h2 className="mb-0">Инжу Сыдыкова</h2>
                <h3>Сценарий, архитектура игры</h3>
                <p>
                  Мой интерес зажигают вопросы о том, что создает любимую сердцу
                  атмосферу нашего города, какая архитектура представляет
                  ценность как наследие, как формируется идентичность места
                  через его память. Кроме того, это очень ёмкий и веселый
                  проект, позволивший мне в незнакомом ранее формате применить
                  знания и навыки, полученные при изучении разных
                  специальностей.
                </p>
              </div>

              <img src={polaroidInzhuPng} alt="Фотография Инжу" />
            </div>
          </Card>

          <Card className="self-center">
            <div className="grid grid-flow-row gap-4 lg:grid-flow-col">
              <img src={polaroidNadiraPng} alt="Фотография Надиры" />

              <div>
                <h2 className="mb-0">Надира Жадыраева</h2>
                <h3>Визуальный нарратив</h3>
                <p>
                  С Archcode мы уже работали над проектом Koktem Shaqyrady/The
                  Spring is Calling, завершив который почти сразу согласилась на
                  новый. Эти проекты уникальны не только результатом, но и
                  невероятными возможностями в процессе, где участники ничем не
                  ограничены и могут попробовать себя в любых ролях. :)
                </p>
              </div>
            </div>
          </Card>

          <Card className="self-center">
            <div className="grid grid-flow-row gap-4 lg:grid-flow-col">
              <div>
                <h2 className="mb-0">Аружан Шотай</h2>
                <h3>Визуальный нарратив</h3>
                <p>
                  Это один из самых уникальных и интересных проектов про наш
                  город, его архитектурное наследие и всех, кому оно
                  принадлежит. Я рада быть частью очередного значимого проекта
                  от ArchCode, за все время создания которого творческий
                  потенциал каждого из нас был раскрыт и направлен в общее
                  благое дело.
                </p>
              </div>

              <img src={polaroidAruzhanPng} alt="Фотография Аружан" />
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
