import React from 'react';
import { Link } from 'react-router-dom';

import './TopMenu.css';

const TopMenu: React.FC = () => {
    return (
        <div className={'TopMenu'}>
            <nav>
                <Link to='/' className={'TopMenu__link'}>
                    Messages
                </Link>
                <Link to='/authors' className={'TopMenu__link'}>
                    Authors
                </Link>
            </nav>
        </div>
    );
};

export default TopMenu;
