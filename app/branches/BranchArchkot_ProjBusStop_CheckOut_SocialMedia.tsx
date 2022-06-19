import {
  archbot1Png,
  archkot1Png,
  archkot2Png,
  archkot7Png,
  bgBusStop2Jpg,
  bgBusStop4Jpg,
  bgBusStop6Jpg,
  bgPhoneFingerJpg,
  bgPhoneHandJpg,
} from '~/assets/game'
import {SubmitMeme, SubmitPost} from '~/commands'
import {Branch, Label, Menu, Say, Scene, Title} from '~/lib'

export function BranchArchkot_ProjBusStop_CheckOut_SocialMedia() {
  return (
    <Branch>
      <Scene src={bgBusStop2Jpg} />

      <Say image={{uri: archkot2Png, align: 'bottom'}}>
        Видимо, процесс уже запущен, что же
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
        <Say
          image={{uri: archkot1Png, align: 'bottom'}}
          menu={[
            {
              label: 'Собраться с командой Архкод',
              onClick: (ctx) =>
                ctx.goToBranch('Archkot_ProjAsk_CheckOut_AssembleTeam'),
            },
            {
              label: 'Я сделал всё, что было в моих силах',
              onClick: (ctx) => ctx.skip(),
            },
          ]}>
          Что делать дальше?
        </Say>
      </Label>

      <Scene src={bgBusStop4Jpg} />

      <Scene src={bgBusStop6Jpg} />

      <Say>
        Остановка изменена до неузнаваемости, и теперь это уже не имеет
        отношения к историко-культурному наследию
      </Say>

      <Say image={{uri: archkot7Png, align: 'bottom'}}>
        Была история, и нет истории. Зря Дядь Юра старался
      </Say>

      <Say tag="АрхБот:" image={{uri: archbot1Png, align: 'bottom'}}>
        {'—А могло бы быть вот так:\n\n[Ссылка на зарубежные примеры](#)'}
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
