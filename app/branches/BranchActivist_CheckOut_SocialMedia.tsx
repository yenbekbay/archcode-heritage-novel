import {
  bgBldgAJpg,
  bgPhoneFingerJpg,
  bgPhoneHandJpg,
  redhead2Png,
  redhead5Png,
  redhead7Png,
} from '~/assets/game'
import {SubmitMeme, SubmitPost} from '~/commands'
import {Branch, Label, Menu, Say, Scene, Title} from '~/lib'

export function BranchActivist_CheckOut_SocialMedia() {
  return (
    <Branch>
      <Scene src={bgBldgAJpg} />

      <Say image={{uri: redhead5Png, align: 'bottom'}}>
        В моменты отчаяния всегда можно вылить свою боль в соц. сети
      </Say>

      <Say
        image={{
          uri: bgPhoneFingerJpg,
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
            uri: bgPhoneHandJpg,
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
            uri: bgPhoneHandJpg,
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
        <Say image={{uri: redhead7Png, align: 'bottom'}}>
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
        image={{uri: redhead2Png, align: 'bottom'}}
      />

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
