import React from 'react';
import { Card, CardContent, Typography, useTheme } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { labelTranslations } from '@/utils/refinedData/layout';
import { extractTimeFromCombinedName, getUnit } from '@/utils/formatters/chartFormatters';
import { ChartBoxProps } from '@/interfaces/layout/chartBox';

export const ChartBox: React.FC<ChartBoxProps> = ({ col, data, top, left }) => {
  const theme = useTheme();
  const label = labelTranslations[col] || col;

  return (
    <Card
      sx={{
        position: 'absolute',
        top,
        left,
        width: 300,
        height: 150,
        p: 1,
        bgcolor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 0 }}>
        {/* Label in above chart*/}
        <Typography
          variant="subtitle2"
          sx={{
            color: theme.palette.primary.main,
            textAlign: 'center',
            mb: 0.5
          }}
        >
          {label}
        </Typography>

        {/* Chart contatiner */}
        <div style={{ flex: 1, position: 'relative' }}>
          <Line
            data={{
              labels: data.map(pt => extractTimeFromCombinedName(pt.CombinedName)),
              datasets: [
                {
                  label,
                  data: data.map(pt => pt.value),
                  borderColor: theme.palette.primary.main,
                  backgroundColor: `${theme.palette.primary.main}30`,
                  tension: 0.3,
                  pointRadius: 2,
                  pointHoverRadius: 4
                }
              ]
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              plugins: {
                legend: { display: false }
              },
              scales: {
                x: {
                  title: { display: true, text: 'زمان' }
                },
                y: {
                  title: { display: true, text: getUnit(col) }
                }
              }
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};
