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

export const printDate = (date: string) => {
    const dt = new Date(Date.parse(date));

    if (!dt) {
        return;
    }

    return `${dt.getDate()}/${addLeadZero(dt.getMonth() + 1)}/${dt.getFullYear()}`;
};

export const normalizeData = (data) => {
    const ids = {};
    const list = [];

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i].id === 'undefined') {
            continue;
        }

        const dataItem = data[i];

        ids[dataItem.id] = dataItem;
        list.push(dataItem.id);
    }

    return {
        ids: ids,
        list: list,
    };
};
