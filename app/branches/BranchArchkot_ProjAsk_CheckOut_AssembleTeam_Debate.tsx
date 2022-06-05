import {
  adyaPchelkinaPng,
  archbot3Png,
  archkot4Png,
  bgAskAfterAltJpg,
  bgDeveloperHqInsidePng,
  bgDeveloperHqOutsideJpg,
  developerRepB1Png,
  developerRepB2Png,
  developerRepB3Png,
  developerRepB4Png,
  developerRepB5Png,
  gorzhempoPng,
  tinaShtunerPng,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchArchkot_ProjAsk_CheckOut_AssembleTeam_Debate() {
  return (
    <Branch.Root background={bgDeveloperHqOutsideJpg}>
      <Branch.Blank durationMs={3000} transitory />

      <Branch.Foreground
        src={bgDeveloperHqInsidePng}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers
      />

      <Branch.Say
        tag="АрхКот:"
        foregroundSrc={archkot4Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Это сейчас практически единственное здание, которое не было изменено
      </Branch.Say>

      <Branch.Say
        tag="Девелопер:"
        foregroundSrc={developerRepB1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Внутри мы хотим создать современные, удобные помещения, увеличить
        свободную площадь,
      </Branch.Say>

      <Branch.Say
        foregroundSrc={developerRepB2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        а еще сделать open space — с учетом прозрачного фасада, будет больше
        света!
      </Branch.Say>

      <Branch.Say
        foregroundSrc={developerRepB3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Стекла на фасаде сделаем зеркальными!
      </Branch.Say>

      <Branch.Say
        tag="Горжемпо:"
        foregroundSrc={gorzhempoPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —В начале 80-х годов прошлого века я мечтал о зеркальном стекле,
        которого в СССР не было
      </Branch.Say>

      <Branch.Say
        foregroundSrc={gorzhempoPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Из-за дефицита материала в итоге при строительстве было использовано
        дымчатое стекло,
      </Branch.Say>

      <Branch.Say
        foregroundSrc={gorzhempoPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        и в проекте, судя по рендерам, оно заменяется на зеркальное
      </Branch.Say>

      <Branch.Say
        tag="Тина Штунер:"
        foregroundSrc={tinaShtunerPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Это уже исторический памятник, и сделать зеркальные окна — нарушение
        облика, к которому мы привыкли
      </Branch.Say>

      <Branch.Say
        tag="Адя Пчелкина:"
        foregroundSrc={adyaPchelkinaPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Есть ли у Bay Shatyr Group лицензия на работу с памятниками?
      </Branch.Say>

      <Branch.Say
        tag="Девелопер:"
        foregroundSrc={developerRepB4Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        …
      </Branch.Say>

      <Branch.Say
        tag="АрхКот:"
        foregroundSrc={archkot4Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Нужен кто-то, кто будет контролировать правильность процесса!
      </Branch.Say>

      <Branch.Say
        tag="Девелопер:"
        foregroundSrc={developerRepB5Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        …
      </Branch.Say>

      <Branch.Foreground
        src={bgDeveloperHqOutsideJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers
      />

      <Branch.Say transitory>
        А в результате договорились архток, архбот и архкот с девелопером, что
        будут встречаться в процессе работы и стройки процесс обсуждать
      </Branch.Say>

      <Branch.Foreground
        src={bgAskAfterAltJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Branch.Say transitory>
        Поздравляем! Облик здания сохранен! Не даром прошли все ваши и вот
        результат — деликатная реставрация объекта
      </Branch.Say>

      <Branch.Say transitory>
        Побегайте по лестницам у входа, почувствйте себя снова ребенком!
      </Branch.Say>

      <Branch.Say
        tag="АрхБот:"
        foregroundSrc={archbot3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Но вот памятником оно все же не стало…ушел аким, ушел и список…
      </Branch.Say>

      <Branch.Say
        tag="АрхБот:"
        foregroundSrc={archbot3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Хотите узнать, что написали СМИ о состоявшейся реставрации АСК?
      </Branch.Say>

      <Branch.Say
        placement="middle"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        *Ссылка на статьи
      </Branch.Say>

      <Branch.Title transitory lingers>
        Конец игры
      </Branch.Title>

      <Branch.Choices
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch.Root>
  )
}
