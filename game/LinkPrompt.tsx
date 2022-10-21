import {Dialog, LinkCard} from 'components'
import {AnimatePresence} from 'framer-motion'
import {useAtomValue, useSetAtom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'
import {X as XIcon} from 'phosphor-react'
import toast from 'react-hot-toast'
import {uniqBy} from 'remeda'
import {playSound} from './sounds'

const savedLinksAtom = atomWithStorage<Link[]>('@App/savedLinks', [])

export function useSavedLinks() {
  return useAtomValue(savedLinksAtom)
}

export interface Link {
  href: string
  name: string
}

export interface LinkPromptProps {
  link: Link | null
  onClose: () => void
}

export function LinkPrompt({link, onClose}: LinkPromptProps) {
  const setSavedLinks = useSetAtom(savedLinksAtom)
  return (
    <AnimatePresence>
      {link && (
        <Dialog
          open
          onOpenChange={(newOpen) => {
            if (!newOpen) {
              onClose()
            }
          }}
        >
          <Dialog.Close asChild>
            <button
              onMouseEnter={() => playSound('mouseover')}
              onClick={() => playSound('click')}
              className="btn-ghost btn-circle btn bg-base-100 text-xl shadow-md hover:bg-base-200"
            >
              <XIcon />
            </button>
          </Dialog.Close>

          <div className="flex flex-col space-y-4 overflow-auto">
            <LinkCard
              url={link.href}
              size="sm"
              className="prose shrink-0 overflow-hidden rounded-md border border-content"
            />

            <div className="btn-group">
              <Dialog.Close
                onMouseEnter={() => playSound('mouseover')}
                onClick={() => {
                  playSound('click')
                  window.open(link.href, '_blank')
                }}
                className="btn-outline btn"
              >
                Читать сейчас
              </Dialog.Close>

              <Dialog.Close
                onMouseEnter={() => playSound('mouseover')}
                onClick={() => {
                  playSound('click')
                  setSavedLinks((prev) =>
                    uniqBy([...prev, link], (l) => l.href),
                  )
                  toast.success('Ссылка сохранена')
                }}
                className="btn border-base-content hover:border-base-content"
              >
                Сохранить
              </Dialog.Close>
            </div>

            <div className="prose-sm prose">
              <blockquote>
                Доступ к сохранённым ссылкам можно получить в конце игры.
              </blockquote>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
