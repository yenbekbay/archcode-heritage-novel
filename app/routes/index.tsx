import {NavLink} from '@remix-run/react'
import {bgIntroJpg} from '~/assets/game'
import {Card, FenceSection} from '~/components'
import {Hero} from '~/components/Hero'
import {Annotate} from '~/lib/components'

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 -z-10">
        <div
          // https://www.wolframalpha.com/input?i=fit+%28320%2C+280%29%2C+%28375%2C+460%29%2C+%28768%2C+1800%29%2C+%281024%2C+2600%29
          className="absolute inset-0 bg-[length:100%_auto] bg-[position:center_top_calc(-1*calc(330vw-780px))] bg-no-repeat"
          style={{backgroundImage: `url(${bgIntroJpg})`}}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Hero title="Снести нельзя оставить">
        <p>
          Этот проект посвящен привлечению внимания общественности к теме
          сохранения архитектурного наследия и права на коллективную память,
          запечатлённую в архитектуре города. Проект подытоживает адвокационный
          опыт инициативы «Архкод Алматы» на протяжении шести лет.
        </p>

        <p>
          <NavLink className="btn-invert btn btn-outline" to="/play">
            Играть
          </NavLink>
        </p>
      </Hero>

      <FenceSection>
        <Card className="self-center">
          <h2>Манифест</h2>

          <p>
            Уютные кварталы и дворики, улицы, уходящие перспективой в горы,
            тенистые тротуары, утопающие в зелени, арки с барельефами у сводов,
            ажурные балкончики на фоне теплых желтых стен. Всё это —{' '}
            <Annotate config={{type: 'circle', padding: 12}}>Алматы</Annotate>,
            город, который мы очень любим.
          </p>

          <p>
            У каждого человека есть любимые места в городе, в котором он живёт,
            и иногда случается так, что на их месте вырастает гигантский забор
            из профнастила — реконструкция, снос и строительство нового здания,
            которые обычно начинаются неожиданно для общественности. Ценные
            строения охраняются законом как культурное наследие, но официальные
            списки памятников архитектурного наследия практически не менялись со
            времен Советского Союза (с 1991 года). Мало того, из этих списков
            были исключены несколько памятников: Дом генерал-губернатора снесен,
            Гостиница Жетысу изменена до неузнаваемости. Единственное здание,
            ставшее памятником за все время независимости — это Резиденция
            президента на улице Назарбаева, которая сгорела в январских
            событиях.
          </p>

          <p>
            Те события показали, что тема сохранения культурного наследия
            особенно актуальна. Во время бунтов сносились монументы первого
            президента, а после того, как все утихло, поднялись споры о
            необходимости сохранения здания резиденции и том, каким должен быть
            монумент в память о «кровавом январе».
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
            Важные события, имевшие физические последствия, отрицаются на
            государственном уровне. Отрицается факт политических репрессий
            прошлого века: из здания бывшего НКВД давно убран музей
            репрессированных и перенесен за черту города, освобождая место для
            гостиницы.
          </p>

          <p>
            Точно так же теперь происходит отрицание событий января. Резиденцию
            президента, сгоревшую в январе, хотят сровнять с землей и скрыть под
            идеальным газоном нового парка. Граффити с изображением
            четырехлетней девочки, погибшей 7 января от пулевого ранения в
            голову, оперативно закрашивается в тот же день коммунальными
            службами.
          </p>

          <p>
            Мы нуждаемся в том, чтобы официальные структуры выполняли свои
            обязанности по работе с наследием. А когда от безысходности
            общественность берет на себя инициативу в этом вопросе, не
            отказывали в содействии.
          </p>
          <p>
            Мы устали от бюрократической волокиты, которая не приводит никуда,
            кроме тупика.
          </p>
          <p>
            30 лет независимого Казахстана показали, что если ничего не
            предпринимать, вряд ли кто-то спросит наше мнение. Важные
            архитектурные объекты, о ценности которых знают совсем немногие,
            разрушаются быстрее, чем мы успеваем что-то предпринять в их защиту.
          </p>
          <p>
            Мы заявляем о нашем общем праве на память. Тема коллективной памяти
            должна перестать быть чем-то призрачным, она должна выйти на
            передний план.
          </p>

          <p>Мы формулируем основные положения манифеста:</p>
          <ol>
            <li>У каждого человека есть право на память, право на наследие.</li>
            <li>
              Памятник — это коллективное. Памятник — это то, что хотят помнить
              люди, а не человек.
            </li>
            <li>
              Памятник не должен быть инструментом фиксации и доминирования
              символов и ценностей, навязываемых единицами.
            </li>
            <li>
              Жители города, девелоперы, городская администрация мало знают о
              ценности архитектуры города Алматы и зачастую её недооценивают.
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
              Широкая общественность должна иметь доступ к инструментам работы с
              наследием.
            </li>
            <li>
              Решения о сохранении объектов наследия должны приниматься в
              результате общественных дискуссий, а не моментально следовать
              смене властных структур и мнений.
            </li>
            <li>
              Пока система не может обеспечивать работу над охраной наследия,
              общественность должна активно обсуждать этот вопрос.
            </li>
          </ol>

          <p>
            В учебниках истории, по которым мы учились и учимся, вырезались
            факты, которые были неугодны единицам. Сейчас у нас должна быть
            возможность освещать историю как она есть, фиксируя её в среде
            нашего города.
          </p>

          <p>Мы требуем право на память!</p>
        </Card>
      </FenceSection>
    </main>
  )
}
