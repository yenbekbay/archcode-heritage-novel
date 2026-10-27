"use client";

import { captureException } from "#lib/capture-exception.ts";
import { useForm, type DeepKeys, type DeepValue } from "@tanstack/react-form";
import type { ComponentPropsWithRef, ReactNode } from "react";
import {
  FieldError as RACFieldError,
  TextField as RACTextField,
} from "react-aria-components";
import type { z } from "zod";

type FormOptions<TValues> = {
  initialValues: TValues;
  onSubmit: (values: TValues, form: FormApi<TValues>) => Promise<void> | void;
  schema: z.ZodType<TValues>;
};

// NOTE: Every form-bound component receives its concrete form, so field
// names retain their value types without a shared context.
type FormApi<TValues> = ReturnType<typeof useValidatedForm<TValues>>;

type FormProps<TValues> = Omit<
  ComponentPropsWithRef<"form">,
  "children" | "onSubmit"
> &
  FormOptions<TValues> & {
    children: (form: FormApi<TValues>) => ReactNode;
  };

export function Form<TValues>(props: FormProps<TValues>) {
  const { initialValues, onSubmit, schema, children, ...forwardedProps } =
    props;

  const form = useValidatedForm({ initialValues, onSubmit, schema });

  return (
    <form
      {...forwardedProps}
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit().catch(captureException);
      }}
    >
      {children(form)}
    </form>
  );
}

function useValidatedForm<TValues>(props: FormOptions<TValues>) {
  const { initialValues, onSubmit, schema } = props;

  const form = useForm({
    defaultValues: initialValues,
    validators: {
      onSubmitAsync: async ({ value }) => {
        const result = await schema.safeParseAsync(value);

        return result.success
          ? undefined
          : {
              fields: Object.fromEntries(
                result.error.issues.map((issue) => [
                  issue.path.join("."),
                  issue.message,
                ]),
              ),
            };
      },
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value, form);
    },
  });

  return form;
}

type FormFieldRenderProps<T> = {
  blur: () => void;
  change: (value: T) => void;
  value: T;
};

type FormFieldProps<TValues, TName extends DeepKeys<TValues>> = Omit<
  ComponentPropsWithRef<typeof RACTextField>,
  "children" | "form" | "name" | "onChange" | "value"
> & {
  form: FormApi<TValues>;
  name: TName;
  children: (
    props: FormFieldRenderProps<DeepValue<TValues, TName>>,
  ) => ReactNode;
};

export function FormField<TValues, TName extends DeepKeys<TValues>>(
  props: FormFieldProps<TValues, TName>,
) {
  const { form, name, children, ...forwardedProps } = props;

  return (
    <form.Field name={name}>
      {(field) => {
        const errorMessage = getErrorMessage(field.state.meta.errors);

        const hasError =
          field.state.meta.isTouched && errorMessage !== undefined;

        return (
          <RACTextField
            {...forwardedProps}
            name={name}
            isInvalid={hasError}
            className="flex flex-col gap-y-2"
          >
            {children({
              blur: field.handleBlur,
              change: field.handleChange,
              value: field.state.value,
            })}

            <RACFieldError className="text-sm/[1.5] text-error">
              {errorMessage}
            </RACFieldError>
          </RACTextField>
        );
      }}
    </form.Field>
  );
}

function getErrorMessage(errors: readonly unknown[]) {
  for (const error of errors) {
    if (typeof error === "string" && error !== "") {
      return error;
    }
  }

  return undefined;
}
