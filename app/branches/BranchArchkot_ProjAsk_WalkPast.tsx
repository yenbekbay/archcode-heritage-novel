import {AnimatePresence, motion} from 'framer-motion'
import {
  archkot6Png,
  archkot7Png,
  bgAskAfterJpg,
  bgAskBeforeFenceGif,
  bgAskBeforeJpg,
  fencePng,
} from '~/assets/game'
import type {BranchBackgroundComponentProps} from '~/lib'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchArchkot_ProjAsk_WalkPast() {
  return (
    <Branch.Root background={Background}>
      <Branch.Say
        foregroundSrc={archkot6Png}
        foregroundStyle={{
          width: '100%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory>
        Не стоит зря терять времени, дедлайны горят, дома кот некормленный, да
        сериал недосмотренный
      </Branch.Say>

      <Branch.Blank durationMs={6000} transitory />

      <Branch.Foreground
        src={bgAskAfterJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Branch.Foreground
        src={bgAskAfterJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Branch.Say
        foregroundSrc={archkot7Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Здание изменено до неузнаваемости, и теперь это уже не имеет отношения к
        историко-культурному наследию
      </Branch.Say>

      <Branch.Title transitory lingers>
        Конец игры
      </Branch.Title>

      <Branch.Choices
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch.Root>
  )
}

function Background(_props: BranchBackgroundComponentProps) {
  const {focusedStatementIndex} = Branch.useBranchContext()
  return (
    <>
      <img
        src={focusedStatementIndex < 1 ? bgAskBeforeJpg : bgAskBeforeFenceGif}
        className="min-h-full flex-1 object-cover"
      />

      <AnimatePresence>
        {focusedStatementIndex < 1 && (
          <motion.div
            className="absolute inset-0"
            exit={{
              x: '-400%',
              transition: {delay: 0.5, duration: 2},
            }}>
            <img
              src={fencePng}
              className="absolute h-full max-w-none"
              style={{transform: 'translate(-50%) scale(1.15)'}}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
