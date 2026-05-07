import PayOverviewHeader from "./components/PayOverviewHeader";
import PaySummarySection from "./components/pay-summary/PaySummarySection";
import HoursBreakdownSection from "./components/hours-breakdown/HoursBreakdownSection";

export function PayOverviewPage() {
  return (
    <div className="px-16 pb-8 pt-7">
      <PayOverviewHeader />

      <div className="mt-7 grid grid-cols-1 lg:grid-cols-[0.9fr_1.45fr] gap-4">
        <PaySummarySection />
        <HoursBreakdownSection />
      </div>
    </div>
  );
}
