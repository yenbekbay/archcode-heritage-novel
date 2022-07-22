import {
  angryCrowd1Png,
  architectPng,
  bgAskBeforeJpg,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  bgPhoneHandJpg,
  botBuilderPng,
  chatterMp3,
  developerRepAPng,
  developerRepB9Png,
  hologramMp3,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'

export function BranchDeveloper_ProjAsk() {
  return (
    <Branch>
      <Scene src={bgAskBeforeJpg.src} />

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
          'Новости:\n\nПроект Аппаратно студийного комплекса в разработке компании Bay Shatyr Group'
        }
      </Say>

      <Scene src={bgAskBeforeJpg.src} />

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={{uri: chatterMp3, loop: true}}>
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
        —Первое, что нам надо выяснить — это является ли АСК памятником
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={hologramMp3}>
        {
          'Ознакомьтесь со списком\n\n[Ссылка ГОСУДАРСТВЕННЫЙ РЕЕСТР ПАМЯТНИКОВ](#)'
        }
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={hologramMp3}
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
        Является ли здание АСК памятником историко-культурного наследия?
      </Say>

      <Scene src={bgAskBeforeJpg.src} />

      <Say>Здание АСК не является памятником</Say>

      <Scene src={bgDeveloperHqInsideJpg.src} />

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={hologramMp3}>
        Аким Байбек подал заявку на внесение ряда зданий Алматы в число
        памятников историко- культурного наследия местного значения
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={hologramMp3}>
        {
          'На АСК распространяются те же правила, что и на действующие памятники\n\n[Ссылка *2 на список Байбека](#)'
        }
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        {
          '—У нас есть два варианта:\n\n№1: Сделаем деликатную реставрацию\n\n№2: А можем все перепланировать'
        }
      </Say>

      <Say
        image={{uri: developerRepB9Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Построить новое',
            onClick: (ctx) => ctx.goToBranch('Developer_ProjAsk_Demolish'),
          },
          {
            label: 'Сохранить старое здание',
            onClick: (ctx) => ctx.goToBranch('Developer_ProjAsk_Preserve'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
