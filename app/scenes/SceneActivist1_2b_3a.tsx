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
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneActivist1_2b_3a() {
  return (
    <Scene.Container background={bgCourtyardJpg}>
      <Scene.Blank durationMs={3000} transitory />

      <Scene.Foreground
        src={bgAptOutsideWindowJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Scene.Foreground
        src={bgAptEntranceJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Scene.Foreground
        src={bgLaptopAboveJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={3}
      />

      <Scene.Say size="lg" variant="dark" durationMs={0} transitory lingers={1}>
        Действовать надо последовательно
      </Scene.Say>

      <Scene.Say size="lg" placement="bottom" variant="dark" transitory>
        Для начала узнаю, кто здесь - заинтересованные стороны
      </Scene.Say>

      <Scene.Foreground
        src={bgAptKitchenJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Scene.Say
        size="lg"
        foregroundSrc={redhead9Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        lingers={1}>
        Узнать надо побольше…
      </Scene.Say>

      <Scene.Say size="lg" placement="bottom" variant="dark">
        И не только почитать новости, а проверить, правду ли говорят
      </Scene.Say>

      <Scene.Say
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
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={redhead10Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        А теперь как запилю пост, что весь город на уши встанет!!!
      </Scene.Say>

      <Scene.Say
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
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={redhead11Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Буду писать во все инстанции!
      </Scene.Say>

      <Scene.Say
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
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={redhead9Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Таксссссс, а слушания то будут??
      </Scene.Say>

      <Scene.Say
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
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={redhead12Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        И вообще, если не будет диалога, я готова действовать!!!
      </Scene.Say>

      <Scene.Say
        size="lg"
        foregroundSrc={redhead11Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Устрою протест!!!
      </Scene.Say>

      <Scene.Say
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
      </Scene.Say>

      <Scene.Say
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
      </Scene.Say>

      <Scene.Say
        href="https://archcode.kz"
        size="lg"
        textStyle={{marginTop: 64}}>
        сайт Архкода
      </Scene.Say>

      <Scene.Choices
        choices={[
          {
            label: 'Позвонить в Архкод',
            onClick: (ctx) => ctx.goToScene('Activist1_2b_3c'),
          },
        ]}
      />
    </Scene.Container>
  )
}
