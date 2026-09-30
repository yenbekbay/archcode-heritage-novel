import { Spinner } from "#components/index.ts";
import React from "react";
import toast from "react-hot-toast";
import { useGameContext } from "react-visual-novel";
import { useZorm } from "react-zorm";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export type TextFormProps = {
  inputLabel: string;
  submitLabel: string;
  onSubmit: (values: { body: string; name: string }) => unknown;
  rows?: number;
};

const TextFormSchema = z.object({
  body: z.string().min(1, "Пожалуйста, напишите что-нибудь"),
  name: z.string(),
});

export function TextForm({
  inputLabel,
  submitLabel,
  onSubmit,
  rows = 2,
}: TextFormProps) {
  const { playSound } = useGameContext();

  const [submitting, setSubmitting] = React.useState(false);

  const zo = useZorm("text", TextFormSchema, {
    onValidSubmit: async (event) => {
      event.preventDefault();
      setSubmitting(true);

      try {
        await onSubmit(event.data);
      } catch {
        toast.error("Что-то пошло не так. Попробуйте ещё раз");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto">
      <form
        ref={zo.ref}
        className={twMerge(
          "flex flex-col gap-y-4",
          submitting && "pointer-events-none opacity-50",
        )}
      >
        <div className="flex flex-col gap-y-2">
          <label className="text-sm font-bold" htmlFor="body">
            {inputLabel}
          </label>

          <textarea
            id="body"
            name="body"
            rows={rows}
            className={twMerge(
              "rounded-md focus:border-accent focus:ring-0",
              zo.errors.body("border-error"),
            )}
          />

          {zo.errors.body((err) => (
            <span className="text-sm text-error">{err.message}</span>
          ))}
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="text-sm font-bold" htmlFor="name">
            Ваше имя (необязательно)
          </label>

          <input
            id="name"
            name="name"
            type="text"
            className={twMerge(
              "rounded-md focus:border-accent focus:ring-0",
              zo.errors.name("border-error"),
            )}
          />

          {zo.errors.name((err) => (
            <span className="text-sm text-error">{err.message}</span>
          ))}
        </div>

        <button
          type="submit"
          disabled={zo.validation?.success === false}
          onMouseEnter={() => {
            playSound("mouseover");
          }}
          onClick={() => {
            playSound("click");
          }}
          className="game-button game-button-opaque font-script"
        >
          {submitLabel}
        </button>
      </form>

      {submitting && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
