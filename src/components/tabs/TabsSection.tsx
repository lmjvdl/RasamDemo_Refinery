'use client';

import { Box, Tabs, Tab } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ReportsDropdown from "./ReportDropdown";

interface TabsSectionProps {
  selectedTab: number;
  setSelectedTab: Dispatch<SetStateAction<number>>;
  tabLabels: string[];
  reportOptions?: { [key: number]: string[] };
  onReportChange: (report: string) => void;
  children: React.ReactNode;
}

export default function TabsSection({
  selectedTab,
  setSelectedTab,
  tabLabels,
  reportOptions,
  onReportChange,
  children,
}: TabsSectionProps) {
  return (
    <Box width="100%">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          padding: "16px 16px 0 16px",
          gap: 2,
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={(_, newValue) => setSelectedTab(newValue)}
          sx={{
            flexGrow: 1,
            minHeight: "48px",
            "& .MuiTabs-flexContainer": {
              gap: 1,
            },
          }}
        >
          {tabLabels.map((label, index) => (
            <Tab sx={{ color: "text.primary" }} key={index} label={label} />
          ))}
        </Tabs>
        {reportOptions && reportOptions[selectedTab] && (
          <ReportsDropdown
            selectedTab={String(selectedTab)}
            reportOptions={reportOptions[selectedTab]}
            label="انتخاب گزارش"
            onReportChange={onReportChange}
          />
        )}
      </Box>

      <Box className="mt-4">{children}</Box>
    </Box>
  );
}
