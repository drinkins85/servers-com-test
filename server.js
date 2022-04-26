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
        date: '2001-01-01',
        text: 'lorem ipsum',
        author: authors[0],
    },
];

module.exports = () => {
    return {
        messages,
    };
};
