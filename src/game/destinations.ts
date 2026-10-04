import type { GameLocation } from "react-visual-novel";
import type { BranchId } from "./runtime.ts";

// NOTE: Keep authored statement indices stable so existing URLs and history
// snapshots continue to select the same statements.
export const destinations = {
  roleSelection: { branchId: "Intro", statementIndex: 13 },
  airportProjectChoice: {
    branchId: "Developer_ProjAirport",
    statementIndex: 14,
  },
  zheltoksanProjectChoice: {
    branchId: "Developer_ProjZheltoksan",
    statementIndex: 14,
  },
  askProjectChoice: { branchId: "Developer_ProjAsk", statementIndex: 16 },
  airportPreservationResume: {
    branchId: "Developer_ProjAirport_Preserve",
    statementIndex: 11,
  },
  zheltoksanPreservationResume: {
    branchId: "Developer_ProjZheltoksan_Preserve",
    statementIndex: 11,
  },
  askPreservationResume: {
    branchId: "Developer_ProjAsk_Preserve",
    statementIndex: 11,
  },
  akimMenuEntry: { branchId: "Akim_0Menu", statementIndex: 5 },
  airportPublicDiscussion: {
    branchId: "Akim_ProjAirport_Examine_Reject",
    statementIndex: 4,
  },
} satisfies Record<string, GameLocation<BranchId>>;
