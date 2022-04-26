import { IMessage } from '../interfaces/message';

export interface IMessagesState {
    isLoading: boolean;
    messages: IMessage[];
}

const initialState: IMessagesState = {
    isLoading: false,
    messages: [],
};

// TODO описать типы доступных экшнов
const messages = (state: IMessagesState = initialState, action: any): IMessagesState => {
    switch (action.type) {
        default:
            return initialState;
    }
};

export default messages;
