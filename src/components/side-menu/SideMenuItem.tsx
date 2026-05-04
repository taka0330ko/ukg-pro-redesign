import type { LucideIcon } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

type SideMenuItemProps = {
  icon?: LucideIcon;
  isActive?: boolean;
  isExpanded?: boolean;
  label: string;
  showChevron?: boolean;
};

export function SideMenuItem({
  icon: Icon,
  isActive = false,
  isExpanded = false,
  label,
  showChevron = false,
}: SideMenuItemProps) {
  const ChevronIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <button
      className={`flex min-h-11 w-full items-center gap-3 rounded-[12px] px-8 text-left text-[17px] font-medium leading-tight text-black ${
        isActive ? "bg-[#d2d5d6] font-bold" : "hover:bg-black/5"
      }`}
      type="button"
    >
      {Icon ? <Icon className="h-6 w-6 flex-shrink-0 text-[#5f6365]" strokeWidth={2} /> : null}
      <span className="min-w-0 flex-1">{label}</span>
      {showChevron ? <ChevronIcon className="h-4 w-4 flex-shrink-0" strokeWidth={2.4} /> : null}
    </button>
  );
}
