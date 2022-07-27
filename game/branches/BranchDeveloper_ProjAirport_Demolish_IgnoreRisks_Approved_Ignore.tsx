import {
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  bgPhoneHandJpg,
  botBuilderPng,
  developerRepB11Png,
  hologramMp3,
  transition1Mp3,
  transition2ShortMp3,
} from 'assets/game'
import {Branch, Play, Say, Scene} from 'lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_ProjAirport_Demolish_IgnoreRisks_Approved_Ignore() {
  return (
    <Branch>
      <Scene
        src={bgDeveloperHqOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />
      <Scene
        src={bgDeveloperHqInsideJpg.src}
        audio={{...SCENE_AUDIO.indoor, onEntrance: transition2ShortMp3}}
      />

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
        {`
          e-mail:

          Мы вынуждены заморозить проект, финансирование отозвали
        `}
      </Say>

      <Say image={{uri: developerRepB11Png.src, align: 'bottom'}}>
        —ЧТО СЛУЧИЛОСЬ??!
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={{onEntrance: hologramMp3}}>
        {`
          В результате слушаний была собрана рабочая группа по мониторингу проекта от общественности

          [Кто вошел в рабочую группу?](${LINKS.working_group_members_airport})
        `}
      </Say>

      <Play audio={SCENE_AUDIO.calmLoop} hide={-1} />

      <Say>
        Общественностью инициирована пресс конференция, а еще они письмо в EBRD.
        В результате всего этого мы вынуждены притормозить проект
      </Say>

      <Say hide={-1}>Продолжение следует…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
