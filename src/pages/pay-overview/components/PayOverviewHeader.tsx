import { CalendarDays, ChevronDown, Info } from "lucide-react";

export default function PayOverviewHeader() {
  return (
    <section className="workspace-bg">
      <div className="flex items-start justify-between gap-8">
        <h2 className="text-primary text-4xl font-bold">Pay Details</h2>

        <div className="notification flex min-h-12 w-full max-w-md items-center gap-4 rounded-xl border px-5 text-base">
          <span className="notification-icon-round flex size-8 shrink-0 items-center justify-center rounded-full">
            <Info className="notification-icon size-4" strokeWidth={3} />
          </span>
          <p>Your next regular pay will be May 08, 2026</p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <span className="text-primary text-2xl font-medium">Pay date:</span>
        <button
          type="button"
          className="button-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium"
        >
          <CalendarDays className="size-6" strokeWidth={2.4} />
          <span>Apr 24, 2026</span>
          <ChevronDown className="size-4" strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}
