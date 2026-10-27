import { Spinner } from "#components/index.ts";
import { Button } from "#components/ui/Button.tsx";
import { Form, FormField } from "#components/ui/Form.tsx";
import { Input } from "#components/ui/Input.tsx";
import { TextArea } from "#components/ui/TextArea.tsx";
import { useGameContext } from "#game/runtime.ts";
import { decodeSubmissionError } from "#game/submission-error.ts";
import React from "react";
import { toast } from "react-hot-toast";

import { twMerge } from "#lib/tailwind.ts";
import { Label } from "react-aria-components";
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

  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto">
      <Form
        schema={TextFormSchema}
        initialValues={{ body: "", name: "" }}
        onSubmit={async (values) => {
          if (isSubmitting) {
            return;
          }

          setIsSubmitting(true);

          try {
            await props.onSubmit(values);
          } catch (error) {
            console.error(
              "Failed to submit text",
              decodeSubmissionError(error),
            );
            toast.error("Что-то пошло не так. Попробуйте ещё раз");
          } finally {
            setIsSubmitting(false);
          }
        }}
        className={twMerge(
          "flex flex-col gap-y-4",
          isSubmitting && "pointer-events-none opacity-50",
        )}
      >
        {(form) => (
          <>
            <FormField form={form} name="body">
              {(field) => (
                <>
                  <Label className="text-sm font-bold">
                    {props.inputLabel}
                  </Label>

                  <TextArea
                    rows={props.rows ?? 2}
                    value={field.value}
                    onChange={(event) => {
                      field.change(event.target.value);
                    }}
                    onBlur={field.blur}
                  />
                </>
              )}
            </FormField>

            <FormField form={form} name="name">
              {(field) => (
                <>
                  <Label className="text-sm font-bold">
                    Ваше имя (необязательно)
                  </Label>

                  <Input
                    type="text"
                    value={field.value}
                    onChange={(event) => {
                      field.change(event.target.value);
                    }}
                    onBlur={field.blur}
                  />
                </>
              )}
            </FormField>

            <Button
              type="submit"
              isDisabled={isSubmitting}
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
          </>
        )}
      </Form>

      {isSubmitting && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
