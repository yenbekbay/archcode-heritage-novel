import aptEntranceSrc from '~/assets/game/apt-entrance.png'
import aptKitchenSrc from '~/assets/game/apt-kitchen.png'
import aptOutsideWindowSrc from '~/assets/game/apt-outside-window.png'
import bgCourtyardSrc from '~/assets/game/bg-courtyard.png'
import bgLaptopAboveSrc from '~/assets/game/bg-laptop-above.png'
import bgLaptopHandsSrc from '~/assets/game/bg-laptop-hands.png'
import bgLaptopStandaloneSrc from '~/assets/game/bg-laptop-standalone.png'
import bgPhoneHandSrc from '~/assets/game/bg-phone-hand.png'
import redhead10Src from '~/assets/game/redhead-10.png'
import redhead11Src from '~/assets/game/redhead-11.png'
import redhead12Src from '~/assets/game/redhead-12.png'
import redhead9Src from '~/assets/game/redhead-9.png'
import {Blank, Foreground, Options, Say} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer} from './components'

export const sceneActivist1_2b_3b_4aAssets = [
  aptEntranceSrc,
  aptKitchenSrc,
  aptOutsideWindowSrc,
  bgCourtyardSrc,
  bgLaptopAboveSrc,
  bgLaptopHandsSrc,
  bgLaptopStandaloneSrc,
  bgPhoneHandSrc,
  redhead9Src,
  redhead10Src,
  redhead11Src,
  redhead12Src,
]

export function SceneActivist1_2b_3b_4a() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Blank duration={3000} />

      <Foreground
        src={aptOutsideWindowSrc}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        duration={3000}
        transitory
        retained={1}
      />

      <Foreground
        src={aptEntranceSrc}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        duration={3000}
        transitory
        retained={1}
      />

      <Foreground
        src={bgLaptopAboveSrc}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        duration={3000}
        transitory
        retained={3}
      />

      <Say large dark duration={0} transitory retained={1}>
        Действовать надо последовательно
      </Say>

      <Say large bottom dark transitory>
        Для начала узнаю, кто здесь - заинтересованные стороны
      </Say>

      <Foreground
        src={aptKitchenSrc}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        retained
      />

      <Say
        large
        foregroundSrc={redhead9Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        retained={1}>
        Узнать надо побольше...
      </Say>

      <Say large bottom dark>
        И не только почитать новости, а проверить, правду ли говорят
      </Say>

      <Say
        href="https://factcheck.kz/"
        large
        foregroundSrc={bgLaptopHandsSrc}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(30px)',
        }}>
        Ссылка*фактчек
      </Say>

      <Say
        large
        foregroundSrc={redhead10Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        А теперь как запилю пост, что весь город на уши встанет!!!
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        large
        foregroundSrc={bgLaptopHandsSrc}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(30px)',
        }}>
        Ссылка *22 “как написать пост в соц.сети и быть услышанным.”
      </Say>

      <Say
        large
        foregroundSrc={redhead11Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Буду писать во все инстанции!
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        large
        foregroundSrc={bgLaptopHandsSrc}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(30px)',
        }}>
        Ссылка : список “кому можно писать “ и Примеры официальных писем.
      </Say>

      <Say
        large
        foregroundSrc={redhead9Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Таксссссс, а слушания то будут??
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        large
        foregroundSrc={bgLaptopHandsSrc}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(30px)',
        }}>
        Новости, статьи и объявления о слушаниях
      </Say>

      <Say
        large
        foregroundSrc={redhead12Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        И вообще, если не будет диалога, я готова действовать!!!
      </Say>

      <Say
        large
        foregroundSrc={redhead11Src}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Устрою протест!!!
      </Say>

      <Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        foregroundSrc={bgLaptopHandsSrc}
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
        foregroundSrc={bgLaptopStandaloneSrc}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2) translateY(30px)',
        }}
        transitory
        retained={1}>
        Думаю, можно обратиться к ним
      </Say>

      <Say href="https://archcode.kz" large textStyle={{marginTop: 64}}>
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

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <img
      src={bgCourtyardSrc}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover"
    />
  )
}
