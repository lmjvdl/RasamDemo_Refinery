'use client'

import { useEffect, useState } from "react";
import { DataPoint } from "@/types/layout/latoutConfig";

export const useReportData = () => {
  const [data, setData] = useState<Record<string, DataPoint[]>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/FakeData.json");
        const rows: Array<{ Sheet_Name: string } & Record<string, number>> = await res.json();

        const parts = {
          turbine: [
            'Turbine_Outlet_Temprature',
            'Turbine_Inlet_Temprature',
            'Turbine_Pressure_Inlet',
            'Turbine_Pressure_Outlet',
          ],
          compressor: [
            'Compressor_Suction_Temp',
            'Compressor_Discharge_Temprature',
            'Compressor_Suction_Pressure',
            'Compressor_Discharge_Pressure',
            'Compressor_Air_Flow_Rate',
          ],
          radiator: ['Oil_Pressure_Discharge', 'Oil_Temprature_Outlet'],
          pipe: ['Speed'],
        } as const;

        const result: Record<string, DataPoint[]> = {};
        Object.values(parts).flat().forEach((col) => {
          result[col] = rows.map((r) => ({
            time: r.Date,
            value: r[col],
            dateObj: new Date(r.Date * 1000),
          }));
        });

        setData(result);
      } catch (error) {
        console.error("خطا در خواندن FakeData.json:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useReportData;