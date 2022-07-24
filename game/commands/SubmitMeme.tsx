import {useLocalStorageValue} from '@react-hookz/web'
import clsx from 'clsx'
import {motion} from 'framer-motion'
import {ArrowLeft as ArrowLeftIcon} from 'phosphor-react'
import React from 'react'
import toast from 'react-hot-toast'
import {useZorm} from 'react-zorm'
import type {Fetcher} from 'swr'
import useSWR from 'swr'
import {z} from 'zod'
import type {definitions} from '~/api'
import {getSupabase} from '~/api'
import {Spinner} from '~/lib/components'
import type {
  CommandViewColorScheme,
  Frame,
  ImageViewProps,
} from '~/lib/game-engine'
import {
  Command,
  ImageView,
  styleForFrame,
  useBranchContext,
  useGameContext,
} from '~/lib/game-engine'

export interface SubmitMemeProps {
  onDone: (ctx: {
    goToBranch: (branchId: BranchId) => void
    goToStatement: (statementLabel: string) => void
    skip: () => void
  }) => void
  scheme?: CommandViewColorScheme
  frame?: Frame
  image?: string | Omit<ImageViewProps, 'controls'>
}

export function SubmitMeme({onDone, frame, scheme, image}: SubmitMemeProps) {
  const {goToBranch} = useGameContext()
  const {containerRect, goToStatement, skip} = useBranchContext()
  const imageProps = typeof image === 'string' ? {uri: image} : image
  return (
    <Command name="SubmitMeme" behavior={['non_skippable']}>
      {(controls) => (
        <>
          {imageProps && <ImageView controls={controls} {...imageProps} />}

          <motion.div
            className={clsx(
              'GameEngine-text absolute flex flex-col',
              scheme === 'dark' && 'GameEngine-text--dark',
              !frame && 'inset-0 p-8 pt-20',
            )}
            style={frame && styleForFrame({containerRect}, frame)}
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
            <MemeForm
              scheme={scheme}
              onSubmit={async (values) => {
                await getSupabase()
                  .from<definitions['meme_submissions']>('meme_submissions')
                  .insert({
                    url: values.url,
                    name: values.name || undefined,
                  })
                onDone({goToStatement, goToBranch, skip})
              }}
              onSkip={() => onDone({goToStatement, goToBranch, skip})}
            />
          </motion.div>
        </>
      )}
    </Command>
  )
}

// MARK: MemeForm

interface MemeFormProps {
  onSubmit: (values: {url: string; name: string}) => unknown | Promise<unknown>
  onSkip: () => void
  scheme?: CommandViewColorScheme
}

function MemeForm({onSubmit, onSkip, scheme}: MemeFormProps) {
  const {playSound} = useGameContext()
  const [activeTemplateId, setActiveTemplateId, resetActiveTemplateId] =
    useLocalStorageValue<string | ''>('@MemeForm/activeTemplateId')
  const [previewUrl, setPreviewUrl, resetPreviewUrl] = useLocalStorageValue<
    string | ''
  >('@MemeForm/previewUrl')
  const templatesRes = useSWR('memeTemplates', memeTemplatesFetcher)
  const templates = templatesRes.data
  const templateById = React.useMemo(
    () =>
      templates ? Object.fromEntries(templates?.map((t) => [t.id, t])) : {},
    [templates],
  )
  const activeTemplate = activeTemplateId
    ? templateById[activeTemplateId]
    : null
  if (!templates) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Spinner />
      </div>
    )
  }
  if (activeTemplate) {
    return (
      <div className="flex min-h-0 flex-1 flex-col space-y-4">
        <div className="navbar">
          <div className="navbar-start">
            <button
              className="btn btn-ghost btn-circle bg-base-100 text-xl shadow-md hover:bg-base-200"
              onClick={() => {
                playSound('click')
                if (previewUrl) {
                  setPreviewUrl('')
                } else {
                  setActiveTemplateId('')
                }
              }}>
              <ArrowLeftIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-4 overflow-y-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-auto max-h-64 w-full object-contain"
            src={previewUrl ?? activeTemplate.url}
            aria-label={activeTemplate.name}
          />

          <span className="text-lg font-semibold">{activeTemplate.name}</span>

          {previewUrl ? (
            <MemePreview
              scheme={scheme}
              url={previewUrl}
              onSubmit={async (values) => {
                await onSubmit(values)
                resetPreviewUrl()
                resetActiveTemplateId()
              }}
              onSkip={() => {
                onSkip()
                resetPreviewUrl()
                resetActiveTemplateId()
              }}
            />
          ) : (
            <MemeTemplateForm
              scheme={scheme}
              template={activeTemplate}
              onPreviewUrlChange={setPreviewUrl}
            />
          )}
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-1 flex-col space-y-4 overflow-y-auto">
      {templates.map((t) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={t.id}
          className={clsx(
            'GameEngine-surface h-auto w-full cursor-pointer object-contain',
            scheme === 'dark' && 'GameEngine-surface--dark',
          )}
          src={t.url}
          aria-label={t.name}
          tabIndex={-1}
          onClick={() => {
            playSound('click')
            setActiveTemplateId(t.id)
          }}
        />
      ))}
    </div>
  )
}

// MARK: MemePreview

interface MemePreviewProps {
  url: string
  onSubmit: (values: {url: string; name: string}) => unknown | Promise<unknown>
  onSkip: () => void
  scheme?: CommandViewColorScheme
}

function MemePreview({url, onSubmit, onSkip, scheme}: MemePreviewProps) {
  const {playSound} = useGameContext()
  const [submitting, setSubmitting] = React.useState(false)
  const [FormSchema] = React.useState(() => z.object({name: z.string()}))
  const zo = useZorm('meme-preview', FormSchema, {
    onValidSubmit: async (event) => {
      event.preventDefault()
      setSubmitting(true)
      try {
        await onSubmit({url, name: event.data.name})
      } catch (err) {
        toast.error('Что-то пошло не так. Попробуйте ещё раз')
      } finally {
        setSubmitting(false)
      }
    },
  })
  return (
    <div className="relative flex flex-col">
      <form
        ref={zo.ref}
        className={clsx(
          'flex flex-col space-y-2',
          submitting && 'pointer-events-none opacity-50',
        )}>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold" htmlFor="name">
            Ваше имя (необязательно)
          </label>

          <input
            className={clsx(
              'rounded-md focus:border-accent focus:ring-0',
              zo.errors.name('border-error'),
            )}
            id="name"
            name="name"
            type="text"
          />

          {zo.errors.name((err) => (
            <span className="text-sm text-error">{err.message}</span>
          ))}
        </div>

        <button
          className={clsx(
            'GameEngine-button btn btn-outline font-calligraph',
            scheme === 'dark' && 'GameEngine-button--dark',
          )}
          onClick={() => {
            playSound('click')
            onSkip()
          }}>
          Пропустить
        </button>

        <button
          type="submit"
          disabled={zo.validation?.success === false}
          className={clsx(
            'GameEngine-button GameEngine-button--opaque btn btn-outline font-calligraph',
            scheme === 'dark' && 'GameEngine-button--dark',
          )}
          onClick={() => playSound('click')}>
          Опубликовать мем
        </button>

        <span className="prose text-xs">
          Нажав на кнопку «Опубликовать мем», вы даёте нам разрешение
          копировать, изменять, распространять и исполнять ваше произведение,
          даже в коммерческих целях.
        </span>
      </form>

      {submitting && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  )
}

// MARK: MemeTemplateForm

interface MemeTemplateFormProps {
  template: ImgFlipMemeTemplate
  onPreviewUrlChange: (url: string) => void
  scheme?: CommandViewColorScheme
}

function MemeTemplateForm({
  template: t,
  onPreviewUrlChange,
  scheme,
}: MemeTemplateFormProps) {
  const {playSound} = useGameContext()
  const [submitting, setSubmitting] = React.useState(false)
  const [FormSchema] = React.useState(() =>
    z.object(
      Object.fromEntries(
        Array.from({length: t.box_count}).map((_, i) => [
          `text${i}`,
          z.string().min(1, 'Пожалуйста, заполните поле'),
        ]),
      ),
    ),
  )
  const zo = useZorm('meme-template', FormSchema, {
    onValidSubmit: async (event) => {
      event.preventDefault()
      setSubmitting(true)
      try {
        const formData = new FormData()
        formData.append('template_id', t.id)
        formData.append('username', process.env.NEXT_PUBLIC_IMGFLIP_USERNAME!)
        formData.append('password', process.env.NEXT_PUBLIC_IMGFLIP_PASSWORD!)
        for (const [idx, value] of Object.values(event.data).entries()) {
          formData.append(`boxes[${idx}][text]`, value)
        }
        const res = await fetch('https://api.imgflip.com/caption_image', {
          method: 'POST',
          body: formData,
        })
        const data = (await res.json()) as ImgFlipCaptionResponse
        if (data.success) {
          onPreviewUrlChange(data.data.url)
        } else {
          console.warn('Failed to caption image', data.error_message)
          toast.error('Что-то пошло не так. Попробуйте ещё раз')
        }
      } finally {
        setSubmitting(false)
      }
    },
  })
  return (
    <div className="relative flex flex-col">
      <form
        ref={zo.ref}
        className={clsx(
          'flex flex-col space-y-4',
          submitting && 'pointer-events-none opacity-50',
        )}>
        {Object.keys(FormSchema.shape).map((name, i) => (
          <div key={i} className="flex flex-col space-y-2">
            <label className="text-sm font-bold" htmlFor={name}>
              Текст {i + 1}
            </label>

            <input
              className={clsx(
                'rounded-md focus:border-accent focus:ring-0',
                zo.errors[name]('border-error'),
              )}
              id={name}
              name={name}
              type="text"
            />

            {zo.errors[name]((err) => (
              <span className="text-sm text-error">{err.message}</span>
            ))}
          </div>
        ))}

        <button
          type="submit"
          disabled={zo.validation?.success === false}
          className={clsx(
            'GameEngine-button GameEngine-button--opaque btn btn-outline font-calligraph',
            scheme === 'dark' && 'GameEngine-button--dark',
          )}
          onClick={() => playSound('click')}>
          Посмотреть
        </button>
      </form>

      {submitting && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  )
}

// MARK: Helpers

interface ImgFlipMemeTemplate {
  id: string
  name: string
  url: string
  width: number
  height: number
  box_count: number
}

type ImgFlipGetMemesResponse =
  | {
      success: true
      data: {
        memes: ImgFlipMemeTemplate[]
      }
    }
  | {
      success: false
      error_message: string
    }

type ImgFlipCaptionResponse =
  | {
      success: true
      data: {
        url: string
        page_url: string
      }
    }
  | {
      success: false
      error_message: string
    }

const memeTemplatesFetcher: Fetcher<ImgFlipMemeTemplate[]> = async () => {
  const res = await fetch('https://api.imgflip.com/get_memes')
  if (!res.ok) {
    throw new Error(`Failed to get meme templates: ${res.statusText}`)
  }
  const data = (await res.json()) as ImgFlipGetMemesResponse
  if (!data.success) {
    throw new Error(
      `Failed to get meme templates: ${data.error_message ?? 'Unknown error'}`,
    )
  }
  return data.data.memes
}
