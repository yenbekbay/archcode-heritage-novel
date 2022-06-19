import {
  akordeevPng,
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
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Show, Title} from '~/lib'

export function BranchArchkot_ProjAirport_CheckOut_AssembleTeam() {
  return (
    <Branch>
      <Scene src={bgAirportJpg} />

      <Say image={{uri: archkot8Png, style: {width: '100%', bottom: 0}}}>
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
        style_={{fontSize: 24}}
        image={{
          uri: bgPhoneHandJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.25) translateX(-15px)',
          },
        }}>
        Команда Архкод: срочно собираемся в офисе
      </Say>

      <Scene src={bgArchcodeOfficeJpg} />

      <Say
        tag="АрхКот:"
        image={{uri: archkot2Png, style: {width: '100%', bottom: 0}}}>
        —В городе беда. VIP терминал Аэропорта обнесен забором, и никто ничего
        об этом не знает! Мы должны что-то делать
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok1Png, style: {width: '100%', bottom: 0}}}>
        —Первое, что необходимо выяснить - это является ли здание памятником
        историко-культурного наследия.
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot1Png, style: {width: '100%', bottom: 0}}}>
        —Загляните в ГОСУДАРСТВЕННЫЙ РЕЕСТР ПАМЯТНИКОВ
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot1Png, style: {width: '100%', bottom: 0}}}>
        {'—Там можно поискать нужное нам здание.\n\n[Ссылка РЕЕСТР](#)'}
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok2Png, style: {width: '100%', bottom: 0}}}
        menu={[
          {
            label: 'Да',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Нет',
            onClick: (ctx) => ctx.skip(),
          },
        ]}>
        —Является ли здание VIP терминала Аэропорта памятником?
      </Say>

      <Scene src={bgAirportJpg} />

      <Say>Здание VIP терминала есть в реестре, оно является памятником</Say>

      <Scene src={bgArchcodeOfficeJpg} />

      <Say
        tag="АрхКот:"
        image={{uri: archkot4Png, style: {width: '100%', bottom: 0}}}
        menu={[
          {
            label: 'Это памятник – значит всё с ним хорошо будет',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjAirport_CheckOut_AssembleTeam_Bail'),
          },
          {
            label: 'Что ещё можно сделать?',
            onClick: (ctx) => ctx.skip(),
          },
        ]}>
        —ЭТО ПАМЯТНИК!!!
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok2Png, style: {width: '100%', bottom: 0}}}>
        —Во-первых…
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot3Png, style: {width: '100%', bottom: 0}}}>
        —Во-первых было про памятник
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok3Png, style: {width: '100%', bottom: 0}}}>
        —Во-вторых, нужно узнать о всех заинтересованных сторонах
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot1Png, style: {width: '100%', bottom: 0}}}>
        {'—Представляю вам список стейкхолдеров:\n\n[*список стейкхолдеров](#)'}
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok4Png, style: {width: '100%', bottom: 0}}}>
        —Не зря я с тобой работаю! Дальше…Они предлагают перенести здание…разве
        это возможно?
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot1Png, style: {width: '100%', bottom: 0}}}>
        {
          '—Нашел правила переноса памятника:\n\n[Ссылка 4 правила переноса здания](#)'
        }
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok5Png, style: {width: '100%', bottom: 0}}}>
        —Вот!
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok5Png, style: {width: '100%', bottom: 0}}}>
        —Перемещёние и изменение памятника истории и культуры запрещаются. Есть
        исключения, но это не про наш терминал аэропорта…
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot3Png, style: {width: '100%', bottom: 0}}}>
        —Объявлены общественные слушания по проекту нового терминала Аэропорта
        Алматы
      </Say>

      <Say
        image={{
          uri: archbot2Png,
          style: {width: '100%', bottom: 0, transform: 'translateX(35%)'},
        }}
        durationMs={1000}
        hide={2}>
        —Решено, идём на слушания
      </Say>

      <Show
        src={{
          uri: archtok4Png,
          style: {
            width: '100%',
            bottom: 0,
            transform: 'scale(0.85) translateX(5%)',
            transformOrigin: 'bottom',
          },
        }}
        hide={1}
      />

      <Show
        src={{
          uri: archkot12Png,
          style: {width: '100%', bottom: 0, transform: 'translateX(-35%)'},
        }}
      />

      <Scene src={bgCityHallOutsideJpg} />

      <Say placement="middle" scheme="dark">
        Общественные слушания
      </Say>

      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say
        tag="Зам. акима:"
        image={{uri: assistant3Png, style: {width: '100%', bottom: 0}}}>
        —То, что есть сейчас, утратило историческую ценность. Когда-то, в 50-е
        годы, оно было таким, да, но сейчас — нет. Нет никаких исторических
        элементов, есть стеклянные электронные двери
      </Say>

      <Say
        tag="Зам. акима:"
        image={{uri: assistant3Png, style: {width: '100%', bottom: 0}}}>
        —Там почти всё поменяли. Всё изменилось до неузнаваемости в худшую
        сторону. Никаким туристам здание неинтересно
      </Say>

      <Say
        tag="Член Общ. совета Шарат Мибутов:"
        image={{uri: sharatMibutovPng, style: {width: '100%', bottom: 0}}}>
        —То, что предложила турецкая фирма, выглядело не очень. То есть, это
        обычная квадратная коробка, без какой-либо связи с Казахстаном
      </Say>

      <Say image={{uri: sharatMibutovPng, style: {width: '100%', bottom: 0}}}>
        —Был выбран экономичный вариант, который рассчитан только на увеличение
        пропускной способности терминала и максимизацию прибыли инвесторов
      </Say>

      <Say
        tag={'Вице президент “Аэропорт”\nА. Кордеев:'}
        image={{uri: akordeevPng, style: {width: '100%', bottom: 0}}}>
        —Я не считаю его великим памятником. Оно не несёт функциональной
        нагрузки и занимает огромную площадь
      </Say>

      <Say
        tag="АрхКот:"
        image={{uri: archkot1Png, style: {width: '100%', bottom: 0}}}>
        —Согласно закону об охране и использовании объектов историко-культурного
        наследия. Перемещёние и изменение памятника истории и культуры
        запрещаются
      </Say>

      <Say image={{uri: archkot4Png, style: {width: '100%', bottom: 0}}}>
        —Исключение допускается лишь в случаях разрушения более семидесяти
        процентов памятника истории и культуры либо утраты историко-культурной
        значимости
      </Say>

      <Say image={{uri: archkot4Png, style: {width: '100%', bottom: 0}}}>
        —или если его перемещёние и изменение повлекут улучшение условий его
        сохранения. Да и в общей сложности, это крайне дорогая процедура
      </Say>

      <Say>
        {
          'По итогу слушаний собралась рабочая группа активистов, отстаивающих сохранение памятника архитектуры\n\n[Ссылка “кто вошел в рабочую группу”](#)'
        }
      </Say>

      <Scene src={bgAirportJpg} />

      <Say>
        {
          'Они написали письмо в EBRD (European bank of construction and development), спонсирующих проект\n\n[Ссылка*19 Письмо](#)'
        }
      </Say>

      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say>А ещё организовали пресс-конференцию</Say>

      <Scene src={bgArchcodeOfficeJpg} />

      <Say image={{uri: archkot11Png, style: {width: '100%', bottom: 0}}}>
        И нам удалось приостановить проект по строительству нового терминала
      </Say>

      <Say image={{uri: archkot9Png, style: {width: '100%', bottom: 0}}}>
        Родной старенький VIP терминал ещё стоит нетронутый, и мы обязательно
        добьемся того, чтобы его сохранили в новом проекте
      </Say>

      <Say hide={-1}>Продолжение следует…</Say>

      <Title hide={-1}>Конец игры</Title>

      <Menu
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch>
  )
}
