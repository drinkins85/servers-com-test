import React, { useState } from 'react';

import { MESSAGE_MAX_LENGTH } from '../../constants';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

interface IMessageAddFormProps {
    onSubmit: (text: string) => unknown;
}

const MessageAddForm: React.FC<IMessageAddFormProps> = (props) => {
    const { onSubmit } = props;
    const [text, setText] = useState('');

    const handleTextChange = (text: string) => {
        setText(text);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(text);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextArea text={text} onChange={handleTextChange} showCounter maxLength={MESSAGE_MAX_LENGTH} />
            <Button type={'submit'}>Send</Button>
        </form>
    );
};

export default MessageAddForm;
