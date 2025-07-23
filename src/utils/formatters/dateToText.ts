import { DateObject } from "react-multi-date-picker";

export const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

export const valueToInputText = (val?: DateObject[]): string => {
  const value = val ? val.toString() : "";
  if (!value) {
    return "";
  }

  const [from, to] = value.split("~").map((date) => date.trim());

  if (!from && !to) {
    return "";
  }

  if (from && !to) {
    return `${from} تا این لحظه`;
  }

  if (from && to) {
    return `${from} تا ${to}`;
  }

  return "";
};

export const oneDayValueToInputText = (value?: DateObject): string => {
    if (!value) return "";
    return value.toString();
};
