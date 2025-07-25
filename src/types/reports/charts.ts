import { parts } from "@/utils/refinedData/layout";

export type ChartKey = typeof parts[keyof typeof parts][number];
