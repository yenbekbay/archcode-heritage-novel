import {
  aKordeevPng,
  angryCrowd1Png,
  archkot1Png,
  archkot4Png,
  assistant3Png,
  bgAirportJpg,
  bgCityHallConferenceRoomJpg,
  bgCityHallOutsideJpg,
  bgDeveloperHqInsideJpg,
  chatterOgg,
  developerRepB7Png,
  developerRepB9Png,
  letterPng,
  mayor7Png,
  sharatMibutovPng,
  stampApprovedPng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'

export function BranchDeveloper_ProjAirport_Demolish_IgnoreRisks_Approved() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg} />

      <Show
        src={{
          uri: letterPng,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            backgroundColor: '#e7dbab',
            transform: 'scale(2.5)',
            transformOrigin: '50% 35%',
          },
        }}
        hide={1}
      />

      <Show
        src={{
          uri: stampApprovedPng,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'translateY(-15%)',
          },
        }}
      />

      <Say
        tag={{text: 'Аким:', color: '#687065'}}
        image={{uri: mayor7Png, align: 'bottom', style: {bottom: '-12%'}}}>
        —Я согласен с вашими решениями. Можете начинать стройку
      </Say>

      <Scene src={bgAirportJpg} />

      <Say
        image={{uri: angryCrowd1Png, align: 'bottom'}}
        audio={{uri: chatterOgg, loop: true}}>
        Общественность возмущена
      </Say>

      <Scene src={bgDeveloperHqInsideJpg} />

      <Say
        image={{uri: developerRepB7Png, align: 'bottom'}}
        menu={[
          {
            label: 'Игнорировать',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Провести общественные слушаниям',
            onClick: (ctx) => ctx.skip(1),
          },
        ]}>
        Вечно всем надо совать свой нос в чужое дело… Что с этим делать?
      </Say>

      <Say>
        Можно игнорировать запросы, но общественные слушания придётся проводить
        в любом случае
      </Say>

      <Scene src={bgCityHallOutsideJpg} />

      <Say>Общественные слушания</Say>

      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say
        tag={{text: 'Зам. акима:', color: '#687065'}}
        image={{uri: assistant3Png, align: 'bottom'}}>
        —То, что есть сейчас, утратило историческую ценность. Когда-то, в 50-е
        годы, оно было таким, да, но сейчас — нет
      </Say>

      <Say
        tag={{text: 'Зам. акима:', color: '#687065'}}
        image={{uri: assistant3Png, align: 'bottom'}}>
        —Нет никаких исторических элементов, есть стеклянные электронные двери.
        Там почти всё поменяли. Всё изменилось до неузнаваемости в худшую
        сторону. Никаким туристам здание неинтересно
      </Say>

      <Say
        tag={{text: 'Член Общ. совета Шарат Мибутов:', color: '#8E8379'}}
        image={{uri: sharatMibutovPng, align: 'bottom'}}>
        —То, что предложила турецкая фирма, выглядело не очень. То есть, это
        обычная квадратная коробка, без какой-либо связи с Казахстаном
      </Say>

      <Say
        tag={{text: 'Член Общ. совета Шарат Мибутов:', color: '#8E8379'}}
        image={{uri: sharatMibutovPng, align: 'bottom'}}>
        —Был выбран экономичный вариант, который рассчитан только на увеличение
        пропускной способности терминала и максимизацию прибыли инвесторов
      </Say>

      <Say
        tag={'Вице президент “Аэропорт”\nА. Кордеев:'}
        image={{uri: aKordeevPng, align: 'bottom'}}>
        —Я не считаю его великим памятником. Оно не несёт функциональной
        нагрузки и занимает огромную площадь
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot1Png, align: 'bottom'}}>
        —Согласно закону об охране и использовании объектов историко-культурного
        наследия. Перемещёние и изменение памятника истории и культуры
        запрещаются
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png, align: 'bottom'}}>
        —Исключение допускается лишь в случаях разрушения более семидесяти
        процентов памятника истории и культуры либо утраты историко-культурной
        значимости
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png, align: 'bottom'}}>
        —или если его перемещёние и изменение повлекут улучшение условий его
        сохранения. Да и в общей сложности, это крайне дорогая процедура
      </Say>

      <Say>
        Слушания подошли к концу. Общественность не верит вашим словам, но
        теперь у вас собран целый альбом комментариев
      </Say>

      <Say
        image={{uri: developerRepB9Png, align: 'bottom'}}
        menu={[
          {
            label: 'Учесть мнения',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Developer_ProjAirport_Demolish_IgnoreRisks_Approved_Listen',
              ),
          },
          {
            label: 'Игнорировать',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Developer_ProjAirport_Demolish_IgnoreRisks_Approved_Ignore',
              ),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
