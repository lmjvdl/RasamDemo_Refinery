export default function toFarsiNumber(EnglishNumber: number) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return EnglishNumber
    .toString()
    .split('')
    .map((x: string) => farsiDigits[parseInt(x)]) 
    .join('');
}
