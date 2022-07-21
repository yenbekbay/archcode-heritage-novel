import {
  adyaPchelkinaPng,
  archbot3Png,
  archkot4Png,
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
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchArchkot_ProjAsk_CheckOut_AssembleTeam_Debate() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqOutsideJpg} />
      <Scene src={bgDeveloperHqInsideJpg} />

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png, align: 'bottom'}}>
        —Это сейчас практически единственное здание, которое не было изменено
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB1Png, align: 'bottom'}}>
        —Внутри мы хотим создать современные, удобные помещёния, увеличить
        свободную площадь,
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB2Png, align: 'bottom'}}>
        —а ещё сделать open space — с учетом прозрачного фасада, будет больше
        света!
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB3Png, align: 'bottom'}}>
        —Стёкла на фасаде сделаем зеркальными!
      </Say>

      <Say
        tag={{text: 'Горжемпо:', color: '#687065'}}
        image={{uri: gorzhempoPng, align: 'bottom'}}>
        —В начале 80-х годов прошлого века я мечтал о зеркальном стекле,
        которого в СССР не было
      </Say>

      <Say
        tag={{text: 'Горжемпо:', color: '#687065'}}
        image={{uri: gorzhempoPng, align: 'bottom'}}>
        —Из-за дефицита материала в итоге при строительстве было использовано
        дымчатое стекло,
      </Say>

      <Say
        tag={{text: 'Горжемпо:', color: '#687065'}}
        image={{uri: gorzhempoPng, align: 'bottom'}}>
        —и в проекте, судя по рендерам, оно заменяется на зеркальное
      </Say>

      <Say
        tag={{text: 'Тина Штунер:', color: '#687065'}}
        image={{uri: tinaShtunerPng, align: 'bottom'}}>
        —Это уже исторический памятник, и сделать зеркальные окна — нарушение
        облика, к которому мы привыкли
      </Say>

      <Say
        tag={{text: 'Адя Пчелкина:', color: '#687065'}}
        image={{uri: adyaPchelkinaPng, align: 'bottom'}}>
        —Есть ли у Bay Shatyr Group лицензия на работу с памятниками?
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB4Png, align: 'bottom'}}>
        …
      </Say>

      <Say
        tag={{text: 'АрхКот:', color: '#B8AE71'}}
        image={{uri: archkot4Png, align: 'bottom'}}>
        —Нужен кто-то, кто будет контролировать правильность процесса!
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB5Png, align: 'bottom'}}>
        …
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>
        А в результате договорились АрхТок, АрхБот и АрхКот с девелопером, что
        будут встречаться в процессе работы и стройки процесс обсуждать
      </Say>

      <Scene src={bgAskAfterAltJpg} />

      <Say>
        Поздравляем! Облик здания сохранен! Не даром прошли все ваши усилия, вот
        результат - деликатная реставрация объекта!
      </Say>

      <Say>
        Побегайте по лестницам у входа, почувствйте себя снова ребенком!
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot3Png, align: 'bottom'}}>
        Но вот памятником оно всё же не стало…ушел аким, ушел и список…
      </Say>

      <Say
        tag={{text: 'АрхБот:', color: '#65506D'}}
        image={{uri: archbot3Png, align: 'bottom'}}>
        {
          'Вы можете узнать, что написали СМИ о состоявшейся реставрации АСК\n\n[Ссылка на статьи](#)'
        }
      </Say>

      <Scene src={bgSolidJpg} />

      <Say durationMs={8000}>
        {'В память об архитекторе Александре Коржемпо\n1934-2022'}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
