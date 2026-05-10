import { useState } from "react";
import TimeColumn from "./TimeColumn";
import { timePeriods, weeklySummaries } from "../../data/payOverviewData";
import TimeRow from "./TimeRow";
import WeekToggle from "./WeekToggle";

function formatDate(date: string) {
  const [year, month, day] = date.split("-");

  return `${month}/${day}/${year}`;
}

function formatHours(hours: number) {
  return `${hours.toFixed(2)} hours`;
}

export default function HoursBreakdownSection() {
  const [selectedWeekId, setSelectedWeekId] = useState(timePeriods[0].id);
  const selectedPeriod =
    timePeriods.find((period) => period.id === selectedWeekId) ??
    timePeriods[0];
  const totalHours = weeklySummaries.reduce(
    (sum, summary) => sum + summary.totalHours,
    0,
  );

  return (
    <section className="min-w-0 min-h-[520px] rounded-2xl border border-neutral-300 bg-neutral-0 p-4">
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

      <div className="mx-auto mt-8 w-full max-w-[720px] text-base text-black">
        <div className="space-y-3">
          {timePeriods.map((period) => {
            const summary = weeklySummaries.find(
              (weeklySummary) => weeklySummary.weekId === period.id,
            );
            const isSelected = period.id === selectedWeekId;

            return (
              <div
                key={period.id}
                className="grid grid-cols-[1fr_auto] items-center gap-4"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className={`h-6 w-2 shrink-0 rounded-full ${
                      isSelected ? "bg-brand-teal-500" : "bg-transparent"
                    }`}
                  />
                  <span className="shrink-0">{period.label}</span>
                  <span className="truncate text-neutral-500">
                    {formatDate(period.range.start)} -{" "}
                    {formatDate(period.range.end)}
                  </span>
                </div>
                <span className="text-right">
                  {formatHours(summary?.totalHours ?? period.totalHours)}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 border-t border-neutral-400 pt-5">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4 font-bold">
            <span>Total hours</span>
            <span>{totalHours.toFixed(2)} Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
