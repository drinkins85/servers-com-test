import { IAuthor } from './author';

export interface IMessage {
    id: number;
    date: string;
    text: string;
    author: IAuthor;
}
