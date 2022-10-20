import {
  archkot1Png,
  bgArchcodeOfficeJpg,
  bgCourtyardJpg,
  redhead19Png,
  transition2ShortMp3,
} from 'assets/game'
import {Branch, Play, Say, Scene} from 'react-visual-novel'
import {GameOverMenu, GameOverTitle} from '../commands'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchActivist_CheckOut_Act_Org() {
  return (
    <Branch>
      <Scene
        src={bgCourtyardJpg.src}
        audio={{...SCENE_AUDIO.city, onEntrance: transition2ShortMp3}}
      />

      <Say image={{uri: redhead19Png.src, align: 'bottom'}}>
        —Алло, здравствуйте, это Архкод?
      </Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{uri: archkot1Png.src, align: 'bottom'}}>
        —Здравствуйте, да, я вас слушаю
      </Say>

      <Scene src={bgCourtyardJpg.src} audio={SCENE_AUDIO.city} />

      <Say image={{uri: redhead19Png.src, align: 'bottom'}}>
        —Непонятно, что творится! Забор там! Здание снесут! Уничтожат!
        Испоганят!!! Что делать???
      </Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{uri: archkot1Png.src, align: 'bottom'}}>
        {`
          —Без паники. Приходите, поделимся опытом

          [Переход на Телеграм-бот](${LINKS.telegram_bot})
        `}
      </Say>

      <Play audio={SCENE_AUDIO.calmLoop} hide={-1} />

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
