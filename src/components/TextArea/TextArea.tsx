import React, { useState } from 'react';

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
        <div>
            <textarea value={text} onChange={handleTextChange} maxLength={maxLength} />
            {showCounter && <div>{text.length}</div>}
        </div>
    );
};

export default TextArea;
