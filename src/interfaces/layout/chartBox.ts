import { DataPoint } from '@/types/layout/latoutConfig';

export interface ChartBoxProps {
    col: string;
    data: DataPoint[];
    top: number;
    left: number;
}