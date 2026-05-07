import type { ReactElement } from "react";
import { useSideMenu } from "../../hooks/useSideMenu";
import { SideMenuOverlay } from "./SideMenuOverlay";
import { SideMenuPanel } from "./SideMenuPanel";

export function SideMenu(): ReactElement {
  const { closeMenu, isOpen } = useSideMenu();

  return (
    <>
      <SideMenuOverlay isOpen={isOpen} onClose={closeMenu} />
      <div
        className={`flex-shrink-0 overflow-hidden transition-[width] duration-300 ease-in-out md:sticky md:top-0 md:h-screen md:self-start ${
          isOpen ? "md:w-[360px]" : "md:w-0"
        }`}
      >
        <SideMenuPanel isOpen={isOpen} onClose={closeMenu} />
      </div>
    </>
  );
}
