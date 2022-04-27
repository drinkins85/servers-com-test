import { IMessage } from '../interfaces/message';
import { GET_MESSAGES, ADD_MESSAGE, AddMessageActions, GetMessagesActions } from '../actions/messages/types';

const mockAuthor = {
    id: 1,
    firstName: 'Andrew',
    lastName: 'Akhryapov',
    email: 'mail@gmail.com',
    phone: '+712345678',
};

export interface IMessagesState {
    isLoading: boolean;
    messages: IMessage[];
}

const initialState: IMessagesState = {
    isLoading: false,
    messages: [],
};

const messages = (
    state: IMessagesState = initialState,
    action: AddMessageActions | GetMessagesActions,
): IMessagesState => {
    switch (action.type) {
        case GET_MESSAGES.START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_MESSAGES.SUCCESS: {
            return {
                isLoading: false,
                messages: action.data,
            };
        }
        case GET_MESSAGES.FAILED: {
            return {
                isLoading: false,
                messages: [],
            };
        }
        case ADD_MESSAGE.SUCCESS: {
            // фейковый ответ от сервера
            // json-server возвращает то же, что и отправляли, добавляем id и автора
            const mockResponseFromPostMethod = {
                id: state.messages.length + 1,
                date: action.data.date,
                text: action.data.text,
                author: mockAuthor,
            };

            return {
                ...state,
                messages: [...state.messages, mockResponseFromPostMethod],
            };
        }
        default:
            return state;
    }
};

export default messages;
