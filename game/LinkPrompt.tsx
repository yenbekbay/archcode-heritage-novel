import {AnimatePresence} from 'framer-motion'
import {useAtomValue, useSetAtom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'
import toast from 'react-hot-toast'
import {uniqBy} from 'remeda'
import {LinkCard} from '~/components'
import {Dialog} from '~/lib/components'
import {playSound} from './sounds'
import {X as XIcon} from 'phosphor-react'

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
          }}>
          <Dialog.Close asChild>
            <button
              className="btn btn-ghost btn-circle bg-base-100 text-xl shadow-md hover:bg-base-200"
              onMouseEnter={() => playSound('mouseover')}>
              <XIcon />
            </button>
          </Dialog.Close>

          <div className="flex flex-col space-y-4 overflow-auto">
            <LinkCard
              className="prose flex-shrink-0 overflow-hidden rounded-md border border-content"
              url={link.href}
              size="sm"
            />

            <div className="btn-group">
              <Dialog.Close
                className="btn btn-outline"
                onMouseEnter={() => playSound('mouseover')}
                onClick={() => {
                  playSound('click')
                  window.open(link.href, '_blank')
                }}>
                Читать сейчас
              </Dialog.Close>

              <Dialog.Close
                className="btn border-base-content hover:border-base-content"
                onMouseEnter={() => playSound('mouseover')}
                onClick={() => {
                  playSound('click')
                  setSavedLinks((prev) =>
                    uniqBy([...prev, link], (l) => l.href),
                  )
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
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
