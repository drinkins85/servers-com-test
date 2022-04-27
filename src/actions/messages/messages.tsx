import { Dispatch } from 'redux';
import { API } from '../../constants/api';
import { GetMessagesActions, AddMessageActions, GET_MESSAGES, ADD_MESSAGE } from './types';

export const getMessages = () => (dispatch: Dispatch<GetMessagesActions>) => {
    dispatch({
        type: GET_MESSAGES.DEFAULT,
        url: API.MESSAGES.LIST,
        method: 'get',
    });
};

export const addMessage = (text: string, date: string, authorId: number) => (dispatch: Dispatch<AddMessageActions>) => {
    dispatch({
        type: ADD_MESSAGE.DEFAULT,
        url: API.MESSAGES.ADD,
        method: 'post',
        query: {
            text,
            date,
            authorId,
        },
    });
};
