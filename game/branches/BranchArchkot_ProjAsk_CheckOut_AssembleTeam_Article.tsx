import {
  archkot7Png,
  bgAskAfterJpg,
  bgAskBeforeFenceGif,
  bgLaptopStandaloneJpg,
  bgSolidJpg,
} from 'assets/game'
import {Branch, Say, Scene} from 'react-visual-novel'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchArchkot_ProjAsk_CheckOut_AssembleTeam_Article() {
  return (
    <Branch>
      <Say
        image={{
          uri: bgLaptopStandaloneJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}
      >
        Статья вышла неплохая. Просмотров было достаточно, а процесс
        реконструкции продолжался
      </Say>

      <Scene
        src={bgAskBeforeFenceGif.src}
        audio={SCENE_AUDIO.city}
        durationMs={6000}
      />

      <Scene src={bgAskAfterJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say image={{uri: archkot7Png.src, align: 'bottom'}}>
        Здание изменено до неузнаваемости, и теперь это уже не имеет отношения к
        историко-культурному наследию
      </Say>

      <Scene src={bgSolidJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say durationMs={8000}>
        {`
          В память об архитекторе Александре Коржемпо
          1934-2022
        `}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
