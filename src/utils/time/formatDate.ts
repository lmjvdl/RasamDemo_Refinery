export function formatUnixTimestamp(unix: number): string {
    const date = new Date(unix * 1000);
  
    const yyyy = date.getFullYear();
    const mm = `${date.getMonth() + 1}`.padStart(2, '0');
    const dd = `${date.getDate()}`.padStart(2, '0');
  
    const hh = `${date.getHours()}`.padStart(2, '0');
    const min = `${date.getMinutes()}`.padStart(2, '0');
    const sec = `${date.getSeconds()}`.padStart(2, '0');
  
    return `${yyyy}/${mm}/${dd} - ${hh}:${min}:${sec}`;
  }
  