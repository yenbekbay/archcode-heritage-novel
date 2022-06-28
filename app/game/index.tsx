import {useNavigate} from '@remix-run/react'
import {AnimatePresence} from 'framer-motion'
import {useSetAtom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'
import React from 'react'
import toast from 'react-hot-toast'
import {uniqBy} from 'remeda'
import {ClientOnly} from 'remix-utils'
import * as assets from '~/assets/game'
import {Dialog} from '~/lib/components'
import {Game, prepareBranches} from '~/lib/game-engine'
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
