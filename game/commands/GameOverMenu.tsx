import {useRouter} from 'next/router'
import {motion} from 'framer-motion'
import Image from 'next/future/image'
import {logoArchcodePng, logoNonmuseumPng, logoSorosPng} from '~/assets/game'
import {Command, MenuView} from '~/lib/game-engine'

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
                label: 'Начать заново',
                onClick: (ctx) => ctx.goToBranch('Intro'),
              },
            ]}
          />

          <div className="absolute left-8 right-8 bottom-20 flex flex-col items-center">
            <motion.div
              className="GameEngine-surface flex flex-row justify-center space-x-3 rounded-md p-4"
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
                <Image
                  className="max-h-[4rem] w-auto"
                  src={logoNonmuseumPng}
                  alt="Логотип «Немузей Архитектуры»"
                />
              </a>

              <a
                href="https://archcode.kz/"
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  className="max-h-[4rem] w-auto"
                  src={logoArchcodePng}
                  alt="Логотип «Архкод Алматы»"
                />
              </a>

              <a
                href="https://soros.kz"
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  className="max-h-[4rem] w-auto"
                  src={logoSorosPng}
                  alt="Логотип «Фонд Cорос-Казахстан»"
                />
              </a>
            </motion.div>
          </div>
        </>
      )}
    </Command>
  )
}
