import {
  bgPhoneFingerJpg,
  bgPhoneHandJpg,
  bgZheltoksanBeforeFenceJpg,
  redhead2Png,
  redhead5Png,
  redhead7Png,
} from '~/assets/game'
import {Branch, Label, Menu, Play, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle, SubmitMeme, SubmitPost} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchActivist_CheckOut_SocialMedia() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeFenceJpg.src} audio={SCENE_AUDIO.city} />

      <Say image={{uri: redhead5Png.src, align: 'bottom'}}>
        В моменты отчаяния всегда можно вылить свою боль в соц. сети
      </Say>

      <Say
        image={{
          uri: bgPhoneFingerJpg.src,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.5)',
          },
        }}
        menu={[
          {
            label: 'Создать мем',
            onClick: (ctx) => ctx.goToStatement('make_meme'),
          },
          {
            label: 'Написать пост о том, как всё плохо',
            onClick: (ctx) => ctx.goToStatement('publish_post'),
          },
        ]}>
        Варианты отчаяния:
      </Say>

      <Label label="make_meme">
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
          image={{
            uri: bgPhoneHandJpg.src,
            style: {
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              transform:
                'scale(2.5) rotate(5deg) translateX(-6%) translateY(3%)',
            },
          }}
        />
      </Label>

      <Label label="publish_post">
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
          image={{
            uri: bgPhoneHandJpg.src,
            style: {
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              transform:
                'scale(2.5) rotate(5deg) translateX(-6%) translateY(3%)',
            },
          }}
        />
      </Label>

      <Label label="acknowledged">
        <Say image={{uri: redhead7Png.src, align: 'bottom'}}>
          ПОЗДРАВЛЯЕМ!!! ВАШИ ПОСТЫ/МЕМЫ УВИДЕЛА ИЗВЕСТНАЯ АКТИВИСТКА ТИНА
          ШТУНЕР, И ТЕПЕРЬ ОНА БУДЕТ ДОБИВАТЬСЯ СПРАВЕДЛИВОСТИ
        </Say>
      </Label>

      <Menu
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
        image={{uri: redhead2Png.src, align: 'bottom'}}
      />

      <Play audio={SCENE_AUDIO.calmLoop} hide={-1} />

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
