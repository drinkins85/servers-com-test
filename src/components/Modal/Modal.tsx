import React, { useEffect } from 'react';

import './Modal.css';

interface IModalProps {
    open: boolean;
    onClose: () => unknown;
}

const Modal: React.FC<IModalProps> = (props) => {
    const { children, open, onClose } = props;

    const onKeydown = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') {
            onClose();
        }
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
    });

    if (!open) {
        return null;
    }

    return (
        <div className={'modal'} onClick={onClose}>
            <div className={'modal__window'} onClick={stopPropagation}>
                <button onClick={onClose} className={'modal__close'} />
                <div className={'modal__content'}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
