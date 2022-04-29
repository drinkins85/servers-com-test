import { IMessage } from '../interfaces/message';
import { GET_MESSAGES, ADD_MESSAGE, AddMessageActions, GetMessagesActions } from '../actions/messages/types';
import { normalizeData } from '../helpers';

export interface IMessagesState {
    isLoading: boolean;
    list: number[];
    ids: { [key: string]: IMessage };
}

const initialState: IMessagesState = {
    isLoading: false,
    ids: {},
    list: [],
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
                ...normalizeData(action.data),
            };
        }
        case GET_MESSAGES.FAILED: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case ADD_MESSAGE.SUCCESS: {
            // фейковый ответ от сервера
            // json-server возвращает то же, что и отправляли, добавляем id и автора
            const mockResponseFromPostMethod = {
                id: state.list.length + 1,
                date: action.data.date,
                text: action.data.text,
                authorId: action.data.authorId,
            };

            return {
                ...state,
                ids: {
                    ...state.ids,
                    [mockResponseFromPostMethod.id]: mockResponseFromPostMethod,
                },
                list: [...state.list, mockResponseFromPostMethod.id],
            };
        }
        default:
            return state;
    }
};

export default messages;
