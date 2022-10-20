import {bgMapJpg} from 'assets/game'
import {
  paperRipPng,
  polaroidAnelPng,
  polaroidAruzhanPng,
  polaroidAyanPng,
  polaroidInzhuPng,
  polaroidNadiraPng,
  polaroidYaroslavPng,
  polaroidYuliaPng,
  polaroidZamanbekPng,
  teamPhotoJpg,
} from 'assets/www'
import {Hero, HeroBackground, Layout, RoughCard} from 'components'
import Image from 'next/future/image'
import type {StaticImageData} from 'next/image'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export default function AboutUs() {
  return (
    <Layout>
      <main>
        <HeroBackground
          src={teamPhotoJpg}
          speed={-4}
          className="bg-cover bg-[position:center_top] bg-no-repeat md:bg-[position:center_top_-3rem] lg:bg-[position:center_top_-6rem]"
          containerClassName="max-h-[20rem] md:max-h-[40rem] lg:max-h-[60rem]"
        />

        <div className="relative z-10">
          <Hero className="md:pt-48 lg:pt-96" title="Команда" />

          <Image
            src={paperRipPng}
            alt=""
            priority
            className="absolute bottom-0 h-auto w-full translate-y-[54%]"
          />
        </div>

        <section className="relative flex flex-col pt-28 pb-[26rem]">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{backgroundImage: `url(${bgMapJpg.src})`}}
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="container mx-auto grid grid-cols-1 justify-items-center gap-8 lg:grid-cols-2">
            <TeamMemberCard
              photoSrc={polaroidAnelPng}
              name="Анель Молдахметова"
              role="Креативное продюсирование"
              bio={
                <>
                  Для меня это проект, который позволяет мне упаковать и
                  систематизировать колоссальный опыт инициативы Архкод Алматы,
                  который мы готовы передать общественности. Это смелый
                  эксперимент и сотворчество, когда каждый участник команды в
                  нем растёт.
                </>
              }
            />

            <TeamMemberCard
              align="right"
              photoSrc={polaroidInzhuPng}
              name="Инжу Сыдыкова"
              role="Сценарий, архитектура игры"
              bio={
                <>
                  Мой интерес зажигают вопросы о том, что создает любимую сердцу
                  атмосферу нашего города, какая архитектура представляет
                  ценность как наследие, как формируется идентичность места
                  через его память. Кроме того, это очень ёмкий и веселый
                  проект, позволивший мне в незнакомом ранее формате применить
                  знания и навыки, полученные при изучении разных
                  специальностей.
                </>
              }
            />

            <TeamMemberCard
              photoSrc={polaroidAyanPng}
              name="Аян Енбекбай"
              role="Реализация игры, разработка сайта"
              bio={
                <>
                  Алматы — уникальный, полный жизни город. Город очень близкий
                  моему сердцу. Получая столько радости и вдохновения от
                  пребывания в Алматы, я понял, что хочу отдать ему что-то
                  взамен.
                  <br />
                  <br />
                  Вооруженный этим стремлением, я присоединился к ребятам из
                  Архкод и использовал свои навыки чтобы воплотить в реальность
                  проект визуальной новеллы о сохранении архитектурного
                  наследия. Кажется, получилось очень круто.
                </>
              }
            />

            <TeamMemberCard
              align="right"
              photoSrc={polaroidNadiraPng}
              name="Надира Жадыраева"
              role="Визуальный нарратив, иллюстрации и дизайн"
              bio={
                <>
                  С Archcode мы уже работали над проектом Koktem Shaqyrady/The
                  Spring is Calling, завершив который почти сразу согласилась на
                  новый. Эти проекты уникальны не только результатом, но и
                  невероятными возможностями в процессе, где участники ничем не
                  ограничены и могут попробовать себя в любых ролях. :)
                </>
              }
            />

            <TeamMemberCard
              photoSrc={polaroidAruzhanPng}
              name="Аружан Шотай"
              role="Визуальный нарратив, иллюстрации и дизайн"
              bio={
                <>
                  Это один из самых уникальных и интересных проектов про наш
                  город, его архитектурное наследие и всех, кому оно
                  принадлежит. Я рада быть частью очередного значимого проекта
                  от ArchCode, за все время создания которого творческий
                  потенциал каждого из нас был раскрыт и направлен в общее
                  благое дело.
                </>
              }
            />

            <TeamMemberCard
              align="right"
              photoSrc={polaroidYaroslavPng}
              name="Ярослав Самойлов"
              role="Разработка Телеграм-бота"
              bio={
                <>
                  Проект заинтересовал возможностью сделать что-то полезное и
                  важное для родного города и его жителей. Рассказать о его
                  истории и архитектурной идентичности необычным способом.
                  Выполнить большую творческую и экспериментальную задачу в
                  соавторстве с талантливыми единомышленниками из Архкод Алматы.
                </>
              }
            />

            <TeamMemberCard
              photoSrc={polaroidZamanbekPng}
              name="Заманбек Мукасали"
              role="Технический продюссер, дизайнер выставки"
              bio={
                <>
                  Мне нравится, что в этом проекте я делаю то, что люблю — делаю
                  сцены новеллы физически осязаемыми.
                </>
              }
            />

            <TeamMemberCard
              align="right"
              photoSrc={polaroidYuliaPng}
              name="Юлия Петухова"
              role="Композитор и саунд дизайнер"
              bio={
                <>
                  Моя роль на проекте была в том, чтобы написать музыку и
                  сделать звуковое оформление игры. Эта игра даёт людям
                  возможность не чувствовать беспомощность перед лицом больших
                  перемен в их городе, она дает инструменты для отстаивания
                  своей позиции, поэтому мне было важно помочь создать для нее
                  настроение тем способом, который мне знаком, — музыкой.
                </>
              }
            />
          </div>
        </section>
      </main>
    </Layout>
  )
}

interface TeamMemberCardProps {
  photoSrc: string | StaticImageData
  name: string | React.ReactElement
  role: string | React.ReactElement
  bio: string | React.ReactElement
  align?: 'left' | 'right'
}

function TeamMemberCard({
  photoSrc,
  name,
  role,
  bio,
  align = 'left',
}: TeamMemberCardProps) {
  return (
    <RoughCard>
      <div className="grid grid-flow-row gap-4 md:grid-flow-col">
        <Image
          src={photoSrc}
          // eslint-disable-next-line @typescript-eslint/no-base-to-string
          alt={`Фотография: ${name}`}
          className={twMerge(
            'my-0 min-w-[6rem]',
            align === 'right' && 'md:order-2 lg:order-none',
          )}
        />

        <div>
          <h2 className="mb-0 md:mt-0">{name}</h2>
          <h3 className="text-base italic">{role}</h3>
          <p className="md:text-sm">{bio}</p>
        </div>
      </div>
    </RoughCard>
  )
}
