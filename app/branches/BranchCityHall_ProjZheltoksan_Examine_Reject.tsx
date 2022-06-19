import {
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  journalistPng,
  letterPng,
  mayor2Png,
  sabitPng,
  stampRejectedPng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchCityHall_ProjZheltoksan_Examine_Reject() {
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

      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say>
        Встреча с руководителем управления архитектуры и градостроительства
        Сабитом Гадырбаевым
      </Say>

      <Say
        tag="Сабит:"
        image={{uri: sabitPng, style: {width: '100%', bottom: 0}}}>
        —По сохранению исторического наследия я на 200% с вами согласен. Но по
        этому зданию, чтобы его непременно сохранить, я бы так не упирался
      </Say>

      <Say image={{uri: sabitPng, style: {width: '100%', bottom: 0}}}>
        —Вы помните фасад этого здания. Его переделывали 6 раз. Каждый министр
        приходил и «вкладывал» в это здание свое архитектурное видение
      </Say>

      <Say image={{uri: sabitPng, style: {width: '100%', bottom: 0}}}>
        —Раньше оно было желтым, а сейчас это сине-зеленый базар. Скажите, что
        мы бережем?
      </Say>

      <Say image={{uri: sabitPng, style: {width: '100%', bottom: 0}}}>
        —Там вверху стоят коринфские ордера, на третьем этаже деревянная
        лепнина. Да там такое намешали!
      </Say>

      <Say image={{uri: sabitPng, style: {width: '100%', bottom: 0}}}>
        —Этого вообще нельзя допускать! Для чего его беречь, если в нем нет
        единого архитектурного стиля?!
      </Say>

      <Say
        tag="Журналист:"
        image={{uri: journalistPng, style: {width: '100%', bottom: 0}}}>
        —Здание находится напротив памятника истории и культуры — бывшего здания
        гостиницы «Иссык» («Дом делегатов», ныне офис компании Zepter) и,
        возможно, входит в зону регулируемой застройки
      </Say>

      <Say image={{uri: journalistPng, style: {width: '100%', bottom: 0}}}>
        —Таким образом, снос здания бывшего Госплана может привести к нарушению
        архитектурной композиции…
      </Say>

      <Say
        tag="Сабит:"
        image={{uri: sabitPng, style: {width: '100%', bottom: 0}}}>
        —Никто ещё ничего не сносит. У владельцев есть намерение. И они
        приносили нам 4 проекта, которые мы отклонили
      </Say>

      <Say image={{uri: sabitPng, style: {width: '100%', bottom: 0}}}>
        —Они предлагали построить 9-этажное здание в стиле модерн, торговый
        центр и другие проекты
      </Say>

      <Say image={{uri: sabitPng, style: {width: '100%', bottom: 0}}}>
        —В этом районе историческая застройка, и мы сказали, чтобы они
        подготовили проект в неоклассическом стиле
      </Say>

      <Say image={{uri: sabitPng, style: {width: '100%', bottom: 0}}}>
        —Сейчас они готовят новый проект. На этом мы остановились
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
              ctx.goToBranch('CityHall_ProjZheltoksan_Examine_Reject_Ignore'),
          },
        ]}>
        Что делать с мнением общественности?
      </Say>
    </Branch>
  )
}
