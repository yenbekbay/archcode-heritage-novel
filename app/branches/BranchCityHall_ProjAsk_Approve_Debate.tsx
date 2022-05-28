import {
  adyaPchelkinaPng,
  archkot4Png,
  bgCityHallMayorOfficeJpg,
  bgDeveloperHqInsidePng,
  bgDeveloperHqOutsideJpg,
  developerRepB1Png,
  developerRepB2Png,
  developerRepB3Png,
  developerRepB4Png,
  developerRepB5Png,
  gorzhempoPng,
  letterPng,
  mayor2Png,
  mayor3Png,
  stampRejectedPng,
  tinaShtunerPng,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjAsk_Approve_Debate() {
  return (
    <Branch.Root background={bgCityHallMayorOfficeJpg}>
      <Branch.Say
        size="lg"
        foregroundSrc={mayor3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Проект нужно пересмотреть. устроить общественные слушания!
      </Branch.Say>

      <Branch.Foreground
        src={letterPng}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          backgroundColor: '#e7dbab',
          transform: 'scale(2.5)',
          transformOrigin: '50% 35%',
        }}
        transitory
        lingers={1}
      />

      <Branch.Foreground
        src={stampRejectedPng}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'translateY(-15%)',
        }}
        transitory
      />

      <Branch.Foreground
        src={bgDeveloperHqOutsideJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Branch.Foreground
        src={bgDeveloperHqInsidePng}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers
      />

      <Branch.Say
        size="lg"
        tag="Архкот:"
        foregroundSrc={archkot4Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Это сейчас практически единственное здание, которое не было изменено
      </Branch.Say>

      <Branch.Say
        size="lg"
        tag="Девелопер:"
        foregroundSrc={developerRepB1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Внутри мы хотим создать современные, удобные помещения, увеличить
        свободную площадь,
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={developerRepB2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        а еще сделать open space — с учетом прозрачного фасада, будет больше
        света!
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={developerRepB3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Стекла на фасаде сделаем зеркальными!
      </Branch.Say>

      <Branch.Say
        size="lg"
        tag="Горжемпо:"
        foregroundSrc={gorzhempoPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —В начале 80-х годов прошлого века я мечтал о зеркальном стекле,
        которого в СССР не было
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={gorzhempoPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Из-за дефицита материала в итоге при строительстве было использовано
        дымчатое стекло,
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={gorzhempoPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        и в проекте, судя по рендерам, оно заменяется на зеркальное
      </Branch.Say>

      <Branch.Say
        size="lg"
        tag="Тина Штунер:"
        foregroundSrc={tinaShtunerPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Это уже исторический памятник, и сделать зеркальные окна — нарушение
        облика, к которому мы привыкли
      </Branch.Say>

      <Branch.Say
        size="lg"
        tag="Адя Пчелкина:"
        foregroundSrc={adyaPchelkinaPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Есть ли у Bay Shatyr Group лицензия на работу с памятниками?
      </Branch.Say>

      <Branch.Say
        size="xl"
        tag="Девелопер:"
        foregroundSrc={developerRepB4Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        …
      </Branch.Say>

      <Branch.Say
        size="lg"
        tag="Архкот:"
        foregroundSrc={archkot4Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Нужен кто-то, кто будет контролировать правильность процесса!
      </Branch.Say>

      <Branch.Say
        size="xl"
        tag="Девелопер:"
        foregroundSrc={developerRepB5Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        …
      </Branch.Say>

      <Branch.Say
        size="xl"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что делать?
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Выдвинуть группу от акимата',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjAsk_Approve_Debate_Intervene'),
          },
          {
            label: 'Проигнорировать',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjAsk_Approve_Debate_Ignore'),
          },
        ]}
      />
    </Branch.Root>
  )
}
