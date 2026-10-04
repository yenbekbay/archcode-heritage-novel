import { Spinner } from "#components/index.ts";
import { Button } from "#components/ui/Button.tsx";
import { Input } from "#components/ui/Input.tsx";
import { TextArea } from "#components/ui/TextArea.tsx";
import { useGameContext } from "#game/runtime.ts";
import { decodeSubmissionError } from "#game/submission-error.ts";
import React from "react";
import { toast } from "react-hot-toast";

import { useZorm } from "react-zorm";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export type TextFormProps = {
  inputLabel: string;
  submitLabel: string;
  onSubmit: (values: z.infer<typeof TextFormSchema>) => Promise<void>;
  rows?: number;
};

const TextFormSchema = z.object({
  body: z.string().min(1, "Пожалуйста, напишите что-нибудь"),
  name: z.string(),
});

export function TextForm(props: TextFormProps) {
  const { playSound } = useGameContext();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const zo = useZorm("text", TextFormSchema, {
    onValidSubmit: async (event) => {
      event.preventDefault();

      if (isSubmitting) {
        return;
      }

      setIsSubmitting(true);

      try {
        await props.onSubmit(event.data);
      } catch (error) {
        console.error("Failed to submit text", decodeSubmissionError(error));
        toast.error("Что-то пошло не так. Попробуйте ещё раз");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto">
      <form
        ref={zo.ref}
        className={twMerge(
          "flex flex-col gap-y-4",
          isSubmitting && "pointer-events-none opacity-50",
        )}
      >
        <div className="flex flex-col gap-y-2">
          <label className="text-sm font-bold" htmlFor="body">
            {props.inputLabel}
          </label>

          <TextArea
            id="body"
            name="body"
            rows={props.rows ?? 2}
            aria-invalid={zo.errors.body() !== undefined}
            aria-describedby={zo.errors.body(zo.fields.body("errorid"))}
          />

          {zo.errors.body((err) => (
            <span
              id={zo.fields.body("errorid")}
              className="text-sm/[1.5] text-error"
            >
              {err.message}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="text-sm font-bold" htmlFor="name">
            Ваше имя (необязательно)
          </label>

          <Input
            id="name"
            name="name"
            type="text"
            aria-invalid={zo.errors.name() !== undefined}
            aria-describedby={zo.errors.name(zo.fields.name("errorid"))}
          />

          {zo.errors.name((err) => (
            <span
              id={zo.fields.name("errorid")}
              className="text-sm/[1.5] text-error"
            >
              {err.message}
            </span>
          ))}
        </div>

        <Button
          type="submit"
          isDisabled={isSubmitting || zo.validation?.success === false}
          onHoverStart={() => {
            playSound("mouseover");
          }}
          onPress={() => {
            playSound("click");
          }}
          variant="game_opaque"
        >
          {props.submitLabel}
        </Button>
      </form>

      {isSubmitting && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
