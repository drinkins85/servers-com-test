const authors = [
    {
        id: 1,
        firstName: 'Andrew',
        lastName: 'Akhryapov',
    },
    {
        id: 2,
        firstName: 'Leo',
        lastName: 'Tolstoy',
    },
];

const authorsDetail = [
    {
        id: 1,
        firstName: 'Andrew',
        lastName: 'Akhryapov',
        detail: {
            email: 'mail@gmail.com',
            phone: '+712345678',
            msgIds: [1],
        },
    },
    {
        id: 2,
        firstName: 'Leo',
        lastName: 'Tolstoy',
        detail: {
            email: 'leo@gmail.com',
            phone: '+791827364',
            msgIds: [2],
        },
    },
];

const messages = [
    {
        id: 1,
        date: '2022-04-06',
        text: 'lorem ipsum',
        authorId: 1,
    },
    {
        id: 2,
        date: '2022-04-28',
        text: 'war and peace',
        authorId: 2,
    },
];

module.exports = () => {
    return {
        messages,
        message: messages[0],
        authors,
        author: authorsDetail,
    };
};
