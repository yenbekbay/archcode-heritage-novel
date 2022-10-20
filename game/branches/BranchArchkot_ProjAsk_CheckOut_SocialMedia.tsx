import {
  archkot1Png,
  archkot2Png,
  bgAskAfterJpg,
  bgAskBeforeJpg,
  bgPhoneFingerJpg,
  bgPhoneHandJpg,
  bgSolidJpg,
} from 'assets/game'
import {Branch, Label, Say, Scene} from 'react-visual-novel'
import {GameOverMenu, GameOverTitle, SubmitMeme, SubmitPost} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchArchkot_ProjAsk_CheckOut_SocialMedia() {
  return (
    <Branch>
      <Scene src={bgAskBeforeJpg.src} audio={SCENE_AUDIO.city} />

      <Say image={{uri: archkot2Png.src, align: 'bottom'}}>
        Видимо, процесс уже запущен, что же
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
        ]}
      >
        Когда-нибудь у народа будут спрашивать, что делать
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
        <Say
          image={{uri: archkot1Png.src, align: 'bottom'}}
          menu={[
            {
              label: 'Собраться с командой Архкод',
              onClick: (ctx) =>
                ctx.goToBranch('Archkot_ProjAsk_CheckOut_AssembleTeam'),
            },
            {
              label: 'Я сделал всё, что было в моих силах',
              onClick: (ctx) => ctx.goToNextStatement(),
            },
          ]}
        >
          Что делать дальше?
        </Say>
      </Label>

      <Scene src={bgAskAfterJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        Здание изменено до неузнаваемости, и теперь это уже не имеет отношения к
        историко-культурному наследию
      </Say>

      <Scene src={bgSolidJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say durationMs={8000}>
        {`
          В память об архитекторе Александре Коржемпо
          1934-2022
        `}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
