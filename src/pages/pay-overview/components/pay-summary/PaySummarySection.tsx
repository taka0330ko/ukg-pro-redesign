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
    <section className="panel-card min-h-[520px] min-w-0">
      <h3 className="section-title">Pay Summary</h3>

      <PieChart
        deductions={paySummary.deductions.total}
        netPay={paySummary.netPay}
      />

      <div className="text-primary mt-5 space-y-5 text-base">
        {summaryRows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-6">
            <span>{label}</span>
            <span className="text-right">{value}</span>
          </div>
        ))}

        <div className="divider-primary border-t pt-5">
          <div className="flex items-center justify-between gap-6 font-bold">
            <span>Take home pay</span>
            <span>{formatCurrency(paySummary.netPay)}</span>
          </div>
        </div>
      </div>

      <div className="mt-9 flex justify-center">
        <button
          type="button"
          className="button-primary inline-flex items-center gap-4 rounded-full px-6 py-3 text-base font-medium"
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
