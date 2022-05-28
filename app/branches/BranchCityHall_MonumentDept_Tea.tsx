import {
  assistant1Png,
  bgCityHallMayorOfficeJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  mayor2Png,
  mayor7Png,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_MonumentDept_Tea() {
  return (
    <Branch.Root background={bgCityHallMayorOfficeJpg}>
      <Branch.Foreground
        src={mayor7Png}
        style={{width: '100%', bottom: '-12%'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Branch.Say
        size="lg"
        scheme="dark"
        foregroundSrc={bgMayorDoorJpg}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}>
        *тук-тук
      </Branch.Say>

      <Branch.Foreground
        src={bgMayorDoorwayJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={1}
      />

      <Branch.Say
        size="lg"
        scheme="dark"
        tag="Помощник:"
        foregroundSrc={assistant1Png}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory>
        —Поступила жалоба от жильцов ЖК на шум у стройки
      </Branch.Say>

      <Branch.Say
        size="xl"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        И что?
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label:
              'Понастроили жилье, где не должны были. Нечего теперь возмущаться.',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Выписать штраф за нарушение общественного спокойствия!',
            onClick: (ctx) => ctx.skip(),
          },
        ]}
      />

      <Branch.Say size="lg" transitory durationMs={0} lingers={1}>
        Хотите продолжить работу с отделом памятников?
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Да, продолжаю',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Нет, вернуться к выбору',
            onClick: (ctx) => ctx.goToLocation('CityHall_0Menu', 5),
          },
        ]}
      />

      <Branch.Say
        size="lg"
        scheme="dark"
        foregroundSrc={bgMayorDoorJpg}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}>
        *тук-тук
      </Branch.Say>

      <Branch.Foreground
        src={bgMayorDoorwayJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={1}
      />

      <Branch.Say
        size="lg"
        scheme="dark"
        tag="Помощник:"
        foregroundSrc={assistant1Png}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory>
        —Новый проект предполагает снос Гостиницы Жетысу, которая является
        памятником
      </Branch.Say>

      <Branch.Say
        size="xl"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Хммм…
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Не одобрять! Пусть меняют проект',
            // FIXME
            onClick: () => alert('Не готовы иллюстрации'),
          },
          {
            label: 'Вынести здание из списка памятников!',
            onClick: (ctx) => ctx.skip(),
          },
        ]}
      />

      <Branch.Say size="lg" transitory durationMs={0} lingers={1}>
        Хотите продолжить работу с отделом памятников?
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Да, продолжаю',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Нет, вернуться к выбору',
            onClick: (ctx) => ctx.goToLocation('CityHall_0Menu', 5),
          },
        ]}
      />

      <Branch.Say
        size="lg"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        А почему это только я работаю! Пойду-ка наведу порядок
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Дальше',
            onClick: (ctx) => ctx.goToBranch('CityHall_MonumentDept_Rant'),
          },
        ]}
      />
    </Branch.Root>
  )
}
