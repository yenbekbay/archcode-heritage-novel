import {bgMapJpg} from '~/assets/game'
import {
  paperRipPng,
  polaroidAnelPng,
  polaroidAruzhanPng,
  polaroidInzhuPng,
  polaroidNadiraPng,
  polaroidYaroslavPng,
  polaroidYuliaPng,
  polaroidZamanbekPng,
  teamPhotoJpg,
} from '~/assets/www'
import {Card, Hero, HeroBackground} from '~/components'

export default function AboutUs() {
  return (
    <main>
      <HeroBackground
        src={teamPhotoJpg}
        className="bg-cover bg-[position:center_top] bg-no-repeat md:bg-[position:center_top_-3rem] lg:bg-[position:center_top_-6rem]"
        containerClassName="max-h-[20rem] md:max-h-[40rem] lg:max-h-[60rem]"
        speed={-4}
      />

      <div className="relative z-10">
        <Hero className="md:pt-48 lg:pt-96" title="Команда" />

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
                <h3 className="text-base">Креативное продюсирование</h3>
                <p>
                  Для меня это проект, который позволяет мне упаковать и
                  систематизировать колоссальный опыт инициативы Архкод Алматы,
                  который мы готовы передать общественности. Это смелый
                  эксперимент и сотворчество, когда каждый участник команды в
                  нем растёт.
                </p>
              </div>
            </div>
          </Card>

          <Card className="self-center">
            <div className="grid grid-flow-row gap-4 lg:grid-flow-col">
              <img
                className="lg:order-2"
                src={polaroidInzhuPng}
                alt="Фотография Инжу"
              />

              <div>
                <h2 className="mb-0">Инжу Сыдыкова</h2>
                <h3 className="text-base">Сценарий, архитектура игры</h3>
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
            </div>
          </Card>

          <Card className="self-center">
            <div className="grid grid-flow-row gap-4 lg:grid-flow-col">
              <img src={polaroidNadiraPng} alt="Фотография Надиры" />

              <div>
                <h2 className="mb-0">Надира Жадыраева</h2>
                <h3 className="text-base">
                  Визуальный нарратив, иллюстрации и дизайн
                </h3>
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
              <img
                className="lg:order-2"
                src={polaroidAruzhanPng}
                alt="Фотография Аружан"
              />

              <div>
                <h2 className="mb-0">Аружан Шотай</h2>
                <h3 className="text-base">
                  Визуальный нарратив, иллюстрации и дизайн
                </h3>
                <p>
                  Это один из самых уникальных и интересных проектов про наш
                  город, его архитектурное наследие и всех, кому оно
                  принадлежит. Я рада быть частью очередного значимого проекта
                  от ArchCode, за все время создания которого творческий
                  потенциал каждого из нас был раскрыт и направлен в общее
                  благое дело.
                </p>
              </div>
            </div>
          </Card>

          <Card className="self-center">
            <div className="grid grid-flow-row gap-4 lg:grid-flow-col">
              <img src={polaroidYaroslavPng} alt="Фотография Ярослава" />

              <div>
                <h2 className="mb-0">Ярослав Самойлов</h2>
                <h3 className="text-base">Разработка Телеграм-бота</h3>
                <p>
                  Проект заинтересовал возможностью сделать что-то полезное и
                  важное для родного города и его жителей. Рассказать о его
                  истории и архитектурной идентичности необычным способом.
                  Выполнить большую творческую и экспериментальную задачу в
                  соавторстве с талантливыми единомышленниками из Архкод Алматы.
                </p>
              </div>
            </div>
          </Card>

          <Card className="self-center">
            <div className="grid grid-flow-row gap-4 lg:grid-flow-col">
              <img
                className="lg:order-2"
                src={polaroidZamanbekPng}
                alt="Фотография Заманбека"
              />

              <div>
                <h2 className="mb-0">Заманбек Мукасали</h2>
                <h3 className="text-base">
                  Технический продюссер, дизайнер выставки
                </h3>
                <p>
                  Мне нравится, что в этом проекте я делаю то, что люблю — делаю
                  сцены новеллы физически осязаемыми.
                </p>
              </div>
            </div>
          </Card>

          <Card className="self-center">
            <div className="grid grid-flow-row gap-4 lg:grid-flow-col">
              <img src={polaroidYuliaPng} alt="Фотография Юлии" />

              <div>
                <h2 className="mb-0">Юлия Петухова</h2>
                <h3 className="text-base">Композитор и саунд дизайнер</h3>
                <p>
                  Моя роль на проекте была в том, чтобы написать музыку и
                  сделать звуковое оформление игры. Эта игра даёт людям
                  возможность не чувствовать беспомощность перед лицом больших
                  перемен в их городе, она дает инструменты для отстаивания
                  своей позиции, поэтому мне было важно помочь создать для нее
                  настроение тем способом, который мне знаком, — музыкой.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
