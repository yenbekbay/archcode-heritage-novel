import React from 'react'
import toast from 'react-hot-toast'
import {useZorm} from 'react-zorm'
import {twMerge} from 'tailwind-merge'
import {z} from 'zod'
import {Spinner} from 'lib/components'
import type {CommandViewColorScheme} from 'lib/game-engine'
import {useGameContext} from 'lib/game-engine'

export interface TextFormProps {
  inputLabel: string
  submitLabel: string
  onSubmit: (values: {body: string; name: string}) => unknown | Promise<unknown>
  rows?: number
  scheme?: CommandViewColorScheme
}

export function TextForm({
  inputLabel,
  submitLabel,
  onSubmit,
  rows = 2,
  scheme,
}: TextFormProps) {
  const {playSound} = useGameContext()
  const [submitting, setSubmitting] = React.useState(false)
  const [FormSchema] = React.useState(() =>
    z.object({
      body: z.string().min(1, 'Пожалуйста, напишите что-нибудь'),
      name: z.string(),
    }),
  )
  const zo = useZorm('text', FormSchema, {
    onValidSubmit: async (event) => {
      event.preventDefault()
      setSubmitting(true)
      try {
        await onSubmit(event.data)
      } catch (err) {
        toast.error('Что-то пошло не так. Попробуйте ещё раз')
      } finally {
        setSubmitting(false)
      }
    },
  })
  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto">
      <form
        ref={zo.ref}
        className={twMerge(
          'flex flex-col space-y-4',
          submitting && 'pointer-events-none opacity-50',
        )}>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold" htmlFor="body">
            {inputLabel}
          </label>

          <textarea
            className={twMerge(
              'rounded-md focus:border-accent focus:ring-0',
              zo.errors.body('border-error'),
            )}
            id="body"
            name="body"
            rows={rows}
          />

          {zo.errors.body((err) => (
            <span className="text-sm text-error">{err.message}</span>
          ))}
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold" htmlFor="name">
            Ваше имя (необязательно)
          </label>

          <input
            className={twMerge(
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
          type="submit"
          disabled={zo.validation?.success === false}
          className={twMerge(
            'GameEngine-button GameEngine-button--opaque btn btn-outline font-calligraph',
            scheme === 'dark' && 'GameEngine-button--dark',
          )}
          onMouseEnter={() => playSound('mouseover')}
          onClick={() => playSound('click')}>
          {submitLabel}
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
