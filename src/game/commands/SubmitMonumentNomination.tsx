import type { definitions } from "#api/index.ts";
import { getSupabase } from "#api/index.ts";
import { TextForm } from "#game/commands/internal/index.ts";
import type { Navigation } from "#game/runtime.ts";
import { useBranchContext, useNavigation } from "#game/runtime.ts";
import type { Frame } from "react-visual-novel";
import { Command, CommandSurface, styleForFrame } from "react-visual-novel";
import { twMerge } from "tailwind-merge";

export type SubmitMonumentNominationProps = {
  onDone: (ctx: Navigation) => void;
  frame?: Frame;
};

export function SubmitMonumentNomination(props: SubmitMonumentNominationProps) {
  const navigation = useNavigation();
  const { containerRect } = useBranchContext();

  return (
    <Command name="SubmitMonumentNomination" behavior={["non_skippable"]}>
      {(controls) => (
        <CommandSurface
          controls={controls}
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

              props.onDone(navigation);
            }}
          />
        </CommandSurface>
      )}
    </Command>
  );
}
