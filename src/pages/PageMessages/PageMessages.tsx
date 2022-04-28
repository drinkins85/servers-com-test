import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMessages, addMessage } from '../../actions/messages/messages';
import { IMessage } from '../../interfaces/message';
import { IMainState } from '../../reducers';
import { IMessagesState } from '../../reducers/messages';
import Button from '../../components/Button/Button';
import MessageAddForm from '../../components/MessageAddForm/MessageAddForm';
import Modal from '../../components/Modal/Modal';
import Filters from '../../components/Filters/Filters';
import { dateToString } from '../../helpers';
import { IFilterParams } from '../../interfaces/message';

// ID авторизованного пользователя
const authorId = 1;

const getMessagesByFilter = (messages: IMessage[], filters: IFilterParams) => {
    const { dateFrom, dateTo, author, text } = filters;

    return messages.filter((message) => {
        const date = new Date(Date.parse(message.date));

        if (dateFrom && date <= new Date(Date.parse(dateFrom))) {
            return false;
        }

        if (dateTo && date > new Date(Date.parse(dateTo))) {
            return false;
        }

        if (author) {
            const authorName = `${message.author.firstName.toLowerCase()} ${message.author.lastName.toLowerCase()}`;
            const authorNameReversed = `${message.author.lastName.toLowerCase()} ${message.author.firstName.toLowerCase()}`;

            const substring = author.toLowerCase().trim();
            if (authorName.indexOf(substring) === -1 && authorNameReversed.indexOf(substring) === -1) {
                return false;
            }
        }

        if (text && message.text.toLowerCase().indexOf(text.trim().toLowerCase()) === -1) {
            return false;
        }

        return true;
    });
};

const PageMessages: React.FC = () => {
    const dispatch = useDispatch();
    const messagesState = useSelector<IMainState, IMessagesState>((state) => state.messages);
    const { isLoading, messages } = messagesState;
    const [addFormOpen, setAddFormOpen] = useState(false);

    const [filters, setFilters] = useState({});

    const handleAddMessageClick = () => {
        setAddFormOpen(true);
    };

    const filteredMessages = getMessagesByFilter(messages, filters);

    const handleSubmitAddForm = (text) => {
        const currentDate = new Date();

        dispatch(addMessage(text, dateToString(currentDate), authorId));
        setAddFormOpen(false);
    };

    const handleSubmitFormClose = () => {
        setAddFormOpen(false);
    };

    const handleFiltersApply = (filters) => {
        setFilters(filters);
    };

    useEffect(() => {
        dispatch(getMessages());
    }, []);

    return (
        <div>
            <h1>Messages</h1>
            <Button onClick={handleAddMessageClick}>Add message</Button>
            <Filters filters={filters} onApply={handleFiltersApply} />
            {isLoading && <div>loading...</div>}
            {!isLoading &&
                filteredMessages &&
                filteredMessages.map((message) => {
                    const { date, text, author, id } = message;
                    return (
                        <div key={id}>
                            <div>{date}</div>
                            <div>{text}</div>
                            <div>
                                {author.firstName} {author.lastName}
                            </div>
                        </div>
                    );
                })}
            <Modal open={addFormOpen} onClose={handleSubmitFormClose}>
                <MessageAddForm onSubmit={handleSubmitAddForm} />
            </Modal>
        </div>
    );
};

export default PageMessages;
