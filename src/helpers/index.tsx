function addLeadZero(n: number): string {
    if (n < 10) {
        return `0${n}`;
    }
    return n.toString();
}

export function dateToString(date: Date): string {
    if (!date) {
        return '';
    }
    return `${date.getFullYear()}-${addLeadZero(date.getMonth() + 1)}-${addLeadZero(date.getDate())}`;
}
