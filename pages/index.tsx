import {bgIntroJpg} from 'assets/game'
import {
  Annotate,
  FenceSection,
  Hero,
  HeroBackground,
  Layout,
  Reveal,
  RoughCard,
} from 'components'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroBackground
          src={bgIntroJpg}
          // https://www.wolframalpha.com/input?i=fit+linear+%28320%2C+0%29%2C+%28425%2C+540%29
          // https://www.wolframalpha.com/input?i=fit+linear+%28768%2C+1900%29%2C+%281024%2C+2700%29
          className="bg-[length:100%_auto] bg-[position:center_top_calc(-1*calc(514vw-1646px))] bg-no-repeat md:bg-[position:center_top_calc(-1*calc(313vw-500px))]"
        />

        <div className="flex flex-col">
          <Hero title="Снести нельзя оставить">
            <p>
              Проект посвящённый сохранению архитектурного наследия и права на
              коллективную память, запечатлённую в архитектуре города. Проект
              подытоживает адвокационный опыт инициативы «Архкод Алматы» на
              протяжении шести лет.
            </p>

            <p>
              <Link href="/play" className="btn-invert btn-outline btn">
                Играть
              </Link>
            </p>
          </Hero>

          <Reveal asChild>
            <div className="prose-sm prose-invert prose -mt-4 self-end px-4 pb-4 text-[0.75rem]">
              <p>
                *Проект стал возможным благодаря помощи американского народа,
                оказанной через Агентство США по международному развитию
                (USAID), и был подготовлен в рамках Центральноазиатской
                программы MediaCAMP, реализуемой Internews при финансовой
                поддержке USAID. Archcode Almaty несёт ответственность за его
                содержание, которое не обязательно отражает позицию USAID или
                Правительства США, или Internews.
              </p>
            </div>
          </Reveal>
        </div>

        <FenceSection>
          <RoughCard className="self-center">
            <h2>Манифест</h2>

            <p>
              У каждого человека есть любимые места в городе, в котором он
              живёт. Увы, часто случается так, что на их месте вырастает
              гигантский забор из профнастила, — реконструкция, снос и
              строительство нового здания, которые обычно начинаются неожиданно
              для общественности.
            </p>

            <p>
              Ценные строения охраняются законом как культурное наследие, но
              официальные списки памятников архитектурного наследия города{' '}
              <Annotate config={{type: 'circle', padding: 6}}>Алматы</Annotate>{' '}
              практически не менялись со времен Советского Союза (с 1991 года).
            </p>

            <p>
              Мало того, несколько зданий из официальных списков памятников были
              утрачены: Дом генерал губернатора снесён, Дворец Республики
              изменён до неузнаваемости, а Гостиница Жетысу была вынесена из
              списка и сгорела.
            </p>

            <p>
              Единственное здание, ставшее памятником за всё время независимости
              РК — это резиденция президента на улице Назарбаева, которая была
              сожжена в ходе январских событий.
            </p>

            <p>
              Те события показали, что тема сохранения культурного наследия
              особенно актуальна. Во время бунтов сносились монументы первого
              президента, а после того, как всё утихло, поднялись споры о
              необходимости сохранения здания резиденции и том, кому должен быть
              посвящён монумент в память о «кровавом январе».
            </p>

            <p>
              Вопрос остается открыт: кто должен решать, что нам нужно сохранять
              как наследие и охранять на государственном уровне, а что следует
              запечатлевать в новых памятниках?
            </p>

            <p>
              Официальная память изменчива с переменчивостью правящих элит:
              памятники Ленина запрятаны в закоулках и малозаметных районах.
            </p>

            <p>
              Резиденцию президента, бывшую ранее неприступным символом власти,
              хотят сровнять с землей и скрыть под идеальным газоном нового
              парка.
            </p>

            <p>
              30 лет независимого Казахстана показали, что важные архитектурные
              объекты, о ценности которых знают немногие, могут быть разрушены
              быстрее, чем общественность успевает что-то предпринять в их
              защиту.
            </p>

            <p>
              Мы заявляем о нашем общем праве на память. Тема коллективной
              памяти должна перестать быть чем-то призрачным, она должна выйти
              на передний план.
            </p>

            <p>Мы формулируем основные положения манифеста:</p>

            <ol>
              <li>
                У каждого человека есть право на память, право на наследие.
              </li>
              <li>
                Памятник — это коллективное. Памятник — это то, что хотят
                помнить люди, а не человек.
              </li>
              <li>
                Памятник не должен быть инструментом фиксации и доминирования
                символов и ценностей, навязываемых единицами.
              </li>
              <li>
                Тема исторической ценности архитектуры нашего города слабо
                освещена и не является приоритетом среди девелоперов и городской
                администрации.
              </li>
              <li>
                Мы отказываемся от ностальгии в пользу нового осознания
                архитектурной идентичности города, чтобы восстановить
                преемственность истории нашего города, запечатлённой в
                архитектуре.
              </li>
              <li>
                Нам необходима система, которая будет способствовать реализации
                защиты наследия.
              </li>
              <li>
                Широкая общественность должна иметь доступ к инструментам работы
                с наследием.
              </li>
              <li>
                Решения о сохранении объектов наследия должны приниматься в
                результате общественных дискуссий, а не внедряться сверху вниз,
                следуя смене властных структур и мнений.
              </li>
              <li>
                Пока система не может обеспечивать работу над охраной наследия,
                очень важно выносить этот вопрос на общественную повестку.
              </li>
            </ol>

            <p>
              В учебниках истории, по которым мы учились и учимся, вырезались
              факты, которые были неугодны единицам. Сейчас у нас должна быть
              возможность освещать историю как она есть, фиксируя её через
              памятники архитектуры.
            </p>

            <p>
              <Annotate config={{type: 'underline', padding: 4}}>
                Мы имеем право на память!
              </Annotate>
            </p>
          </RoughCard>
        </FenceSection>
      </main>
    </Layout>
  )
}
