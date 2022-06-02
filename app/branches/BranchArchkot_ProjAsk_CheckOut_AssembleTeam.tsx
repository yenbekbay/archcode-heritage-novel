import {
  archbot1Png,
  archbot2Png,
  archbot3Png,
  archkot10Png,
  archkot11Png,
  archkot8Png,
  archkot9Png,
  archtok1Png,
  archtok2Png,
  bgArchcodeOfficeJpg,
  bgAskBeforeJpg,
  bgPhoneHandJpg,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchArchkot_ProjAsk_CheckOut_AssembleTeam() {
  return (
    <Branch.Root background={bgAskBeforeJpg}>
      <Branch.Say
        foregroundSrc={archkot8Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Быстро! Быстро! Надо собрать команду и разобраться, что тут происходит!
      </Branch.Say>

      <Branch.Say
        textFrame={{
          viewport: [1080, 1920],
          rect: {
            y: 400,
            x: 260,
            width: 540,
            transform: 'rotate(-6deg)',
          },
        }}
        textStyle={{fontSize: 24}}
        foregroundSrc={bgPhoneHandJpg}
        foregroundStyle={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'scale(2.25) translateX(-15px)',
        }}
        transitory>
        Команда Архкод: срочно собираемся в офисе
      </Branch.Say>

      <Branch.Foreground
        src={bgArchcodeOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers
      />

      <Branch.Say
        tag="АрхКот:"
        foregroundSrc={archkot9Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —В городе беда. Здание АСК обнесено забором, и никто ничего об этом не
        знает! Мы должны что-то делать
      </Branch.Say>

      <Branch.Say
        tag="АрхТок:"
        foregroundSrc={archtok1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Первое, что необходимо выяснить — это является ли здание АСК памятником
        историко-культурного наследия
      </Branch.Say>

      <Branch.Say
        tag="АрхБот:"
        foregroundSrc={archbot1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        —Загляните в ГОСУДАРСТВЕННЫЙ РЕЕСТР ПАМЯТНИКОВ. Там можно поискать
        нужное нам здание.
      </Branch.Say>

      <Branch.Say
        placement="middle"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        *Ссылка РЕЕСТР
      </Branch.Say>

      <Branch.Say
        tag="АрхТок:"
        foregroundSrc={archtok2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Является ли здание АСК памятником?
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Да',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Нет',
            onClick: (ctx) => ctx.skip(2),
          },
        ]}
      />

      <Branch.Foreground
        src={bgAskBeforeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        durationMs={0}
        lingers={1}
      />

      <Branch.Say transitory>Здание АСК не является памятником</Branch.Say>

      <Branch.Say
        tag="АрхКот:"
        foregroundSrc={archkot10Png}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory>
        —ЭТО НЕ ПАМЯТНИК!!!
      </Branch.Say>

      <Branch.Say
        foregroundSrc={archkot11Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что делать?
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Подумаю о дальнейших действиях',
            onClick: (ctx) => ctx.skip(),
          },
          {
            label: 'Ничего уже не поделаешь…',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjAsk_CheckOut_SocialMedia'),
          },
        ]}
      />

      <Branch.Say
        tag="АрхТок:"
        foregroundSrc={archtok1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Надо вести мониторинг ситуации. Проверить информацию, которая есть в
        СМИ
      </Branch.Say>

      <Branch.Say
        tag="АрхБот:"
        foregroundSrc={archbot2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Я проверил различные СМИ. В результате отслеживания статей в СМИ
        найдено то, что нужно
      </Branch.Say>

      <Branch.Say
        foregroundSrc={archbot3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        —Представляю вам документ, который я условно назвал “Список Байбека”
      </Branch.Say>

      <Branch.Say
        placement="middle"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        *Cсылка cтатья "Список Байбека"
      </Branch.Say>

      <Branch.Say
        tag="АрхТок:"
        foregroundSrc={archtok2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Значит, это не памятник, но и не совсем непамятник?
      </Branch.Say>

      <Branch.Say
        tag="АрхБот:"
        foregroundSrc={archbot1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        —Я нашел закон, в котором говорится о зданиях, которые заявлены, как
        возможные памятники
      </Branch.Say>

      <Branch.Say
        placement="middle"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        *Cсылка на закон
      </Branch.Say>

      <Branch.Foreground
        src={bgAskBeforeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        durationMs={0}
        lingers={4}
      />

      <Branch.Say transitory>
        Выяснили АрхКот, АрхБот и АрхТок, что АСК, хоть и не является
        памятником, имеет все права настоящего памятника
      </Branch.Say>

      <Branch.Say transitory>
        Теперь, зная это, они будут действовать, чтобы сохранить здание, которое
        так дорого сердцам
      </Branch.Say>

      <Branch.Say transitory durationMs={0} lingers={1}>
        Что делать?
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Инициировать открытое обсуждение',
            // FIXME
            onClick: () => alert('Не готово'),
          },
          {
            label: 'Статья с рекомендациями',
            // FIXME
            onClick: () => alert('Не готово'),
          },
        ]}
      />
    </Branch.Root>
  )
}
