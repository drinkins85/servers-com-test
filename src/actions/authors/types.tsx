import { IAuthor } from '.././../interfaces/author';

export enum GET_AUTHORS {
    DEFAULT = 'GET_AUTHORS',
    START = 'GET_AUTHORS_START',
    FAILED = 'GET_AUTHORS_FAILED',
    SUCCESS = 'GET_AUTHORS_SUCCESS',
}

export type GetAuthorsType = {
    type: GET_AUTHORS.DEFAULT;
    url: string;
    method: 'get';
};

export type GetAuthorsStart = {
    type: GET_AUTHORS.START;
};

export type GetAuthorsSuccess = {
    type: GET_AUTHORS.SUCCESS;
    data: IAuthor[];
};

export type GetAuthorsFailed = {
    type: GET_AUTHORS.FAILED;
};

export type GetAuthorsActions = GetAuthorsType | GetAuthorsStart | GetAuthorsSuccess | GetAuthorsFailed;

export enum GET_AUTHOR_DETAIL {
    DEFAULT = 'GET_AUTHOR_DETAIL',
    START = 'GET_AUTHOR_DETAIL_START',
    FAILED = 'GET_AUTHOR_DETAIL_FAILED',
    SUCCESS = 'GET_AUTHOR_DETAIL_SUCCESS',
}

export type GetAuthorDetailType = {
    type: GET_AUTHOR_DETAIL.DEFAULT;
    url: string;
    method: 'get';
};

export type GetAuthorDetailStart = {
    type: GET_AUTHOR_DETAIL.START;
};

export type GetAuthorDetailSuccess = {
    type: GET_AUTHOR_DETAIL.SUCCESS;
    data: IAuthor;
};

export type GetAuthorDetailFailed = {
    type: GET_AUTHOR_DETAIL.FAILED;
};

export type GetAuthorDetailActions =
    | GetAuthorDetailType
    | GetAuthorDetailStart
    | GetAuthorDetailSuccess
    | GetAuthorDetailFailed;
