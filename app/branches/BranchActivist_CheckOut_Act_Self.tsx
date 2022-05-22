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
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchActivist_CheckOut_Act_Self() {
  return (
    <Branch.Root background={bgCourtyardJpg}>
      <Branch.Blank durationMs={3000} transitory />

      <Branch.Foreground
        src={bgAptOutsideWindowJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Branch.Foreground
        src={bgAptEntranceJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Branch.Foreground
        src={bgLaptopAboveJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={3}
      />

      <Branch.Say size="lg" scheme="dark" durationMs={0} transitory lingers={1}>
        Действовать надо последовательно
      </Branch.Say>

      <Branch.Say size="lg" placement="bottom" scheme="dark" transitory>
        Для начала узнаю, кто здесь - заинтересованные стороны
      </Branch.Say>

      <Branch.Foreground
        src={bgAptKitchenJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Branch.Say
        size="lg"
        foregroundSrc={redhead9Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        lingers={1}>
        Узнать надо побольше…
      </Branch.Say>

      <Branch.Say size="lg" placement="bottom" scheme="dark">
        И не только почитать новости, а проверить, правду ли говорят
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={redhead10Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        А теперь как запилю пост, что весь город на уши встанет!!!
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={redhead11Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Буду писать во все инстанции!
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={redhead9Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Таксссссс, а слушания то будут??
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={redhead12Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        И вообще, если не будет диалога, я готова действовать!!!
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={redhead11Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Устрою протест!!!
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
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
      </Branch.Say>

      <Branch.Say
        href="https://archcode.kz"
        size="lg"
        textStyle={{marginTop: 64}}>
        сайт Архкода
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Позвонить в Архкод',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Act_Org'),
          },
        ]}
      />
    </Branch.Root>
  )
}
