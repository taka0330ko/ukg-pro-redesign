import type { ReactNode } from "react";
import { SideMenu, SideMenuToggleButton } from "../components/side-menu";

type AppLayoutProps = {
  children?: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideMenu />
      <main className="min-w-0 flex-1 transition-all duration-300">
        <div className="p-4">
          <SideMenuToggleButton />
          {children}
        </div>
      </main>
    </div>
  );
}
