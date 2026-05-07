import type { ReactNode } from "react";
import { SideMenu, SideMenuToggleButton } from "../components/side-menu";
import AppHeader from "../components/app-header/AppHeader";

type AppLayoutProps = {
  children?: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <SideMenu />
      <div className="min-w-0 flex-1">
        <div className="relative">
          <div className="absolute left-3 top-1/2 z-10 -translate-y-1/2">
            <SideMenuToggleButton />
          </div>
          <AppHeader />
        </div>

        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
