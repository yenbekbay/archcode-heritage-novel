import {
  angryCrowd1Png,
  bgCityHallConferenceRoomJpg,
  bgZheltoksanBeforeJpg,
  chatterMp3,
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
  transition1Mp3,
  transition2ShortMp3,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'
import {SCENE_AUDIO} from '../sound'

export function BranchCityHall_ProjZheltoksan_Examine_Reject_Ignore() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Show
        src={{
          uri: letterPng.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            backgroundColor: '#e7dbab',
            transform: 'scale(2.5)',
            transformOrigin: '50% 35%',
          },
        }}
        hide={2}
      />

      <Show
        src={{
          uri: stampApprovedPng.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'translateY(-15%)',
          },
        }}
      />

      <Scene src={bgZheltoksanBeforeJpg.src} audio={SCENE_AUDIO.city} />

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={SCENE_AUDIO.chatter}>
        Общественность возмущена
      </Say>

      <Say audio={{onEntrance: transition1Mp3}}>Общественные слушания</Say>

      <Scene
        src={bgCityHallConferenceRoomJpg.src}
        audio={SCENE_AUDIO.hearings}
      />

      <Say
        tag={{text: 'Представитель:', color: '#A57B55'}}
        image={{uri: developerRepAPng.src, align: 'bottom'}}>
        —Добрый день, я — представитель Bay Shatyr Group. В рамках проекта будет
        построено девятиэтажное здание
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB6Png.src, align: 'bottom'}}>
        —Под галереей на последнем этаже подразумевается ресторан. Подземный
        3-уровневый паркинг на 490 авто
      </Say>

      <Say
        tag={{text: 'Активистка:', color: '#C2653A'}}
        image={{uri: redhead12Png.src, align: 'bottom'}}>
        —Но ведь это создаёт огромную нагрузку на транспортную инфраструктуру и
        не только…
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB1Png.src, align: 'bottom'}}>
        —Всё под контролем, беспокойств не будет. Всё рассчитано и одобрено
      </Say>

      <Say
        tag={{text: 'Активистка:', color: '#C2653A'}}
        image={{uri: redhead14Png.src, align: 'bottom'}}>
        —Судя по всему, предполагается вырубка всех существующих на территории
        здания деревьев???
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB7Png.src, align: 'bottom'}}>
        —Согласно правилам маслихата по озеленению, в качестве компенсации мы
        обязуемся высадить соответствующее количество деревьев на землях общего
        пользования. Всё по правилам, и придуманы они не нами
      </Say>

      <Say
        tag={{text: 'Активистка:', color: '#C2653A'}}
        image={{uri: redhead13Png.src, align: 'bottom'}}>
        —А в целом то, здание, хоть и не является официально памятником, но это
        история города! Его непременно нужно сохранить!!!
      </Say>

      <Say>
        Активисты решили бойкотировать слушания и покинуть конференц зал.
        Поднялся шум. Посыпались обоюдные оскорбления
      </Say>

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
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
