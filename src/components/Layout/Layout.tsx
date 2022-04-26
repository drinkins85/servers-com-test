import React from 'react';
import TopMenu from '../TopMenu/TopMenu';

import './Layout.css';

const Layout: React.FC = (props) => {
    return (
        <div className={'Layout'}>
            <div className={'Layout__menu'}>
                <TopMenu />
            </div>
            <div className={'Layout__content'}>{props.children}</div>
        </div>
    );
};

export default Layout;
