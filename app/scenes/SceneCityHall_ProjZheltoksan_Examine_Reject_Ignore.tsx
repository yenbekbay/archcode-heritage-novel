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
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneCityHall_ProjZheltoksan_Examine_Reject_Ignore() {
  return (
    <Scene.Container background={bgCityHallConferenceRoomJpg}>
      <Scene.Foreground
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
        lingers={1}
      />

      <Scene.Foreground
        src={stampApprovedPng}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'translateY(-15%)',
        }}
        transitory
      />

      <Scene.Foreground
        src={bgZheltoksanBeforeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={1}
      />

      <Scene.Say
        size="lg"
        foregroundSrc={angryCrowd1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Общественность возмущена
      </Scene.Say>

      <Scene.Say size="lg" transitory>
        Общественные слушания
      </Scene.Say>

      <Scene.Say
        tag="Девелопер:"
        foregroundSrc={developerRepPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Добрый день, я - представитель Bay Shatyr Group. В рамках проекта будет
        построено девятиэтажное здание
      </Scene.Say>

      <Scene.Say
        tag="Девелопер:"
        foregroundSrc={developerRepPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Под галереей на последнем этаже подразумевается ресторан. Подземный
        3-уровневый паркинг на 490 авто
      </Scene.Say>

      <Scene.Say
        tag="Активистка:"
        foregroundSrc={redhead12Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Но ведь это создаёт огромную нагрузку на транспортную инфраструктуру и
        не только…
      </Scene.Say>

      <Scene.Say
        tag="Девелопер:"
        foregroundSrc={developerRepPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Всё под контролем, беспокойств не будет. Всё рассчитано и одобрено
      </Scene.Say>

      <Scene.Say
        tag="Активистка:"
        foregroundSrc={redhead14Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Судя по всему, предполагается вырубка всех существующих на территории
        здания деревьев???
      </Scene.Say>

      <Scene.Say
        tag="Девелопер:"
        foregroundSrc={developerRepPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Согласно правилам маслихата по озеленению, в качестве компенсации мы
        обязуемся высадить соответствующее количество деревьев на землях общего
        пользования. Все по правилам, и придуманы они не нами
      </Scene.Say>

      <Scene.Say
        tag="Активистка:"
        foregroundSrc={redhead13Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        А в целом то, здание, хоть и не является официально памятником, но это
        история города! Его непременно нужно сохранить!!!
      </Scene.Say>

      <Scene.Say size="lg" transitory>
        Активисты решили бойкотировать слушания и покинуть конференц зал.
        Поднялся шум. Посыпались обоюдные оскорбления
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что делать с мнением общественности?
      </Scene.Say>

      <Scene.Choices
        choices={[
          {
            label: 'Учесть мнение',
            onClick: (ctx) =>
              ctx.goToScene('CityHall_ProjZheltoksan_Examine_Reject_Listen'),
          },
          {
            label: 'Игнорировать',
            onClick: (ctx) =>
              ctx.goToScene(
                'CityHall_ProjZheltoksan_Examine_Reject_Ignore_Ignore',
              ),
          },
        ]}
      />
    </Scene.Container>
  )
}
