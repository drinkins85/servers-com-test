import { IAuthor } from './author';

export interface IMessage {
    id: number;
    date: string;
    text: string;
    author: IAuthor;
}

export interface IFilterParams {
    dateFrom?: string;
    dateTo?: string;
    author?: string;
    text?: string;
}
