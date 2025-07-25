import { DataPoint } from "@/types/layout/latoutConfig";

export interface Props {
    lastDate: string;
    data: Record<string, DataPoint[]>;
}
