import {
  bgAptEntranceJpg,
  bgAptKitchenJpg,
  bgAptOutsideWindowJpg,
  bgCourtyardJpg,
  bgLaptopAboveJpg,
  bgLaptopHandsJpg,
  bgLaptopStandaloneJpg,
  redhead10Png,
  redhead11Png,
  redhead12Png,
  redhead9Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib'

export function BranchActivist_CheckOut_Act_Self() {
  return (
    <Branch>
      <Scene src={bgCourtyardJpg} />
      <Scene src={bgAptOutsideWindowJpg} />
      <Scene src={bgAptEntranceJpg} />
      <Scene src={bgLaptopAboveJpg} />

      <Say scheme="dark" hide={1}>
        Действовать надо последовательно
      </Say>

      <Say placement="bottom" scheme="dark">
        Для начала узнаю, кто здесь — заинтересованные стороны
      </Say>

      <Scene src={bgAptKitchenJpg} />

      <Say image={{uri: redhead9Png, align: 'bottom'}} hide={1}>
        Узнать надо побольше…
      </Say>

      <Say placement="bottom" scheme="dark">
        И не только почитать новости, а проверить, правду ли говорят
      </Say>

      <Say
        image={{
          uri: bgLaptopHandsJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}>
        [Ссылка фактчек](https://factcheck.kz/)
      </Say>

      <Say image={{uri: redhead10Png, align: 'bottom'}}>
        А теперь как запилю пост, что весь город на уши встанет!!!
      </Say>

      <Say
        image={{
          uri: bgLaptopHandsJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}>
        [Ссылка 22 "как написать пост в соц.сети и быть услышанным"](#)
      </Say>

      <Say image={{uri: redhead11Png, align: 'bottom'}}>
        Буду писать во все инстанции!
      </Say>

      <Say
        image={{
          uri: bgLaptopHandsJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}>
        [Ссылка список "кому можно писать" и примеры официальных писем](#)
      </Say>

      <Say image={{uri: redhead9Png, align: 'bottom'}}>
        Таксссссс, а слушания то будут??
      </Say>

      <Say
        image={{
          uri: bgLaptopHandsJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}>
        [Новости, статьи и объявления о слушаниях](#)
      </Say>

      <Say image={{uri: redhead12Png, align: 'bottom'}}>
        И вообще, если не будет диалога, я готова действовать!!!
      </Say>

      <Say image={{uri: redhead11Png, align: 'bottom'}}>Устрою протест!!!</Say>

      <Say
        image={{
          uri: bgLaptopHandsJpg,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'scale(2) translateY(30px)',
          },
        }}>
        [*переход на СЦЕНЫ](#) (Примеры протестных акций: Акция женщины,
        обклеившей свой дом фотографиями президента, Розовый фламинго Талдыколя,
        Художник в ковше)
      </Say>

      <Say
        image={{
          uri: bgLaptopStandaloneJpg,
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
        {'Думаю, можно обратиться к ним\n[сайт Архкода](https://archcode.kz)'}
      </Say>
    </Branch>
  )
}
