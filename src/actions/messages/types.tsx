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

export type MessagesActions = GetMessagesType | GetMessagesStart;
