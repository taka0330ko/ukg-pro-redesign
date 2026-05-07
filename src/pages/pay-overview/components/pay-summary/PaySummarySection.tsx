import { FileText } from "lucide-react";
import PieChart from "./PieChart";

const summaryRows = [
  ["Pay period", "04/05/2026 - 04/18/2026"],
  ["Total hours", "29.183333 Hours"],
  ["Earnings", "$547.19"],
  ["Deductions", "$33.66"],
];

export default function PaySummarySection() {
  return (
    <section className="min-w-0 min-h-[520px] rounded-2xl border border-[#d0d0d0] bg-white p-4">
      <h3 className="text-2xl font-medium text-black">Pay Summary</h3>

      <PieChart />

      <div className="mt-5 space-y-5 text-base text-black">
        {summaryRows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-6">
            <span>{label}</span>
            <span className="text-right">{value}</span>
          </div>
        ))}

        <div className="border-t border-[#b8b8b8] pt-5">
          <div className="flex items-center justify-between gap-6 font-bold">
            <span>Take home pay</span>
            <span>$513.53</span>
          </div>
        </div>
      </div>

      <div className="mt-9 flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-4 rounded-full bg-[#008313] px-6 py-3 text-base font-medium text-white"
        >
          <span className="relative flex size-8 shrink-0 items-center justify-center">
            <FileText className="size-8" strokeWidth={2.4} />
            <span className="absolute bottom-0 text-[9px] font-bold leading-none">
              PDF
            </span>
          </span>
          <span>View Pay Statements PDF</span>
        </button>
      </div>
    </section>
  );
}
