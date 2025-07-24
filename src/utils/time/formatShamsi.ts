export const formatShamsi = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString('fa-IR')} ${date.toLocaleTimeString('fa-IR')}`;
};