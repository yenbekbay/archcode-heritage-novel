import {
  bgArchcodeOfficeJpg,
  bgCourtyardJpg,
  bgPhoneHandJpg,
  redhead19Png,
  sillhouettePng,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchActivist_CheckOut_Act_Org() {
  return (
    <Branch>
      <Scene src={bgCourtyardJpg} />

      <Say image={{uri: redhead19Png, align: 'bottom'}}>
        —Алло, здравствуйте, это Архкод?
      </Say>

      <Scene src={bgArchcodeOfficeJpg} />

      <Say image={{uri: sillhouettePng, align: 'bottom'}}>
        —Здравствуйте, да, я вас слушаю.
      </Say>

      <Scene src={bgCourtyardJpg} />

      <Say image={{uri: redhead19Png, align: 'bottom'}}>
        —Непонятно, что творится! Забор там! Здание снесут! Унчтожат!
        Испоганят!!! Что делать???
      </Say>

      <Scene src={bgArchcodeOfficeJpg} />

      <Say image={{uri: sillhouettePng, align: 'bottom'}}>
        —Без паники. Приходите, поделимся опытом
      </Say>

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
        style_={{fontSize: 24}}
        image={{
          uri: bgPhoneHandJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.25) translateX(-15px)',
          },
        }}>
        [Позвонить в Архкод](tel://+77071210483)
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
