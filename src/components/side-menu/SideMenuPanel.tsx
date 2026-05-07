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
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 h-screen w-[260px] max-w-full overflow-y-auto bg-[#e5e8e9] transition-transform duration-300 ease-in-out md:sticky md:top-0 md:z-auto md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        aria-label="Close side menu"
        className="ml-3 mt-2 rounded-full p-1 text-[#777b7d] hover:bg-black/10 cursor-pointer"
        type="button"
        onClick={onClose}
      >
        <X className="h-6 w-6" strokeWidth={2.2} />
      </button>
      <SideMenuUserSummary />

      <nav className="mt-36 px-5 pb-10">
        <p className="mb-5 text-[16px] font-medium text-[#55595a]">Myself</p>

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

        <div className="my-8 h-px bg-[#c8cbcc]" />

        <div className="space-y-3">
          <SideMenuItem icon={Home} label="Home" showChevron />
          <SideMenuItem icon={LogOut} label="Sign out" showChevron />
        </div>
      </nav>
    </aside>
  );
}
