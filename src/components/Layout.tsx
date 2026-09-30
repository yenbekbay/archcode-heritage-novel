import { Footer } from "./Footer";
import { Header } from "./Header";

export type LayoutProps = {
  children: React.ReactNode;
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
