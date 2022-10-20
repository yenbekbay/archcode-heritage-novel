import {logoArchcodePng, logoNonmuseumPng, logoSorosPng} from 'assets/game'
import {motion} from 'framer-motion'
import Image from 'next/future/image'
import {useRouter} from 'next/router'
import {Command, MenuView} from 'react-visual-novel'

export function GameOverMenu() {
  const router = useRouter()
  return (
    <Command name="Menu" behavior={['non_skippable']}>
      {(controls) => (
        <>
          <MenuView
            style={{marginBottom: '7rem'}}
            controls={controls}
            choices={[
              {
                label: 'Сохранённые ссылки',
                onClick: () => router.push('/links'),
              },
              {
                label: 'Оставить отзыв',
                onClick: () => router.push('/feedback'),
              },
              {
                label: 'Начать заново',
                onClick: (ctx) =>
                  // HACK
                  ctx.goToLocation('Intro', 13),
              },
            ]}
          />

          <div className="absolute inset-x-8 bottom-20 flex flex-col items-center">
            <motion.div
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
              animate={controls}
              className="rvn-surface flex flex-row justify-center space-x-3 rounded-md p-4"
            >
              <a
                href="https://archcode.kz/journal/view?category=article&sefname=otkrytie-prostranstva"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Image
                  src={logoNonmuseumPng}
                  alt="Логотип «Немузей Архитектуры»"
                  className="max-h-[4rem] w-auto"
                />
              </a>

              <a
                href="https://archcode.kz/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Image
                  src={logoArchcodePng}
                  alt="Логотип «Архкод Алматы»"
                  className="max-h-[4rem] w-auto"
                />
              </a>

              <a
                href="https://soros.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Image
                  src={logoSorosPng}
                  alt="Логотип «Фонд Cорос-Казахстан»"
                  className="max-h-[4rem] w-auto"
                />
              </a>
            </motion.div>
          </div>
        </>
      )}
    </Command>
  )
}
