import {
  angryCrowd1Png,
  angryCrowd2Png,
  bgAskAfterJpg,
  bgAskBeforeFenceGif,
  bgAskBeforeJpg,
  bgCityHallMayorOfficeJpg,
  bgPhoneFingerJpg,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchCityHall_ProjAsk_Approve_AskHelp() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg} />

      <Say
        image={{
          uri: bgPhoneFingerJpg,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.5)',
          },
        }}>
        “Ребята, напишите, что реконструкция крутая”
      </Say>

      <Scene src={bgAskBeforeJpg} />

      <Say image={{uri: angryCrowd1Png, style: {width: '100%', bottom: 0}}}>
        {`—Надувательство\n\n—Бред собачий`}
      </Say>

      <Say image={{uri: angryCrowd2Png, style: {width: '100%', bottom: 0}}}>
        —Продажные чуваки
      </Say>

      <Scene src={bgAskBeforeFenceGif} durationMs={6000} />
      <Scene src={bgAskAfterJpg} />

      <Say>Вы успешно реконструировали АСК</Say>

      <Say>
        Здание утратило первоначальный облик и больше не представляет
        исторической ценности. Теперь Вам будет сложнее работать с
        общественностью
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
