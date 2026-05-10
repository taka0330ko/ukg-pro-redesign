import { timePeriods } from "../../data/payOverviewData";

type WeekToggleProps = {
  selectedWeekId: string;
  onChange: (weekId: string) => void;
};

export default function WeekToggle({
  selectedWeekId,
  onChange,
}: WeekToggleProps) {
  const selectedIndex = Math.max(
    timePeriods.findIndex((period) => period.id === selectedWeekId),
    0,
  );
  const segmentWidth = `calc((100% - 0.5rem) / ${timePeriods.length})`;

  return (
    <div
      className="relative inline-flex overflow-hidden rounded-full bg-toggle-bg p-1"
      role="tablist"
      aria-label="Select pay week"
    >
      <span
        className="pointer-events-none absolute bottom-1 left-1 top-1 rounded-full bg-toggle-btn transition-transform duration-700"
        style={{
          width: segmentWidth,
          transform: `translateX(${selectedIndex * 100}%)`,
          transitionTimingFunction: "var(--ease-spring)",
        }}
      />
      {timePeriods.map((period) => {
        const isSelected = period.id === selectedWeekId;

        return (
          <button
            key={period.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            className={`relative z-10 rounded-full px-5 py-2 text-sm transition-colors ${
              isSelected
                ? "text-neutral-0"
                : "text-neutral-950 hover:bg-toggle-btn-hover/40"
            }`}
            onClick={() => onChange(period.id)}
          >
            {period.label}
          </button>
        );
      })}
    </div>
  );
}
