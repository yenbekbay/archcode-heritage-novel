import {
  bgCityHallConferenceRoomJpg,
  journalist1Png,
  letterPng,
  mayor2Png,
  sabit1Png,
  stampRejectedPng,
} from '~/assets/game'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneCityHall_ProjZheltoksan_Examine_Reject() {
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
        src={stampRejectedPng}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'translateY(-15%)',
        }}
        transitory
      />

      <Scene.Say transitory>
        Встреча с руководителем управления архитектуры и градостроительства
        Сабитом Гадырбаевым
      </Scene.Say>

      <Scene.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        По сохранению исторического наследия я на 200% с вами согласен. Но по
        этому зданию, чтобы его непременно сохранить, я бы так не упирался
      </Scene.Say>

      <Scene.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Вы помните фасад этого здания. Его переделывали 6 раз. Каждый министр
        приходил и «вкладывал» в это здание свое архитектурное видение
      </Scene.Say>

      <Scene.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Раньше оно было желтым, а сейчас это сине-зеленый базар. Скажите, что мы
        бережем?
      </Scene.Say>

      <Scene.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}>
        Там вверху стоят коринфские ордера, на третьем этаже деревянная лепнина.
        Да там такое намешали!
      </Scene.Say>

      <Scene.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Этого вообще нельзя допускать! Для чего его беречь, если в нем нет
        единого архитектурного стиля?!
      </Scene.Say>

      <Scene.Say
        tag="Журналист:"
        foregroundSrc={journalist1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Здание находится напротив памятника истории и культуры - бывшего здания
        гостиницы «Иссык» («Дом делегатов», ныне офис компании Zepter) и,
        возможно, входит в зону регулируемой застройки
      </Scene.Say>

      <Scene.Say
        tag="Журналист:"
        foregroundSrc={journalist1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Таким образом, снос здания бывшего Госплана может привести к нарушению
        архитектурной композиции…
      </Scene.Say>

      <Scene.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Никто еще ничего не сносит. У владельцев есть намерение. И они приносили
        нам 4 проекта, которые мы отклонили
      </Scene.Say>

      <Scene.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Они предлагали построить 9-этажное здание в стиле модерн, торговый центр
        и другие проекты
      </Scene.Say>

      <Scene.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        В этом районе историческая застройка, и мы сказали, чтобы они
        подготовили проект в неоклассическом стиле
      </Scene.Say>

      <Scene.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Сейчас они готовят новый проект. На этом мы остановились
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
              ctx.goToScene('CityHall_ProjZheltoksan_Examine_Reject_Ignore'),
          },
        ]}
      />
    </Scene.Container>
  )
}
