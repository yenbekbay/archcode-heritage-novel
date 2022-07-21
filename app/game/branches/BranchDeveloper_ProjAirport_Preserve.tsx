import {
  architectPng,
  bgAirportFenceGif,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  botBuilderPng,
  developerRepAPng,
  developerRepB10Png,
  developerRepB6Png,
  developerRepB9Png,
  hologramOgg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchDeveloper_ProjAirport_Preserve() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg} />

      <Say image={{uri: developerRepB9Png, align: 'bottom'}}>
        {/** FIXME: Fix copy? It is actually a monument */}
        —Хоть оно и не является памятником историко-культурного наследия, но
        представляет большую ценность для города и его жителей
      </Say>

      <Say image={{uri: developerRepB10Png, align: 'bottom'}}>
        —Обновим, и будет конфетка. А новый терминал объединим с ним в один
        ансамбль
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng, align: 'bottom'}}>
        Проект РЕСТАВРАЦИЯ!
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng, align: 'bottom'}}
        audio={hologramOgg}>
        {
          'Нужно подходить к вопросу грамотно. Что такое реставрация?\n\n[Ссылка*15](#)'
        }
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>Идёт разработка проекта</Say>

      <Scene src={bgDeveloperHqInsideJpg} />

      <Say image={{uri: developerRepB10Png, align: 'bottom'}}>
        —Как ведется реставрация?
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng, align: 'bottom'}}>
        —Для начала получить бы паспорт объекта в отделе памятников, а после
        провести экспертизу состояния здания
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng, align: 'bottom'}}>
        —И в нашу рабочую группу проекта надо найти специалиста по реставрации
      </Say>

      <Say image={{uri: developerRepB6Png, align: 'bottom'}}>
        —Сделаем всё необходимое
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>Проект над реставрацией здания завершен…</Say>

      <Scene src={bgDeveloperHqInsideJpg} />

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng, align: 'bottom'}}>
        —Проект готов
      </Say>

      <Say image={{uri: developerRepB6Png, align: 'bottom'}}>
        —Необходимо провести слушания
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>Общественные слушания</Say>

      <Scene src={bgDeveloperHqInsideJpg} />

      <Say
        tag={{text: 'Менеджер проекта:', color: '#A57B55'}}
        image={{uri: developerRepAPng, align: 'bottom'}}>
        —Всем добрый день. Мы представляем наш проект по реставрации VIP
        терминала
      </Say>

      <Say
        tag={{text: 'Менеджер проекта:', color: '#A57B55'}}
        image={{uri: developerRepAPng, align: 'bottom'}}>
        —Мы решили расположить здание нового терминала, обойдя этот памятник.
        Имеющаяся территория позволяет удовлетворить все требования по тех
        заданию
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>
        На общественных слушаниях не было выявлено нарушений законов о работе с
        памятниками, ваш проект одобрен!
      </Say>

      <Scene src={bgAirportFenceGif} durationMs={6000} />

      <Say>
        ПОЗДРАВЛЯЕМ! Вы сделали все возможное чтобы сохранить исторический облик
        здания
      </Say>

      <Say hide={-1}>Продолжение следует…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
