import {
  archbot1Png,
  archkot10Png,
  archkot11Png,
  archkot12Png,
  archkot13Png,
  archkot1Png,
  archkot2Png,
  archkot3Png,
  archkot8Png,
  archtok1Png,
  archtok2Png,
  bgArchcodeOfficeJpg,
  bgBusStop1Jpg,
  bgBusStop2Jpg,
  bgPhoneHandJpg,
} from 'assets/game'
import {Branch, Say, Scene} from 'lib/game-engine'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam() {
  return (
    <Branch>
      <Scene src={bgBusStop2Jpg.src} audio={SCENE_AUDIO.city} />

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
        image={{uri: archkot13Png.src, align: 'bottom'}}>
        —Коллеги, экстренное дело! Разбирают остановку «Казмеханобр». Нужно это
        остановить!
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archtok1Png.src, align: 'bottom'}}>
        —Первое, что необходимо выяснить — это является ли здание памятником
        историко-культурного наследия
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
            onClick: (ctx) => ctx.goToNextStatement(2),
          },
        ]}>
        Является ли остановка «Казмеханобр» памятником?
      </Say>

      <Scene src={bgBusStop1Jpg.src} audio={SCENE_AUDIO.city} />

      <Say>Остановка «Казмеханобр» не является памятником архитектуры</Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{
          uri: archkot10Png.src,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —ЭТО НЕ ПАМЯТНИК!!!
      </Say>

      <Say
        image={{uri: archkot11Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Сдаться',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjBusStop_CheckOut_AssembleTeam_Bail'),
          },
          {
            label: 'Что ещё можно сделать?',
            onClick: (ctx) => ctx.goToNextStatement(),
          },
        ]}>
        Что делать?
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok1Png.src, align: 'bottom'}}>
        —Как можно быстрей вязаться с ответственными за демонтаж!
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        {`
          —Напишем статью для привлечения внимания!

          [Статья об истории возникновения остановки](${LINKS.article_bus_stop_background})
        `}
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok2Png.src, align: 'bottom'}}>
        —Мы должны действовать реактивно! Нельзя дать им уничтожить остановку…
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        —Возможно придеться ехать на место, чтобы требовать остановить демонтаж!
      </Say>

      <Scene src={bgBusStop1Jpg.src} audio={SCENE_AUDIO.city} />

      <Say>
        {`
          Вам удалось выйти на переговоры с владельцами павильона.

          Демонтаж остановлен!
        `}
      </Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot3Png.src, align: 'bottom'}}>
        —Но остановка в ужасном виде. Необходимо ее реставрировать
      </Say>

      <Scene src={bgBusStop2Jpg.src} audio={SCENE_AUDIO.city} />

      <Say>Реставрация остановки</Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        image={{uri: archkot1Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Отлично, на этом всё',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Archkot_ProjBusStop_CheckOut_AssembleTeam_StopHalfway',
              ),
          },
          {
            label: 'Надо довести всё до конца',
            onClick: (ctx) => ctx.goToNextStatement(),
          },
        ]}>
        Что делать теперь?
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot2Png.src, align: 'bottom'}}>
        {`
          —Надо довести дело до конца, ведь в городе ещё много уникальнейших остановок, которым грозит опасность

          [Составленная карта остановок](${LINKS.bus_stop_map})
        `}
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot12Png.src, align: 'bottom'}}>
        —Потрясающе! Чего только нет у нас в городе! Эти остановки необходимо
        внести в реестр памятников историкокультурного наследия!
      </Say>

      <Say
        image={{uri: archkot1Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Встретиться в акимате',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Archkot_ProjBusStop_CheckOut_AssembleTeam_VisitCityHall',
              ),
          },
          {
            label: 'Действовать самим',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Archkot_ProjBusStop_CheckOut_AssembleTeam_Submit',
              ),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
