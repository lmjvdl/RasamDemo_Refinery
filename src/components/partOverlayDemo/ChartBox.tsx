import { Line } from 'react-chartjs-2';
import { labelTranslations } from '@/utils/refinedData/layout';
import { getUnit } from '@/utils/formatters/chartFormatters';
import { Card, CardContent, Typography, useTheme } from '@mui/material';
import { ChartBoxProps } from '@/interfaces/layout/chartBox';
import { formatShamsi } from '@/utils/time/formatShamsi';
import { useRouter } from 'next/navigation';

export const ChartBox: React.FC<ChartBoxProps> = ({ col, data, top, left }) => {
  const theme = useTheme();
  const router = useRouter();
  const label = labelTranslations[col] || col;

  const handleClick = () => {
    const colToDeviceMap: Record<string, string> = {
      'Turbine_Outlet_Temprature': 'turbine',
      'Turbine_Inlet_Temprature': 'turbine',
      'Turbine_Pressure_Inlet': 'turbine',
      'Turbine_Pressure_Outlet': 'turbine',

      'Compressor_Suction_Temp': 'compressor',
      'Compressor_Discharge_Temprature': 'compressor',
      'Compressor_Suction_Pressure': 'compressor',
      'Compressor_Discharge_Pressure': 'compressor',
      'Compressor_Air_Flow_Rate': 'compressor',

      'Oil_Pressure_Discharge': 'radiator',
      'Oil_Temprature_Outlet': 'radiator',

      'Speed': 'pipe',
    };

    const device = colToDeviceMap[col];
    if (device) router.push(`/reports?device=${device}`);
  };

  const chartData = {
    labels: data.map(point => new Date(point.time)),
    datasets: [{
      label,
      data: data.map(point => point.value),
      borderColor: theme.palette.primary.main,
      backgroundColor: `${theme.palette.primary.main}30`,
      tension: 0.3,
      pointRadius: 2,
      pointHoverRadius: 4,
      fill: true
    }]
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        position: 'absolute',
        top,
        left,
        width: 300,
        height: 150,
        p: 1,
        bgcolor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: theme.shadows[2],
        borderRadius: '8px'
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 0,
          minHeight: '170px'
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: theme.palette.primary.main,
            textAlign: 'center',
            mb: 0.5,
            fontWeight: 500,
            fontSize: '0.875rem'
          }}
        >
          {label}
        </Typography>

        <div style={{
          flex: 1,
          position: 'relative',
          height: 'calc(100% - 30px)',
          overflow: 'hidden',
          marginTop: '8px'
        }}>
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  callbacks: {
                    title: () => '',
                    label: (ctx) => {
                      const point = data[ctx.dataIndex];
                      const unit = getUnit(col);
                      const shamsiDate = formatShamsi(point.time);
                      return [`${shamsiDate}`, `مقدار: ${point.value} ${unit}`];
                    }
                  },
                  bodySpacing: 8,
                  padding: 6,
                  backgroundColor: theme.palette.grey[800],
                  titleFont: { size: 12 },
                  bodyFont: { size: 12 },
                  displayColors: false
                }
              },
              layout: {
                padding: {
                  top: 5,
                  bottom: 20,
                  left: 10,
                  right: 10
                }
              },
              scales: {
                x: {
                  display: false,
                  grid: {
                    display: false
                  }
                },
                y: {
                  title: {
                    display: true,
                    text: getUnit(col),
                    font: { size: 10 },
                    padding: { top: 0, bottom: 10 }
                  },
                  ticks: {
                    font: { size: 10 },
                    maxTicksLimit: 4,
                    padding: 5
                  },
                  grid: {
                    drawTicks: false,
                    color: theme.palette.grey[300]
                  },
                  border: {
                    display: false
                  }
                }
              },
              elements: {
                line: {
                  borderWidth: 1.5
                },
                point: {
                  hoverBackgroundColor: theme.palette.primary.dark
                }
              }
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};