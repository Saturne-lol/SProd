export default function formatNumber(number: number): string {
    if (number >= 1000000000) {
        return (number / 1000000000).toFixed(2) + 'MD';
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(2) + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(2) + 'K';
    } else {
        return number.toString();
    }
}