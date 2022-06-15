import {
  angryCrowd1Png,
  bgCityHallConferenceRoomJpg,
  bgZheltoksanBeforeJpg,
  developerRepAPng,
  developerRepB1Png,
  developerRepB6Png,
  developerRepB7Png,
  letterPng,
  mayor2Png,
  redhead12Png,
  redhead13Png,
  redhead14Png,
  stampApprovedPng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchCityHall_ProjZheltoksan_Examine_Reject_Ignore() {
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
        visibility={2}
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

      <Scene src={bgZheltoksanBeforeJpg} />

      <Say image={{uri: angryCrowd1Png, style: {width: '100%', bottom: 0}}}>
        Общественность возмущена
      </Say>

      <Say>Общественные слушания</Say>

      <Say
        tag="Представитель:"
        image={{uri: developerRepAPng, style: {width: '100%', bottom: 0}}}>
        —Добрый день, я — представитель Bay Shatyr Group. В рамках проекта будет
        построено девятиэтажное здание
      </Say>

      <Say
        tag="Девелопер:"
        image={{uri: developerRepB6Png, style: {width: '100%', bottom: 0}}}>
        —Под галереей на последнем этаже подразумевается ресторан. Подземный
        3-уровневый паркинг на 490 авто
      </Say>

      <Say
        tag="Активистка:"
        image={{uri: redhead12Png, style: {width: '100%', bottom: 0}}}>
        —Но ведь это создаёт огромную нагрузку на транспортную инфраструктуру и
        не только…
      </Say>

      <Say
        tag="Девелопер:"
        image={{uri: developerRepB1Png, style: {width: '100%', bottom: 0}}}>
        —Всё под контролем, беспокойств не будет. Всё рассчитано и одобрено
      </Say>

      <Say
        tag="Активистка:"
        image={{uri: redhead14Png, style: {width: '100%', bottom: 0}}}>
        —Судя по всему, предполагается вырубка всех существующих на территории
        здания деревьев???
      </Say>

      <Say
        tag="Девелопер:"
        image={{uri: developerRepB7Png, style: {width: '100%', bottom: 0}}}>
        —Согласно правилам маслихата по озеленению, в качестве компенсации мы
        обязуемся высадить соответствующее количество деревьев на землях общего
        пользования. Все по правилам, и придуманы они не нами
      </Say>

      <Say
        tag="Активистка:"
        image={{uri: redhead13Png, style: {width: '100%', bottom: 0}}}>
        —А в целом то, здание, хоть и не является официально памятником, но это
        история города! Его непременно нужно сохранить!!!
      </Say>

      <Say>
        Активисты решили бойкотировать слушания и покинуть конференц зал.
        Поднялся шум. Посыпались обоюдные оскорбления
      </Say>

      <Say
        image={{uri: mayor2Png, style: {width: '100%', bottom: 0}}}
        menu={[
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
        ]}>
        Что делать с мнением общественности?
      </Say>
    </Branch>
  )
}
