"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import type {
  QueryParamAdapter,
  QueryParamAdapterComponent,
} from "use-query-params";

// NOTE: Story progression changes browser state, not server route data.
// Next integrates native history updates with useSearchParams and Back/Forward.
type GameQueryAdapterProps = Parameters<QueryParamAdapterComponent>[0];

export function GameQueryAdapter(props: GameQueryAdapterProps) {
  const searchParams = useSearchParams();

  const adapter = useMemo<QueryParamAdapter>(
    () => ({
      location: { search: searchParams.toString() },
      push(location) {
        window.history.pushState(null, "", buildQueryHref(location.search));
      },
      replace(location) {
        window.history.replaceState(null, "", buildQueryHref(location.search));
      },
    }),
    [searchParams],
  );

  return props.children(adapter);
}

function buildQueryHref(search: string) {
  return `${window.location.pathname}${search}${window.location.hash}`;
}
