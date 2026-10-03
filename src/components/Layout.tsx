import type { ReactNode } from "react";
import { Footer } from "./Footer.tsx";
import { Header } from "./Header.tsx";

export type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
