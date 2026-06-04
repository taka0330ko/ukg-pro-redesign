import { CalendarDays, ChevronDown, Info } from "lucide-react";

export default function PayOverviewHeader() {
  return (
    <section className="workspace-bg">
      <div className="flex justify-between items-center flex-wrap gap-8">
        <h2 className="text-primary text-3xl font-bold">Pay Details</h2>

        <div className="notification flex min-h-12 w-full max-w-md items-center gap-4 rounded-xl border px-5 text-base">
          <span className="notification-icon-round flex size-8 shrink-0 items-center justify-center rounded-full">
            <Info className="notification-icon size-4" strokeWidth={3} />
          </span>
          <p className="text-sm">Your next regular pay will be June 05, 2026</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="text-primary text-md font-medium">Pay date:</span>
        <button
          type="button"
          className="button-secondary inline-flex cursor-not-allowed items-center gap-2 rounded-full px-4 py-2 font-medium"
        >
          <CalendarDays className="size-6" strokeWidth={2.4} />
          <span>Mar 27, 2026</span>
          <ChevronDown className="size-4" strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}
