import type { definitions } from "#api/index.ts";
import { getSupabase } from "#api/index.ts";
import { TextForm } from "#game/commands/internal/index.ts";
import { motion } from "framer-motion";
import type { BranchId, Frame, ImageViewProps } from "react-visual-novel";
import {
  Command,
  ImageView,
  styleForFrame,
  useBranchContext,
  useGameContext,
} from "react-visual-novel";
import { twMerge } from "tailwind-merge";

export type SubmitPostProps = {
  onDone: (ctx: {
    goToBranch: (branchId: BranchId) => void;
    goToStatement: (statementLabel: string) => void;
    goToNextStatement: (plusIndex?: number) => void;
  }) => void;
  frame?: Frame;
  image?: string | Omit<ImageViewProps, "controls">;
};

export function SubmitPost(props: SubmitPostProps) {
  const { goToBranch } = useGameContext();

  const { containerRect, goToStatement, goToNextStatement } =
    useBranchContext();

  const imageProps =
    typeof props.image === "string" ? { uri: props.image } : props.image;

  return (
    <Command name="SubmitPost" behavior={["non_skippable"]}>
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

                props.onDone({ goToStatement, goToBranch, goToNextStatement });
              }}
            />
          </motion.div>
        </>
      )}
    </Command>
  );
}
