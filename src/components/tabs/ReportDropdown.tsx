"use client";

import * as React from "react";
import {
  Box,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

interface ReportsDropdownProps {
  selectedTab: string;
  reportOptions: string[];
  label: string;
  onReportChange: (report: string) => void;
}

export default function ReportsDropdown({
  selectedTab,
  reportOptions,
  label,
  onReportChange,
}: ReportsDropdownProps) {
  const [selectedReport, setSelectedReport] = React.useState("");

  const handleChange = (e: SelectChangeEvent<string>) => {
    const report = e.target.value;
    setSelectedReport(report);
    onReportChange(report);
    console.log(selectedTab);
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={selectedReport}
          onChange={handleChange}
          label={label}
          MenuProps={{
            PaperProps: {
              style: {
                width: 250,
                maxWidth: 250,
                maxHeight: 48 * 4.5 + 8,
              },
            },
          }}
        >
          {reportOptions.map((report, index) => (
            <MenuItem key={index} value={report}>
              {report}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
