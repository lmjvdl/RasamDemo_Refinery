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
import { useEffect } from "react";

// Register all required Chart.js components and plugins
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  Legend,
  Title,
  zoomPlugin
);

export default function FullPageChart({
  col,
  data,
}: Pick<ChartBoxProps, "col" | "data">) {
  const theme = useTheme();

  // Get label translation and unit based on column
  const label = labelTranslations[col] || col;
  const unit = getUnit(col);

  // Prepare chart data from the provided dataset
  const chartData = {
    labels: data.map((point) => new Date(point.time)),
    datasets: [
      {
        label, // Dataset label (translated)
        data: data.map((point) => point.value), // Actual data values
        borderColor: theme.palette.primary.main, // Line color
        backgroundColor: `${theme.palette.primary.main}30`, // Fill color under the line
        tension: 0.4, // Smooth curve
        pointRadius: 1.5, // Size of data points
        pointHoverRadius: 4, // Hover effect size
        fill: true, // Fill under the line
      },
    ],
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const zoomPlugin = require("chartjs-plugin-zoom");
      ChartJS.register(zoomPlugin);
    }
  }, []);

  return (
    <Box sx={{ width: "100%", height: "80vh", p: 3 }}>
      <Box display="flex" alignItems="center" gap={1} mb={3}>
        <Box
          sx={{
            width: "4px",
            height: "24px",
            bgcolor: theme.palette.primary.main,
            borderRadius: "2px",
          }}
        />
        <Typography variant="h5">{label}</Typography>
      </Box>

      <Line
        data={chartData}
        options={{
          /**
           * Chart responsiveness and layout settings
           */
          responsive: true, // Automatically resize the chart
          maintainAspectRatio: false, // Allow custom height

          /**
           * Plugin configurations
           */
          plugins: {
            legend: {
              display: false, // Hide legend (label shown in top-right by default)
            },

            tooltip: {
              // Custom tooltip formatting
              callbacks: {
                title: () => "", // Remove title
                label: (ctx) => {
                  const point = data[ctx.dataIndex];
                  const shamsiDate = formatShamsi(point.time*1000);
                  return [`${shamsiDate}`, `مقدار: ${point.value} ${unit}`];
                },
              },
              backgroundColor: theme.palette.grey[800],
              displayColors: false,
              bodyFont: { size: 12 },
              bodySpacing: 8,
              padding: 6,
            },

            /**
             * Zoom and pan functionality
             */
            zoom: {
              pan: {
                enabled: true, // Enable dragging to pan
                mode: "x", // Allow both horizontal and vertical pan
              },
              zoom: {
                wheel: {
                  enabled: true, // Enable zoom with mouse wheel
                },
                pinch: {
                  enabled: true, // Enable zoom with touch gesture
                },
                mode: "x", // Zoom on both axes
              },
            },
          },

          /**
           * Axis and scale settings
           */
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "تاریخ", // Axis title
                font: { size: 12 },
              },
              ticks: {
                callback: function (_, index) {
                  const time = data[index]?.time*1000;
                  return time ? formatShamsi(time) : "";
                },
                maxRotation: 45, // Max text rotation
                minRotation: 30, // Min text rotation
                autoSkip: true, // Skip overlapping labels
                font: { size: 10 },
              },
              grid: {
                display: false, // Hide vertical grid lines
              },
            },

            y: {
              title: {
                display: true,
                text: unit, // Unit of measurement
                font: { size: 12 },
              },
              ticks: {
                font: { size: 10 },
                maxTicksLimit: 6,
                padding: 8,
              },
              grid: {
                drawTicks: false,
                color: theme.palette.grey[300], // Light gray horizontal grid
              },
              border: {
                display: false, // Remove border line
              },
              beginAtZero: true, // ✅ Start Y-axis from 0
            },
          },

          /**
           * Styling for chart elements (lines and points)
           */
          elements: {
            line: {
              borderWidth: 2, // Thickness of the line
            },
            point: {
              hoverBackgroundColor: theme.palette.primary.dark, // Color on hover
            },
          },
        }}
      />
    </Box>
  );
}
