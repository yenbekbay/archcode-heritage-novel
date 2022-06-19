import {
  architectPng,
  bgAskAfterAltJpg,
  bgAskBeforeFenceGif,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  botBuilderPng,
  developerRepAPng,
  developerRepB10Png,
  developerRepB6Png,
  developerRepB9Png,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchDeveloper_ProjAsk_Preserve() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg} />

      <Say image={{uri: developerRepB9Png, align: 'bottom'}}>
        —Хоть оно и не является памятником историко-культурного наследия, но
        представляет большую ценность для города и его жителей
      </Say>

      <Say image={{uri: developerRepB10Png, align: 'bottom'}}>
        —Ну и вообще, красивое же. Обновим, и будет конфетка
      </Say>

      <Say tag="Архитектор:" image={{uri: architectPng, align: 'bottom'}}>
        Проект РЕСТАВРАЦИЯ!
      </Say>

      <Say tag="Бот-билдер:" image={{uri: botBuilderPng, align: 'bottom'}}>
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

      <Say tag="Архитектор:" image={{uri: architectPng, align: 'bottom'}}>
        —Для начала получить бы паспорт объекта в отделе памятников, а после
        провести экспертизу состояния здания
      </Say>

      <Say tag="Архитектор:" image={{uri: architectPng, align: 'bottom'}}>
        —И в нашу рабочую группу проекта надо найти специалиста по реставрации
      </Say>

      <Say image={{uri: developerRepB6Png, align: 'bottom'}}>
        —Сделаем всё необходимое
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>Проект над реставрацией здания завершен…</Say>

      <Scene src={bgDeveloperHqInsideJpg} />

      <Say tag="Архитектор:" image={{uri: architectPng, align: 'bottom'}}>
        —Проект готов
      </Say>

      <Say image={{uri: developerRepB6Png, align: 'bottom'}}>
        —Необходимо провести слушания
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>Общественные слушания</Say>

      <Scene src={bgDeveloperHqInsideJpg} />

      <Say
        tag="Менеджер проекта:"
        image={{uri: developerRepAPng, align: 'bottom'}}>
        —Всем добрый день. Мы представляем наш проект по реставрации здания АСК
      </Say>

      <Say
        tag="Менеджер проекта:"
        image={{uri: developerRepAPng, align: 'bottom'}}>
        —Планируется деликатная реставрация с обновлением материалов максимально
        приближёнными к оригинальным
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>
        На общественных слушаниях не было выявлено нарушений законов о работе с
        памятниками, ваш проект одобрен!
      </Say>

      <Scene src={bgAskBeforeFenceGif} durationMs={6000} />
      <Scene src={bgAskAfterAltJpg} />

      <Say>
        Поздравляем! Облик здания сохранен! Не даром прошли все ваши и вот
        результат — деликатная реставрация объекта
      </Say>

      <Title hide={-1}>Конец игры</Title>

      <Menu
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch>
  )
}
