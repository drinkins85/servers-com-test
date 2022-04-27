import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMessages, addMessage } from '../../actions/messages/messages';
import { IMainState } from '../../reducers';
import { IMessagesState } from '../../reducers/messages';
import Button from '../../components/Button/Button';
import MessageAddForm from '../../components/MessageAddForm/MessageAddForm';
import Modal from '../../components/Modal/Modal';

// ID авторизованного пользователя
const authorId = 1;

const PageMessages: React.FC = () => {
    const dispatch = useDispatch();
    const messagesState = useSelector<IMainState, IMessagesState>((state) => state.messages);
    const { isLoading, messages } = messagesState;
    const [addFormOpen, setAddFormOpen] = useState(false);

    const handleAddMessageClick = () => {
        setAddFormOpen(true);
    };

    const handleSubmitAddForm = (text) => {
        const currentDate = new Date().toUTCString();
        dispatch(addMessage(text, currentDate, authorId));
        setAddFormOpen(false);
    };

    const handleSubmitFormClose = () => {
        setAddFormOpen(false);
    };

    useEffect(() => {
        dispatch(getMessages());
    }, []);

    return (
        <div>
            <h1>Messages</h1>
            <Button onClick={handleAddMessageClick}>Add message</Button>
            {isLoading && <div>loading...</div>}
            {!isLoading &&
                messages &&
                messages.map((message) => {
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
            {/*{addFormOpen && (*/}
            {/*    <div>*/}
            {/*        */}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default PageMessages;
