import { Dispatch } from 'redux';
import { API } from '../../constants/api';
import { GET_AUTHORS, GET_AUTHOR_DETAIL, GetAuthorDetailActions, GetAuthorsActions } from './types';

export const getAuthors = () => (dispatch: Dispatch<GetAuthorsActions>) => {
    dispatch({
        type: GET_AUTHORS.DEFAULT,
        url: API.AUTHORS.LIST,
        method: 'get',
    });
};

export const getAuthorDetail = (id: number) => (dispatch: Dispatch<GetAuthorDetailActions>) => {
    dispatch({
        type: GET_AUTHOR_DETAIL.DEFAULT,
        url: `${API.AUTHORS.DETAIL}/${id}`,
        method: 'get',
    });
};
