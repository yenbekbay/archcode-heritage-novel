import {
  bgCityHallConferenceRoomJpg,
  journalistPng,
  mayor2Png,
  sabitPng,
} from 'assets/game'
import {Branch, Say, Scene} from 'lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjZheltoksan_Approve_Debate() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say>
        Встреча с руководителем управления архитектуры и градостроительства
        Сабитом Гадырбаевым
      </Say>

      <Say
        tag={{text: 'Сабит:', color: '#687065'}}
        image={{uri: sabitPng.src, align: 'bottom'}}>
        —По сохранению исторического наследия я на 200% с вами согласен. Но по
        этому зданию, чтобы его непременно сохранить, я бы так не упирался
      </Say>

      <Say
        tag={{text: 'Сабит:', color: '#687065'}}
        image={{uri: sabitPng.src, align: 'bottom'}}>
        —Вы помните фасад этого здания. Его переделывали 6 раз. Каждый министр
        приходил и «вкладывал» в это здание свое архитектурное видение
      </Say>

      <Say
        tag={{text: 'Сабит:', color: '#687065'}}
        image={{uri: sabitPng.src, align: 'bottom'}}>
        —Раньше оно было желтым, а сейчас это сине-зеленый базар. Скажите, что
        мы бережем?
      </Say>

      <Say
        tag={{text: 'Сабит:', color: '#687065'}}
        image={{uri: sabitPng.src, align: 'bottom'}}>
        —Там вверху стоят коринфские ордера, на третьем этаже деревянная
        лепнина. Да там такое намешали!
      </Say>

      <Say
        tag={{text: 'Сабит:', color: '#687065'}}
        image={{uri: sabitPng.src, align: 'bottom'}}>
        —Этого вообще нельзя допускать! Для чего его беречь, если в нем нет
        единого архитектурного стиля?!
      </Say>

      <Say
        tag={{text: 'Ив Жени Моцарелко:', color: '#687065'}}
        image={{uri: journalistPng.src, align: 'bottom'}}>
        —Здание находится напротив памятника истории и культуры - бывшего здания
        гостиницы «Иссык» («Дом делегатов», ныне офис компании Zepter) и,
        возможно, входит в зону регулируемой застройки
      </Say>

      <Say
        tag={{text: 'Ив Жени Моцарелко:', color: '#687065'}}
        image={{uri: journalistPng.src, align: 'bottom'}}>
        —Таким образом, снос здания бывшего Госплана может привести к нарушению
        архитектурной композиции…
      </Say>

      <Say
        tag={{text: 'Сабит:', color: '#687065'}}
        image={{uri: sabitPng.src, align: 'bottom'}}>
        —Никто ещё ничего не сносит. У владельцев есть намерение. И они
        приносили нам 4 проекта, которые мы отклонили
      </Say>

      <Say
        tag={{text: 'Сабит:', color: '#687065'}}
        image={{uri: sabitPng.src, align: 'bottom'}}>
        —Они предлагали построить 9-этажное здание в стиле модерн, торговый
        центр и другие проекты
      </Say>

      <Say
        tag={{text: 'Сабит:', color: '#687065'}}
        image={{uri: sabitPng.src, align: 'bottom'}}>
        —В этом районе историческая застройка, и мы сказали, чтобы они
        подготовили проект в неоклассическом стиле
      </Say>

      <Say
        tag={{text: 'Сабит:', color: '#687065'}}
        image={{uri: sabitPng.src, align: 'bottom'}}>
        —Сейчас они готовят новый проект. На этом мы остановились
      </Say>

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Учесть мнение',
            onClick: (ctx) =>
              ctx.goToBranch('Akim_ProjZheltoksan_Examine_Reject_Listen'),
          },
          {
            label: 'Игнорировать',
            onClick: (ctx) =>
              ctx.goToBranch('Akim_ProjZheltoksan_Examine_Reject_Ignore'),
          },
        ]}>
        Что делать с мнением общественности?
      </Say>
    </Branch>
  )
}
