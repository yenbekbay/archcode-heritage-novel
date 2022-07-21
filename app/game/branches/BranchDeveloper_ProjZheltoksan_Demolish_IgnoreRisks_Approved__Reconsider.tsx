import {
  architectPng,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  bgZheltoksanBeforeJpg,
  botBuilderPng,
  developerRepB9Png,
  hologramOgg,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchDeveloper_ProjZheltoksan_Demolish_IgnoreRisks_Approved__Reconsider() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>Обсуждение проекта</Say>

      <Scene src={bgDeveloperHqInsideJpg} />

      <Say image={{uri: developerRepB9Png, align: 'bottom'}}>
        —Я принял решение пересмотреть проект. Риски велики. Невозможно и дальше
        игнорировать общественность
      </Say>

      <Say
        tag={{text: 'Архитектор:', color: '#B4AE68CC'}}
        image={{uri: architectPng, align: 'bottom'}}>
        —Будем делать реставрацию объекта
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

      <Say>Проект над реставрацией здания завершен…</Say>

      <Scene src={bgZheltoksanBeforeJpg} />

      <Say>
        Поздравляем! Облик здания сохранен! Ваши усилия не были напрасны, вот
        результат — деликатная реставрация объекта
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
