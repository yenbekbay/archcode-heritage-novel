"use client";

import type { ImageInfo, MqlResponseData } from "@microlink/mql";
import mql from "@microlink/mql";
import React from "react";
import useSWR from "swr";
import { twMerge } from "tailwind-merge";

export type LinkCardProps = {
  url: string;
} & Omit<LinkCardViewProps, "title" | "description" | "image" | "screenshot">;

export function LinkCard({ url: href, ...restProps }: LinkCardProps) {
  const res = useSWR(href, linkMetadataFetcher);

  return (
    <LinkCardView
      url={href}
      title={res.data?.title}
      description={res.data?.description}
      image={res.data?.image}
      screenshot={res.data?.screenshot}
      {...restProps}
    />
  );
}

type LinkCardViewProps = {
  url: string;
  title?: string | null;
  description?: string | null;
  image?: ImageInfo | null;
  screenshot?: ImageInfo | null;
  size?: "md" | "sm";
} & Omit<React.ComponentPropsWithRef<"a">, "title" | "lang" | "href">;

function LinkCardView({
  url,
  title,
  description,
  image,
  screenshot,
  size = "md",
  ...restProps
}: LinkCardViewProps) {
  return (
    <a
      {...restProps}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge("no-underline", restProps.className)}
    >
      {image || screenshot ? (
        // oxlint-disable-next-line nextjs/no-img-element -- Preview providers return arbitrary external image hosts.
        <img
          alt=""
          src={
            image && image.width < 400
              ? (screenshot?.url ?? image.url)
              : (image?.url ?? screenshot?.url)
          }
          className="my-0 h-48 w-full object-cover"
        />
      ) : (
        <div className="h-48 w-full bg-black/20" />
      )}

      <p
        className={twMerge(
          "px-4 underline",
          {
            md: "text-xl",
            sm: "text-base",
          }[size],
        )}
      >
        {title ?? url}
      </p>

      {description != null && description !== "" && (
        <p
          className={twMerge(
            "px-4",
            {
              md: "text-base",
              sm: "text-sm",
            }[size],
          )}
        >
          {description}
        </p>
      )}
    </a>
  );
}

async function linkMetadataFetcher(href: string): Promise<MqlResponseData> {
  const res = await mql(href, {
    screenshot: true,
  });

  if (res.status === "fail") {
    throw new Error("Failed to get link metadata");
  }

  return res.data;
}
