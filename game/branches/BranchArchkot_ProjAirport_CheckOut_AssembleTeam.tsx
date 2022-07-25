import {
  aKordeevPng,
  archbot1Png,
  archbot2Png,
  archbot3Png,
  archkot11Png,
  archkot12Png,
  archkot1Png,
  archkot2Png,
  archkot4Png,
  archkot8Png,
  archkot9Png,
  archtok1Png,
  archtok2Png,
  archtok3Png,
  archtok4Png,
  archtok5Png,
  assistant3Png,
  bgAirportJpg,
  bgArchcodeOfficeJpg,
  bgCityHallConferenceRoomJpg,
  bgCityHallOutsideJpg,
  bgPhoneHandJpg,
  sharatMibutovPng,
  transition1Mp3,
} from '~/assets/game'
import {Branch, Play, Say, Scene, Show} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchArchkot_ProjAirport_CheckOut_AssembleTeam() {
  return (
    <Branch>
      <Scene src={bgAirportJpg.src} audio={SCENE_AUDIO.city} />

      <Say image={{uri: archkot8Png.src, align: 'bottom'}}>
        Быстро! Быстро! Надо собрать команду и разобраться, что тут происходит!
      </Say>

      <Say
        frame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
            transform: 'rotate(-6deg)',
          },
        }}
        style={{fontSize: 24}}
        image={{
          uri: bgPhoneHandJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.25) translateX(-15px)',
          },
        }}>
        Команда Архкод: срочно собираемся в офисе
      </Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot2Png.src, align: 'bottom'}}>
        —В городе беда. VIP терминал Аэропорта обнесен забором, и никто ничего
        об этом не знает! Мы должны что-то делать
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok1Png.src, align: 'bottom'}}>
        —Первое, что необходимо выяснить - это является ли здание памятником
        историко-культурного наследия.
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        —Загляните в ГОСУДАРСТВЕННЫЙ РЕЕСТР ПАМЯТНИКОВ
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        {`
          —Там можно поискать нужное нам здание.

          [Памятники Республиканского значения РК](${LINKS.monument_list_republican})

          [Памятники Местного значения (г. Алматы)](${LINKS.monument_list_local})
        `}
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok2Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Да',
            onClick: (ctx) => ctx.goToNextStatement(),
          },
          {
            label: 'Нет',
            onClick: (ctx) => ctx.goToNextStatement(),
          },
        ]}>
        —Является ли здание VIP терминала Аэропорта памятником?
      </Say>

      <Scene src={bgAirportJpg.src} audio={SCENE_AUDIO.city} />

      <Say>Здание VIP терминала есть в реестре, оно является памятником</Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Это памятник – значит всё с ним хорошо будет',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjAirport_CheckOut_AssembleTeam_Bail'),
          },
          {
            label: 'Что ещё можно сделать?',
            onClick: (ctx) => ctx.goToNextStatement(),
          },
        ]}>
        —ЭТО ПАМЯТНИК!!!
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok2Png.src, align: 'bottom'}}>
        —Во-первых…
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot3Png.src, align: 'bottom'}}>
        —Во-первых было про памятник
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok3Png.src, align: 'bottom'}}>
        —Во-вторых, нужно узнать о всех заинтересованных сторонах
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        {`
          —Представляю вам список стейкхолдеров:

          [Cписок стейкхолдеров](${LINKS.stakeholder_list_airport})
        `}
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok4Png.src, align: 'bottom'}}>
        —Не зря я с тобой работаю! Дальше…Они предлагают перенести здание…разве
        это возможно?
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        {`
          —Нашел правила переноса памятника:

          [Правила переноса здания](${LINKS.monument_relocation_rules})
        `}
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok5Png.src, align: 'bottom'}}>
        —Вот!
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok5Png.src, align: 'bottom'}}>
        —Перемещёние и изменение памятника истории и культуры запрещаются. Есть
        исключения, но это не про наш терминал аэропорта…
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot3Png.src, align: 'bottom'}}>
        —Объявлены общественные слушания по проекту нового терминала Аэропорта
        Алматы
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{
          uri: archbot2Png.src,
          align: 'bottom',
          style: {transform: 'translateX(35%)'},
        }}
        durationMs={1000}
        hide={2}>
        —Решено, идём на слушания
      </Say>

      <Show
        src={{
          uri: archtok4Png.src,
          align: 'bottom',
          style: {
            transform: 'scale(0.85) translateX(5%)',
            transformOrigin: 'bottom',
          },
        }}
        hide={1}
      />

      <Show
        src={{
          uri: archkot12Png.src,
          align: 'bottom',
          style: {transform: 'translateX(-35%)'},
        }}
        durationMs={4000}
      />

      <Scene
        src={bgCityHallOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />

      <Say placement="middle" scheme="dark">
        Общественные слушания
      </Say>

      <Scene
        src={bgCityHallConferenceRoomJpg.src}
        audio={SCENE_AUDIO.hearings}
      />

      <Say
        tag={{text: 'Зам. акима:', color: '#687065'}}
        image={{uri: assistant3Png.src, align: 'bottom'}}>
        —То, что есть сейчас, утратило историческую ценность. Когда-то, в 50-е
        годы, оно было таким, да, но сейчас — нет. Нет никаких исторических
        элементов, есть стеклянные электронные двери
      </Say>

      <Say
        tag={{text: 'Зам. акима:', color: '#687065'}}
        image={{uri: assistant3Png.src, align: 'bottom'}}>
        —Там почти всё поменяли. Всё изменилось до неузнаваемости в худшую
        сторону. Никаким туристам здание неинтересно
      </Say>

      <Say
        tag={{text: 'Член Общ. совета Шарат Мибутов:', color: '#8E8379'}}
        image={{uri: sharatMibutovPng.src, align: 'bottom'}}>
        —То, что предложила турецкая фирма, выглядело не очень. То есть, это
        обычная квадратная коробка, без какой-либо связи с Казахстаном
      </Say>

      <Say
        tag={{text: 'Член Общ. совета Шарат Мибутов:', color: '#8E8379'}}
        image={{uri: sharatMibutovPng.src, align: 'bottom'}}>
        —Был выбран экономичный вариант, который рассчитан только на увеличение
        пропускной способности терминала и максимизацию прибыли инвесторов
      </Say>

      <Say
        tag={'Вице президент “Аэропорт”\nА. Кордеев:'}
        image={{uri: aKordeevPng.src, align: 'bottom'}}>
        —Я не считаю его великим памятником. Оно не несёт функциональной
        нагрузки и занимает огромную площадь
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot1Png.src, align: 'bottom'}}>
        —Согласно закону об охране и использовании объектов историко-культурного
        наследия. Перемещёние и изменение памятника истории и культуры
        запрещаются
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png.src, align: 'bottom'}}>
        —Исключение допускается лишь в случаях разрушения более семидесяти
        процентов памятника истории и культуры либо утраты историко-культурной
        значимости
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png.src, align: 'bottom'}}>
        —или если его перемещёние и изменение повлекут улучшение условий его
        сохранения. Да и в общей сложности, это крайне дорогая процедура
      </Say>

      <Say>
        {`
          По итогу слушаний собралась рабочая группа активистов, отстаивающих сохранение памятника архитектуры

          [Кто вошел в рабочую группу?](${LINKS.working_group_members_airport})
        `}
      </Say>

      <Scene src={bgAirportJpg.src} audio={SCENE_AUDIO.city} />

      <Say>
        {`
          Они написали письмо в EBRD (European bank of construction and development), спонсирующих проект

          [Письмо в EBRD](${LINKS.letter_airport})
        `}
      </Say>

      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say>А ещё организовали пресс-конференцию</Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{uri: archkot11Png.src, align: 'bottom'}}>
        И нам удалось приостановить проект по строительству нового терминала
      </Say>

      <Say image={{uri: archkot9Png.src, align: 'bottom'}}>
        Родной старенький VIP терминал ещё стоит нетронутый, и мы обязательно
        добьемся того, чтобы его сохранили в новом проекте
      </Say>

      <Play audio={SCENE_AUDIO.calmLoop} hide={-1} />

      <Say hide={-1}>Продолжение следует…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
