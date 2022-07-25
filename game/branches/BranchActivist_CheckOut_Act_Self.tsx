import {
  bgAptEntranceJpg,
  bgAptKitchenJpg,
  bgAptOutsideWindowJpg,
  bgCourtyardJpg,
  bgLaptopHandsJpg,
  bgLaptopStandaloneJpg,
  redhead10Png,
  redhead11Png,
  redhead12Png,
  redhead9Png,
  transition1Mp3,
  transition2ShortMp3,
  transition3ShortMp3,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {LINKS} from '../links'

export function BranchActivist_CheckOut_Act_Self() {
  return (
    <Branch>
      <Scene src={bgCourtyardJpg.src} audio={{onEntrance: transition1Mp3}} />
      <Scene
        src={bgAptOutsideWindowJpg.src}
        audio={{onEntrance: transition2ShortMp3}}
      />
      <Scene
        src={bgAptEntranceJpg.src}
        audio={{onEntrance: transition3ShortMp3}}
      />
      <Scene src={bgAptKitchenJpg.src} />

      <Say scheme="dark" hide={1}>
        Действовать надо последовательно
      </Say>

      <Say placement="bottom" scheme="dark">
        Для начала узнаю, кто здесь — заинтересованные стороны
      </Say>

      <Scene src={bgAptKitchenJpg.src} />

      <Say image={{uri: redhead9Png.src, align: 'bottom'}} hide={1}>
        Узнать надо побольше…
      </Say>

      <Say placement="bottom" scheme="dark">
        И не только почитать новости, а проверить, правду ли говорят
      </Say>

      <Say
        image={{
          uri: bgLaptopHandsJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}>
        {`[Как делать фактчекинг?](${LINKS.how_to_factcheck})`}
      </Say>

      <Say image={{uri: redhead10Png.src, align: 'bottom'}}>
        А теперь как запилю пост, что весь город на уши встанет!!!
      </Say>

      <Say
        image={{
          uri: bgLaptopHandsJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}>
        {`[Как написать пост в соц.сети и быть услышанным?](${LINKS.how_to_write_an_effective_article})`}
      </Say>

      <Say image={{uri: redhead11Png.src, align: 'bottom'}}>
        Буду писать во все инстанции!
      </Say>

      <Say
        image={{
          uri: bgLaptopHandsJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}>
        {`[Как и кому писать письма?](${LINKS.how_and_who_to_write_letters_to})`}
      </Say>

      <Say image={{uri: redhead9Png.src, align: 'bottom'}}>
        Таксссссс, а слушания-то будут??
      </Say>

      <Say
        image={{
          uri: bgLaptopHandsJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}>
        {`[Как участвовать в общественных слушаниях?](${LINKS.how_to_prepare_for_public_hearings})`}
      </Say>

      <Say image={{uri: redhead12Png.src, align: 'bottom'}}>
        И вообще, если не будет диалога, я готова действовать!!!
      </Say>

      <Say image={{uri: redhead11Png.src, align: 'bottom'}}>
        Устрою протест!!!
      </Say>

      <Say
        image={{
          uri: bgLaptopHandsJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}>
        {`[Что нужно знать при подготовке к митингу/одиночному пикету?](${LINKS.how_to_prepare_for_a_rally})`}
      </Say>

      <Say
        image={{
          uri: bgLaptopStandaloneJpg.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}
        menu={[
          {
            label: 'Позвонить в Архкод',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Act_Org'),
          },
        ]}>
        {`
          Думаю, можно обратиться к ним
          [сайт Архкода](${LINKS.archcode})
        `}
      </Say>
    </Branch>
  )
}
