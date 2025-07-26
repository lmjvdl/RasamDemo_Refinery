import fs from 'fs';
import path from 'path';
import PartOverlayDemo from '@/components/partOverlayDemo/PartOverlayDemo';
import { DataPoint } from '@/types/layout/latoutConfig';

export default async function Page() {
  // Load pre-generated JSON instead of Excel
  const jsonPath = path.join(process.cwd(), 'src', 'utils', 'fakeData', 'FakeData.json');
  if (!fs.existsSync(jsonPath)) {
    throw new Error(`FakeData.json not found at ${jsonPath}. Run excel_to_json.py first.`);
  }

  const raw = fs.readFileSync(jsonPath, 'utf-8');
  const rows: Array<{ Sheet_Name: string } & Record<string, number>> = JSON.parse(raw);

  const parts = {
    turbine: [
      'Turbine_Outlet_Temprature',
      'Turbine_Inlet_Temprature',
      'Turbine_Pressure_Inlet',
      'Turbine_Pressure_Outlet',
      'Speed'
    ],
    compressor: [
      'Compressor_Suction_Temp',
      'Compressor_Discharge_Temprature',
      'Compressor_Suction_Pressure',
      'Compressor_Discharge_Pressure',
      'Compressor_Air_Flow_Rate',
      'Speed'
    ],
    radiator: ['Oil_Pressure_Discharge', 'Oil_Temprature_Outlet'],
  } as const;

  const data: Record<string, DataPoint[]> = {};
  Object.values(parts).flat().forEach(col => {
    data[col] = rows.slice(0, 24).map(r => ({
      time: r.Date,
      value: r[col],
      dateObj: new Date(r.Date * 1000),
    }));
    
  });

  return <PartOverlayDemo lastDate="1398/11/30 06:30:00" data={data} />;
}
