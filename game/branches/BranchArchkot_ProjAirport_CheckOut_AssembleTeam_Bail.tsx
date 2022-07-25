import {
  archbot1Png,
  archtok3Png,
  bgAirportFenceGif,
  fenceMp3,
  fencePng,
} from '~/assets/game'
import {Branch, Play, Say, Scene, Show} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sound'

export function BranchArchkot_ProjAirport_CheckOut_AssembleTeam_Bail() {
  return (
    <Branch>
      <Scene
        src={bgAirportFenceGif.src}
        audio={SCENE_AUDIO.city}
        durationMs={6000}
      />

      <Say>
        Здание изменено до неузнаваемости, и теперь это уже не имеет отношения к
        историко-культурному наследию
      </Say>

      <Show
        src={{
          uri: fencePng.src,
          style: {height: '100%', transform: 'translate(-50%) scale(1.15)'},
          animation: {
            initial: {x: '250%', scale: 0.5, originY: 1},
            entrance: {
              x: 0,
              scale: 1,
              transition: {duration: 2},
            },
            exit: {
              opacity: 0,
              transition: {duration: 0.5, ease: 'easeOut'},
            },
          },
        }}
        audio={{onEntrance: fenceMp3}}
        hide={-1}
      />

      <Play audio={SCENE_AUDIO.calmLoop} hide={-1} />

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        {'—А могло бы быть вот так:\n\n[Ссылка на зарубежные примеры](#)'}
      </Say>

      <Say
        tag={{text: 'АрхТок:', color: '#8D8C59'}}
        image={{uri: archtok3Png.src, align: 'bottom'}}>
        —Это больше не памятник. Надо выносить его из списка
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        {
          '—Правила вынесения объекта из списка памятников историко-культурного наследия выглядят так:\n\n[Ссылка 3](#)'
        }
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
