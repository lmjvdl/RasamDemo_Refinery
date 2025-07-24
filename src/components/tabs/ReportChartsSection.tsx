'use client';

import React, { useState, useMemo } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { ChartBox } from '../partOverlayDemo/ChartBox';
import { DataPoint } from '@/types/layout/latoutConfig';

interface Props {
  partName: 'compressor' | 'turbine' | 'radiator' | 'pipe';
  parts: Record<string, string[]>;
  data: Record<string, DataPoint[]>;
}

export const ReportChartsSection: React.FC<Props> = ({ partName, parts, data }) => {
  const chartKeys = parts[partName];

  const [selectedChart, setSelectedChart] = useState(chartKeys[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedChart(event.target.value);
  };

  const selectedChartData = useMemo(() => data[selectedChart], [data, selectedChart]);

  const isDataLoaded = selectedChartData && selectedChartData.length > 0;

  return (
    <Box>
      <FormControl sx={{ minWidth: 240, mb: 3 }} size="small">
        <InputLabel id="chart-select-label">انتخاب چارت</InputLabel>
        <Select
          labelId="chart-select-label"
          value={selectedChart}
          label="انتخاب چارت"
          onChange={handleChange}
        >
          {chartKeys.map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {isDataLoaded ? (
        <ChartBox col={selectedChart} data={selectedChartData} top={0} left={0} />
      ) : (
        <Typography variant="body2" color="text.secondary">
          داده‌ای برای نمایش موجود نیست.
        </Typography>
      )}
    </Box>
  );
};
