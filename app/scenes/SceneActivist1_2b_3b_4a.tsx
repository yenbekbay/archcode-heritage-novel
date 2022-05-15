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
import {Blank, Foreground, Options, Say, SceneContainer} from '~/lib'

export function SceneActivist1_2b_3b_4a() {
  return (
    <SceneContainer background={bgCourtyardJpg}>
      <Blank durationMs={3000} transitory />

      <Foreground
        src={bgAptOutsideWindowJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Foreground
        src={bgAptEntranceJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Foreground
        src={bgLaptopAboveJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={3}
      />

      <Say size="lg" dark durationMs={0} transitory lingers={1}>
        Действовать надо последовательно
      </Say>

      <Say size="lg" placement="bottom" dark transitory>
        Для начала узнаю, кто здесь - заинтересованные стороны
      </Say>

      <Foreground
        src={bgAptKitchenJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Say
        size="lg"
        foregroundSrc={redhead9Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        lingers={1}>
        Узнать надо побольше…
      </Say>

      <Say size="lg" placement="bottom" dark>
        И не только почитать новости, а проверить, правду ли говорят
      </Say>

      <Say
        href="https://factcheck.kz/"
        size="lg"
        foregroundSrc={bgLaptopHandsJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(30px)',
        }}>
        Ссылка*фактчек
      </Say>

      <Say
        size="lg"
        foregroundSrc={redhead10Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        А теперь как запилю пост, что весь город на уши встанет!!!
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="lg"
        foregroundSrc={bgLaptopHandsJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(30px)',
        }}>
        Ссылка *22 “как написать пост в соц.сети и быть услышанным.”
      </Say>

      <Say
        size="lg"
        foregroundSrc={redhead11Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Буду писать во все инстанции!
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="lg"
        foregroundSrc={bgLaptopHandsJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(30px)',
        }}>
        Ссылка : список “кому можно писать “ и Примеры официальных писем.
      </Say>

      <Say
        size="lg"
        foregroundSrc={redhead9Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Таксссссс, а слушания то будут??
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        size="lg"
        foregroundSrc={bgLaptopHandsJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(30px)',
        }}>
        Новости, статьи и объявления о слушаниях
      </Say>

      <Say
        size="lg"
        foregroundSrc={redhead12Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        И вообще, если не будет диалога, я готова действовать!!!
      </Say>

      <Say
        size="lg"
        foregroundSrc={redhead11Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Устрою протест!!!
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        foregroundSrc={bgLaptopHandsJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(30px)',
        }}>
        *переход на СЦЕНЫ ( Примеры протестных акций: Акция женщины, обклеившей
        свой дом фотографиями президента, Розовый фламинго Талдыколя, Художник в
        ковше.
      </Say>

      <Say
        foregroundSrc={bgLaptopStandaloneJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(30px)',
        }}
        transitory
        lingers={1}>
        Думаю, можно обратиться к ним
      </Say>

      <Say href="https://archcode.kz" size="lg" textStyle={{marginTop: 64}}>
        сайт Архкода
      </Say>

      <Options
        options={[
          {
            label: 'Позвонить в Архкод',
            onClick: (ctx) => ctx.goToScene('Activist1_2b_3b_4c'),
          },
        ]}
      />
    </SceneContainer>
  )
}
