import {
  akordeevPng,
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
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjAirport_Examine_Reject() {
  return (
    <Branch.Root background={bgCityHallMayorOfficeJpg}>
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
        lingers={2}
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
        lingers={1}
      />

      <Branch.Say transitory>Устроить общественное обсуждение</Branch.Say>

      <Branch.Foreground
        src={bgCityHallOutsideJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}
      />

      <Branch.Say placement="middle" scheme="dark" transitory>
        Общественные слушания
      </Branch.Say>

      <Branch.Foreground
        src={bgCityHallConferenceRoomJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Branch.Say
        tag="Зам. акима:"
        foregroundSrc={assistant3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —То, что есть сейчас, утратило историческую ценность. Когда-то, в 50-е
        годы, оно было таким, да, но сейчас — нет
      </Branch.Say>

      <Branch.Say
        foregroundSrc={assistant3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Нет никаких исторических элементов, есть стеклянные электронные двери.
        Там почти всё поменяли. Всё изменилось до неузнаваемости в худшую
        сторону. Никаким туристам здание неинтересно
      </Branch.Say>

      <Branch.Say
        tag="Член Общ. совета Шарат Мибутов:"
        foregroundSrc={sharatMibutovPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —То, что предложила турецкая фирма, выглядело не очень. То есть, это
        обычная квадратная коробка, без какой-либо связи с Казахстаном
      </Branch.Say>

      <Branch.Say
        foregroundSrc={sharatMibutovPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Был выбран экономичный вариант, который рассчитан только на увеличение
        пропускной способности терминала и максимизацию прибыли инвесторов
      </Branch.Say>

      <Branch.Say
        tag={'Вице президент “Аэропорт”\nА. Кордеев:'}
        foregroundSrc={akordeevPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Я не считаю его великим памятником. Оно не несёт функциональной
        нагрузки и занимает огромную площадь
      </Branch.Say>

      <Branch.Say
        tag="АрхКот:"
        foregroundSrc={archkot1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Согласно закону об охране и использовании объектов историко-культурного
        наследия. Перемещение и изменение памятника истории и культуры
        запрещаются
      </Branch.Say>

      <Branch.Say
        foregroundSrc={archkot4Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Исключение допускается лишь в случаях разрушения более семидесяти
        процентов памятника истории и культуры либо утраты историко-культурной
        значимости
      </Branch.Say>

      <Branch.Say
        foregroundSrc={archkot4Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —или если его перемещение и изменение повлекут улучшение условий его
        сохранения. Да и в общей сложности, это крайне дорогая процедура
      </Branch.Say>

      <Branch.Say transitory>
        Слушания подошли к концу. Общественность не верит вашим словам, но
        теперь у вас собран целый альбом комментариев
      </Branch.Say>

      <Branch.Say
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что делать с проектом?
      </Branch.Say>

      <Branch.Choices
        choices={[
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
        ]}
      />
    </Branch.Root>
  )
}
