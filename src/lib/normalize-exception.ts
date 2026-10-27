import { z } from "zod";

const ThrownTextSchema = z.string();

// Logging, Sentry, and HTTP failure responses need one stable representation
// for every value JavaScript permits callers to throw.
export function normalizeException(cause: unknown): Error {
  if (cause instanceof Error) {
    return cause;
  }

  const thrownText = ThrownTextSchema.safeParse(cause);
  if (thrownText.success) {
    return new Error(thrownText.data);
  }

  return new Error(describeThrownValue(cause));
}

function describeThrownValue(cause: unknown): string {
  const label = Object.prototype.toString.call(cause);
  try {
    // `JSON.stringify` is typed as returning `string`, but it returns
    // `undefined` for a function or for `undefined` itself, and it throws on a
    // circular object or a `BigInt`. Both fall back to the tag.
    const serialized = ThrownTextSchema.safeParse(JSON.stringify(cause));
    return serialized.success ? serialized.data : label;
  } catch {
    return label;
  }
}
