import { DAY_HEIGHT, HOUR_HEIGHT, TOP_PADDING } from "./timeScale";

const timeLabels = ["00:00", "06:00", "12:00", "18:00", "24:00"];

export default function TimeColumn() {
  return (
    <div
      className="relative w-full"
      style={{ height: `${DAY_HEIGHT + TOP_PADDING}px` }}
      aria-label="Time grid"
    >
      {timeLabels.map((time, index) => {
        // Labels are 6 hours apart, so the visual position is derived from the hour scale.
        const top = TOP_PADDING + index * 6 * HOUR_HEIGHT;

        return (
          <div
            key={time}
            className="absolute left-0 flex w-full items-center"
            style={{ top: `${top}px` }}
          >
            <span className="text-secondary absolute -left-16 w-12 text-right text-sm leading-none">
              {time}
            </span>
            <span className="rule-primary h-px flex-1" />
          </div>
        );
      })}
    </div>
  );
}
