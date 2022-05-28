import {useZorm} from 'react-zorm'
import clsx from 'clsx'
import {Spinner} from 'phosphor-react'
import React from 'react'
import {z} from 'zod'
import type {CommandViewColorScheme} from '~/lib'
import toast from 'react-hot-toast'

export interface TextFormProps {
  inputLabel: string
  submitLabel: string
  onSubmit: (body: string) => unknown | Promise<unknown>
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
      try {
        await onSubmit(event.data.body)
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
          'flex flex-col space-y-4',
          submitting && 'pointer-events-none opacity-50',
        )}>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold" htmlFor="body">
            {inputLabel}
          </label>

          <textarea
            className={clsx(
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

        <button
          type="submit"
          disabled={zo.validation?.success === false}
          className={clsx(
            'GameEngine-button GameEngine-button--opaque btn btn-outline font-calligraph',
            scheme === 'dark' && 'GameEngine-button--dark',
          )}>
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