import { IAuthor } from '../interfaces/author';
import { GET_AUTHOR_DETAIL, GET_AUTHORS, GetAuthorDetailActions, GetAuthorsActions } from '../actions/authors/types';
import { normalizeData } from '../helpers';

export interface IAuthorsState {
    isLoading: boolean;
    list: number[];
    ids: { [key: string]: IAuthor };
}

const initialState = {
    isLoading: false,
    ids: {},
    list: [],
};

const authors = (
    state: IAuthorsState = initialState,
    action: GetAuthorsActions | GetAuthorDetailActions,
): IAuthorsState => {
    switch (action.type) {
        case GET_AUTHORS.START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_AUTHORS.SUCCESS: {
            return {
                isLoading: false,
                ...normalizeData(action.data),
            };
        }
        case GET_AUTHORS.FAILED: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case GET_AUTHOR_DETAIL.START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_AUTHOR_DETAIL.SUCCESS: {
            return {
                ...state,
                isLoading: false,
                ids: {
                    ...state.ids,
                    [action.data.id]: action.data,
                },
            };
        }
        case GET_AUTHOR_DETAIL.FAILED: {
            return {
                ...state,
                isLoading: false,
            };
        }
        default:
            return state;
    }
};

export default authors;
