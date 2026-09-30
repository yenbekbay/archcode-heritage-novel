import { SavedLinks } from "#components/SavedLinks.tsx";
import { buildPageMetadata } from "#lib/metadata.ts";
import { buildSavedLinksHref } from "#lib/routes.ts";

export const metadata = buildPageMetadata({
  pathname: buildSavedLinksHref(),
  title: "Ссылки",
  description:
    "Материалы об архитектурном наследии, сохраненные во время игры.",
});

export default function LinksPage() {
  return <SavedLinks />;
}
