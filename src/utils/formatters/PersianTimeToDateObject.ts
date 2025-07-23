import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import fa from "react-date-object/locales/persian_fa";

export default function TimeToDateObject(time: string): DateObject {
  const [ hourStr, minuteStr ] = time.split(":");
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const second = 0

  const now = new Date();
  const date = new DateObject({
    date: now,
    calendar: persian,
    locale: fa,
  });

  return date.set({ hour, minute, second });
}
