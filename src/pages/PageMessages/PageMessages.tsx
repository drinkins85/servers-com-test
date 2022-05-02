import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMessages, addMessage } from '../../actions/messages/messages';
import { getAuthors } from '../../actions/authors/authors';
import { IMainState } from '../../reducers';
import { IMessagesState } from '../../reducers/messages';
import Button from '../../components/Button/Button';
import MessageAddForm from '../../components/MessageAddForm/MessageAddForm';
import Modal from '../../components/Modal/Modal';
import Filters from '../../components/Filters/Filters';
import Message from '../../components/Message/Message';
import Header from '../../components/Header/Header';
import { dateToString } from '../../helpers';
import { IFilterParams } from '../../interfaces/message';
import { IAuthorsState } from '../../reducers/authors';

import './PageMessages.css';

// ID авторизованного пользователя(автора)
const authorId = 3;

// номер страницы. В дальнейшем можно добавить постраничную навигацию
const pageNum = 1;

// фильтровать данные нужно на сервере, и возфращать отфильтрованные результаты
// такой вариант сложно замокать, поэтому сейчас фильтрация реализована на фронте

const getMessagesByFilter = (msgList, msgById, authorById, filters: IFilterParams) => {
    const { dateFrom, dateTo, author, text } = filters;

    return msgList.filter((messageId) => {
        const message = msgById[messageId];

        const date = new Date(Date.parse(message.date));

        if (dateFrom && date <= new Date(Date.parse(dateFrom))) {
            return false;
        }

        if (dateTo && date > new Date(Date.parse(dateTo))) {
            return false;
        }

        if (author && authorById[message.authorId]) {
            const authorData = authorById[message.authorId];
            const authorName = `${authorData.firstName.toLowerCase()} ${authorData.lastName.toLowerCase()}`;
            const authorNameReversed = `${authorData.lastName.toLowerCase()} ${authorData.firstName.toLowerCase()}`;

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
    const msgList = messagesState.list;
    const msgById = messagesState.ids;

    const authorsState = useSelector<IMainState, IAuthorsState>((state) => state.authors);
    const authorById = authorsState.ids;
    const isLoading = authorsState.isLoading || messagesState.isLoading;

    const [addFormOpen, setAddFormOpen] = useState(false);

    const [filters, setFilters] = useState({});

    const handleAddMessageClick = () => {
        setAddFormOpen(true);
    };

    const filteredMessages = getMessagesByFilter(msgList, msgById, authorById, filters);

    const handleSubmitAddForm = (text) => {
        const currentDate = new Date();

        dispatch(addMessage(text, dateToString(currentDate), authorId));
        setAddFormOpen(false);
    };

    const handleSubmitFormClose = () => {
        setAddFormOpen(false);
    };

    const handleFiltersApply = useCallback(
        (filters) => {
            setFilters(filters);
        },
        [filters],
    );

    useEffect(() => {
        dispatch(getMessages(pageNum));

        if (authorsState.list.length === 0) {
            dispatch(getAuthors());
        }
    }, []);

    return (
        <div className={'PageMessages'}>
            <Header type={'h1'}>Сообщения</Header>
            <div className={'PageMessages__container'}>
                <div className={'PageMessages__content'}>
                    {isLoading && <div>loading...</div>}
                    {!isLoading &&
                        filteredMessages &&
                        filteredMessages.map((messageId) => {
                            const { date, text, authorId, id } = msgById[messageId];
                            const author = authorById[authorId];

                            return (
                                <div key={messageId}>
                                    <Message text={text} date={date} author={author} />
                                </div>
                            );
                        })}
                </div>
                <div className={'PageMessages__sidebar'}>
                    <div className={'PageMessages__buttons'}>
                        <Button color={'primary'} fullWidth onClick={handleAddMessageClick}>
                            Добавить сообщение
                        </Button>
                    </div>
                    <Filters filters={filters} onApply={handleFiltersApply} />
                </div>
            </div>

            <Modal open={addFormOpen} onClose={handleSubmitFormClose}>
                <MessageAddForm onSubmit={handleSubmitAddForm} />
            </Modal>
        </div>
    );
};

export default PageMessages;
