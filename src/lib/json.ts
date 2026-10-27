// Anything that survives a `JSON.stringify` round trip. Use it where a value
// is on its way to a wire, a log, or an error payload: it says "serializable"
// where `Record<string, unknown>` says only "some object", and it keeps
// callers from handing over a value that would silently drop or throw.
export type JsonValue =
  boolean | number | string | null | JsonValue[] | { [key: string]: JsonValue };
