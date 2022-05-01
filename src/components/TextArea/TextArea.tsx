import React from 'react';

import './TextArea.css';

interface ITextAreaProps {
    text: string;
    onChange: (text: string) => unknown;
    showCounter?: boolean;
    maxLength?: number;
}

const TextArea: React.FC<ITextAreaProps> = (props) => {
    const { text, onChange, showCounter = false, maxLength } = props;

    const handleTextChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className={'TextArea'}>
            <textarea className={'TextArea__input'} value={text} onChange={handleTextChange} maxLength={maxLength} />
            {showCounter && <div className={'TextArea__counter'}>Количество символов: {text.length}</div>}
        </div>
    );
};

export default TextArea;
