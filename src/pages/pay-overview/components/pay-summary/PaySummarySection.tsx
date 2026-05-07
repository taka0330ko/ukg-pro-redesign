import { FileText } from "lucide-react";
import { paySummaries } from "../../data/payOverviewData";
import PieChart from "./PieChart";

function formatCurrency(amount: number) {
  return `$${amount.toFixed(2)}`;
}

function formatDate(date: string) {
  const [year, month, day] = date.split("-");

  return `${month}/${day}/${year}`;
}

export default function PaySummarySection() {
  const paySummary = paySummaries[0];
  const summaryRows = [
    [
      "Pay period",
      `${formatDate(paySummary.period.start)} - ${formatDate(
        paySummary.period.end,
      )}`,
    ],
    ["Total hours", `${paySummary.totalHours.toFixed(2)} Hours`],
    ["Earnings", formatCurrency(paySummary.grossPay)],
    ["Deductions", formatCurrency(paySummary.deductions.total)],
  ];

  return (
    <section className="min-w-0 min-h-[520px] rounded-2xl border border-[#d0d0d0] bg-white p-4">
      <h3 className="text-2xl font-medium text-black">Pay Summary</h3>

      <PieChart
        deductions={paySummary.deductions.total}
        netPay={paySummary.netPay}
      />

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
            <span>{formatCurrency(paySummary.netPay)}</span>
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
