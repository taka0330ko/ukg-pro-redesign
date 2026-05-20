import type { MouseEvent } from "react";
import { useState } from "react";
import { timePeriods } from "../../data/payOverviewData";
import WorkHoursCell from "./WorkHoursCell";
import WorkHoursCard from "./WorkHoursCard";

type TimePeriod = (typeof timePeriods)[number];
type Shift = TimePeriod["shifts"][number];
type CardPosition = {
  x: number;
  y: number;
};

type TimeRowProps = {
  period?: TimePeriod;
};

const DAY_COUNT = 7;
const ROW_HEIGHT = 336;

// Must match TimeColumn so vertical day columns and horizontal time lines align.
const TOP_PADDING = 16;

const dayFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  timeZone: "UTC",
});

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function getWeekDays(period: TimePeriod) {
  const startDate = new Date(`${period.range.start}T00:00:00Z`);

  // Derive the visible week from the selected period; the toggle can swap this prop later.
  return Array.from({ length: DAY_COUNT }, (_, index) => {
    const date = new Date(startDate);
    date.setUTCDate(startDate.getUTCDate() + index);

    return {
      date: date.toISOString().slice(0, 10),
      dateNumber: date.getUTCDate(),
      day: dayFormatter.format(date),
      monthYear: monthFormatter.format(date),
    };
  });
}

export default function TimeRow({ period = timePeriods[0] }: TimeRowProps) {
  const [activeShift, setActiveShift] = useState<Shift | null>(null);
  const [cardPosition, setCardPosition] = useState<CardPosition>({
    x: 0,
    y: 0,
  });
  const days = getWeekDays(period);

  function updateCardPosition(event: MouseEvent<HTMLDivElement>) {
    setCardPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div className="w-full">
      <div
        data-time-grid
        className="calendar-grid-bg relative grid grid-cols-7"
        style={{
          backgroundPosition: `0 ${TOP_PADDING}px`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `100% calc(100% - ${TOP_PADDING}px)`,
          height: `${ROW_HEIGHT + TOP_PADDING}px`,
          paddingTop: `${TOP_PADDING}px`,
        }}
        aria-label={`${period.label} day columns`}
      >
        {days.map((day, index) => {
          const isLastDay = index === days.length - 1;

          return (
            <div
              key={`${period.id}-${day.dateNumber}`}
              className={`calendar-grid-cell relative ${
                // Add the far-right outline only to the graph area, not to the date label row.
                isLastDay ? "calendar-grid-cell-end" : ""
              }`}
            >
              {period.shifts
                .filter((shift) => shift.date === day.date)
                .map((shift) => (
                  <WorkHoursCell
                    key={shift.id}
                    shift={shift}
                    onActivate={(nextShift, event) => {
                      setActiveShift(nextShift);
                      updateCardPosition(event);
                    }}
                    onDeactivate={() => setActiveShift(null)}
                    onMove={updateCardPosition}
                    topPadding={0}
                  />
                ))}
            </div>
          );
        })}

      </div>

      <div
        className={`pointer-events-none fixed z-[100] w-[380px] max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-[calc(100%+0.75rem)] transition-all duration-200 ease-out ${
          activeShift ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{
          left: `${cardPosition.x}px`,
          top: `${cardPosition.y}px`,
        }}
      >
        {activeShift ? <WorkHoursCard shift={activeShift} /> : null}
      </div>

      <div className="calendar-date-row grid grid-cols-7 border-t">
        {days.map((day) => (
          <div
            key={`${period.id}-${day.dateNumber}-label`}
            className="relative flex min-w-0 items-start justify-center gap-1 pt-2"
          >
            {/* Short marker lines align with the day column borders without extending through the label row. */}
            <span className="rule-secondary absolute left-0 top-2 h-8 w-0.5" />
            <span className="text-2xl leading-none">{day.dateNumber}</span>
            <div className="min-w-0 pt-0.5">
              <p className="text-lg font-medium leading-none">{day.day}</p>
              <p className="text-secondary mt-2 text-xs leading-tight">
                {day.monthYear}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
