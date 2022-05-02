const authorsList = require('./authors');

const authorsDetail = [
    {
        ...authorsList[0],
        detail: {
            email: 'mail@gmail.com',
            phone: '+712345678',
            msgIds: [1],
            rating: 3.2,
        },
    },
    {
        ...authorsList[1],
        detail: {
            email: 'ivanovpetr@gmail.com',
            phone: '+791827364',
            msgIds: [2],
            rating: 4.8,
        },
    },
    {
        ...authorsList[2],
        detail: {
            email: 'gananinm@gmail.com',
            phone: '+3454552323',
            msgIds: [2],
            rating: 3.7,
        },
    },
];

module.exports = authorsDetail;
module.exports.default = authorsDetail;