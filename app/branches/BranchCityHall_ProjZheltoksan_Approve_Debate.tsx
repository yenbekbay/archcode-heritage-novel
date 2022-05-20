import {
  bgCityHallConferenceRoomJpg,
  journalist1Png,
  mayor2Png,
  sabit1Png,
} from '~/assets/game'
import {makeBranch} from '~/lib'

const Branch = makeBranch()

export function BranchCityHall_ProjZheltoksan_Approve_Debate() {
  return (
    <Branch.Container background={bgCityHallConferenceRoomJpg}>
      <Branch.Say transitory>
        Встреча с руководителем управления архитектуры и градостроительства
        Сабитом Гадырбаевым
      </Branch.Say>

      <Branch.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        По сохранению исторического наследия я на 200% с вами согласен. Но по
        этому зданию, чтобы его непременно сохранить, я бы так не упирался
      </Branch.Say>

      <Branch.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Вы помните фасад этого здания. Его переделывали 6 раз. Каждый министр
        приходил и «вкладывал» в это здание свое архитектурное видение
      </Branch.Say>

      <Branch.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Раньше оно было желтым, а сейчас это сине-зеленый базар. Скажите, что мы
        бережем?
      </Branch.Say>

      <Branch.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Там вверху стоят коринфские ордера, на третьем этаже деревянная лепнина.
        Да там такое намешали!
      </Branch.Say>

      <Branch.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Этого вообще нельзя допускать! Для чего его беречь, если в нем нет
        единого архитектурного стиля?!
      </Branch.Say>

      <Branch.Say
        tag="Журналист:"
        foregroundSrc={journalist1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Здание находится напротив памятника истории и культуры - бывшего здания
        гостиницы «Иссык» («Дом делегатов», ныне офис компании Zepter) и,
        возможно, входит в зону регулируемой застройки
      </Branch.Say>

      <Branch.Say
        tag="Журналист:"
        foregroundSrc={journalist1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Таким образом, снос здания бывшего Госплана может привести к нарушению
        архитектурной композиции…
      </Branch.Say>

      <Branch.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Никто еще ничего не сносит. У владельцев есть намерение. И они приносили
        нам 4 проекта, которые мы отклонили
      </Branch.Say>

      <Branch.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Они предлагали построить 9-этажное здание в стиле модерн, торговый центр
        и другие проекты
      </Branch.Say>

      <Branch.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        В этом районе историческая застройка, и мы сказали, чтобы они
        подготовили проект в неоклассическом стиле
      </Branch.Say>

      <Branch.Say
        tag="Сабит:"
        foregroundSrc={sabit1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Сейчас они готовят новый проект. На этом мы остановились
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
              ctx.goToBranch('CityHall_ProjZheltoksan_Examine_Reject_Ignore'),
          },
        ]}
      />
    </Branch.Container>
  )
}
