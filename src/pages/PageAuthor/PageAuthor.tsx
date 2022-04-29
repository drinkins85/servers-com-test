import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IMainState } from '../../reducers';
import { IAuthorsState } from '../../reducers/authors';
import { getAuthorDetail } from '../../actions/authors/authors';
import { IMessagesState } from '../../reducers/messages';
import { getMessages } from '../../actions/messages/messages';

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
        <div>
            <h1>Author {authorId}</h1>
            {isLoading && <div>loading...</div>}
            {!isLoading && author && (
                <div>
                    <div>
                        {author?.firstName} {author.lastName}
                    </div>
                    {author.detail && (
                        <div>
                            <div>{author.detail.phone}</div>
                            <div>{author.detail.email}</div>
                            {author.detail.msgIds.length > 0 &&
                                author.detail.msgIds.map((msgId) => {
                                    const message = msgById[msgId];
                                    if (!message) {
                                        return null;
                                    }

                                    return (
                                        <div key={msgId}>
                                            <div>{message.date}</div>
                                            <div>{message.text}</div>
                                        </div>
                                    );
                                })}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PageAuthor;
