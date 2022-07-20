import {useNavigate} from '@remix-run/react'
import {AnimatePresence} from 'framer-motion'
import {useSetAtom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'
import React from 'react'
import toast from 'react-hot-toast'
import {uniqBy} from 'remeda'
import {ClientOnly} from 'remix-utils'
import * as assets from '~/assets/game'
import {clickOgg} from '~/assets/game'
import {Dialog} from '~/lib/components'
import {delay, Game, prepareBranches} from '~/lib/game-engine'
import * as _branches from './branches'

const branches = prepareBranches(_branches)

declare global {
  type BranchId = keyof typeof branches
}

export default function MyGame() {
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = React.useState<Link | null>(null)
  return (
    <>
      <ClientOnly>
        {() => (
          <Game
            assets={assets}
            branches={branches}
            initialBranchId="Intro"
            onGoHome={() => navigate('/')}
            onLinkClick={(href, name, event) => {
              event.preventDefault()
              setActiveLink({href, name})
            }}
            onPlaySound={(name) => {
              switch (name) {
                case 'click':
                  playAudio(clickOgg)
                  break
                case 'skip':
                  playZzfxSound('skip')
                  break
                case 'not_allowed':
                  playZzfxSound('not_allowed')
                  break
              }
            }}
          />
        )}
      </ClientOnly>

      <LinkPrompt link={activeLink} onClose={() => setActiveLink(null)} />
    </>
  )
}

// MARK: LinkPrompt

const linksAtom = atomWithStorage<Link[]>('@App/savedLinks', [])

interface Link {
  href: string
  name: string
}

interface LinkPromptProps {
  link: Link | null
  onClose: () => void
}

function LinkPrompt({link, onClose}: LinkPromptProps) {
  const setLinks = useSetAtom(linksAtom)
  return (
    <AnimatePresence>
      {link && (
        <Dialog
          open
          onOpenChange={(newOpen) => {
            if (!newOpen) {
              onClose()
            }
          }}>
          <Dialog.Title className="link">{link.href}</Dialog.Title>

          <div className="btn-group">
            <Dialog.Close
              className="btn btn-outline"
              onClick={() => window.open(link.href, '_blank')}>
              Читать сейчас
            </Dialog.Close>

            <Dialog.Close
              className="btn border-base-content hover:border-base-content"
              onClick={() => {
                setLinks((prev) => uniqBy([...prev, link], (l) => l.href))
                toast.success('Ссылка сохранена')
              }}>
              Сохранить
            </Dialog.Close>
          </div>

          <div className="prose prose-sm">
            <blockquote>
              Доступ к сохранённым ссылкам можно получить в конце игры.
            </blockquote>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

// MARK: Sounds

const ZZFX_SOUNDS = {
  /* eslint-disable no-sparse-arrays */
  skip: [, , 150, 0.05, , 0.05, , 1.3, , , , , , 3],
  not_allowed: [1.5, 0.5, 270, , 0.1, , 1, 1.5, , , , , , , , 0.1, 0.01],
  /* eslint-enable no-sparse-arrays */
}

export async function playZzfxSound(name: keyof typeof ZZFX_SOUNDS) {
  const {zzfx} = await import('zzfx')
  return new Promise<void>((resolve) => {
    const sound = ZZFX_SOUNDS[name]
    if (sound) {
      const audio = zzfx(...sound)
      audio.onended = async () => {
        await delay(500)
        resolve()
      }
    } else {
      resolve()
    }
  })
}

export async function playAudio(src: string) {
  const el = new Audio(src)
  el.play()
}
