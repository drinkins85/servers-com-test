import React from 'react';
import { Link } from 'react-router-dom';

const TopMenu: React.FC = () => {
    return (
        <nav>
            <Link to='/'>Messages</Link>
            <Link to='/authors'>Authors</Link>
        </nav>
    );
};

export default TopMenu;

