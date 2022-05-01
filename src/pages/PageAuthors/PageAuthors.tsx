import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAuthors } from '../../actions/authors/authors';
import { IMainState } from '../../reducers';
import { IAuthorsState } from '../../reducers/authors';
import Header from '../../components/Header/Header';

import './PageAuthors.css';

const PageAuthors: React.FC = () => {
    const dispatch = useDispatch();
    const authorsState = useSelector<IMainState, IAuthorsState>((state) => state.authors);
    const { isLoading, list, ids } = authorsState;

    useEffect(() => {
        if (list.length === 0) {
            dispatch(getAuthors());
        }
    }, []);

    return (
        <div className={'PageAuthors'}>
            <Header type={'h1'}>Авторы</Header>
            {isLoading && <div>loading..</div>}
            {!isLoading &&
                list &&
                list.map((authorId) => {
                    const { id, firstName, lastName } = ids[authorId];
                    return (
                        <div key={id} className={'PageAuthors__author'}>
                            <Link to={`/authors/${id}`}>
                                {firstName} {lastName}
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
};

export default PageAuthors;
