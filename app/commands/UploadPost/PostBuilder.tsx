import {useZorm} from 'react-zorm'
import clsx from 'clsx'
import {Spinner} from 'phosphor-react'
import React from 'react'
import {z} from 'zod'
import type {CommandViewColorScheme} from '~/lib'

export interface PostBuilderProps {
  scheme?: CommandViewColorScheme
  onDone: () => void
}

export function PostBuilder({scheme, onDone}: PostBuilderProps) {
  const [submitting, setSubmitting] = React.useState(false)
  const [FormSchema] = React.useState(() =>
    z.object({
      body: z.string().min(1, 'Пожалуйста, напишите что-нибудь'),
    }),
  )
  const zo = useZorm('meme', FormSchema, {
    onValidSubmit: async (event) => {
      event.preventDefault()
      setSubmitting(true)
      // TODO
      setSubmitting(false)
      onDone()
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
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold" htmlFor="body">
            Текст поста
          </label>

          <textarea
            className={clsx(
              'rounded-md focus:border-accent focus:ring-0',
              zo.errors.body('border-error'),
            )}
            id="body"
            name="body"
            rows={10}
          />

          {zo.errors.body((err) => (
            <span className="text-sm text-error">{err.message}</span>
          ))}
        </div>

        <button
          type="submit"
          disabled={zo.validation?.success === false}
          className={clsx(
            'GameEngine-button btn btn-outline font-calligraph',
            scheme === 'dark' && 'GameEngine-button--dark',
          )}>
          Опубликовать пост
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
