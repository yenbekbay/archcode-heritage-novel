import {
  angryCrowd1Png,
  architectPng,
  bgAirportJpg,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  bgPhoneHandJpg,
  botBuilderPng,
  chatterWebm,
  developerRepAPng,
  developerRepB9Png,
  hologramWebm,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'

export function BranchDeveloper_ProjAirport() {
  return (
    <Branch>
      <Scene src={bgAirportJpg.src} />

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
          'Новости:\n\nПроект VIP терминала в разработке компании  Bay Shatyr Group'
        }
      </Say>

      <Scene src={bgAirportJpg.src} />

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={{uri: chatterWebm, loop: true}}>
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
        —Первое, что нам надо выяснить - это является ли VIP терминал памятником
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={hologramWebm}>
        {
          'Ознакомьтесь со списком\n\n[Ссылка ГОСУДАРСТВЕННЫЙ РЕЕСТР ПАМЯТНИКОВ](#)'
        }
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={hologramWebm}
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
        Является ли VIP терминал памятником историко-культурного наследия?
      </Say>

      <Scene src={bgAirportJpg.src} />

      <Say>Здание VIP терминала является памятником</Say>

      <Scene src={bgDeveloperHqInsideJpg.src} />

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        {
          '—У нас есть два варианта:\n\n№1: Можем расположить здание нового терминала, обойдя памятник\n\nА можем всё снести, и возвести терминал ещё большей площади'
        }
      </Say>

      <Say
        image={{uri: developerRepB9Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Построить новое',
            onClick: (ctx) => ctx.goToBranch('Developer_ProjAirport_Demolish'),
          },
          {
            label: 'Сохранить старое здание',
            onClick: (ctx) => ctx.goToBranch('Developer_ProjAirport_Preserve'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
