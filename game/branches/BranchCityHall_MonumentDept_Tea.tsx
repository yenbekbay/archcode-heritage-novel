import {
  assistant1Png,
  bgCityHallMayorOfficeJpg,
  bgDeveloperHqOutsideJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  bgSolidJpg,
  mayor2Png,
  mayor7Png,
} from '~/assets/game'
import {Branch, Label, Say, Scene, Show} from '~/lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchCityHall_MonumentDept_Tea() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Show
        src={{uri: mayor7Png.src, style: {width: '100%', bottom: '-12%'}}}
      />

      <Scene src={bgMayorDoorJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say scheme="dark">*тук-тук</Say>

      <Scene src={bgMayorDoorwayJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        scheme="dark"
        tag={{text: 'Помощник:', color: '#687065'}}
        image={{
          uri: assistant1Png.src,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —Поступила жалоба от жильцов ЖК на шум из музея
      </Say>

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
        menu={[
          {
            label:
              'Понастроили жильё, где не должны были. Нечего теперь возмущаться.',
            onClick: (ctx) => ctx.goToStatement('museum-a'),
          },
          {
            label: 'Выписать штраф за нарушение общественного спокойствия!',
            onClick: (ctx) => ctx.goToStatement('museum-b'),
          },
        ]}>
        И что?
      </Say>

      <Label label="museum-a">
        <Scene src={bgSolidJpg.src} />

        <Say next="checkpoint-1">
          {
            'Кто дал разрешение на строительство ЖК так близко к музею???\n\nЗдание музея по закону должно быть окружено охранной зоной, зоной регулирования застройки и зоной охраны природного ландшафта. Высота музея — 22 метра, охранная зона должна быть в два раза больше — 44 метра.\n\nНо ЖК построен на расстоянии 38 метров от музея.'
          }
        </Say>
      </Label>

      <Label label="museum-b">
        <Scene src={bgSolidJpg.src} />

        <Say next="checkpoint-1">
          {
            'В музее говорят, что шум исходит от охлаждающей установки, необходимой для поддержания температурно-влажностного режима и надлежащего хранения экспонатов…\n\nНо что есть комфорт старых картинок, когда страдают люди, законно купившие себе квартиры?\n\nКстати, кажется еще не все квартиры проданы… Возможно, как раз из-за этого музея.\n\nШтрафовать! Иначе никак'
          }
        </Say>
      </Label>

      <Label label="checkpoint-1">
        <Scene src={bgMayorDoorwayJpg.src} audio={SCENE_AUDIO.indoor} />

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
      </Label>

      <Scene src={bgMayorDoorJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say scheme="dark">*тук-тук</Say>

      <Scene src={bgMayorDoorwayJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        scheme="dark"
        tag={{text: 'Помощник:', color: '#687065'}}
        image={{
          uri: assistant1Png.src,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —Новый проект предполагает снос Гостиницы Жетысу, которая является
        памятником
      </Say>

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Не одобрять! Пусть меняют проект',
            onClick: (ctx) => ctx.goToStatement('zhetysu-a'),
          },
          {
            label: 'Вынести здание из списка памятников!',
            onClick: (ctx) => ctx.goToStatement('zhetysu-b'),
          },
        ]}>
        Хммм…
      </Say>

      <Label label="zhetysu-a">
        <Scene src={bgSolidJpg.src} />

        <Say>
          {
            'Гостиница Жетысу — это Памятник истории и культуры местного значения!\n\nРазвитый теневой навес, контрастное сочетание цвета…\n\nИнтерьеры гостиницы даже были задействованы при съемках кино!\n\nРешение оставить и бережно реставрировать здание очень обрадовало общественность!\n\nЭто хорошо повлияет на ваш рейтинг, а отреставрированное здание может стать точкой притяжения для туристов!'
          }
        </Say>

        <Scene src={bgDeveloperHqOutsideJpg.src} audio={SCENE_AUDIO.city} />

        <Say next="checkpoint-2">Идёт разработка проекта</Say>
      </Label>

      <Label label="zhetysu-b">
        <Scene src={bgSolidJpg.src} />

        <Say next="checkpoint-2">
          {
            'Гостиница Жетысу — это Памятник истории и культуры местного значения…\n\nНичего стращного, можно вынести его из списка памятников.\n\nВсё делается просто. Всё равно старое уже, ничего в нём особенного.\n\nОбщественности это не очень понравится, рейтинг может упасть, маркетинг будет сложноват…\n\nНо ничего, быстро забудут.\n\nНовый облик — новые возможности!'
          }
        </Say>
      </Label>

      <Label label="checkpoint-2">
        <Scene src={bgMayorDoorwayJpg.src} audio={SCENE_AUDIO.indoor} />

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
      </Label>

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
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
