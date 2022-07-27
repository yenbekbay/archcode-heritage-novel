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
  hologramMp3,
  transition1Mp3,
  transition2ShortMp3,
} from 'assets/game'
import {Branch, Play, Say, Scene} from 'lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_ProjAirport_Preserve() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{uri: developerRepB9Png.src, align: 'bottom'}}>
        —Здание является памятником историко-культурного наследия и представляет
        большую ценность для города и его жителей
      </Say>

      <Say image={{uri: developerRepB10Png.src, align: 'bottom'}}>
        —Обновим, и будет конфетка. А новый терминал объединим с ним в один
        ансамбль
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        Проект РЕСТАВРАЦИЯ!
      </Say>

      <Say
        tag={{text: 'Бот-билдер:', color: '#53C7D5'}}
        image={{uri: botBuilderPng.src, align: 'bottom'}}
        audio={{onEntrance: hologramMp3}}>
        {`
          Нужно подходить к вопросу грамотно. Что такое реставрация?

          [Что такое реставрация?](${LINKS.what_is_restoration})
        `}
      </Say>

      <Scene
        src={bgDeveloperHqOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />

      <Say>Идёт разработка проекта</Say>

      <Scene
        src={bgDeveloperHqInsideJpg.src}
        audio={{...SCENE_AUDIO.indoor, onEntrance: transition2ShortMp3}}
      />

      <Say image={{uri: developerRepB10Png.src, align: 'bottom'}}>
        —Как ведется реставрация?
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        —Для начала получить бы паспорт объекта в отделе памятников, а после
        провести экспертизу состояния здания
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        —И в нашу рабочую группу проекта надо найти специалиста по реставрации
      </Say>

      <Say image={{uri: developerRepB6Png.src, align: 'bottom'}}>
        —Сделаем всё необходимое
      </Say>

      <Scene
        src={bgDeveloperHqOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />

      <Say>Проект над реставрацией здания завершён…</Say>

      <Scene
        src={bgDeveloperHqInsideJpg.src}
        audio={{...SCENE_AUDIO.indoor, onEntrance: transition2ShortMp3}}
      />

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng.src, align: 'bottom'}}>
        —Проект готов
      </Say>

      <Say image={{uri: developerRepB6Png.src, align: 'bottom'}}>
        —Необходимо провести слушания
      </Say>

      <Scene
        src={bgDeveloperHqOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />

      <Say>Общественные слушания</Say>

      <Scene src={bgDeveloperHqInsideJpg.src} audio={SCENE_AUDIO.hearings} />

      <Say
        tag={{text: 'Менеджер проекта:', color: '#A57B55'}}
        image={{uri: developerRepAPng.src, align: 'bottom'}}>
        —Всем добрый день. Мы представляем наш проект по реставрации VIP
        терминала
      </Say>

      <Say
        tag={{text: 'Менеджер проекта:', color: '#A57B55'}}
        image={{uri: developerRepAPng.src, align: 'bottom'}}>
        —Мы решили расположить здание нового терминала, обойдя этот памятник.
        Имеющаяся территория позволяет удовлетворить все требования по тех
        заданию
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg.src} audio={SCENE_AUDIO.city} />

      <Say>
        На общественных слушаниях не было выявлено нарушений законов о работе с
        памятниками, ваш проект одобрен!
      </Say>

      <Scene
        src={bgAirportFenceGif.src}
        audio={SCENE_AUDIO.city}
        durationMs={6000}
      />

      <Play audio={SCENE_AUDIO.calmLoop} hide={-1} />

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
