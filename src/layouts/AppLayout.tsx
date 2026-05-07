import type { ReactNode } from "react";
import { SideMenu, SideMenuToggleButton } from "../components/side-menu";
import AppHeader from "../components/app-header/AppHeader";

type AppLayoutProps = {
  children?: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideMenu />
<div className="min-w-0 flex-1">
       <div className="flex items-center">
         <SideMenuToggleButton />
        <AppHeader />
       </div>

        <main>
          <div className="p-4">
            
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
