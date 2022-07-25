import {
  archkot1Png,
  bgArchcodeOfficeJpg,
  bgCourtyardJpg,
  bgPhoneHandJpg,
  redhead19Png,
  transition1Mp3,
} from '~/assets/game'
import {Branch, Play, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sound'

export function BranchActivist_CheckOut_Act_Org() {
  return (
    <Branch>
      <Scene src={bgCourtyardJpg.src} audio={{onEntrance: transition1Mp3}} />

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
        {
          '—Без паники. Приходите, поделимся опытом\n\n[Переход на телеграм бот](https://t.me/archcode_bot)'
        }
      </Say>

      <Say
        frame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
            transform: 'rotate(-6deg)',
          },
        }}
        style={{fontSize: 24}}
        image={{
          uri: bgPhoneHandJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.25) translateX(-15px)',
          },
        }}>
        [Позвонить в Архкод](tel://+77071210483)
      </Say>

      <Play audio={SCENE_AUDIO.calmLoop} hide={-1} />

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
