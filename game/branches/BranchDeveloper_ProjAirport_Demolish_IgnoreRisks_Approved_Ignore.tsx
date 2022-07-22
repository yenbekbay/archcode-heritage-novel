import {
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  bgPhoneHandJpg,
  botBuilderPng,
  developerRepB11Png,
  hologramMp3,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchDeveloper_ProjAirport_Demolish_IgnoreRisks_Approved_Ignore() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqOutsideJpg.src} />
      <Scene src={bgDeveloperHqInsideJpg.src} />

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
        {'e-mail:\n\nМы вынуждены заморозить проект, финансирование отозвали'}
      </Say>

      <Say image={{uri: developerRepB11Png.src, align: 'bottom'}}>
        —ЧТО СЛУЧИЛОСЬ??!
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={hologramMp3}>
        {
          'В результате слушаний была собрана рабочая группа по мониторингу проекта от общественности\n\n[Ссылка](#)'
        }
      </Say>

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
