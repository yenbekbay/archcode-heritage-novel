import { z } from "zod";

const SubmissionErrorSchema = z.object({
  name: z.enum([
    "Error",
    "TypeError",
    "AbortError",
    "TimeoutError",
    "ZodError",
  ]),
  cause: z
    .object({
      code: z
        .string()
        .regex(/^[A-Z0-9]{1,20}$/u)
        .optional(),
      status: z.number().int().min(100).max(599).optional(),
    })
    .optional(),
});

// NOTE: Error messages and provider details can repeat visitor text or secrets.
// Retain diagnostic classes, provider codes, and HTTP statuses only.
type SubmissionErrorDetails =
  | z.infer<typeof SubmissionErrorSchema>
  | {
      name: "UnknownError";
    };

export function decodeSubmissionError(error: unknown): SubmissionErrorDetails {
  const result = SubmissionErrorSchema.safeParse(error);
  return result.success ? result.data : { name: "UnknownError" };
}
