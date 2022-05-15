import {
  bgCityHallConferenceRoomJpg,
  journalist1Png,
  mayor2Png,
  sabit1Png,
} from '~/assets/game'
import {Say, SceneContainer} from '~/lib'

export function SceneCityHall1_2a_3a_4b_5b() {
  return (
    <SceneContainer background={bgCityHallConferenceRoomJpg}>
      <Say transitory>
        Встреча с руководителем управления архитектуры и градостроительства
        Сабитом Гадырбаевым
      </Say>

      <Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        По сохранению исторического наследия я на 200% с вами согласен. Но по
        этому зданию, чтобы его непременно сохранить, я бы так не упирался
      </Say>

      <Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Вы помните фасад этого здания. Его переделывали 6 раз. Каждый министр
        приходил и «вкладывал» в это здание свое архитектурное видение
      </Say>

      <Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Раньше оно было желтым, а сейчас это сине-зеленый базар. Скажите, что мы
        бережем?
      </Say>

      <Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Там вверху стоят коринфские ордера, на третьем этаже деревянная лепнина.
        Да там такое намешали!
      </Say>

      <Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Этого вообще нельзя допускать! Для чего его беречь, если в нем нет
        единого архитектурного стиля?!
      </Say>

      <Say
        tag="Журналист:"
        foregroundSrc={journalist1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Здание находится напротив памятника истории и культуры - бывшего здания
        гостиницы «Иссык» («Дом делегатов», ныне офис компании Zepter) и,
        возможно, входит в зону регулируемой застройки
      </Say>

      <Say
        tag="Журналист:"
        foregroundSrc={journalist1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Таким образом, снос здания бывшего Госплана может привести к нарушению
        архитектурной композиции…
      </Say>

      <Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Никто еще ничего не сносит. У владельцев есть намерение. И они приносили
        нам 4 проекта, которые мы отклонили
      </Say>

      <Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Они предлагали построить 9-этажное здание в стиле модерн, торговый центр
        и другие проекты
      </Say>

      <Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        В этом районе историческая застройка, и мы сказали, чтобы они
        подготовили проект в неоклассическом стиле
      </Say>

      <Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Сейчас они готовят новый проект. На этом мы остановились
      </Say>

      <Say
        options={[
          {
            label: 'Учесть мнение',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a_4a_5a_6a'),
          },
          {
            label: 'Игнорировать',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a_4a_5a_6b'),
          },
        ]}
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}>
        Что делать с мнением общественности?
      </Say>
    </SceneContainer>
  )
}
