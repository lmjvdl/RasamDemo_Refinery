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
import { ReportsDropdownProps } from "@/interfaces/reports/report";
import { labelTranslations } from "@/utils/refinedData/layout";

export default function ReportsDropdown({
  selectedReport,
  reportOptions,
  label,
  onReportChange,
}: ReportsDropdownProps) {
  const handleChange = (e: SelectChangeEvent<string>) => {
    const report = e.target.value;
    onReportChange(report);
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
          }}>
          {reportOptions.map((report, index) => (
            <MenuItem key={index} value={report}>
              {labelTranslations[report] || report}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
