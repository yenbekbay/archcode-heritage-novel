"use client";

import dynamic from "next/dynamic";

const DiscussionEmbed = dynamic(
  () => import("disqus-react").then((module) => module.DiscussionEmbed),
  { ssr: false },
);

export function FeedbackDiscussion() {
  return (
    <DiscussionEmbed
      shortname="archcode-heritage-novel"
      config={{
        url: "https://heritage-novel.com",
        identifier: "default",
        title: "Визуальная новелла «Снести нельзя оставить»",
        language: "ru",
      }}
    />
  );
}
