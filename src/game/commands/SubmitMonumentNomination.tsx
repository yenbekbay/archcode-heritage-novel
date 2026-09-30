import type { definitions } from "#api/index.ts";
import { getSupabase } from "#api/index.ts";
import { TextForm } from "#game/commands/internal/index.ts";
import { motion } from "framer-motion";
import type { BranchId, Frame } from "react-visual-novel";
import {
  Command,
  styleForFrame,
  useBranchContext,
  useGameContext,
} from "react-visual-novel";
import { twMerge } from "tailwind-merge";

export type SubmitMonumentNominationProps = {
  onDone: (ctx: {
    goToBranch: (branchId: BranchId) => void;
    goToStatement: (statementLabel: string) => void;
    goToNextStatement: (plusIndex?: number) => void;
  }) => void;
  frame?: Frame;
};

export function SubmitMonumentNomination(props: SubmitMonumentNominationProps) {
  const { goToBranch } = useGameContext();

  const { containerRect, goToStatement, goToNextStatement } =
    useBranchContext();

  return (
    <Command name="SubmitMonumentNomination" behavior={["non_skippable"]}>
      {(controls) => (
        <motion.div
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
          className={twMerge(
            "absolute flex flex-col rvn-text",
            props.frame == null && "inset-0 p-8 py-20",
          )}
          style={props.frame && styleForFrame({ containerRect }, props.frame)}
        >
          <TextForm
            rows={3}
            inputLabel="Названия зданий"
            submitLabel="Сохранить"
            onSubmit={async (values) => {
              const nomination: Pick<
                definitions["monument_nominations"],
                "body" | "name"
              > = { body: values.body };

              if (values.name !== "") {
                nomination.name = values.name;
              }

              const { error } = await getSupabase()
                .from<definitions["monument_nominations"]>(
                  "monument_nominations",
                )
                .insert(nomination);

              if (error != null) {
                throw new Error("Failed to save monument nomination", {
                  cause: error,
                });
              }

              props.onDone({ goToStatement, goToBranch, goToNextStatement });
            }}
          />
        </motion.div>
      )}
    </Command>
  );
}
