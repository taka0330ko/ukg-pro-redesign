import { useState, type MouseEvent } from "react";
import { timePeriods } from "../../data/payOverviewData";

type Shift = (typeof timePeriods)[number]["shifts"][number];

type WorkHoursCellProps = {
  shift: Shift;
  hourHeight?: number;
  onActivate?: (shift: Shift, event: MouseEvent<HTMLDivElement>) => void;
  onDeactivate?: () => void;
  onMove?: (event: MouseEvent<HTMLDivElement>) => void;
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
  onActivate,
  onDeactivate,
  onMove,
  topPadding = DEFAULT_TOP_PADDING,
}: WorkHoursCellProps) {
  const startMinutes = timeToMinutes(shift.actual.clockIn);
  const endMinutes = timeToMinutes(shift.actual.clockOut);
  const assignedStartMinutes = timeToMinutes(shift.assigned.start);
  const assignedEndMinutes = timeToMinutes(shift.assigned.end);
  const isLate = startMinutes > assignedStartMinutes;
  const hasEarlyLeave = endMinutes < assignedEndMinutes;
  const hasOvertime = shift.overtimeHours > 0;
  const earlyLeaveHeight = hasEarlyLeave
    ? ((assignedEndMinutes - endMinutes) / 60) * hourHeight
    : 0;
  const statusBandHeight = hasOvertime
    ? OVERTIME_BAND_HEIGHT
    : hasEarlyLeave
      ? `${earlyLeaveHeight}px`
      : null;
  const statusMarkerColor = isLate
    ? "status-late"
    : hasEarlyLeave
      ? "status-early-leave"
      : hasOvertime
        ? "status-overtime"
        : "status-regular";
  const visualEndMinutes = hasEarlyLeave ? assignedEndMinutes : endMinutes;
  const top = topPadding + (startMinutes / 60) * hourHeight;
  const height = Math.max(
    ((visualEndMinutes - startMinutes) / 60) * hourHeight,
    MIN_CELL_HEIGHT,
  );

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      className="work-cell group absolute inset-x-1 z-50 cursor-none overflow-hidden rounded-md outline-none transition-transform duration-150 hover:scale-[1.02] focus-visible:ring-2"
      style={{
        top: `${top}px`,
        height: `${height}px`,
      }}
      aria-label={`${shift.day} ${formatTimeRange(shift)}`}
      role="button"
      tabIndex={0}
      onBlur={onDeactivate}
      onMouseEnter={(event) => {
        onActivate?.(shift, event);
        onMove?.(event);

        const rect = event.currentTarget.getBoundingClientRect();

        setCursorPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }}
      onMouseLeave={onDeactivate}
      onMouseMove={(event) => {
        onMove?.(event);

        const rect = event.currentTarget.getBoundingClientRect();

        setCursorPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }}
    >
      <div
        className="work-cell-cursor pointer-events-none absolute z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full opacity-80 transition-all duration-75 group-hover:scale-100"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
      {isLate ? <div className="status-late h-2.5" /> : null}
      <div
        className="absolute left-2 flex items-center gap-1 text-xs leading-none"
        style={{
          bottom: statusBandHeight
            ? `calc(0.5rem + ${statusBandHeight})`
            : "0.5rem",
        }}
      >
        <span className={`h-5 w-1.5 rounded-full ${statusMarkerColor}`} />
        <span>{formatTimeRange(shift)}</span>
      </div>
      {hasEarlyLeave ? (
        <div
          className="status-early-leave absolute inset-x-0 bottom-0"
          style={{ height: `${earlyLeaveHeight}px` }}
        />
      ) : null}
      {hasOvertime ? (
        <div
          className="status-overtime absolute inset-x-0 bottom-0"
          style={{ height: OVERTIME_BAND_HEIGHT }}
        />
      ) : null}
    </div>
  );
}
