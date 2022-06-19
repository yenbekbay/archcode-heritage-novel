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
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam() {
  return (
    <Branch>
      <Scene src={bgBusStop2Jpg} />

      <Say image={{uri: archkot8Png, align: 'bottom'}}>
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

      <Say tag="АрхКот:" image={{uri: archkot13Png, align: 'bottom'}}>
        —Коллеги, экстренное дело! Разбирают остановку «Казмеханобр». Нужно это
        остановить!
      </Say>

      <Say tag="АрхКот:" image={{uri: archtok1Png, align: 'bottom'}}>
        —Первое, что необходимо выяснить — это является ли здание памятником
        историко-культурного наследия
      </Say>

      <Say tag="АрхБот:" image={{uri: archbot1Png, align: 'bottom'}}>
        —Загляните в ГОСУДАРСТВЕННЫЙ РЕЕСТР ПАМЯТНИКОВ
      </Say>

      <Say tag="АрхБот:" image={{uri: archbot1Png, align: 'bottom'}}>
        {'—Там можно поискать нужное нам здание.\n\n[Ссылка РЕЕСТР](#)'}
      </Say>

      <Say
        tag="АрхТок:"
        image={{uri: archtok2Png, align: 'bottom'}}
        menu={[
          {
            label: 'Да',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Нет',
            onClick: (ctx) => ctx.skip(2),
          },
        ]}>
        Является ли остановка «Казмеханобр» памятником?
      </Say>

      <Scene src={bgBusStop1Jpg} />

      <Say>Остановка «Казмеханобр» не является памятником архитектуры</Say>

      <Scene src={bgArchcodeOfficeJpg} />

      <Say
        tag="АрхКот:"
        image={{
          uri: archkot10Png,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —ЭТО НЕ ПАМЯТНИК!!!
      </Say>

      <Say
        image={{uri: archkot11Png, align: 'bottom'}}
        menu={[
          {
            label: 'Сдаться',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjBusStop_CheckOut_AssembleTeam_Bail'),
          },
          {
            label: 'Что ещё можно сделать?',
            onClick: (ctx) => ctx.skip(),
          },
        ]}>
        Что делать?
      </Say>

      <Say tag="АрхТок:" image={{uri: archtok1Png, align: 'bottom'}}>
        —Как можно быстрей вязаться с ответственными за демонтаж!
      </Say>

      <Say tag="АрхБот:" image={{uri: archbot1Png, align: 'bottom'}}>
        {
          '—Я уже подготовил письмо в акимат:\n\n[Ссылка на письмо, отправленное в день демонтажа](#)'
        }
      </Say>

      <Say tag="АрхТок:" image={{uri: archtok2Png, align: 'bottom'}}>
        —Неплохо бы ещё подготовить статью, чтобы привлечь внимание
      </Say>

      <Say tag="АрхБот:" image={{uri: archbot1Png, align: 'bottom'}}>
        {'—Вуаля!:\n\n[Ссылка на статьи и посты о демонтаже Казмеханобра](#)'}
      </Say>

      <Scene src={bgBusStop1Jpg} />

      <Say>Поздравляем! Вам удалось остановить демонтаж остановки</Say>

      <Scene src={bgArchcodeOfficeJpg} />

      <Say tag="АрхКот:" image={{uri: archkot3Png, align: 'bottom'}}>
        —Но остановка в ужасном виде. Необходимо ее реставрировать
      </Say>

      <Scene src={bgBusStop2Jpg} />

      <Say>Реставрация остановки</Say>

      <Scene src={bgArchcodeOfficeJpg} />

      <Say
        image={{uri: archkot1Png, align: 'bottom'}}
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
            onClick: (ctx) => ctx.skip(),
          },
        ]}>
        Что делать теперь?
      </Say>

      <Say tag="АрхКот:" image={{uri: archkot2Png, align: 'bottom'}}>
        {
          '—Надо довести дело до конца, ведь в городе ещё много уникальнейших остановок, которым грозит опасность\n\n[Ссылка с составленной картой остановок](#)'
        }
      </Say>

      <Say tag="АрхКот:" image={{uri: archkot12Png, align: 'bottom'}}>
        —Потрясающе! Чего только нет у нас в городе! Эти остановки необходимо
        внести в реестр памятников историкокультурного наследия!
      </Say>

      <Say
        image={{uri: archkot1Png, align: 'bottom'}}
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
