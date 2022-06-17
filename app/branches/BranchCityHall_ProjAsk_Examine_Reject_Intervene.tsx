import {
  assistant3Png,
  bgAskAfterAltJpg,
  bgAskBeforeFenceGif,
  bgDeveloperHqInsidePng,
  mayor1Png,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchCityHall_ProjAsk_Examine_Reject_Intervene() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsidePng} />

      <Say
        tag="Работник акимата:"
        image={{uri: assistant3Png, style: {width: '100%', bottom: 0}}}>
        —Мы предоставим группу сотрудников для ведения мониторинга
      </Say>

      <Say image={{uri: mayor1Png, style: {width: '100%', bottom: 0}}}>
        —Отлично, договоримся о серии встреч с девелопером
      </Say>

      <Say>
        и прошли обсуждения, где обсуждали, реставрация ли, реконструкция ли, и
        какое стекло важнее
      </Say>

      <Scene src={bgAskBeforeFenceGif} durationMs={6000} />
      <Scene src={bgAskAfterAltJpg} />

      <Say>Вы успешно реконструировали АСК</Say>

      <Say>
        ПОЗДРАВЛЯЕМ! Реставрация объекта завершена. У вашего отдела новые
        перспективы Тема памятников двигается на городской, а затем и на
        государственный уровень Вам удалось простроить схему взаимодействия с
        общественностью в дальнейшем
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
