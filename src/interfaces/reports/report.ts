import { DataPoint } from "@/types/layout/latoutConfig";
import { Dispatch, SetStateAction } from "react";

export interface TabChartProps {
  allData: Record<string, DataPoint[]>;
  defaultTab: number;
  defaultReport: string;
}

export interface ReportsDropdownProps {
  selectedTab: string;
  selectedReport: string;
  reportOptions: string[];
  label: string;
  onReportChange: (report: string) => void;
}

export interface TabsSectionProps {
  selectedTab: number;
  setSelectedTab: Dispatch<SetStateAction<number>>;
  selectedReport: string;
  tabLabels: string[];
  reportOptions?: { [key: number]: string[] };
  onReportChange: (report: string) => void;
  children: React.ReactNode;
}
