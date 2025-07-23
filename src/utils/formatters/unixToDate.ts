/**
 * Converts a Unix timestamp (in seconds) to a date string in the "YYYY-MM-DD" format.
 *
 * @param unixTime - The Unix timestamp in seconds (e.g., 1747136963)
 * @returns A string representing the date in "YYYY-MM-DD" format (e.g., "2025-05-13")
 */
export default function formatUnixTimeToDateString(unixTime: number): string {
    const date = new Date(unixTime * 1000); // Convert seconds to milliseconds
    const year = date.getFullYear(); // Get full year (e.g., 2025)
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based (0-11)
    const day = String(date.getDate()).padStart(2, '0'); // Get day of the month
  
    return `${year}-${month}-${day}`; // Format as "YYYY-MM-DD"
}