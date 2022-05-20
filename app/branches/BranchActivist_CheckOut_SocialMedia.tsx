import {
  bgBldg1Jpg,
  bgPhoneFingerJpg,
  redhead2Png,
  redhead5Png,
  redhead7Png,
} from '~/assets/game'
import {makeBranch} from '~/lib'

type StatementLabel = 'upload_meme' | 'publish_post' | 'acknowledged'

const Branch = makeBranch<StatementLabel>()

export function BranchActivist_CheckOut_SocialMedia() {
  return (
    <Branch.Container background={bgBldg1Jpg}>
      <Branch.Say
        size="lg"
        foregroundSrc={redhead5Png}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory>
        В моменты отчаяния всегда можно вылить свою боль в соц. сети
      </Branch.Say>

      <Branch.Say
        size="xl"
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
        Варианты отчаяния:
      </Branch.Say>

      <Branch.Choices
        variant="dark"
        choices={[
          {
            label: 'Создать мем',
            onClick: (ctx) => ctx.goToStatement('upload_meme'),
          },
          {
            label: 'Написать пост о том, как всё плохо',
            onClick: (ctx) => ctx.goToStatement('publish_post'),
          },
        ]}
      />

      <Branch.Label label="upload_meme">
        <Branch.Choices
          variant="dark"
          choices={[
            {
              label: 'Загрузить мем',
              onClick: (ctx) => ctx.goToStatement('acknowledged'),
            },
          ]}
          foregroundSrc={bgPhoneFingerJpg}
          foregroundStyle={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(2) rotate(-9.5deg) translateX(-20px)',
          }}
        />
      </Branch.Label>

      <Branch.Label label="publish_post">
        <Branch.Choices
          variant="dark"
          choices={[
            {
              label: 'Загрузить пост',
              onClick: (ctx) => ctx.goToStatement('acknowledged'),
            },
          ]}
          foregroundSrc={bgPhoneFingerJpg}
          foregroundStyle={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(2) rotate(-9.5deg) translateX(-20px)',
          }}
        />
      </Branch.Label>

      <Branch.Label label="acknowledged">
        <Branch.Say
          size="lg"
          foregroundSrc={redhead7Png}
          foregroundStyle={{width: '90%', bottom: 0}}
          transitory>
          ПОЗДРАВЛЯЕМ!!! ВАШИ ПОСТЫ/МЕМЫ УВИДЕЛА ИЗВЕСТНАЯ АКТИВИСТКА ТИНА
          ШТУНЕР, И ТЕПЕРЬ ОНА БУДЕТ ДОБИВАТЬСЯ СПРАВЕДЛИВОСТИ
        </Branch.Say>
      </Branch.Label>

      <Branch.Choices
        placement="top"
        choices={[
          {
            label: 'Что я ещё могу сделать?',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Act'),
          },
          {
            label: 'Я сделала всё что было в моих силах',
            onClick: (ctx) => ctx.skip(),
          },
        ]}
        foregroundSrc={redhead2Png}
        foregroundStyle={{width: '90%', bottom: 0}}
      />

      <Branch.Title transitory lingers>
        Конец игры
      </Branch.Title>

      <Branch.Choices
        variant="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch.Container>
  )
}
