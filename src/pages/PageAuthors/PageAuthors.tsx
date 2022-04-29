import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAuthors } from '../../actions/authors/authors';
import { IMainState } from '../../reducers';
import { IAuthorsState } from '../../reducers/authors';

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
        <div>
            <h1>Authors</h1>
            {isLoading && <div>loading..</div>}
            {!isLoading &&
                list &&
                list.map((authorId) => {
                    const { id, firstName, lastName } = ids[authorId];
                    return (
                        <div key={id}>
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
