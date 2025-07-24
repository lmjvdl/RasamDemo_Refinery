import React from 'react';
import { Card, CardContent, useTheme } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { labelTranslations } from '@/utils/refinedData/layout';
import { extractTimeFromCombinedName, getUnit } from '@/utils/formatters/chartFormatters';
import { ChartBoxProps } from '@/interfaces/layout/chartBox';


export const ChartBox: React.FC<ChartBoxProps> = ({ col, data, top, left }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'absolute',
        top,
        left,
        width: 300,
        height: 150,
        p: 1,
        bgcolor: 'rgba(255,255,255,0.8)'
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Line
          data={{
            labels: data.map(pt => extractTimeFromCombinedName(pt.CombinedName)),
            datasets: [
              {
                label: labelTranslations[col] || col,
                data: data.map(pt => pt.value),
                borderColor: theme.palette.primary.main
              }
            ]
          }}
          options={{
            maintainAspectRatio: false,
            plugins: { legend: { display: true } },
            scales: {
              x: { title: { display: true, text: 'زمان' } },
              y: { title: { display: true, text: getUnit(col) } }
            },
            color: theme.palette.primary.main
          }}
        />
      </CardContent>
    </Card>
  );
};
