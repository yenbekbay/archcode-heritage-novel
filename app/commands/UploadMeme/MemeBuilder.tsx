import clsx from 'clsx'
import {ArrowLeft as ArrowLeftIcon} from 'phosphor-react'
import React from 'react'
import toast from 'react-hot-toast'
import {useZorm} from 'react-zorm'
import type {Fetcher} from 'swr'
import useSWR from 'swr'
import {z} from 'zod'
import type {CommandViewColorScheme} from '~/lib'

export interface MemeBuilderProps {
  scheme?: CommandViewColorScheme
  onDone: () => void
}

export function MemeBuilder({scheme, onDone}: MemeBuilderProps) {
  const [activeTemplateId, setActiveTemplateId] = React.useState<string | null>(
    null,
  )
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null)
  const res = useSWR('memeTemplates', memeTemplatesFetcher)
  const templates = res.data
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
              className="btn btn-ghost btn-circle bg-white text-xl shadow-md"
              onClick={() => {
                if (previewUrl) {
                  setPreviewUrl(null)
                } else {
                  setActiveTemplateId(null)
                }
              }}>
              <ArrowLeftIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-4 overflow-y-auto">
          <img
            className="h-auto max-h-64 w-full object-contain"
            src={previewUrl ?? activeTemplate.url}
            aria-label={activeTemplate.name}
          />

          <span className="text-lg font-semibold">{activeTemplate.name}</span>

          {previewUrl ? (
            <div className="flex flex-col space-y-2">
              <button
                className={clsx(
                  'GameEngine-button btn btn-outline font-calligraph',
                  scheme === 'dark' && 'GameEngine-button--dark',
                )}
                onClick={() =>
                  navigator.share({
                    title: 'Снести нельзя оставить!',
                    url: previewUrl,
                  })
                }>
                Поделиться
              </button>

              <button
                className={clsx(
                  'GameEngine-button btn btn-outline font-calligraph',
                  scheme === 'dark' && 'GameEngine-button--dark',
                )}
                onClick={() => {
                  // TODO
                  onDone()
                }}>
                Сохранить
              </button>
            </div>
          ) : (
            <MemeBuilderForm
              scheme={scheme}
              template={activeTemplate}
              onBuild={(url) => setPreviewUrl(url)}
            />
          )}
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-1 flex-col space-y-4 overflow-y-auto">
      {templates.map((t) => (
        <img
          key={t.id}
          className={clsx(
            'GameEngine-surface h-auto w-full animate-pulse object-contain',
            scheme === 'dark' && 'GameEngine-surface--dark',
          )}
          src={t.url}
          aria-label={t.name}
          tabIndex={-1}
          onClick={() => setActiveTemplateId(t.id)}
        />
      ))}
    </div>
  )
}

// MARK: MemeBuilderForm

interface MemeBuilderFormProps {
  template: ImgFlipMemeTemplate
  onBuild: (url: string) => void
  scheme?: CommandViewColorScheme
}

function MemeBuilderForm({template: t, onBuild, scheme}: MemeBuilderFormProps) {
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
  const zo = useZorm('meme', FormSchema, {
    onValidSubmit: async (event) => {
      event.preventDefault()
      setSubmitting(true)
      try {
        const formData = new FormData()
        formData.append('template_id', t.id)
        formData.append('username', 'archcode_almaty')
        formData.append('password', 'kqm.xhw0xtn9EUB7vgz')
        for (const [idx, value] of Object.values(event.data).entries()) {
          formData.append(`boxes[${idx}][text]`, value)
        }
        const res = await fetch('https://api.imgflip.com/caption_image', {
          method: 'POST',
          body: formData,
        })
        const data = (await res.json()) as ImgFlipCaptionResponse
        if (data.success) {
          onBuild(data.data.url)
        } else {
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
            'GameEngine-button btn btn-outline font-calligraph',
            scheme === 'dark' && 'GameEngine-button--dark',
          )}>
          Создать мем
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

// MARK: Spinner

function Spinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
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
