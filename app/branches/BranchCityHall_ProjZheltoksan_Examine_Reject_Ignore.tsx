import {
  angryCrowd1Png,
  bgCityHallConferenceRoomJpg,
  bgZheltoksanBeforeJpg,
  developerRepPng,
  letterPng,
  mayor2Png,
  redhead12Png,
  redhead13Png,
  redhead14Png,
  stampApprovedPng,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjZheltoksan_Examine_Reject_Ignore() {
  return (
    <Branch.Root background={bgCityHallConferenceRoomJpg}>
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
        src={stampApprovedPng}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'translateY(-15%)',
        }}
        transitory
        lingers={1}
      />

      <Branch.Foreground
        src={bgZheltoksanBeforeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={1}
      />

      <Branch.Say
        size="lg"
        foregroundSrc={angryCrowd1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Общественность возмущена
      </Branch.Say>

      <Branch.Say size="lg" transitory>
        Общественные слушания
      </Branch.Say>

      <Branch.Say
        tag="Девелопер:"
        foregroundSrc={developerRepPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Добрый день, я — представитель Bay Shatyr Group. В рамках проекта будет
        построено девятиэтажное здание
      </Branch.Say>

      <Branch.Say
        tag="Девелопер:"
        foregroundSrc={developerRepPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Под галереей на последнем этаже подразумевается ресторан. Подземный
        3-уровневый паркинг на 490 авто
      </Branch.Say>

      <Branch.Say
        tag="Активистка:"
        foregroundSrc={redhead12Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Но ведь это создаёт огромную нагрузку на транспортную инфраструктуру и
        не только…
      </Branch.Say>

      <Branch.Say
        tag="Девелопер:"
        foregroundSrc={developerRepPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Всё под контролем, беспокойств не будет. Всё рассчитано и одобрено
      </Branch.Say>

      <Branch.Say
        tag="Активистка:"
        foregroundSrc={redhead14Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Судя по всему, предполагается вырубка всех существующих на территории
        здания деревьев???
      </Branch.Say>

      <Branch.Say
        tag="Девелопер:"
        foregroundSrc={developerRepPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Согласно правилам маслихата по озеленению, в качестве компенсации мы
        обязуемся высадить соответствующее количество деревьев на землях общего
        пользования. Все по правилам, и придуманы они не нами
      </Branch.Say>

      <Branch.Say
        tag="Активистка:"
        foregroundSrc={redhead13Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —А в целом то, здание, хоть и не является официально памятником, но это
        история города! Его непременно нужно сохранить!!!
      </Branch.Say>

      <Branch.Say size="lg" transitory>
        Активисты решили бойкотировать слушания и покинуть конференц зал.
        Поднялся шум. Посыпались обоюдные оскорбления
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что делать с мнением общественности?
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Учесть мнение',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjZheltoksan_Examine_Reject_Listen'),
          },
          {
            label: 'Игнорировать',
            onClick: (ctx) =>
              ctx.goToBranch(
                'CityHall_ProjZheltoksan_Examine_Reject_Ignore_Ignore',
              ),
          },
        ]}
      />
    </Branch.Root>
  )
}
