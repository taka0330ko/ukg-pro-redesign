import { timePeriods } from "../../data/payOverviewData";

type WeekToggleProps = {
  selectedWeekId: string;
  onChange: (weekId: string) => void;
};

export default function WeekToggle({
  selectedWeekId,
  onChange,
}: WeekToggleProps) {
  return (
    <div
      className="inline-flex rounded-full bg-[#ddf9df] p-1"
      role="tablist"
      aria-label="Select pay week"
    >
      {timePeriods.map((period) => {
        const isSelected = period.id === selectedWeekId;

        return (
          <button
            key={period.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            className={`rounded-full px-5 py-2 text-sm transition-colors ${
              isSelected
                ? "bg-[#004c32] text-white"
                : "text-black hover:bg-white/50"
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
