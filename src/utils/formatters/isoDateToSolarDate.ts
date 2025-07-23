export default function gregorianToJalali(dateStr: string): string {
    const gDate = new Date(dateStr);
    const gy = gDate.getFullYear();
    const gm = gDate.getMonth() + 1;
    const gd = gDate.getDate();

    const g_d_m = [0, 31, (gy % 4 === 0 && (gy % 100 !== 0 || gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let jy, jm;
    
    let days = 355666 + (gy * 365) + Math.floor((gy + 3) / 4) - Math.floor((gy + 99) / 100) + Math.floor((gy + 399) / 400);

    for (let i = 1; i < gm; i++) {
        days += g_d_m[i];
    }
    days += gd;

    jy = -1595 + (33 * Math.floor(days / 12053));
    days %= 12053;
    jy += 4 * Math.floor(days / 1461);
    days %= 1461;

    if (days > 365) {
        jy += Math.floor((days - 1) / 365);
        days = (days - 1) % 365;
    }

    const jmArray = [0, 31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    for (jm = 1; jm <= 12 && days >= jmArray[jm]; jm++) {
        days -= jmArray[jm];
    }
    const jd = days + 1;

    return `${jy}/${jm}/${jd}`;
}


export function gregorianToJalaliWithTime(dateStr: string): string {
    const gDate = new Date(dateStr);
    const jalaliDate = gregorianToJalali(dateStr);

    const tehranTime = gDate.toLocaleTimeString('fa-IR', {
        timeZone: 'Asia/Tehran',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    return `${jalaliDate} - ${tehranTime}`;
}
