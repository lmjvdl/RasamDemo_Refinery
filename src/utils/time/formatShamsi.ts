export const formatShamsi = (timestamp: number) => {
    const date = new Date(timestamp);
    
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Tehran',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        calendar: 'persian'
    };
    
    return new Intl.DateTimeFormat('fa-IR', options).format(date);
};