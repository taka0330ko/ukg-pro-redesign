import { timePeriods } from "./TimePeriod";

type TimePeriod = (typeof timePeriods)[number];

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
      dateNumber: date.getUTCDate(),
      day: dayFormatter.format(date),
      monthYear: monthFormatter.format(date),
    };
  });
}

export default function TimeRow({ period = timePeriods[0] }: TimeRowProps) {
  const days = getWeekDays(period);

  return (
    <div className="w-full">
      <div
        className="grid grid-cols-7"
        style={{
          // The top padding is reserved for the 00:00 label, so the gray plot background starts below it.
          backgroundImage: "linear-gradient(#f5f5f5, #f5f5f5)",
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
              className={`border-l border-[#555a83] ${
                // Add the far-right outline only to the graph area, not to the date label row.
                isLastDay ? "border-r" : ""
              }`}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-7 border-t border-[#9c9c9c]">
        {days.map((day) => (
          <div
            key={`${period.id}-${day.dateNumber}-label`}
            className="relative flex min-w-0 items-start justify-center gap-1 pt-2 text-black"
          >
            {/* Short marker lines align with the day column borders without extending through the label row. */}
            <span className="absolute left-0 top-2 h-8 w-0.5 bg-[#555a83]" />
            <span className="text-2xl leading-none">{day.dateNumber}</span>
            <div className="min-w-0 pt-0.5">
              <p className="text-lg font-medium leading-none">{day.day}</p>
              <p className="mt-2 text-xs leading-tight text-[#8e8e8e]">
                {day.monthYear}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
