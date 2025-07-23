import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

/**
 * Converts a Gregorian date string to a Persian (Solar Hijri) DateObject
 * @param gregorianDate - A date string in the format 'YYYY-MM-DD' (e.g., '2025-05-13')
 * @returns A DateObject instance with the converted Persian date
 */
export default function convertToPersianDate(gregorianDate: string): DateObject {
  // Create a DateObject from the Gregorian date string
  const date = new DateObject({
    date: gregorianDate,
    format: "YYYY-MM-DD",
  });

  // Convert the date to the Persian calendar with Farsi locale
  const persianDate = date.convert(persian, persian_fa);

  return persianDate;
}