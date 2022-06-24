import * as DialogPrimitive from '@radix-ui/react-dialog'
import {useNavigate} from '@remix-run/react'
import {motion} from 'framer-motion'
import React from 'react'
import * as assets from '~/assets/game'
import * as _branches from '~/branches'
import {Game, prepareBranches} from '~/lib'

const branches = prepareBranches(_branches)

declare global {
  type BranchId = keyof typeof branches
}

export default function Interactive() {
  const navigate = useNavigate()
  const [activeLinkHref, setActiveLinkHref] = React.useState<string | null>(
    null,
  )
  return (
    <>
      <Game
        assets={assets}
        branches={branches}
        initialBranchId="Intro"
        onGoHome={() => navigate('/')}
        onLinkClick={(href, event) => {
          event.preventDefault()
          setActiveLinkHref(href)
        }}
      />

      <LinkPrompt
        href={activeLinkHref}
        onClose={() => setActiveLinkHref(null)}
      />
    </>
  )
}

interface LinkPromptProps {
  href: string | null
  onClose: () => void
}

function LinkPrompt({href, onClose}: LinkPromptProps) {
  return (
    <DialogPrimitive.Root
      open={!!href}
      onOpenChange={(newOpen) => {
        if (!newOpen) {
          onClose()
        }
      }}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay asChild forceMount>
          <motion.div
            className="fixed inset-0 z-[1000] bg-black/30"
            initial={{opacity: 0}}
            animate={{
              opacity: 100,
              transition: {ease: 'easeOut', duration: 0.3},
            }}
            exit={{
              opacity: 0,
              transition: {ease: 'easeIn', duration: 0.2},
            }}
          />
        </DialogPrimitive.Overlay>

        <DialogPrimitive.Content asChild forceMount>
          <motion.div
            className="fixed top-[50%] left-[50%] z-[1010] flex w-[95vw] max-w-md flex-col space-y-4 rounded-lg bg-white p-4 md:w-full"
            initial={{opacity: 0, x: '-50%', y: '-50%', scale: 0.95}}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {ease: 'easeOut', duration: 0.3},
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: {ease: 'easeIn', duration: 0.2},
            }}>
            <DialogPrimitive.Title className="link">
              {href}
            </DialogPrimitive.Title>

            <div className="btn-group">
              <button
                className="btn btn-outline"
                onClick={() => alert('FIXME')}>
                Читать сейчас
              </button>
              <button className="btn" onClick={() => alert('FIXME')}>
                Сохранить
              </button>
            </div>
          </motion.div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
