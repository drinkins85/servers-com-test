import { combineReducers } from 'redux';
import messages, { IMessagesState } from './messages';
import authors, { IAuthorsState } from './authors';

export interface IMainState {
    messages: IMessagesState;
    authors: IAuthorsState;
}

const rootReducer = combineReducers({
    messages,
    authors,
});

export default rootReducer;
