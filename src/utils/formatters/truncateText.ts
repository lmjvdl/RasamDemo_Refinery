// Truncate text to ensure table columns remain visually consistent

export const truncateText = (text: string, maxLength: number = 40) => {
    if (typeof text !== "string") return text;
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};
  