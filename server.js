const authors = [
    {
        id: 1,
        firstName: 'Andrew',
        lastName: 'Akhryapov',
        email: 'mail@gmail.com',
        phone: '+712345678',
    },
];

const messages = [
    {
        id: 1,
        date: '2022-04-06',
        text: 'lorem ipsum',
        author: authors[0],
    },
];

module.exports = () => {
    return {
        messages,
        message: messages[0],
    };
};
