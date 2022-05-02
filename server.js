const authorsDetail = require('./src/mocks/authorsDetail');
const messages = require('./src/mocks/messages');
const authors = require('./src/mocks/authors');

module.exports = () => {
    return {
        messages,
        message: messages[0],
        authors,
        author: authorsDetail,
    };
};
