import type { ReactNode } from "react";
import { SideMenu, SideMenuToggleButton } from "../components/side-menu";
import AppHeader from "../components/app-header/AppHeader";

type AppLayoutProps = {
  children?: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="workspace-bg flex min-h-screen">
      <SideMenu />
      <div className="min-w-0 flex-1">
        <div className="workspace-bg fixed z-60 flex w-full items-center px-4 pb-4">
          <SideMenuToggleButton />
          <AppHeader />
        </div>

        <main className="mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}
