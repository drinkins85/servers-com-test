import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getMessages } from '../../actions/messages/messages';

const PageMessages: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMessages());
    }, []);

    return <h1>Messages</h1>;
};

export default PageMessages;
