// FILE: src/components/partOverlayDemo/PartOverlayDemo.tsx

'use client';

import React from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography, Card, CardContent, useTheme } from '@mui/material';
import Image from 'next/image';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { labelTranslations, parts, partTranslations } from '@/utils/refinedData/layout';

Chart.register(...registerables);

type DataPoint = { time: string; value: number; CombinedName?: string };
interface Props {
  lastDate: string;
  data: Record<string, DataPoint[]>;
}

export default function PartOverlayDemo({ lastDate, data }: Props) {
  const [selected, setSelected] = React.useState<keyof typeof parts>('compressor');
  const theme = useTheme();

  const getUnit = (col: string) => {
    if (/Temp/i.test(col)) return '°C';
    if (/Pressure/i.test(col)) return 'PSI';
    if (/Speed/i.test(col)) return 'rpm';
    if (/Flow_Rate/i.test(col)) return 'm³/h';
    return '';
  };

  const extractTimeFromCombinedName = (combinedName?: string) => {
    if (!combinedName) return '';
    const parts = combinedName.split('_');
    return parts[1] || '';
  };

  return (
    <Box sx={{ position: 'relative', width: 1000, mx: 'auto', mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <ToggleButtonGroup
          value={selected}
          exclusive
          onChange={(_, v) => v && setSelected(v)}
          color="primary"
        >
          {Object.keys(parts).map(key => (
            <ToggleButton key={key} value={key}>
              {partTranslations[key as keyof typeof parts] || key}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Typography variant="subtitle1">آخرین اطلاعات از زمان: {lastDate}</Typography>
      </Box>

      {/* Background image */}
      <Image src="/assets/layout/layout.png" alt="layout" width={1000} height={1000} style={{ borderRadius: 40 }} />

      {/* Overlay charts */}
      {parts[selected].map((col, idx) => {
        const positions: Record<string, { top: number; left: number }> = {
          Turbine_Outlet_Temprature: { top: 670, left: 600 },
          Turbine_Inlet_Temprature: { top: 200, left: 600 },
          Turbine_Pressure_Outlet: { top: 360, left: 280 },
          Turbine_Pressure_Inlet: { top: 520, left: 280 },
          Compressor_Suction_Temp: { top: 130, left: 100 },
          Compressor_Discharge_Temprature: { top: 670, left: 100 },
          Compressor_Air_Flow_Rate: { top: 550, left: 420 },
          Compressor_Discharge_Pressure: { top: 390, left: 450 },
          Compressor_Suction_Pressure: { top: 230, left: 420 },
          Oil_Pressure_Discharge: { top: 725, left: 360 },
          Oil_Temprature_Outlet: { top: 885, left: 360 },
          Speed: { top: 300, left: 390 }
        };
        const { top, left } = positions[col] ?? { top: 100 * idx, left: 100 * idx };

        return (
          <Card key={col} sx={{
            position: 'absolute',
            top,
            left,
            width: 300,
            height: 150,
            p: 1,
            bgcolor: 'rgba(255,255,255,0.8)'
          }}>
            <CardContent sx={{ p: 0 }}>
              <Line
                data={{
                  labels: data[col].map(pt => extractTimeFromCombinedName(pt.CombinedName)),
                  datasets: [{
                    label: labelTranslations[col] || col,
                    data: data[col].map(pt => pt.value),
                    borderColor: theme.palette.primary.main
                  }],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: { legend: { display: true } },
                  scales: {
                    x: { title: { display: true, text: 'زمان' } },
                    y: { title: { display: true, text: getUnit(col) } },
                  },
                  color: theme.palette.primary.main
                }}
              />
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}
