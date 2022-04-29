import React, { useState } from 'react';

import Button from '../Button/Button';
import { IFilterParams } from '../../interfaces/message';

interface IFiltersProps {
    filters: IFilterParams;
    onApply: (filter: IFilterParams) => unknown;
}

const Filters: React.FC<IFiltersProps> = (props) => {
    const { filters, onApply } = props;
    const { dateFrom = '', dateTo = '', author = '', text = '' } = filters;

    const [filterDateFrom, setFilterDateFrom] = useState(dateFrom);
    const [filterDateTo, setFilterDateTo] = useState(dateTo);
    const [filterAuthor, setFilterAuthor] = useState(author);
    const [filterText, setFilterText] = useState(text);

    const handleApplyFilter = () => {
        onApply({
            dateFrom: filterDateFrom,
            dateTo: filterDateTo,
            author: filterAuthor,
            text: filterText,
        });
    };

    const handleResetFilter = () => {
        setFilterDateFrom('');
        setFilterDateTo('');
        setFilterAuthor('');
        setFilterText('');

        onApply({});
    };

    return (
        <div>
            <input
                type={'date'}
                value={filterDateFrom}
                onChange={(e) => {
                    setFilterDateFrom(() => e.target.value);
                }}
            />
            <input
                type={'date'}
                value={filterDateTo}
                onChange={(e) => {
                    setFilterDateTo(() => e.target.value);
                }}
            />
            <input
                type={'text'}
                value={filterAuthor}
                onChange={(e) => {
                    setFilterAuthor(() => e.target.value);
                }}
            />
            <input
                type={'text'}
                value={filterText}
                onChange={(e) => {
                    setFilterText(() => e.target.value);
                }}
            />
            <Button onClick={handleApplyFilter}>Применить</Button>
            <Button onClick={handleResetFilter}>Сбросить</Button>
        </div>
    );
};

export default Filters;
