import {
  angryCrowd1Png,
  architectPng,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  bgPhoneHandJpg,
  bgZheltoksanBeforeJpg,
  botBuilderPng,
  chatterOgg,
  developerRepAPng,
  developerRepB9Png,
  hologramOgg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'

export function BranchDeveloper_ProjZheltoksan() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeJpg.src} />

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
        {
          'Новости:\n\nПроект Желтоксан 115 в разработке компании Bay Shatyr Group'
        }
      </Say>

      <Scene src={bgZheltoksanBeforeJpg.src} />

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={{uri: chatterOgg, loop: true}}>
        Общественность возмущена
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg.src} />
      <Scene src={bgDeveloperHqInsideJpg.src} />

      <Say
        tag={{text: 'Менеджер проекта:', color: '#A57B55'}}
        image={{uri: developerRepAPng.src, align: 'bottom'}}>
        —Нам необходимо взвесить все “за” и “против”
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        —Первое, что нам надо выяснить — это является ли Желтоксан 115
        памятником
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={hologramOgg}>
        {
          'Ознакомьтесь со списком\n\n[Ссылка ГОСУДАРСТВЕННЫЙ РЕЕСТР ПАМЯТНИКОВ](#)'
        }
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={hologramOgg}
        menu={[
          {
            label: 'Да',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Нет',
            onClick: (ctx) => ctx.skip(),
          },
        ]}>
        Является ли здание Желтоксан 115 памятником историко-культурного
        наследия?
      </Say>

      <Scene src={bgZheltoksanBeforeJpg.src} />

      <Say>Здание Желтоксан 115 не является памятником</Say>

      <Scene src={bgDeveloperHqInsideJpg.src} />

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        {
          '—У нас есть два варианта:\n\n№1: Сохранить старое здание и отреставрировать его\n\n№2: А можем все снести, и построить новое!'
        }
      </Say>

      <Say
        image={{uri: developerRepB9Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Построить новое',
            onClick: (ctx) =>
              ctx.goToBranch('Developer_ProjZheltoksan_Demolish'),
          },
          {
            label: 'Сохранить старое здание',
            onClick: (ctx) =>
              ctx.goToBranch('Developer_ProjZheltoksan_Preserve'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
