import "server-only";

import { openGraphJpg } from "#assets/www/index.ts";
import {
  WEBSITE_DESCRIPTION,
  WEBSITE_NAME,
  WEBSITE_URL,
} from "#config/website.ts";
import type { Metadata } from "next";

export function buildRootMetadata(props: { isIndexable: boolean }): Metadata {
  return {
    metadataBase: new URL(WEBSITE_URL),
    title: { default: WEBSITE_NAME, template: `%s · ${WEBSITE_NAME}` },
    description: WEBSITE_DESCRIPTION,
    formatDetection: { telephone: false },
    icons: { icon: "/favicon.ico" },
    robots: props.isIndexable ? undefined : { index: false, follow: false },
  };
}

export function buildPageMetadata(props: {
  pathname: string;
  title: string;
  description: string;
}): Metadata {
  const url = new URL(props.pathname, WEBSITE_URL).href;

  const image = {
    url: new URL(openGraphJpg.src, WEBSITE_URL).href,
    width: openGraphJpg.width,
    height: openGraphJpg.height,
    type: "image/jpeg",
  };

  return {
    title: props.pathname === "/" ? { absolute: props.title } : props.title,
    description: props.description,
    alternates: { canonical: url, languages: { ru: url } },
    openGraph: {
      type: "website",
      url,
      title: props.title,
      description: props.description,
      siteName: WEBSITE_NAME,
      locale: "ru_RU",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: props.title,
      description: props.description,
      images: [image.url],
    },
  };
}
