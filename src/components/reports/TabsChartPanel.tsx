"use client";

import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import {
  parts,
  partTranslations,
  labelTranslations,
} from "@/utils/refinedData/layout";
import TabsSection from "../tabs/TabsSection";
import FullPageChart from "./FullScreenChart";
import { TabChartProps } from "@/interfaces/reports/report";

export default function TabsChartPanel({
  allData,
  defaultTab,
  defaultReport,
}: TabChartProps) {
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const [selectedReport, setSelectedReport] = useState(defaultReport);

  useEffect(() => {
    setSelectedTab(defaultTab);
    const defaultCol = Object.values(parts)[defaultTab][0];
    setSelectedReport(defaultReport || defaultCol);
  }, [defaultTab, defaultReport]);

  const tabLabels = (Object.keys(parts) as Array<keyof typeof parts>).map(
    (key) => partTranslations[key] || key
  );

  const reportOptions: { [key: number]: string[] } = Object.values(parts).map(
    (arr) => [...arr]
  );

  return (
    <TabsSection
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      selectedReport={selectedReport}
      tabLabels={tabLabels}
      reportOptions={reportOptions}
      onReportChange={setSelectedReport}>
      <Box sx={{ mt: 2 }}>
        {selectedReport && allData[selectedReport] ? (
          <FullPageChart col={selectedReport} data={allData[selectedReport]} />
        ) : (
          <Typography>دیتایی برای نمایش وجود ندارد</Typography>
        )}
      </Box>
    </TabsSection>
  );
}
