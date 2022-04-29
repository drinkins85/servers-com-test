interface IAuthorDetailInfo {
    avatar: string;
    email: string;
    phone: string;
    rating: number;
    msgIds: number[];
}

export interface IAuthor {
    id: number;
    firstName: string;
    lastName: string;
    detail?: IAuthorDetailInfo;
}
