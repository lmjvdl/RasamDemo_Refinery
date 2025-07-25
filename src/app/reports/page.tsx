"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { parts } from "@/utils/refinedData/layout";
import { DataPoint } from "@/types/layout/latoutConfig";
import TabsChartPanel from "@/components/reports/TabsChartPanel";
import { ChartKey } from "@/types/reports/charts";

export default function ReportsPage() {
  const [allData, setAllData] = useState<Record<string, DataPoint[]>>({});
  const [defaultTab, setDefaultTab] = useState<number>(0);
  const [defaultReport, setDefaultReport] = useState<ChartKey>(
    Object.values(parts)[0][0]
  );
  const searchParams = useSearchParams();

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data/FakeData.json");
      const raw = await res.json();

      const mappedAllData: Record<string, DataPoint[]> = {};
      Object.values(parts)
        .flat()
        .forEach((col) => {
          mappedAllData[col] = raw.map(
            (r: { [x: string]: number; Date: number }) => ({
              time: r.Date,
              value: r[col],
              dateObj: new Date(r.Date * 1000),
            })
          );
        });

      setAllData(mappedAllData);

      const chartParam = searchParams.get("chart");

      // Create an array of all valid chart keys
      const allChartKeys = Object.values(parts).flat() as ChartKey[];

      if (chartParam && allChartKeys.includes(chartParam as ChartKey)) {
        const foundTab = Object.values(parts).findIndex((arr) =>
          arr.includes(chartParam as never)
        );
        setDefaultTab(foundTab !== -1 ? foundTab : 0);
        setDefaultReport(chartParam as ChartKey);
      }
    };

    loadData();
  }, [searchParams]);

  return (
    <TabsChartPanel
      allData={allData}
      defaultTab={defaultTab}
      defaultReport={defaultReport}
    />
  );
}
