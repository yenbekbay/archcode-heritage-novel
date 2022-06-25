import {useNavigate} from '@remix-run/react'
import {AnimatePresence} from 'framer-motion'
import React from 'react'
import toast from 'react-hot-toast'
import * as assets from '~/assets/game'
import * as _branches from '~/branches'
import {Dialog, Game, prepareBranches} from '~/lib'

const branches = prepareBranches(_branches)

declare global {
  type BranchId = keyof typeof branches
}

export default function Interactive() {
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = React.useState<Link | null>(null)
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) {
    return null
  }
  return (
    <>
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

      <LinkPrompt link={activeLink} onClose={() => setActiveLink(null)} />
    </>
  )
}

interface Link {
  href: string
  name: string
}

interface LinkPromptProps {
  link: Link | null
  onClose: () => void
}

function LinkPrompt({link, onClose}: LinkPromptProps) {
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
            <button
              className="btn btn-outline"
              onClick={() => window.open(link.href, '_blank')}>
              Читать сейчас
            </button>

            <button
              className="btn"
              onClick={() => {
                toast.error('FIXME')
              }}>
              Сохранить
            </button>
          </div>

          <p className="prose prose-sm">
            <blockquote>
              Доступ к сохранённым ссылкам можно получить в конце игры.
            </blockquote>
          </p>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
