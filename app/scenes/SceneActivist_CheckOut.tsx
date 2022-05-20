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
import type {SceneBackgroundComponentProps} from '~/lib'
import {makeScene} from '~/lib'

type StatementLabel =
  | 'act_social_media'
  | 'act_etc'
  | 'social_media_upload_meme'
  | 'social_media_publish_post'
  | 'social_media_acknowledged'

const Scene = makeScene<StatementLabel>()

export function SceneActivist_CheckOut() {
  return (
    <Scene.Container background={Background}>
      <Scene.Say
        size="lg"
        foregroundSrc={redhead4Png}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Мутят что-то без доклада народу. Надо разобраться!
      </Scene.Say>

      <Scene.Blank durationMs={10000} transitory />

      <Scene.Say
        size="lg"
        foregroundSrc={redhead2Png}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Это что за новости?!?! Уничтожают историю, значит?
      </Scene.Say>

      <Scene.Choices
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

      <Scene.Label label="act_social_media">
        <Scene.Say
          size="lg"
          foregroundSrc={redhead5Png}
          foregroundStyle={{width: '90%', bottom: 0}}
          transitory>
          В моменты отчаяния всегда можно вылить свою боль в соц. сети
        </Scene.Say>

        <Scene.Say
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
        </Scene.Say>

        <Scene.Choices
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
      </Scene.Label>

      <Scene.Label label="act_etc">
        <Scene.Say
          size="xl"
          foregroundSrc={redhead8Png}
          foregroundStyle={{width: '90%', bottom: 0}}
          transitory
          durationMs={0}
          lingers={1}>
          Что я могу?
        </Scene.Say>

        <Scene.Choices
          variant="dark"
          choices={[
            {
              label: 'Разберусь сама',
              onClick: (ctx) => ctx.goToScene('Activist_CheckOut_Self'),
            },
            {
              label: 'Объединиться в команду',
              onClick: (ctx) => ctx.goToScene('Activist_CheckOut_Group'),
            },
            {
              label: 'Обратиться в организации',
              onClick: (ctx) => ctx.goToScene('Activist_CheckOut_Org'),
            },
          ]}
        />
      </Scene.Label>

      <Scene.Label label="social_media_upload_meme">
        <Scene.Choices
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
      </Scene.Label>

      <Scene.Label label="social_media_publish_post">
        <Scene.Choices
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
      </Scene.Label>

      <Scene.Label label="social_media_acknowledged">
        <Scene.Say
          size="lg"
          foregroundSrc={redhead7Png}
          foregroundStyle={{width: '90%', bottom: 0}}
          transitory>
          ПОЗДРАВЛЯЕМ!!! ВАШИ ПОСТЫ/МЕМЫ УВИДЕЛА ИЗВЕСТНАЯ АКТИВИСТКА ТИНА
          ШТУНЕР, И ТЕПЕРЬ ОНА БУДЕТ ДОБИВАТЬСЯ СПРАВЕДЛИВОСТИ
        </Scene.Say>
      </Scene.Label>

      <Scene.Choices
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

      <Scene.Title transitory lingers>
        Конец игры
      </Scene.Title>

      <Scene.Choices
        variant="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToScene('Intro'),
          },
        ]}
      />
    </Scene.Container>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  const {focusedStatementIndex} = Scene.useSceneContext()
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
