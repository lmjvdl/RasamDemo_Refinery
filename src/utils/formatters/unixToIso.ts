export default function unixToIso(unixTime: number): string {
    const date = new Date(unixTime * 1000);
    return date.toISOString().replace(/\.\d+Z$/, '');
  }