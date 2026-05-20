import { useState } from "react";
import {
  Building2,
  CalendarClock,
  Gift,
  Home,
  LogOut,
  RectangleEllipsis,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { SideMenuItem } from "./SideMenuItem";
import { SideMenuUserSummary } from "./SideMenuUserSummary";

type SideMenuPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SideMenuPanel({ isOpen, onClose }: SideMenuPanelProps) {
  const [hasScrolledNav, setHasScrolledNav] = useState(false);

  return (
    <aside
      className={`sidebar-panel fixed inset-y-0 left-0 z-99 flex h-screen w-[260px] max-w-full flex-col overflow-hidden transition-transform duration-300 ease-in-out md:sticky md:top-0 md:z-auto md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="sidebar-panel relative z-20 shrink-0 pb-8">
        <button
          aria-label="Close side menu"
          className="sidebar-close-button ml-3 mt-2 cursor-pointer rounded-full p-1"
          type="button"
          onClick={onClose}
        >
          <X className="h-6 w-6" strokeWidth={2.2} />
        </button>
        <SideMenuUserSummary />

        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-5 translate-y-full bg-gradient-to-b from-black/18 to-transparent transition-opacity duration-200 ${
            hasScrolledNav ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <nav
        className="min-h-0 flex-1 overflow-y-auto px-5 pb-10 pt-8"
        onScroll={(event) => {
          setHasScrolledNav(event.currentTarget.scrollTop > 0);
        }}
      >
        <p className="sidebar-section-title mb-5 text-[16px] font-medium">Myself</p>

        <div className="space-y-2">
          <SideMenuItem icon={CalendarClock} label="Time" showChevron />
          <SideMenuItem icon={RectangleEllipsis} label="Pay" isExpanded showChevron />
          <div className="space-y-3 pt-1">
            <SideMenuItem label="Pay overview" isActive variant="child" />
            <SideMenuItem label="Pay statements" variant="child" />
            <SideMenuItem label="Direct deposit" variant="child" />
            <SideMenuItem label="Estimate your pay" variant="child" />
            <SideMenuItem label="Taxes" variant="child" />
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <SideMenuItem icon={User} label="My profile" showChevron />
          <SideMenuItem icon={Sparkles} label="Career & development" showChevron />
          <SideMenuItem icon={Gift} label="Benefits" showChevron />
          <SideMenuItem icon={Building2} label="Company" showChevron />
        </div>

        <div className="rule-primary my-8 h-px" />

        <div className="space-y-3">
          <SideMenuItem icon={Home} label="Home" showChevron />
          <SideMenuItem icon={LogOut} label="Sign out" showChevron />
        </div>
      </nav>

    </aside>
  );
}
