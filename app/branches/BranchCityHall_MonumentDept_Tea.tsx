import {
  assistant1Png,
  bgCityHallMayorOfficeJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  mayor2Png,
  mayor7Png,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchCityHall_MonumentDept_Tea() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg} />

      <Show src={{uri: mayor7Png, style: {width: '100%', bottom: '-12%'}}} />

      <Scene src={bgMayorDoorJpg} />

      <Say scheme="dark">*тук-тук</Say>

      <Scene src={bgMayorDoorwayJpg} />

      <Say
        scheme="dark"
        tag="Помощник:"
        image={{
          uri: assistant1Png,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —Поступила жалоба от жильцов ЖК на шум у стройки
      </Say>

      <Say
        image={{uri: mayor2Png, align: 'bottom'}}
        menu={[
          {
            label:
              'Понастроили жилье, где не должны были. Нечего теперь возмущаться.',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Выписать штраф за нарушение общественного спокойствия!',
            onClick: (ctx) => ctx.skip(),
          },
        ]}>
        И что?
      </Say>

      <Say
        menu={[
          {
            label: 'Да, продолжаю',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Нет, вернуться к выбору',
            onClick: (ctx) =>
              // HACK
              ctx.goToLocation('CityHall_0Menu', 5),
          },
        ]}>
        Хотите продолжить работу с отделом памятников?
      </Say>

      <Scene src={bgMayorDoorJpg} />

      <Say scheme="dark">*тук-тук</Say>

      <Scene src={bgMayorDoorwayJpg} />

      <Say
        scheme="dark"
        tag="Помощник:"
        image={{
          uri: assistant1Png,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —Новый проект предполагает снос Гостиницы Жетысу, которая является
        памятником
      </Say>

      <Say
        image={{uri: mayor2Png, align: 'bottom'}}
        menu={[
          {
            label: 'Не одобрять! Пусть меняют проект',
            // FIXME
            onClick: () => alert('Не готовы иллюстрации'),
          },
          {
            label: 'Вынести здание из списка памятников!',
            onClick: (ctx) => ctx.skip(),
          },
        ]}>
        Хммм…
      </Say>

      <Say
        menu={[
          {
            label: 'Да, продолжаю',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Нет, вернуться к выбору',
            onClick: (ctx) =>
              // HACK
              ctx.goToLocation('CityHall_0Menu', 5),
          },
        ]}>
        Хотите продолжить работу с отделом памятников?
      </Say>

      <Say
        image={{uri: mayor2Png, align: 'bottom'}}
        menu={[
          {
            label: 'Дальше',
            onClick: (ctx) => ctx.goToBranch('CityHall_MonumentDept_Rant'),
          },
        ]}>
        А почему это только я работаю! Пойду-ка наведу порядок
      </Say>
    </Branch>
  )
}
