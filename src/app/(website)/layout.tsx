import { Layout } from "#components/Layout.tsx";
import { WebsiteProviders } from "#components/WebsiteProviders.tsx";
import type { ReactNode } from "react";

export default function WebsiteLayout(props: { children: ReactNode }) {
  return (
    <WebsiteProviders>
      <Layout>{props.children}</Layout>
    </WebsiteProviders>
  );
}
