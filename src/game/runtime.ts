import type * as branchExports from "#game/branches/index.ts";
import type {
  Navigation as GameNavigation,
  prepareBranches,
} from "react-visual-novel";
import { createGame } from "react-visual-novel";

type StoryBranches = ReturnType<typeof prepareBranches<typeof branchExports>>;

export type BranchId = keyof StoryBranches;
export type Navigation = GameNavigation<BranchId>;

export const {
  Game,
  Menu,
  Say,
  MenuView,
  useGameContext,
  useBranchContext,
  useNavigation,
} = createGame<BranchId>();
