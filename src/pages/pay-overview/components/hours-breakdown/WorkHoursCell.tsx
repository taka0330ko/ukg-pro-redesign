import { timePeriods } from "../../data/payOverviewData";

type Shift = (typeof timePeriods)[number]["shifts"][number];

type WorkHoursCellProps = {
  shift: Shift;
  hourHeight?: number;
  topPadding?: number;
};

const DEFAULT_HOUR_HEIGHT = 14;
const DEFAULT_TOP_PADDING = 16;
const MIN_CELL_HEIGHT = 36;
const OVERTIME_BAND_HEIGHT = "0.625rem";

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

function formatTimeRange(shift: Shift) {
  return `${shift.actual.clockIn}-${shift.actual.clockOut}`;
}

export default function WorkHoursCell({
  shift,
  hourHeight = DEFAULT_HOUR_HEIGHT,
  topPadding = DEFAULT_TOP_PADDING,
}: WorkHoursCellProps) {
  const startMinutes = timeToMinutes(shift.actual.clockIn);
  const endMinutes = timeToMinutes(shift.actual.clockOut);
  const assignedStartMinutes = timeToMinutes(shift.assigned.start);
  const isLate = startMinutes > assignedStartMinutes;
  const hasOvertime = shift.overtimeHours > 0;
  const top = topPadding + (startMinutes / 60) * hourHeight;
  const height = Math.max(
    ((endMinutes - startMinutes) / 60) * hourHeight,
    MIN_CELL_HEIGHT,
  );

  return (
    <div
      className="absolute z-50 inset-x-1 overflow-hidden rounded-md bg-[#008313] text-white"
      style={{
        top: `${top}px`,
        height: `${height}px`,
      }}
      aria-label={`${shift.day} ${formatTimeRange(shift)}`}
    >
      {isLate ? <div className="h-2.5 bg-[#ff7f8a]" /> : null}
      <div
        className="absolute left-2 flex items-center gap-1 text-xs leading-none"
        style={{
          bottom: hasOvertime
            ? `calc(0.5rem + ${OVERTIME_BAND_HEIGHT})`
            : "0.5rem",
        }}
      >
        <span
          className={`h-5 w-1.5 rounded-full ${
            isLate
              ? "bg-[#ff7f8a]"
              : hasOvertime
                ? "bg-[#28d6f5]"
                : "bg-[#c8ffd1]"
          }`}
        />
        <span>{formatTimeRange(shift)}</span>
      </div>
      {hasOvertime ? (
        <div
          className="absolute inset-x-0 bottom-0 bg-[#28d6f5]"
          style={{ height: OVERTIME_BAND_HEIGHT }}
        />
      ) : null}
    </div>
  );
}
