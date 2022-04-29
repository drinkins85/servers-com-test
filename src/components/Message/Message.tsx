import React from 'react';

import './Message.css';
import { Link } from 'react-router-dom';
import { IAuthor } from '../../interfaces/author';
import { printDate } from '../../helpers';

interface IMessageProps {
    text: string;
    date: string;
    author?: IAuthor;
}

const Message: React.FC<IMessageProps> = (props) => {
    const { text, date, author } = props;

    return (
        <div className={'message'}>
            <div>{printDate(date)}</div>
            <div>{text}</div>
            {author && (
                <Link to={`/authors/${author.id}`}>
                    {author?.firstName} {author?.lastName}
                </Link>
            )}
        </div>
    );
};

export default Message;
