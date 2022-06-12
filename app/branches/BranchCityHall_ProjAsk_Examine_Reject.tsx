import {
  adyaPchelkinaPng,
  archkot4Png,
  bgCityHallMayorOfficeJpg,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  developerRepB1Png,
  developerRepB2Png,
  developerRepB3Png,
  developerRepB4Png,
  developerRepB5Png,
  gorzhempoPng,
  letterPng,
  mayor2Png,
  mayor3Png,
  stampRejectedPng,
  tinaShtunerPng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchCityHall_ProjAsk_Examine_Reject() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg} />

      <Say image={{uri: mayor3Png, align: 'bottom'}}>
        Проект нужно пересмотреть. устроить общественные слушания!
      </Say>

      <Show
        src={{
          uri: letterPng,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            backgroundColor: '#e7dbab',
            transform: 'scale(2.5)',
            transformOrigin: '50% 35%',
          },
        }}
        hide={1}
      />

      <Show
        src={{
          uri: stampRejectedPng,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'translateY(-15%)',
          },
        }}
      />

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

      <Say
        image={{uri: mayor2Png, align: 'bottom'}}
        menu={[
          {
            label: 'Выдвинуть группу от акимата',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjAsk_Examine_Reject_Intervene'),
          },
          {
            label: 'Проигнорировать',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjAsk_Examine_Reject_Ignore'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
