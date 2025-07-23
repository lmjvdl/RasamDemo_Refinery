import { DateObject } from "react-multi-date-picker";

export default function DateToTime(date: DateObject): string {
    return `${date.hour}:${date.minute}`
} 