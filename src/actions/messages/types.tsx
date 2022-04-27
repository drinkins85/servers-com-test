import { IMessage } from '../../interfaces/message';

export enum GET_MESSAGES {
    DEFAULT = 'GET_MESSAGES',
    START = 'GET_MESSAGES_START',
    FAILED = 'GET_MESSAGES_FAILED',
    SUCCESS = 'GET_MESSAGES_SUCCESS',
}

export type GetMessagesType = {
    type: GET_MESSAGES.DEFAULT;
    url: string;
    method: 'get';
};

export type GetMessagesStart = {
    type: GET_MESSAGES.START;
};

export type GetMessagesSuccess = {
    type: GET_MESSAGES.SUCCESS;
    data: IMessage[];
};

export type GetMessagesFailed = {
    type: GET_MESSAGES.FAILED;
};

export type GetMessagesActions = GetMessagesType | GetMessagesStart | GetMessagesSuccess | GetMessagesFailed;

export enum ADD_MESSAGE {
    DEFAULT = 'ADD_MESSAGE',
    START = 'ADD_MESSAGE_START',
    FAILED = 'ADD_MESSAGE_FAILED',
    SUCCESS = 'ADD_MESSAGE_SUCCESS',
}

interface IMessageData {
    text: string;
    date: string;
    authorId: number;
}

export type AddMessageType = {
    type: ADD_MESSAGE.DEFAULT;
    url: string;
    method: 'post';
    query: IMessageData;
};

export type AddMessageStart = {
    type: ADD_MESSAGE.START;
};

export type AddMessageSuccess = {
    type: ADD_MESSAGE.SUCCESS;
    data: IMessage;
};

export type AddMessageFailed = {
    type: ADD_MESSAGE.FAILED;
};

export type AddMessageActions = AddMessageType | AddMessageStart | AddMessageSuccess | AddMessageFailed;
