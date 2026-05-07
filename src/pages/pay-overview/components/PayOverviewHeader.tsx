import { CalendarDays, ChevronDown, Info } from "lucide-react";

export default function PayOverviewHeader() {
  return (
    <section className="bg-white">
      <div className="flex items-start justify-between gap-8">
        <h2 className="text-4xl font-bold text-black">Pay Details</h2>

        <div className="flex min-h-12 w-full max-w-md items-center gap-4 rounded-xl border border-[#cbd5ff] bg-[#f7f8ff] px-5 text-base text-[#222222]">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#edf1ff]">
            <Info className="size-4 text-[#5f7cff]" strokeWidth={3} />
          </span>
          <p>Your next regular pay will be May 08, 2026</p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <span className="text-2xl font-medium text-black">Pay date:</span>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-[#007d13] px-4 py-2 text-2xl font-medium text-white"
        >
          <CalendarDays className="size-6" strokeWidth={2.4} />
          <span>Apr 24, 2026</span>
          <ChevronDown className="size-4" strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}
