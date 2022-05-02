const messages = require('../mocks/messages');
const authors = require('../mocks/authors');
const authorsDetail = require('../mocks/authorsDetail');
import { GET_MESSAGES, ADD_MESSAGE } from '../actions/messages/types';
import { GET_AUTHORS, GET_AUTHOR_DETAIL } from '../actions/authors/types';

const getMockByAction = (action) => {
    switch (action.type) {
        case GET_MESSAGES.DEFAULT: {
            return messages;
        }
        case GET_AUTHORS.DEFAULT: {
            return authors;
        }
        case ADD_MESSAGE.DEFAULT: {
            return action.query;
        }
        case GET_AUTHOR_DETAIL.DEFAULT: {
            return authorsDetail.find((author) => author.id === action.id);
        }
    }
};

export default getMockByAction;
