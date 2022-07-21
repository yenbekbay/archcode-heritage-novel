import {motion} from 'framer-motion'
import {logoArchcodePng, logoNonmuseumPng, logoSorosPng} from '~/assets/game'
import {Command, MenuView} from '~/lib/game-engine'

export function GameOverMenu() {
  return (
    <Command name="Menu" behavior={['non_skippable']}>
      {(controls) => (
        <>
          <MenuView
            style={{marginBottom: '5rem'}}
            controls={controls}
            choices={[
              {
                label: 'Начать заново',
                onClick: (ctx) => ctx.goToBranch('Intro'),
              },
            ]}
          />

          <motion.div
            className="absolute left-0 right-0 bottom-0 flex flex-row justify-center space-x-3 p-8"
            variants={{
              initial: {opacity: 0},
              entrance: {
                opacity: 1,
                transition: {duration: 1},
              },
              exit: {
                opacity: 0,
                transition: {duration: 0.5, ease: 'easeOut'},
              },
            }}
            initial="initial"
            animate={controls}>
            <a
              href="https://archcode.kz/journal/view?category=article&sefname=otkrytie-prostranstva"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="max-h-[4rem]"
                src={logoNonmuseumPng}
                alt="Логотип «Немузей Архитектуры»"
              />
            </a>

            <a
              href="https://archcode.kz/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="max-h-[4rem]"
                src={logoArchcodePng}
                alt="Логотип «Архкод Алматы»"
              />
            </a>

            <a
              href="https://soros.kz"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="max-h-[4rem]"
                src={logoSorosPng}
                alt="Логотип «Фонд Cорос-Казахстан»"
              />
            </a>
          </motion.div>
        </>
      )}
    </Command>
  )
}
