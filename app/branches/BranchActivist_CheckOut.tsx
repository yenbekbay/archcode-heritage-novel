import {AnimatePresence, motion} from 'framer-motion'
import {
  bgBldg1FenceGif,
  bgBldg1Jpg,
  bgPhoneFingerJpg,
  fencePng,
  redhead2Png,
  redhead4Png,
  redhead5Png,
  redhead7Png,
  redhead8Png,
} from '~/assets/game'
import type {BranchBackgroundComponentProps} from '~/lib'
import {makeBranch} from '~/lib'

type StatementLabel =
  | 'act_social_media'
  | 'act_etc'
  | 'social_media_upload_meme'
  | 'social_media_publish_post'
  | 'social_media_acknowledged'

const Branch = makeBranch<StatementLabel>()

export function BranchActivist_CheckOut() {
  return (
    <Branch.Container background={Background}>
      <Branch.Say
        size="lg"
        foregroundSrc={redhead4Png}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Мутят что-то без доклада народу. Надо разобраться!
      </Branch.Say>

      <Branch.Blank durationMs={10000} transitory />

      <Branch.Say
        size="lg"
        foregroundSrc={redhead2Png}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Это что за новости?!?! Уничтожают историю, значит?
      </Branch.Say>

      <Branch.Choices
        variant="dark"
        choices={[
          {
            label: 'Как-то печально всё это',
            onClick: (ctx) => ctx.goToStatement('act_social_media'),
          },
          {
            label: 'Что я могу сделать?',
            onClick: (ctx) => ctx.goToStatement('act_etc'),
          },
        ]}
      />

      <Branch.Label label="act_social_media">
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
              onClick: (ctx) => ctx.goToStatement('social_media_upload_meme'),
            },
            {
              label: 'Написать пост о том, как всё плохо',
              onClick: (ctx) => ctx.goToStatement('social_media_publish_post'),
            },
          ]}
        />
      </Branch.Label>

      <Branch.Label label="act_etc">
        <Branch.Say
          size="xl"
          foregroundSrc={redhead8Png}
          foregroundStyle={{width: '90%', bottom: 0}}
          transitory
          durationMs={0}
          lingers={1}>
          Что я могу?
        </Branch.Say>

        <Branch.Choices
          variant="dark"
          choices={[
            {
              label: 'Разберусь сама',
              onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Self'),
            },
            {
              label: 'Объединиться в команду',
              onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Group'),
            },
            {
              label: 'Обратиться в организации',
              onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Org'),
            },
          ]}
        />
      </Branch.Label>

      <Branch.Label label="social_media_upload_meme">
        <Branch.Choices
          variant="dark"
          choices={[
            {
              label: 'Загрузить мем',
              onClick: (ctx) => ctx.goToStatement('social_media_acknowledged'),
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

      <Branch.Label label="social_media_publish_post">
        <Branch.Choices
          variant="dark"
          choices={[
            {
              label: 'Загрузить пост',
              onClick: (ctx) => ctx.goToStatement('social_media_acknowledged'),
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

      <Branch.Label label="social_media_acknowledged">
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
            onClick: (ctx) => ctx.goToStatement('act_etc'),
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

function Background(_props: BranchBackgroundComponentProps) {
  const {focusedStatementIndex} = Branch.useBranchContext()
  return (
    <>
      <img
        src={focusedStatementIndex < 1 ? bgBldg1Jpg : bgBldg1FenceGif}
        className="min-h-full flex-1 object-cover"
      />

      <AnimatePresence>
        {focusedStatementIndex < 1 && (
          <motion.div
            className="absolute inset-0"
            exit={{
              x: '-400%',
              transition: {delay: 0.5, duration: 2},
            }}>
            <img
              src={fencePng}
              className="absolute h-full max-w-none"
              style={{transform: 'translate(-50%) scale(1.15)'}}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
