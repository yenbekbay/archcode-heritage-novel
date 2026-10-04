import type { definitions } from "#api/index.ts";
import { getSupabase } from "#api/index.ts";
import { TextForm } from "#game/commands/internal/index.ts";
import type { Navigation } from "#game/runtime.ts";
import { useBranchContext, useNavigation } from "#game/runtime.ts";
import type { Frame, ImageViewProps } from "react-visual-novel";
import {
  Command,
  CommandSurface,
  ImageView,
  styleForFrame,
} from "react-visual-novel";
import { twMerge } from "tailwind-merge";

export type SubmitPostProps = {
  onDone: (ctx: Navigation) => void;
  frame?: Frame;
  image?: string | Omit<ImageViewProps, "controls">;
};

export function SubmitPost(props: SubmitPostProps) {
  const navigation = useNavigation();
  const { containerRect } = useBranchContext();

  const imageProps =
    typeof props.image === "string" ? { uri: props.image } : props.image;

  return (
    <Command name="SubmitPost" behavior={["non_skippable"]}>
      {(controls) => (
        <>
          {imageProps && <ImageView controls={controls} {...imageProps} />}

          <CommandSurface
            controls={controls}
            className={twMerge(
              "absolute flex flex-col rvn-text",
              props.frame == null && "inset-0 p-8 py-20",
            )}
            style={props.frame && styleForFrame({ containerRect }, props.frame)}
          >
            <TextForm
              rows={10}
              inputLabel="Текст поста"
              submitLabel="Опубликовать пост"
              onSubmit={async (values) => {
                const post: Pick<
                  definitions["post_submissions"],
                  "body" | "name"
                > = { body: values.body };

                if (values.name !== "") {
                  post.name = values.name;
                }

                const { error } = await getSupabase()
                  .from<definitions["post_submissions"]>("post_submissions")
                  .insert(post);

                if (error != null) {
                  throw new Error("Failed to save post", { cause: error });
                }

                props.onDone(navigation);
              }}
            />
          </CommandSurface>
        </>
      )}
    </Command>
  );
}
