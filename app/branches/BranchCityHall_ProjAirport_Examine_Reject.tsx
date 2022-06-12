import {
  aKordeevPng,
  archkot1Png,
  archkot4Png,
  assistant3Png,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  bgCityHallOutsideJpg,
  letterPng,
  mayor2Png,
  sharatMibutovPng,
  stampRejectedPng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchCityHall_ProjAirport_Examine_Reject() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg} />

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
          uri: stampRejectedPng,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'translateY(-15%)',
          },
        }}
      />

      <Scene src={bgCityHallMayorOfficeJpg} />

      <Say>Устроить общественное обсуждение</Say>

      <Scene src={bgCityHallOutsideJpg} />

      <Say placement="middle" scheme="dark">
        Общественные слушания
      </Say>

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
        image={{uri: mayor2Png, align: 'bottom'}}
        menu={[
          {
            label: 'Не одобрять',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjAirport_Examine_Reject_Reject'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjAirport_Examine_Reject_Approve'),
          },
        ]}>
        Что делать с проектом?
      </Say>
    </Branch>
  )
}
