import { DataPoint } from "@/types/layout/chartBox";

export interface ChartBoxProps {
    col: string;
    data: DataPoint[];
    top: number;
    left: number;
}