import {AnimatePresence} from 'framer-motion'
import {useSetAtom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'
import {useRouter} from 'next/router'
import React from 'react'
import toast from 'react-hot-toast'
import {uniqBy} from 'remeda'
import * as assets from '~/assets/game'
import {Dialog} from '~/lib/components'
import {Game, prepareBranches} from '~/lib/game-engine'
import * as _branches from './branches'
import {playSound} from './sound'

const branches = prepareBranches(_branches)

declare global {
  type BranchId = keyof typeof branches
}

export default function MyGame() {
  const router = useRouter()
  const [activeLink, setActiveLink] = React.useState<Link | null>(null)
  return (
    <>
      <Game
        assets={assets}
        branches={branches}
        initialBranchId="Intro"
        onGoToRoot={() => router.push('/')}
        onLinkClick={(href, name, event) => {
          event.preventDefault()
          setActiveLink({href, name})
        }}
        onPlaySound={playSound}
      />

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
              onMouseOver={() => playSound('mouseover')}
              onClick={() => {
                playSound('click')
                window.open(link.href, '_blank')
              }}>
              Читать сейчас
            </Dialog.Close>

            <Dialog.Close
              className="btn border-base-content hover:border-base-content"
              onMouseOver={() => playSound('mouseover')}
              onClick={() => {
                playSound('click')
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
