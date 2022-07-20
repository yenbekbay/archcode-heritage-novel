import {
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  bgPhoneHandJpg,
  botBuilderPng,
  developerRepB11Png,
  hologramOgg,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib/game-engine'

export function BranchDeveloper_ProjAirport_Demolish_IgnoreRisks_Approved_Ignore() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqOutsideJpg} />
      <Scene src={bgDeveloperHqInsideJpg} />

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
          uri: bgPhoneHandJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.25) translateX(-15px)',
          },
        }}>
        {'e-mail:\n\nМы вынуждены заморозить проект, финансирование отозвали'}
      </Say>

      <Say image={{uri: developerRepB11Png, align: 'bottom'}}>
        —ЧТО СЛУЧИЛОСЬ??!
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng, align: 'bottom'}}
        audio={hologramOgg}>
        {
          'В результате слушаний была собрана рабочая группа по мониторингу проекта от общественности\n\n[Ссылка](#)'
        }
      </Say>

      <Say>
        Общественностью инициирована пресс конференция, а еще они письмо в EBRD.
        В результате всего этого мы вынуждены притормозить проект
      </Say>

      <Say hide={-1}>Продолжение следует…</Say>

      <Title hide={-1}>Конец игры</Title>

      <Menu
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch>
  )
}
