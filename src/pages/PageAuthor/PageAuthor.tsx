import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IMainState } from '../../reducers';
import { IAuthorsState } from '../../reducers/authors';
import { getAuthorDetail } from '../../actions/authors/authors';
import { IMessagesState } from '../../reducers/messages';
import { getMessages } from '../../actions/messages/messages';
import Message from '../../components/Message/Message';
import Header from '../../components/Header/Header';

import './PageAuthor.css';

const PageAuthor: React.FC = () => {
    const dispatch = useDispatch();
    const { authorId } = useParams();
    const authorsState = useSelector<IMainState, IAuthorsState>((state) => state.authors);
    const { ids } = authorsState;

    const messagesState = useSelector<IMainState, IMessagesState>((state) => state.messages);
    const msgById = messagesState.ids;

    const author = ids[authorId];

    const isLoading = authorsState.isLoading || messagesState.isLoading;

    useEffect(() => {
        if (!author || !author.detail) {
            dispatch(getAuthorDetail(+authorId));
        }

        if (messagesState.list.length === 0) {
            dispatch(getMessages());
        }
    }, []);

    return (
        <div className={'PageAuthor'}>
            {isLoading && <div>loading...</div>}
            {!isLoading && author && (
                <div>
                    <Header type={'h2'}>
                        {author?.firstName} {author.lastName}
                    </Header>
                    {author.detail && (
                        <div>
                            {typeof author.detail.rating === 'number' && (
                                <div className={'PageAuthor__rating'}>{author.detail.rating}</div>
                            )}
                            <div>{author.detail.phone}</div>
                            <div>{author.detail.email}</div>
                            {author.detail.msgIds.length > 0 && (
                                <div className={'PageAuthor__messages'}>
                                    {author.detail.msgIds.map((msgId) => {
                                        const message = msgById[msgId];
                                        if (!message) {
                                            return null;
                                        }

                                        return (
                                            <div key={msgId}>
                                                <Message text={message.text} date={message.date} />
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PageAuthor;
