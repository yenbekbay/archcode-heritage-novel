import {
  archbot1Png,
  bgArchcodeOfficeJpg,
  bgAskAfterAltJpg,
  bgAskBeforeFenceGif,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchDeveloper_ProjAsk_Demolish_IgnoreRisks_Approved_Listen() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg} />

      <Say>Встреча с общественностью прошла успешно!</Say>

      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>
        Архток, Архбот и Архкот договорились с девелопером о том, что будут
        встречаться в процессе работы и обсуждать процесс стройки
      </Say>

      <Scene src={bgArchcodeOfficeJpg} />

      <Say tag="АрхБот:" image={{uri: archbot1Png, align: 'bottom'}}>
        {'А вот и протоколы встреч\n\n[Ссылки](#)'}
      </Say>

      <Scene src={bgAskBeforeFenceGif} durationMs={6000} />
      <Scene src={bgAskAfterAltJpg} />

      <Say>
        Поздравляем! Облик здания сохранен! Ваши усилия не были напрасны, и вот
        результат — деликатная реставрация объекта
      </Say>

      <Say>
        Здание АСК при внесении в список памятников может стать новым активом.
        Обновленное здание с первозданным обликом привлекает всё больше туристов
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
