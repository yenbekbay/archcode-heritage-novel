import { SavedLinks } from "#components/SavedLinks.tsx";
import { buildPageMetadata } from "#lib/metadata.ts";

export const metadata = buildPageMetadata({
  pathname: "/links",
  title: "Ссылки",
  description:
    "Материалы об архитектурном наследии, сохраненные во время игры.",
});

export default function LinksPage() {
  return <SavedLinks />;
}
