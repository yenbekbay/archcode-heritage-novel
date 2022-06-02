import {
  bgArchcodeOfficeJpg,
  bgCourtyardJpg,
  bgPhoneHandJpg,
  redhead19Png,
  sillhouettePng,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchActivist_CheckOut_Act_Org() {
  return (
    <Branch.Root background={bgCourtyardJpg}>
      <Branch.Blank durationMs={3000} transitory />

      <Branch.Say
        foregroundSrc={redhead19Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Алло, здравствуйте, это Архкод?
      </Branch.Say>

      <Branch.Foreground
        src={bgArchcodeOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={1}
      />

      <Branch.Say
        foregroundSrc={sillhouettePng}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory>
        —Здравствуйте, да, я вас слушаю.
      </Branch.Say>

      <Branch.Say
        foregroundSrc={redhead19Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Непонятно, что творится! Забор там! Здание снесут! Унчтожат!
        Испоганят!!! Что делать???
      </Branch.Say>

      <Branch.Foreground
        src={bgArchcodeOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={1}
      />

      <Branch.Say
        foregroundSrc={sillhouettePng}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory>
        —Без паники. Приходите, поделимся опытом
      </Branch.Say>

      <Branch.Say
        href="tel://+77071210483"
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
            transform: 'rotate(-6deg)',
          },
        }}
        textStyle={{fontSize: 24}}
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}>
        Позвонить в Архкод
      </Branch.Say>

      <Branch.Title transitory lingers>
        Конец игры
      </Branch.Title>

      <Branch.Choices
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch.Root>
  )
}
