import { useEffect, useRef } from "react";
import Highcharts from "highcharts";

type PiePoint = Highcharts.Point & {
  slice: (sliced?: boolean) => void;
};

type PieChartProps = {
  deductions: number;
  netPay: number;
};

function cssVar(name: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

export default function PieChart({ deductions, netPay }: PieChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) {
      return undefined;
    }

    const surface = cssVar("--color-neutral-0");
    const textPrimary = cssVar("--color-text-primary");
    const deductionsColor = cssVar("--color-teal-200");
    const netPayColor = cssVar("--color-teal-600");

    const chart = Highcharts.chart(chartRef.current, {
      chart: {
        type: "pie",
        width: 360,
        height: 360,
        backgroundColor: "transparent",
        spacing: [0, 0, 0, 0],
      },
      title: {
        text: undefined,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: "<b>${point.y:.2f}</b>",
      },
      plotOptions: {
        pie: {
          animation: {
            duration: 180,
          },
          borderColor: surface,
          borderWidth: 5,
          center: ["50%", "55%"],
          dataLabels: {
            enabled: true,
            distance: 28,
            format: "{point.name}<br/>${point.y:.2f}",
            style: {
              color: textPrimary,
              fontSize: "14px",
              fontWeight: "400",
              textOutline: "none",
            },
          },
          point: {
            events: {
              mouseOut() {
                (this as PiePoint).slice(false);
              },
              mouseOver() {
                (this as PiePoint).slice(true);
              },
            },
          },
          slicedOffset: 8,
          size: 240,
          startAngle: -48,
          states: {
            hover: {
              brightness: 0,
              halo: {
                size: 0,
              },
            },
          },
        },
      },
      series: [
        {
          type: "pie",
          data: [
            {
              name: "Deductions",
              y: deductions,
              color: deductionsColor,
            },
            {
              name: "Net pay",
              y: netPay,
              color: netPayColor,
            },
          ],
        },
      ],
    });

    return () => {
      chart.destroy();
    };
  }, [deductions, netPay]);

  return <div ref={chartRef} className="mx-auto h-[360px] w-[360px]" />;
}
