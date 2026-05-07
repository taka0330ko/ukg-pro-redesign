import { useEffect, useRef } from "react";
import Highcharts from "highcharts";

type PiePoint = Highcharts.Point & {
  slice: (sliced?: boolean) => void;
};

export default function PieChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) {
      return undefined;
    }

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
          borderColor: "#ffffff",
          borderWidth: 5,
          center: ["50%", "55%"],
          dataLabels: {
            enabled: true,
            distance: 28,
            format: "{point.name}<br/>${point.y:.2f}",
            style: {
              color: "#000000",
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
          startAngle: 0,
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
              y: 33.66,
              color: "#00BDB3",
            },
            {
              name: "Net pay",
              y: 547.19,
              color: "#0097C2",
            },
          ],
        },
      ],
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return <div ref={chartRef} className="mx-auto h-[360px] w-[360px]" />;
}
