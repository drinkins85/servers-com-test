import { combineReducers } from 'redux';
import messages, { IMessagesState } from './messages';

export interface Reducer {
    (state: any, action: any): any;
}

export interface IMainState {
    messages: IMessagesState;
}

const rootReducer = combineReducers({
    messages,
});

export default rootReducer;
