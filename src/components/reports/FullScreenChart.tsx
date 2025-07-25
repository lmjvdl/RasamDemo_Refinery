"use client";

import { Line } from "react-chartjs-2";
import { labelTranslations } from "@/utils/refinedData/layout";
import { getUnit } from "@/utils/formatters/chartFormatters";
import { Box, Typography, useTheme } from "@mui/material";
import { ChartBoxProps } from "@/interfaces/layout/chartBox";
import { formatShamsi } from "@/utils/time/formatShamsi";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  Legend,
  Title,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  Legend,
  Title
);

export default function FullPageChart({
  col,
  data,
}: Pick<ChartBoxProps, "col" | "data">) {
  const theme = useTheme();
  const label = labelTranslations[col] || col;
  const unit = getUnit(col);

  const chartData = {
    labels: data.map((point) => new Date(point.time)),
    datasets: [
      {
        label,
        data: data.map((point) => point.value),
        borderColor: theme.palette.primary.main,
        backgroundColor: `${theme.palette.primary.main}30`,
        tension: 0.4,
        pointRadius: 1.5,
        pointHoverRadius: 4,
        fill: true,
      },
    ],
  };

  return (
    <Box sx={{ width: "100%", height: "80vh", p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {label}
      </Typography>
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                title: () => "",
                label: (ctx) => {
                  const point = data[ctx.dataIndex];
                  const shamsiDate = formatShamsi(point.time);
                  return [`${shamsiDate}`, `مقدار: ${point.value} ${unit}`];
                },
              },
              backgroundColor: theme.palette.grey[800],
              displayColors: false,
              bodyFont: { size: 12 },
              bodySpacing: 8,
              padding: 6,
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "تاریخ",
                font: { size: 12 },
              },
              ticks: {
                callback: function (_, index) {
                  const time = data[index]?.time;
                  return time ? formatShamsi(time) : "";
                },
                maxRotation: 45,
                minRotation: 30,
                autoSkip: true,
                font: { size: 10 },
              },
              grid: {
                display: false,
              },
            },
            y: {
              title: {
                display: true,
                text: unit,
                font: { size: 12 },
              },
              ticks: {
                font: { size: 10 },
                maxTicksLimit: 6,
                padding: 8,
              },
              grid: {
                drawTicks: false,
                color: theme.palette.grey[300],
              },
              border: {
                display: false,
              },
            },
          },
          elements: {
            line: {
              borderWidth: 2,
            },
            point: {
              hoverBackgroundColor: theme.palette.primary.dark,
            },
          },
        }}
      />
    </Box>
  );
}
