import {
  archkot2Png,
  bgAskBeforeJpg,
  bgPhoneFingerJpg,
  bgPhoneHandJpg,
} from '~/assets/game'
import {SubmitMeme, SubmitPost} from '~/commands'
import {makeStrictBranch} from '~/lib'

type StatementLabel = 'make_meme' | 'publish_post' | 'acknowledged'

const Branch = makeStrictBranch<StatementLabel>()

export function BranchArchkot_ProjAsk_CheckOut_SocialMedia() {
  return (
    <Branch.Root background={bgAskBeforeJpg}>
      <Branch.Say
        foregroundSrc={archkot2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Видимо, процесс уже запущен, что же
      </Branch.Say>

      <Branch.Say
        foregroundSrc={bgPhoneFingerJpg}
        foregroundStyle={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(1.5)',
        }}
        transitory
        durationMs={0}
        lingers={1}>
        Когда-нибудь у народа будут спрашивать, что делать
      </Branch.Say>

      <Branch.Choices
        scheme="dark"
        choices={[
          {
            label: 'Создать мем',
            onClick: (ctx) => ctx.goToStatement('make_meme'),
          },
          {
            label: 'Написать пост о том, как всё плохо',
            onClick: (ctx) => ctx.goToStatement('publish_post'),
          },
        ]}
      />

      <Branch.Label label="make_meme">
        <SubmitMeme
          onDone={(ctx) => ctx.goToStatement('acknowledged')}
          frame={{
            viewport: [1080, 1920],
            rect: {
              x: 200,
              y: 180,
              width: 680,
              height: 1500,
            },
          }}
          foregroundSrc={bgPhoneHandJpg}
          foregroundStyle={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.5) rotate(5deg) translateX(-6%) translateY(3%)',
          }}
        />
      </Branch.Label>

      <Branch.Label label="publish_post">
        <SubmitPost
          onDone={(ctx) => ctx.goToStatement('acknowledged')}
          frame={{
            viewport: [1080, 1920],
            rect: {
              x: 200,
              y: 220,
              width: 680,
              height: 1500,
            },
          }}
          foregroundSrc={bgPhoneHandJpg}
          foregroundStyle={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2.5) rotate(5deg) translateX(-6%) translateY(3%)',
          }}
        />
      </Branch.Label>

      <Branch.Label label="acknowledged">
        <Branch.Say transitory>
          {/* FIXME */}
          [PLACEHOLDER]
        </Branch.Say>
      </Branch.Label>

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
