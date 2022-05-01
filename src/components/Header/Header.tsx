import React from 'react';

import './Header.css';

interface IHeaderProps {
    type: 'h1' | 'h2' | 'h3';
}

const Header: React.FC<IHeaderProps> = (props) => {
    const { type, children } = props;

    switch (type) {
        case 'h1': {
            return <h1 className={'Header Header_type_h1'}>{children}</h1>;
        }
        case 'h2': {
            return <h2 className={'Header Header_type_h2'}>{children}</h2>;
        }
        default: {
            return <h3 className={'Header Header_type_h3'}>{children}</h3>;
        }
    }
};

export default React.memo<React.FC<IHeaderProps>>(Header);
