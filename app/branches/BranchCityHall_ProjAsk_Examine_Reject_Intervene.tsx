import {
  assistant3Png,
  bgAskAfterAltJpg,
  bgAskBeforeFenceGif,
  bgDeveloperHqInsideJpg,
  mayor1Png,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchCityHall_ProjAsk_Examine_Reject_Intervene() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg} />

      <Say
        tag="Работник акимата:"
        image={{uri: assistant3Png, align: 'bottom'}}>
        —Мы предоставим группу сотрудников для ведения мониторинга
      </Say>

      <Say tag="Работник акимата:" image={{uri: mayor1Png, align: 'bottom'}}>
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
