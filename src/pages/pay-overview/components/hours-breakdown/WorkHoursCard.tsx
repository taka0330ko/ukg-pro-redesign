import { LogIn, LogOut } from "lucide-react";
import { timePeriods } from "../../data/payOverviewData";

type Shift = (typeof timePeriods)[number]["shifts"][number];

type WorkHoursCardProps = {
  shift: Shift;
};

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

function formatDate(date: string) {
  const [year, month, day] = date.split("-");

  return `${month}/${day}/${year}`;
}

function formatHours(hours: number) {
  return `${hours.toFixed(hours % 1 === 0 ? 1 : 2)}h`;
}

function getBreakLabel(paid: boolean) {
  return paid ? "Paid break" : "Unpaid break";
}

export default function WorkHoursCard({ shift }: WorkHoursCardProps) {
  const isLate =
    timeToMinutes(shift.actual.clockIn) > timeToMinutes(shift.assigned.start);
  const hasOvertime = shift.overtimeHours > 0;
  const firstBreak = shift.breaks[0];
  const startMarkerColor = isLate ? "bg-[#ff7f8a]" : "bg-white";
  const endMarkerColor = hasOvertime ? "bg-[#28d6f5]" : "bg-white";

  return (
    <article className="w-full max-w-[380px] rounded-md bg-[#e8ffe8] p-3 text-black shadow-md">
      <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-2 text-sm">
        <span>Assigned time:</span>
        <span className="text-lg">
          {shift.assigned.start} ~ {shift.assigned.end}
        </span>
        <span className="text-xs">{formatDate(shift.date)}</span>

        <span>Work hours:</span>
        <span />
        <span>{formatHours(shift.workHours)}</span>

        {hasOvertime ? (
          <>
            <span>OT:</span>
            <span />
            <span>{formatHours(shift.overtimeHours)}</span>
          </>
        ) : null}
      </div>

      <div className="mt-2 border-t border-[#b8c8b8] pt-3">
        <div className="grid grid-cols-[36px_1fr_auto] gap-x-4">
          <div className="relative row-span-3 flex justify-center">
            <div className="h-full min-h-36 w-6 rounded-full bg-[#008313]" />
            <span
              className={`absolute top-2 size-4 rounded-full ${startMarkerColor}`}
            />
            <span className="absolute top-1/2 h-8 w-3 -translate-y-1/2 rounded-full bg-white" />
            <span
              className={`absolute bottom-2 size-4 rounded-full ${endMarkerColor}`}
            />
          </div>

          <div className="text-3xl leading-none">{shift.actual.clockIn}</div>
          <div className="flex items-center gap-2 text-sm">
            <span>Clock in</span>
            <LogIn className="size-4" strokeWidth={2} />
          </div>

          <div className="self-center text-base leading-snug">
            {firstBreak ? (
              <>
                <p>{firstBreak.start}</p>
                <p>{firstBreak.end}</p>
              </>
            ) : null}
          </div>
          <div className="self-center text-right text-sm leading-snug">
            {firstBreak ? (
              <>
                <p>Start {getBreakLabel(firstBreak.paid)}</p>
                <p>End {getBreakLabel(firstBreak.paid)}</p>
              </>
            ) : null}
          </div>

          <div className="self-end text-3xl leading-none">
            {shift.actual.clockOut}
          </div>
          <div className="flex items-center gap-2 self-end text-sm">
            <span>Clock out</span>
            <LogOut className="size-4" strokeWidth={2} />
          </div>
        </div>
      </div>
    </article>
  );
}
