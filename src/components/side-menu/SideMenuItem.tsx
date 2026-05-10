import type { LucideIcon } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

type SideMenuItemProps = {
  icon?: LucideIcon;
  isActive?: boolean;
  isExpanded?: boolean;
  label: string;
  showChevron?: boolean;
  variant?: "parent" | "child";
};

export function SideMenuItem({
  icon: Icon,
  isActive = false,
  isExpanded = false,
  label,
  showChevron = false,
  variant = "parent",
}: SideMenuItemProps) {
  const ChevronIcon = isExpanded ? ChevronUp : ChevronDown;
  const isChild = variant === "child";

  return (
    <button
      className={`flex w-full items-center rounded-[12px] text-left leading-tight text-neutral-700 ${
        isChild
          ? "min-h-12 px-[40px] text-[14px]"
          : "min-h-12 gap-4 px-3 text-[16px] font-medium"
      } ${
        isActive ? "bg-btn-primary font-bold text-neutral-950" : "hover:bg-neutral-950/5"
      }`}
      type="button"
    >
      {Icon ? (
        <Icon className="h-7 w-7 flex-shrink-0 text-neutral-600" strokeWidth={2} />
      ) : null}
      <span className="min-w-0 flex-1">{label}</span>
      {showChevron ? (
        <ChevronIcon className="ml-8 h-5 w-5 flex-shrink-0" strokeWidth={2.4} />
      ) : null}
    </button>
  );
}
