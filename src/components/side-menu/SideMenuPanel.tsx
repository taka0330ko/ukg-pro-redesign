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
      className={`fixed inset-y-0 left-0 z-40 h-screen w-[360px] max-w-full overflow-y-auto bg-[#e5e8e9] transition-transform duration-300 ease-in-out md:static md:z-auto md:translate-x-0 ${
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

      <nav className="mt-36 px-6 pb-10">
        <p className="mb-5 text-[16px] font-semibold text-black">Myself</p>

        <div className="space-y-1">
          <SideMenuItem icon={CalendarClock} label="Time" showChevron />
          <SideMenuItem icon={RectangleEllipsis} label="Pay" isExpanded showChevron />
          <div className="space-y-2 pt-2">
            <SideMenuItem label="Pay overview" isActive />
            <SideMenuItem label="Pay statements" />
            <SideMenuItem label="Direct deposit" />
            <SideMenuItem label="Estimate your pay" />
            <SideMenuItem label="Taxes" />
          </div>
        </div>

        <div className="mt-10 space-y-3">
          <SideMenuItem icon={User} label="My profile" showChevron />
          <SideMenuItem icon={Sparkles} label="Career& development" showChevron />
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
