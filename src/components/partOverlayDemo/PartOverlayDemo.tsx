'use client';

import React from 'react';
import {
  Box,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { Chart, registerables } from 'chart.js';
import { parts, partTranslations } from '@/utils/refinedData/layout';
import { Props } from '@/interfaces/layout/layoutConfig';
import { ChartBox } from './ChartBox';
import { positions } from '@/utils/refinedData/chartStyle';

Chart.register(...registerables);

export default function PartOverlayDemo({ lastDate, data }: Props) {
  const [selected, setSelected] = React.useState<keyof typeof parts>('compressor');

  return (
    <Box sx={{ position: 'relative', width: 1000, mx: 'auto', pt: 10 }}>
      <Box
        sx={{
          position: 'fixed',
          width: 1000,
          top: 86,
          bgcolor: 'background.paper',
          zIndex: 1000,
          justifyContent: "center",
          borderRadius: 2,
          boxShadow: 3,
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <ToggleButtonGroup
          value={selected}
          exclusive
          onChange={(_, v) => v && setSelected(v)}
          color="primary"
        >
          {Object.keys(parts).map((key) => (
            <ToggleButton key={key} value={key}>
              {partTranslations[key as keyof typeof parts] || key}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Divider orientation="vertical" flexItem />
        <Typography variant="subtitle2" sx={{ whiteSpace: 'nowrap' }}>
          آخرین اطلاعات: {lastDate}
        </Typography>
      </Box>

      {/* Layout Image */}
      <Image
        src="/assets/layout/layout.png"
        alt="layout"
        width={1000}
        height={1000}
        style={{ borderRadius: 40 }}
      />

      {/* Chart Boxes */}
      {parts[selected].map((col, idx) => {
        const { top, left } = positions[col] ?? { top: 100 * idx, left: 100 * idx };
        return <ChartBox key={col} col={col} data={data[col]} top={top} left={left} />;
      })}
    </Box>
  );
}
