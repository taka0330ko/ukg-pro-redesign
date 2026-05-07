import { useState } from "react";
import TimeColumn from "./TimeColumn";
import { timePeriods } from "./TimePeriod";
import TimeRow from "./TimeRow";
import WeekToggle from "./WeekToggle";

export default function HoursBreakdownSection() {
  const [selectedWeekId, setSelectedWeekId] = useState(timePeriods[0].id);
  const selectedPeriod =
    timePeriods.find((period) => period.id === selectedWeekId) ??
    timePeriods[0];

  return (
    <section className="min-w-0 min-h-[520px] rounded-2xl border border-[#d0d0d0] bg-white p-4">
      <div className="flex items-start justify-between">
        <h3 className="text-2xl font-medium text-black">Hours breakdown</h3>
      </div>
      <div className="flex justify-center mt-4">
        <WeekToggle
          selectedWeekId={selectedWeekId}
          onChange={setSelectedWeekId}
        />
      </div>
      <figure className="mt-10 max-w-full overflow-x-auto overflow-y-hidden px-2 pb-2">
        <div className="min-w-[760px]">
          <div className="relative ml-16">
            <div>
              <TimeRow period={selectedPeriod} />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0">
              <TimeColumn />
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
}
