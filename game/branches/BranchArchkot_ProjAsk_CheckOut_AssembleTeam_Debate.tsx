import {
  adyaPchelkinaPng,
  archbot1Png,
  archbot3Png,
  archkot4Png,
  bgArchcodeOfficeJpg,
  bgAskAfterAltJpg,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  bgSolidJpg,
  developerRepB1Png,
  developerRepB2Png,
  developerRepB3Png,
  developerRepB4Png,
  developerRepB5Png,
  gorzhempoPng,
  tinaShtunerPng,
  transition1Mp3,
  transition2ShortMp3,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchArchkot_ProjAsk_CheckOut_AssembleTeam_Debate() {
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
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png.src, align: 'bottom'}}>
        —Это сейчас практически единственное здание, которое не было изменено
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB1Png.src, align: 'bottom'}}>
        —Внутри мы хотим создать современные, удобные помещёния, увеличить
        свободную площадь,
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB2Png.src, align: 'bottom'}}>
        —а ещё сделать open space — с учетом прозрачного фасада, будет больше
        света!
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB3Png.src, align: 'bottom'}}>
        —Стёкла на фасаде сделаем зеркальными!
      </Say>

      <Say
        tag={{text: 'Горжемпо:', color: '#687065'}}
        image={{uri: gorzhempoPng.src, align: 'bottom'}}>
        —В начале 80-х годов прошлого века я мечтал о зеркальном стекле,
        которого в СССР не было
      </Say>

      <Say
        tag={{text: 'Горжемпо:', color: '#687065'}}
        image={{uri: gorzhempoPng.src, align: 'bottom'}}>
        —Из-за дефицита материала в итоге при строительстве было использовано
        дымчатое стекло,
      </Say>

      <Say
        tag={{text: 'Горжемпо:', color: '#687065'}}
        image={{uri: gorzhempoPng.src, align: 'bottom'}}>
        —и в проекте, судя по рендерам, оно заменяется на зеркальное
      </Say>

      <Say
        tag={{text: 'Тина Штунер:', color: '#687065'}}
        image={{uri: tinaShtunerPng.src, align: 'bottom'}}>
        —Это уже исторический памятник, и сделать зеркальные окна — нарушение
        облика, к которому мы привыкли
      </Say>

      <Say
        tag={{text: 'Адя Пчелкина:', color: '#687065'}}
        image={{uri: adyaPchelkinaPng.src, align: 'bottom'}}>
        —Есть ли у Bay Shatyr Group лицензия на работу с памятниками?
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB4Png.src, align: 'bottom'}}>
        …
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png.src, align: 'bottom'}}>
        —Нужен кто-то, кто будет контролировать правильность процесса!
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB5Png.src, align: 'bottom'}}>
        …
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg.src} audio={SCENE_AUDIO.city} />

      <Say>
        А в результате договорились АрхТок, АрхБот и АрхКот с девелопером, что
        будут встречаться в процессе работы и стройки процесс обсуждать
      </Say>

      <Scene src={bgArchcodeOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot1Png.src, align: 'bottom'}}>
        {`
          А вот и протоколы встреч

          [Встреча 1](${LINKS.meeting_protocol_ask_1})

          [Встреча 2](${LINKS.meeting_protocol_ask_2})

          [Встреча 3](${LINKS.meeting_protocol_ask_3})
        `}
      </Say>

      <Scene src={bgAskAfterAltJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        Поздравляем! Облик здания сохранен! Не даром прошли все ваши усилия, вот
        результат - деликатная реставрация объекта!
      </Say>

      <Say>
        Побегайте по лестницам у входа, почувствйте себя снова ребенком!
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot3Png.src, align: 'bottom'}}>
        Но вот памятником оно всё же не стало…ушел аким, ушел и список…
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot3Png.src, align: 'bottom'}}
        scheme="dark"
        scrim>
        {`
          Вы можете узнать, что написали СМИ о состоявшейся реставрации АСК

          [Статья о реставрации АСК](${LINKS.article_ask_restoration})
        `}
      </Say>

      <Scene src={bgSolidJpg.src} />

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
