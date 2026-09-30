import type { definitions } from "#api/index.ts";
import { getSupabase } from "#api/index.ts";
import { Spinner } from "#components/index.ts";
import { Button } from "#components/ui/Button.tsx";
import { Input } from "#components/ui/Input.tsx";
import { env } from "#config/env.ts";
import { useLocalStorageValue } from "@react-hookz/web";
import { motion } from "framer-motion";
import { X as XIcon } from "phosphor-react";
import React from "react";
import { toast } from "react-hot-toast";
import type { BranchId, Frame, ImageViewProps } from "react-visual-novel";
import {
  Command,
  ImageView,
  styleForFrame,
  useBranchContext,
  useGameContext,
} from "react-visual-novel";
import { useZorm } from "react-zorm";
import useSWR from "swr";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export type SubmitMemeProps = {
  onDone: (ctx: {
    goToBranch: (branchId: BranchId) => void;
    goToStatement: (statementLabel: string) => void;
    goToNextStatement: (plusIndex?: number) => void;
  }) => void;
  frame?: Frame;
  image?: string | Omit<ImageViewProps, "controls">;
};

export function SubmitMeme(props: SubmitMemeProps) {
  const { goToBranch } = useGameContext();

  const { containerRect, goToStatement, goToNextStatement } =
    useBranchContext();

  const imageProps =
    typeof props.image === "string" ? { uri: props.image } : props.image;

  return (
    <Command name="SubmitMeme" behavior={["non_skippable"]}>
      {(controls) => (
        <>
          {imageProps && <ImageView controls={controls} {...imageProps} />}

          <motion.div
            className={twMerge(
              "absolute flex flex-col rvn-text",
              props.frame == null && "inset-0 p-8 py-20",
            )}
            style={props.frame && styleForFrame({ containerRect }, props.frame)}
            variants={{
              initial: { opacity: 0 },
              entrance: {
                opacity: 1,
                transition: { duration: 1 },
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            initial="initial"
            animate={controls}
          >
            <MemeForm
              onSubmit={async (values) => {
                const meme: Pick<
                  definitions["meme_submissions"],
                  "url" | "name"
                > = { url: values.url };

                if (values.name !== "") {
                  meme.name = values.name;
                }

                const { error } = await getSupabase()
                  .from<definitions["meme_submissions"]>("meme_submissions")
                  .insert(meme);

                if (error != null) {
                  throw new Error("Failed to save meme", { cause: error });
                }

                props.onDone({ goToStatement, goToBranch, goToNextStatement });
              }}
              onSkip={() => {
                props.onDone({ goToStatement, goToBranch, goToNextStatement });
              }}
            />
          </motion.div>
        </>
      )}
    </Command>
  );
}

// MARK: MemeForm

type MemeSubmission = {
  url: string;
  name: string;
};

type MemeFormProps = {
  onSubmit: (values: MemeSubmission) => Promise<void>;
  onSkip: () => void;
};

function MemeForm(props: MemeFormProps) {
  const { playSound } = useGameContext();

  const [activeTemplateId, setActiveTemplateId, resetActiveTemplateId] =
    useLocalStorageValue<string>("@MemeForm/activeTemplateId");

  const [previewUrl, setPreviewUrl, resetPreviewUrl] =
    useLocalStorageValue<string>("@MemeForm/previewUrl");

  const templatesRes = useSWR<ImgFlipMemeTemplate[], Error>(
    "memeTemplates",
    getMemeTemplates,
  );

  const templates = templatesRes.data;

  const activeTemplate = templates?.find(
    (template) => template.id === activeTemplateId,
  );

  const hasPreview = previewUrl != null && previewUrl !== "";

  if (templatesRes.error != null && templates == null) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-y-4">
        <span role="alert">Что-то пошло не так. Попробуйте ещё раз</span>

        <Button onPress={props.onSkip} variant="game">
          Пропустить
        </Button>
      </div>
    );
  }
  if (templates == null) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Spinner />
      </div>
    );
  }
  if (activeTemplate != null) {
    return (
      <div className="flex min-h-0 flex-1 flex-col gap-y-4">
        <div className="flex min-h-16 w-full items-center p-2">
          <div className="flex w-1/2 items-center">
            <Button
              onHoverStart={() => {
                playSound("mouseover");
              }}
              onPress={() => {
                playSound("click");
                if (hasPreview) {
                  setPreviewUrl("");
                } else {
                  setActiveTemplateId("");
                }
              }}
              variant="ghost"
              isIconOnly
              aria-label="Вернуться к шаблонам"
              className="bg-white text-xl shadow-md hover:bg-chicago-50"
            >
              <XIcon />
            </Button>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-y-4 overflow-y-auto">
          {/* oxlint-disable-next-line nextjs/no-img-element -- Imgflip supplies dynamic remote images outside the local image pipeline. */}
          <img
            src={hasPreview ? previewUrl : activeTemplate.url}
            alt={activeTemplate.name}
            className="h-auto max-h-64 w-full object-contain"
          />

          <span className="text-lg font-semibold">{activeTemplate.name}</span>

          {hasPreview ? (
            <MemePreview
              url={previewUrl}
              onSubmit={async (values) => {
                await props.onSubmit(values);
                resetPreviewUrl();
                resetActiveTemplateId();
              }}
              onSkip={() => {
                props.onSkip();
                resetPreviewUrl();
                resetActiveTemplateId();
              }}
            />
          ) : (
            <MemeTemplateForm
              template={activeTemplate}
              onPreviewUrlChange={setPreviewUrl}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-y-4 overflow-y-auto">
      {templates.map((template) => (
        <button
          key={template.id}
          type="button"
          aria-label={`Выбрать шаблон «${template.name}»`}
          onMouseEnter={() => {
            playSound("mouseover");
          }}
          onClick={() => {
            playSound("click");
            setActiveTemplateId(template.id);
          }}
          className="rvn-surface w-full cursor-pointer"
        >
          {/* oxlint-disable-next-line nextjs/no-img-element -- Imgflip supplies dynamic remote images outside the local image pipeline. */}
          <img
            src={template.url}
            alt=""
            className="h-auto w-full object-contain"
          />
        </button>
      ))}
    </div>
  );
}

// MARK: MemePreview

type MemePreviewProps = {
  url: string;
  onSubmit: (values: MemeSubmission) => Promise<void>;
  onSkip: () => void;
};

const MemePreviewSchema = z.object({ name: z.string() });

function MemePreview(props: MemePreviewProps) {
  const { playSound } = useGameContext();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const zo = useZorm("meme-preview", MemePreviewSchema, {
    onValidSubmit: async (event) => {
      event.preventDefault();

      if (isSubmitting) {
        return;
      }

      setIsSubmitting(true);

      try {
        await props.onSubmit({ url: props.url, name: event.data.name });
      } catch {
        console.error("Failed to save meme");
        toast.error("Что-то пошло не так. Попробуйте ещё раз");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="relative flex flex-col">
      <form
        ref={zo.ref}
        className={twMerge(
          "flex flex-col gap-y-2",
          isSubmitting && "pointer-events-none opacity-50",
        )}
      >
        <div className="flex flex-col gap-y-2">
          <label className="text-sm font-bold" htmlFor="name">
            Ваше имя (необязательно)
          </label>

          <Input
            aria-invalid={zo.errors.name() !== undefined}
            aria-describedby={zo.errors.name(zo.fields.name("errorid"))}
            id="name"
            name="name"
            type="text"
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
          onHoverStart={() => {
            playSound("mouseover");
          }}
          onPress={() => {
            playSound("click");
            props.onSkip();
          }}
          variant="game"
          isDisabled={isSubmitting}
        >
          Пропустить
        </Button>

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
          Опубликовать мем
        </Button>

        <span className="max-w-[65ch] text-xs/[1.5] text-gray-700">
          Нажав на кнопку «Опубликовать мем», вы даёте нам разрешение
          копировать, изменять, распространять и исполнять ваше произведение,
          даже в коммерческих целях.
        </span>
      </form>

      {isSubmitting && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}

// MARK: MemeTemplateForm

type MemeTemplateFormProps = {
  template: ImgFlipMemeTemplate;
  onPreviewUrlChange: (url: string) => void;
};

function MemeTemplateForm(props: MemeTemplateFormProps) {
  const { template } = props;

  const { playSound } = useGameContext();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const FormSchema = React.useMemo(
    () =>
      z.object(
        Object.fromEntries(
          Array.from({ length: template.box_count }).map((_, i) => [
            `text${i}`,
            z.string().min(1, "Пожалуйста, заполните поле"),
          ]),
        ),
      ),
    [template.box_count],
  );

  const zo = useZorm("meme-template", FormSchema, {
    onValidSubmit: async (event) => {
      event.preventDefault();

      if (isSubmitting) {
        return;
      }

      setIsSubmitting(true);

      try {
        const formData = new FormData();
        formData.append("template_id", template.id);
        formData.append(
          "username",

          env.NEXT_PUBLIC_IMGFLIP_USERNAME,
        );
        formData.append(
          "password",

          env.NEXT_PUBLIC_IMGFLIP_PASSWORD,
        );

        for (const [idx, value] of Object.values(event.data).entries()) {
          formData.append(`boxes[${idx}][text]`, value);
        }

        const res = await fetch("https://api.imgflip.com/caption_image", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          throw new Error(`Failed to caption image: ${res.status}`);
        }

        const caption = ImgFlipCaptionResponseSchema.parse(await res.json());
        if (caption.success) {
          props.onPreviewUrlChange(caption.data.url);
        } else {
          console.warn("Imgflip rejected image caption");
          toast.error("Что-то пошло не так. Попробуйте ещё раз");
        }
      } catch {
        console.error("Failed to caption image");
        toast.error("Что-то пошло не так. Попробуйте ещё раз");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="relative flex flex-col">
      <form
        ref={zo.ref}
        className={twMerge(
          "flex flex-col gap-y-4",
          isSubmitting && "pointer-events-none opacity-50",
        )}
      >
        {Object.keys(FormSchema.shape).map((name, i) => (
          <div key={name} className="flex flex-col gap-y-2">
            <label className="text-sm font-bold" htmlFor={name}>
              Текст {i + 1}
            </label>

            <Input
              aria-invalid={zo.errors[name]?.() !== undefined}
              aria-describedby={
                zo.errors[name]?.() !== undefined
                  ? zo.fields[name]?.("errorid")
                  : undefined
              }
              id={name}
              name={name}
              type="text"
            />

            {zo.errors[name]?.((err) => (
              <span
                id={zo.fields[name]?.("errorid")}
                className="text-sm/[1.5] text-error"
              >
                {err.message}
              </span>
            ))}
          </div>
        ))}

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
          Посмотреть
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

// MARK: Helpers

const ImgFlipMemeTemplateSchema = z.object({
  id: z.string().min(1),
  name: z.string(),
  url: z.string().url(),
  width: z.number().positive(),
  height: z.number().positive(),
  box_count: z.number().int().positive(),
});

type ImgFlipMemeTemplate = z.infer<typeof ImgFlipMemeTemplateSchema>;

const ImgFlipErrorSchema = z.object({
  success: z.literal(false),
  error_message: z.string(),
});

const ImgFlipGetMemesResponseSchema = z.discriminatedUnion("success", [
  z.object({
    success: z.literal(true),
    data: z.object({ memes: z.array(ImgFlipMemeTemplateSchema) }),
  }),
  ImgFlipErrorSchema,
]);

const ImgFlipCaptionResponseSchema = z.discriminatedUnion("success", [
  z.object({
    success: z.literal(true),
    data: z.object({ url: z.string().url(), page_url: z.string().url() }),
  }),
  ImgFlipErrorSchema,
]);

async function getMemeTemplates(): Promise<ImgFlipMemeTemplate[]> {
  const res = await fetch("https://api.imgflip.com/get_memes");
  if (!res.ok) {
    throw new Error(`Failed to get meme templates: ${res.status}`);
  }

  const response = ImgFlipGetMemesResponseSchema.parse(await res.json());
  if (!response.success) {
    throw new Error("Imgflip rejected meme template request");
  }

  return response.data.memes;
}
