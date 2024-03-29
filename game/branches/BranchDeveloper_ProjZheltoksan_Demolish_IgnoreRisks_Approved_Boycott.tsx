import {
  angryCrowd1Png,
  bgDeveloperHqInsideJpg,
  bgZheltoksanBeforeJpg,
  redhead11Png,
} from 'assets/game'
import {Branch, Say, Scene} from 'react-visual-novel'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_ProjZheltoksan_Demolish_IgnoreRisks_Approved_Boycott() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'Активистка:', color: '#C2653A'}}
        image={{uri: redhead11Png.src, align: 'bottom'}}
      >
        —8 сентября вы получаете задание, 15-го числа его где-то утверждают, а
        сегодня вдруг идут слушания. Здесь вы говорите о документах, — говорите
        «потом вы можете остаться и посмотреть»
      </Say>

      <Say
        tag={{text: 'Активистка:', color: '#C2653A'}}
        image={{uri: redhead11Png.src, align: 'bottom'}}
      >
        —Мы хотим сейчас! Почему вы это не организовали? Вы могли вывести
        документы на большой экран, чтобы каждый из нас видел!
      </Say>

      <Scene src={bgZheltoksanBeforeJpg.src} audio={SCENE_AUDIO.city} />

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={SCENE_AUDIO.chatter}
      >
        Бойкот
      </Say>

      <Say
        menu={[
          {
            label: 'Учесть мнения',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Developer_ProjZheltoksan_Demolish_IgnoreRisks_Approved__Reconsider',
              ),
          },
          {
            label: 'Продолжить стройку',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Developer_ProjZheltoksan_Demolish_IgnoreRisks_Approved__Continue',
              ),
          },
        ]}
      >
        Что делать?
      </Say>
    </Branch>
  )
}
