export interface IMessage {
    id: number;
    date: string;
    text: string;
    authorId: number;
}

export interface IFilterParams {
    dateFrom?: string;
    dateTo?: string;
    author?: string;
    text?: string;
}
