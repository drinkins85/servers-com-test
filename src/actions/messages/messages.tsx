import { Dispatch } from 'redux';
import { API } from '../../constants/api';
import { MessagesActions, GET_MESSAGES } from './types';

export const getMessages = () => (dispatch: Dispatch<MessagesActions>) => {
    dispatch({
        type: GET_MESSAGES.DEFAULT,
        url: API.MESSAGES,
        method: 'get',
    });
};
