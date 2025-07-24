export function getUnit(col: string): string {
    if (/Temp/i.test(col)) return '°C';
    if (/Pressure/i.test(col)) return 'PSI';
    if (/Speed/i.test(col)) return 'rpm';
    if (/Flow_Rate/i.test(col)) return 'm³/h';
    return '';
}

export function extractTimeFromCombinedName(combinedName?: string): string {
    if (!combinedName) return '';
    const parts = combinedName.split('_');
    return parts[1] || '';
}