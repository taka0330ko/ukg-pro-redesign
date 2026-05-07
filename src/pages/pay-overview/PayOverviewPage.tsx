import PayOverviewHeader from "./components/PayOverviewHeader";
import PaySummarySection from "./components/pay-summary/PaySummarySection";
import HoursBreakdownSection from "./components/hours-breakdown/HoursBreakdownSection";

export function PayOverviewPage() {
  return (
    <div className="min-w-0 overflow-x-hidden px-16 pb-8 pt-7">
      <PayOverviewHeader />

      <div className="mt-7 grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.45fr)]">
        <PaySummarySection />
        <HoursBreakdownSection />
      </div>
    </div>
  );
}
